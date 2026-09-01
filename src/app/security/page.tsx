import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function SecurityPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-4">Stay Safe from Scams</h1>
      <Card>
        <CardHeader>
          <CardTitle>Privacy Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          Information on what government officials will NOT ask for.
        </CardContent>
      </Card>
    </div>
  );
}
