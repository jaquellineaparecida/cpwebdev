export default function Message ({children}) {
    return (
        <div className="rounded-lg bg-blue-800 mt-3 w-60 h-auto ml-2">
            <p className="text-white text-[12px] ml-2 pt-1 pb-1 pr-2 w-auto h-auto"> {children}  </p>
        </div>
    )
}