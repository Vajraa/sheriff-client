import Image from "next/image";
import Navbar from "./Navbar";
import patch1 from './assets/patch-1.svg'
import patch2 from './assets/patch-2.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col justify-between p-4 ">
      {/* <Navbar/> */}
      {/* <Image className="absolute left-0 top-0 cursor-none pointer-events-none" src={patch1} alt="glow" width={555} height={590}/> */}
      
      <footer>A Vajraa product</footer>
    </main>
  );
}
