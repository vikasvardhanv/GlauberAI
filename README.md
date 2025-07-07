# GlauberAI - Advanced AI Query Platform

A sophisticated AI query platform that intelligently routes user queries to the best AI models based on content type, complexity, and file attachments. Features file storage, real-time AI integration, and comprehensive analytics.

## Features

- **Intelligent AI Routing**: Automatically selects the best AI model based on query content, complexity, and file types
- **File Upload & Storage**: Support for images, documents, audio, and video files with secure storage
- **Multi-Provider AI Integration**: Support for OpenAI, Anthropic, Google, Cohere, Mistral, Stability AI, and more
- **Real-time Analytics**: Track usage, model performance, and user behavior
- **Usage Limits**: Tiered pricing with monthly request limits
- **Secure Authentication**: JWT-based session management with Prisma/PostgreSQL

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (via Prisma Accelerate)
- **Authentication**: JWT with HTTP-only cookies
- **File Storage**: Local file system with database tracking
- **AI Providers**: OpenAI, Anthropic, Google, Cohere, Mistral, Stability AI

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# Authentication (generate a secure random string)
JWT_SECRET="your-jwt-secret-key"

# AI Provider API Keys
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"
GOOGLE_API_KEY="your-google-api-key"
COHERE_API_KEY="your-cohere-api-key"
MISTRAL_API_KEY="your-mistral-api-key"
STABILITY_API_KEY="your-stability-api-key"
```

### 2. AI Provider Setup

#### OpenAI
- Sign up at [OpenAI](https://platform.openai.com/)
- Create an API key in your dashboard
- Supports: GPT-4 Turbo, GPT-4o, GPT-3.5 Turbo, DALL-E 3

#### Anthropic
- Sign up at [Anthropic](https://console.anthropic.com/)
- Create an API key in your dashboard
- Supports: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku

#### Google (Gemini)
- Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Supports: Gemini Pro, Gemini Pro Vision

#### Cohere
- Sign up at [Cohere](https://cohere.ai/)
- Create an API key in your dashboard
- Supports: Command R+, Command R

#### Mistral
- Sign up at [Mistral AI](https://console.mistral.ai/)
- Create an API key in your dashboard
- Supports: Mistral Large, Mistral Medium

#### Stability AI
- Sign up at [Stability AI](https://platform.stability.ai/)
- Create an API key in your dashboard
- Supports: Stable Diffusion XL

### 3. Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Run development server
npm run dev
```

### 4. Database Setup

The application uses Prisma with PostgreSQL. The schema includes:

- **Users**: Authentication and plan management
- **Requests**: Query history and AI responses
- **Files**: File storage metadata and relationships
- **Billing**: Subscription and payment tracking

## AI Model Routing

The platform intelligently routes queries based on:

### Content Type Detection
- **Text**: General queries and conversations
- **Code**: Programming and technical questions
- **Math**: Mathematical problems and calculations
- **Creative**: Writing, storytelling, and creative tasks
- **Analysis**: Document review and analysis
- **Translation**: Multilingual content
- **Reasoning**: Complex logical problems
- **Image**: Image generation and analysis

### File Type Support
- **Images**: JPEG, PNG, GIF, WebP (vision analysis)
- **Documents**: PDF, TXT, DOC (content analysis)
- **Audio**: MP3, WAV (audio processing)
- **Video**: MP4, MOV (video analysis)

### Routing Rules
1. **File-based routing**: Images automatically route to vision models
2. **Complexity-based**: Complex queries use more capable models
3. **Cost optimization**: Simple queries use cost-effective models
4. **User preference**: Manual model selection when specified

## File Storage

Files are stored securely with the following features:

- **User isolation**: Each user's files are stored in separate directories
- **Request tracking**: Files are linked to specific queries
- **Metadata storage**: File type, size, and processing information
- **Secure access**: Authentication required for file retrieval
- **Automatic cleanup**: Files can be cleaned up based on retention policies

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### AI Queries
- `POST /api/query` - Submit AI query with optional files
- `GET /api/queries` - Get user's query history
- `GET /api/usage` - Get usage statistics

### File Management
- `GET /api/files/[...path]` - Serve uploaded files
- File uploads handled through `/api/query` endpoint

## Usage Limits

### Plan Tiers
- **Starter**: 10 requests/month (free)
- **Professional**: 50,000 requests/month ($29/month)
- **Enterprise**: Unlimited requests (custom pricing)

### File Limits
- Maximum file size: 10MB per file
- Maximum files per query: 5
- Supported formats: Images, documents, audio, video

## Development

### Project Structure
```
GlauberAI/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── ...
├── components/            # React components
├── lib/                   # Utility libraries
│   ├── ai-routing.ts      # AI model routing logic
│   ├── ai-integration.ts  # AI provider integration
│   ├── file-storage.ts    # File storage utilities
│   └── ...
├── prisma/                # Database schema
└── public/                # Static assets
```

### Key Components

#### AI Routing (`lib/ai-routing.ts`)
- Sophisticated query analysis
- Model selection based on content type
- Cost optimization and performance balancing

#### AI Integration (`lib/ai-integration.ts`)
- Multi-provider API integration
- File handling for vision models
- Error handling and fallback responses

#### File Storage (`lib/file-storage.ts`)
- Secure file upload and storage
- Metadata extraction
- User isolation and access control

## Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
Ensure all API keys and database URLs are properly configured in your production environment.

## Security Considerations

- JWT tokens stored in HTTP-only cookies
- File access restricted to authenticated users
- User data isolation in database and file system
- API rate limiting and usage tracking
- Secure file upload validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
