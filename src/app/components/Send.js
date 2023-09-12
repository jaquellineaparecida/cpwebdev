import Image from "next/image";

export default function Send(){
    return(
        <main className="flex flex-row mt-6 ml-3 md:ml-12 md:mb-4 lg:flex lg:justify-center lg:mb-8"> 
            <div className="flex justify-center mb-3 mr-2">
                <Image className="md:w-10 md:h-10 md:mt-2 md:mr-4" width={20} height={15} src="/images/cam.svg" alt=""/>
            </div>

            <div>
                <input type="text" className="border-0 bg-zinc-300 rounded-full w-80 h-8 pl-4 md:w-[38em] md:h-14 lg:h-14 lg:w-[80em]"/>
            </div>

            <div className="flex justify-center mb-2 mr-2 lg:mt-[-3px] lg:mr-1"> 
                <Image className="md:w-20 md:h-16" width={35} height={35} src="/images/send.svg" alt=""/>
            </div>
        </main>
    )
}