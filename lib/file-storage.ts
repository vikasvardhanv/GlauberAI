import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export interface FileMetadata {
  width?: number;
  height?: number;
  duration?: number;
  encoding?: string;
  pages?: number;
  [key: string]: any;
}

export interface StoredFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  url?: string;
  metadata?: FileMetadata;
}

export class FileStorage {
  private uploadDir: string;

  constructor(uploadDir = 'uploads') {
    this.uploadDir = uploadDir;
  }

  async storeFile(
    file: File, 
    userId: string, 
    requestId?: string
  ): Promise<StoredFile> {
    // Create user-specific directory
    const userDir = join(this.uploadDir, userId);
    const requestDir = requestId ? join(userDir, requestId) : userDir;
    
    // Ensure directories exist
    await this.ensureDirectoryExists(requestDir);

    // Generate unique filename
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 15);
    const extension = this.getFileExtension(file.name);
    const filename = `${timestamp}-${randomSuffix}${extension}`;
    
    // Full path for the file
    const filePath = join(requestDir, filename);
    
    // Convert File to Buffer and save
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await writeFile(filePath, uint8Array);

    // Generate metadata
    const metadata = await this.extractMetadata(file, uint8Array);

    return {
      id: `${timestamp}-${randomSuffix}`,
      filename,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      path: filePath,
      metadata
    };
  }

  private async ensureDirectoryExists(dirPath: string): Promise<void> {
    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true });
    }
  }

  private getFileExtension(filename: string): string {
    const lastDot = filename.lastIndexOf('.');
    return lastDot !== -1 ? filename.substring(lastDot) : '';
  }

  private async extractMetadata(file: File, buffer: Uint8Array): Promise<FileMetadata> {
    const metadata: FileMetadata = {};

    // Extract basic metadata
    metadata.encoding = 'binary';
    metadata.size = file.size;

    // Image-specific metadata
    if (file.type.startsWith('image/')) {
      try {
        // For images, we could extract dimensions using a library like sharp
        // For now, we'll add basic image metadata
        metadata.type = 'image';
        metadata.format = file.type.split('/')[1];
      } catch (error) {
        console.warn('Could not extract image metadata:', error);
      }
    }

    // Document-specific metadata
    if (file.type.includes('pdf') || file.type.includes('document')) {
      metadata.type = 'document';
      metadata.format = file.type;
    }

    // Video-specific metadata
    if (file.type.startsWith('video/')) {
      metadata.type = 'video';
      metadata.format = file.type.split('/')[1];
    }

    // Audio-specific metadata
    if (file.type.startsWith('audio/')) {
      metadata.type = 'audio';
      metadata.format = file.type.split('/')[1];
    }

    return metadata;
  }

  async deleteFile(filePath: string): Promise<void> {
    try {
      const { unlink } = await import('fs/promises');
      await unlink(filePath);
    } catch (error) {
      console.warn('Could not delete file:', filePath, error);
    }
  }

  getFileUrl(filePath: string): string {
    // In production, this would return a CDN URL or signed URL
    // For now, return a relative path
    return `/api/files/${encodeURIComponent(filePath)}`;
  }
}

export const fileStorage = new FileStorage(); 