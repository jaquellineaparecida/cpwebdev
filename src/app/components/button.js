export default function Botao({children,}) {
    return (
        <main>
            <button className="bg-stone-300 rounded-xl mt-2 ml-2 text-[12px] body-font font-raleway font-semibold w-20 h-8 hover:bg-zinc-400"> {children} </button>
        </main>
    )
}