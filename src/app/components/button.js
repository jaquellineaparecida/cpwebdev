export default function Botao({children,}) {
    return (
        <main>
            <button className="bg-stone-300 rounded-xl mt-2 ml-2 text-[10px] body-font font-raleway font-semibold w-14 h-8 hover:bg-zinc-400"> {children} </button>
        </main>
    )
}