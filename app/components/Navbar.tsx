import github from "../assets/github.svg"
import Image from "next/image"
export default function Navbar() {
    return <>
        <nav className="flex justify-between items-baseline border-b pb-4 border-quartz">
            <div className="flex gap-6 md:gap-16 justify-between">
                <h1 id="logo" className="font-serif">Sheriff</h1>
                <div className="flex gap-8">
                    <a href="/doc" className="hover:underline underline-offset-8">Docs</a>
                    <a href="/blogs" className="hover:underline underline-offset-8">Blog</a>
                </div>
            </div>
            {/* <button className="bg-smoky-black font-geist text-sm tracking-wide font-medium hover:opacity-70 transition-opacity border-[0.5px] flex justify-center items-center gap-3 px-6 py-3 rounded-md shadow-inner shadow-gray-500">
                <span>Login using</span>
                <Image src={github} width={20} height={20} alt="Github" />
            </button> */}
            <div className="px-8 py-5 bg-neutral-950 rounded-lg shadow-inner border border-sky-800 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-lg font-medium font-geist tracking-wide">
                    Login using
                </div>
                <div>
                    <Image src={github} width={20} height={20} alt="Github" />
                </div>
            </div>
        </nav>
    </>
}