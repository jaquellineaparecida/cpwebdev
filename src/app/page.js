import Link from "next/link";
import Btn from "./components/btn_log";
import Input from "./components/input";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex justify-center mt-72 lg:mt-40">
        <div className="border-2 rounded-2xl border-blue-800 w-96 h-96 pt-10 md:h-96 md:w-5/6 md:flex md:flex-col lg:h-[28em] lg:w-[70em] lg:pt-5">
          <div className="flex">
            <Image className="ml-10 pt-2 mt-1"
              src={'/images/arrow.svg'}
              alt=""
              width={20}
              height={20}     
            />

            <p className="text-blue-800 ml-4 mb-2 pt-6 font-semibold md:text-xl"> ACESSE SUA CONTA </p>
          </div>

          <Input />

         <Link href={"/chat"}> 
            <Btn/>
          </Link>
          
        </div>
     </main>
  )
}
