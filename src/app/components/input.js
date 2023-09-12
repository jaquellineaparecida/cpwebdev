export default function Input() {
    return (
        <main className="flex justify-center ml-16 md:ml-2 md:mt-3 lg:mt-14">
           <div className="md:flex md:flex-col"> 
            <input type="text" className="w-60 h-12 text-zinc-300 border-2 border-black border-solid rounded-lg font-semibold m-2.5 pl-2 text-neutral-400 md:w-80 lg:w-[35em]" placeholder="CPF ou CNPJ"/> 

            <input type="email" className="w-60 h-12 text-zinc-300 border-2 border-black border-solid rounded-lg font-semibold m-2.5 pl-2 text-neutral-400 md:w-80 lg:w-[35em]" placeholder="Email"/> 
           </div>
        </main>
    )
}