export default function Message ({children}) {
    return (
        <div className="rounded-lg bg-blue-800 mt-3 w-48 h-16 ml-2">
            <p className="text-white text-[9px] font-semibold ml-2 pt-1"> {children}  </p>
        </div>
    )
}