import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function TimelinePage() {
  return (
    <div className="container py-8">
      <h1 className="mb-4">My State Timeline</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select Your State</CardTitle>
        </CardHeader>
        <CardContent>
          State selection and timeline visualization will go here.
        </CardContent>
      </Card>
    </div>
  );
}
