import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function GuidePage() {
  return (
    <div className="container py-8">
      <h1 className="mb-4">Understand Census 2027 & How It Works</h1>
      <Card>
        <CardHeader>
          <CardTitle>Phase 1: Houselisting</CardTitle>
        </CardHeader>
        <CardContent>
          Details about the houselisting phase.
        </CardContent>
      </Card>
    </div>
  );
}
