import ExampleClient from "../components/ExampleClient";
import ExampleServer from "../components/ExampleServer";

export default function Home() {
  console.log("Where do I render?");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Welcome 👋</h2>

      <ExampleClient />
      <ExampleServer />
    </main>
  );
}
