export default function Send(){
    return(
        <main className="flex flex-row mt-6 ml-2"> 
            <div className="flex justify-center mt-3 mr-2">
                <img className="w-7 h-7" src="/images/cam.svg"/>
            </div>

            <div>
                <input type="text" className="border-0 bg-zinc-300 rounded-full w-96 h-14"/>
            </div>

            <div className="flex justify-center mt-2 mr-2"> 
                <img  className="w-12 h-12"src="/images/send.svg"/>
            </div>
        </main>
    )
}