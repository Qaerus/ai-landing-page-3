import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-900">
      <Card className="p-6 bg-white shadow-lg rounded-lg max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Dustin's Page</h1>
        <p className="mb-4">This is a landing page demo using shadcn/ui.</p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Click Me</Button>
      </Card>
    </main>
  );
}
