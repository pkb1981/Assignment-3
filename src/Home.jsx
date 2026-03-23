import { useLoaderData } from "react-router";
import AppLoad from "./Component/AppLoad";
import Hero from "./Component/Hero";

function Home() {
  const selectiveApps = useLoaderData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* AppLoad Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <AppLoad selectiveApps={selectiveApps} />
      </section>
    </div>
  );
}

export default Home;