import { useLoaderData } from "react-router";
import AppLoad from "./Component/AppLoad";
import Hero from "./Component/Hero";


function Home() {

  const selectiveApps = useLoaderData();

  return (
    <>
      <div >
        <Hero></Hero>
      </div>
      <div className="m-6 ">
        <AppLoad selectiveApps={selectiveApps}></AppLoad>
      </div>

    </>
  )
}

export default Home
