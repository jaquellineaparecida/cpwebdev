import Image from "next/image";

export default function Send(){
    return(
        <main className="flex flex-row mt-6 ml-2"> 
            <div className="flex justify-center mt-3 mr-2">
                <Image width={20} height={20} className="w-7 h-7" src="/images/cam.svg" alt=""/>
            </div>

            <div>
                <input type="text" className="border-0 bg-zinc-300 rounded-full w-96 h-14"/>
            </div>

            <div className="flex justify-center mt-2 mr-2"> 
                <Image width={20} height={20} className="w-12 h-12" src="/images/send.svg" alt=""/>
            </div>
        </main>
    )
}