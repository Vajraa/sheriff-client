import github from "./assets/github.svg"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return <>
        <nav className="flex justify-between items-baseline bg-transparent border-b pb-3 border-quartz rounded-lg px-6 mb-6">
            <div className="flex gap-6 md:gap-16 justify-between">
                <Link href='/'>
                    <h1 id="logo" className="font-serif">Sheriff</h1>
                </Link>
                <div className="flex gap-8 text-slate-200">
                    <Link href="/doc" className="hover:underline underline-offset-8">Docs</Link>
                    <Link href="/blogs " className="hover:underline underline-offset-8 hover:font-semibold">Blogs</Link>
                    {/* <a href="/doc" className="hover:underline underline-offset-8">Docs</a>
                    <a href="/blogs" className="hover:underline underline-offset-8">Blog</a> */}
                </div>
            </div>
            {/* <button className="bg-smoky-black font-geist text-sm tracking-wide font-medium hover:opacity-70 transition-opacity border-[0.5px] flex justify-center items-center gap-3 px-6 py-3 rounded-md shadow-inner shadow-gray-500">
                <span>Login using</span>
                <Image src={github} width={20} height={20} alt="Github" />
            </button> */}
            <div className="px-3 py-1.5 bg-neutral-950 rounded-md shadow-inner border border-zinc-500 justify-center items-center gap-3.5 inline-flex ">
                <div className="text-slate-100 text-base  font-aeonik tracking-wide">
                    Login using
                </div>
                <div>

                    <Image src={github} width={18} height={18} alt="Github" />
                </div>
            </div>
        </nav>
    </>
}