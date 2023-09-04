export default function MessageUser ({children}) {
    return (
        <main className="flex justify-end">
            <div className="rounded-lg bg-blue-300 mt-3 w-20 h-10 mr-2">
                <p className="text-black text-[9px] font-semibold ml-2 pt-3"> {children}  </p>
            </div>
        </main>
    )
}