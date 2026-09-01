import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ChatPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-4">Ask Census Saathi</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat with AI</CardTitle>
        </CardHeader>
        <CardContent>
          AI chat interface will be implemented here.
        </CardContent>
      </Card>
    </div>
  );
}
