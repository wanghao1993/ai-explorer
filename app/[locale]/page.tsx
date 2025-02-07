import Hero from "@/components/Hero";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
