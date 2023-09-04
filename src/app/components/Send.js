import Image from "next/image";

export default function Send(){
    return(
        <main className="flex flex-row mt-6 ml-2"> 
            <div className="flex justify-center mt-3 mr-2">
                <Image width={20} height={15} src="/images/cam.svg" alt=""/>
            </div>

            <div>
                <input type="text" className="border-0 bg-zinc-300 rounded-full w-72 h-8"/>
            </div>

            <div className="flex justify-center mt-2 mr-2"> 
                <Image width={35} height={35} src="/images/send.svg" alt=""/>
            </div>
        </main>
    )
}