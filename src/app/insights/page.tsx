import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function InsightsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-4">Census Insights</h1>
      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
        </CardHeader>
        <CardContent>
          Data visualizations will be implemented here.
        </CardContent>
      </Card>
    </div>
  );
}
