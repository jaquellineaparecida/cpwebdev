export default function MessageUser ({children}) {
    return (
        <main className="flex justify-end">
            <div className="rounded-lg bg-blue-300 mt-3 w-36 h-10 mr-3 text-center md:w-40 md:h-14 md:mr-4 lg:w-44 lg:mr-8">
                <p className="text-black text-[12px] font-semibold ml-2 pt-3 pr-2 w-auto h-auto text-center md:text-[18px]"> {children}  </p>
            </div>
        </main>
    )
}