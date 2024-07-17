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
            <button className="bg-smoky-black hover:opacity-70 transition-opacity border-ghost-white border flex justify-center items-center gap-3 px-8 py-3 rounded-md shadow-inner shadow-gray-500">
                <span>Login with</span>
                <Image src={github} width={18} height={18} alt="Github" />
            </button>
        </nav>
    </>
}