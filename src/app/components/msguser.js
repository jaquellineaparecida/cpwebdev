export default function MessageUser ({children}) {
    return (
        <main className="flex justify-end">
            <div className="rounded-lg bg-blue-300 mt-3 w-36 h-10 mr-3 text-center">
                <p className="text-black text-[12px] font-semibold ml-2 pt-3 pr-2 w-auto h-auto text-center"> {children}  </p>
            </div>
        </main>
    )
}