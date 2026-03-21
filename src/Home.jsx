import { useLoaderData } from "react-router";
import AppLoad from "./Component/AppLoad";
import Hero from "./Component/Hero";


function Home() {

  const allApps = useLoaderData();

  return (
    <>
      <div >
        <Hero></Hero>
      </div>
      <div className="m-6 ">
        <AppLoad allApps={allApps}></AppLoad>
      </div>

    </>
  )
}

export default Home
