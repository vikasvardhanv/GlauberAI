"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AIRouter } from "@/lib/ai-routing";

const models = [
  { id: "auto", name: "Auto (Recommended)" },
  { id: "gpt-4-turbo", name: "GPT-4 Turbo" },
  { id: "claude-3-sonnet", name: "Claude 3 Sonnet" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "gemini-pro", name: "Gemini Pro" },
];

export default function QueryPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("auto");
  const [result, setResult] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch('/api/auth/me');
        if (!res.ok) {
          router.push('/auth/signin');
          return;
        }
        const { user } = await res.json();
        setUser(user);
      } catch {
        router.push('/auth/signin');
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResult(null);
    try {
      // Use AIRouter to select the best model
      const router = new AIRouter();
      const routing = router.routeQuery(query, selectedModel);
      // Simulate API call to the selected model (replace with real API call)
      await new Promise((res) => setTimeout(res, 1500));
      setResult({
        model: routing.selectedModel.name,
        reasoning: routing.reasoning,
        estimatedCost: routing.estimatedCost,
        response: `This is a mock response from ${routing.selectedModel.name} for: "${query}"`,
      });
    } catch (err) {
      setError("Failed to get response. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Submit a Query</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Your Prompt</label>
              <Textarea
                placeholder="Enter your prompt here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={4}
                className="resize-none"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Model Preference</label>
              <Select value={selectedModel} onValueChange={setSelectedModel} disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting || !query.trim()}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
          {error && <div className="text-red-600 mt-4">{error}</div>}
          {result && (
            <div className="mt-8 p-4 border rounded-lg bg-muted">
              <div className="mb-2 text-xs text-muted-foreground">Model: <span className="font-semibold">{result.model}</span></div>
              <div className="mb-2 text-xs text-muted-foreground">Reasoning: {result.reasoning}</div>
              <div className="mb-2 text-xs text-muted-foreground">Estimated Cost: ${result.estimatedCost?.toFixed(4)}</div>
              <div className="mt-4 whitespace-pre-line">{result.response}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 