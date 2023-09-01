export default function Message ({children}) {
    return (
        <div className="rounded-lg bg-blue-800 mt-2 w-48 h-12 ml-2">
            <p className="text-white text-[13px] font-semibold"> {children}  </p>
        </div>
    )
}