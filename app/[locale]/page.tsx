import Hero from "@/components/Hero";
import Category from "@/components/home/Category";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  return (
    <div>
      <Hero />
      <div className="mt-4 rounded dashboard  text-center lg:flex justify-around object-center gap-2 ">
        <div className="lg:w-[12%] rounded">
          <Category />
        </div>
        <div className="lg:w-[85%] rounded">工具</div>
      </div>
    </div>
  );
}
