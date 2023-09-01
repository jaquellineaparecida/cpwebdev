import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-cyan-500 w-100 h-24 body-font font-raleway font-bold pt-6">  
            <div className="flex justify-center pb-2">
                <Image width={30} height={25} src="/images/icoon_pfp.png" alt=""/>
            </div>

            <div className="flex justify-center pb-2 text-base">
                <p className="text-white"> PortoBot </p>
            </div>
        </header>
    )
}