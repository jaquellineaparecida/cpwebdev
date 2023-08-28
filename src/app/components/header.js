
export default function Header() {
    return (
        <header className="bg-cyan-500 w-4/5 h-24 body-font font-raleway font-bold pt-6 mb-4">  
            <div className="flex justify-center pb-2">
                <img src="/images/icoon_pfp.png" alt=""/>
            </div>

            <div className="flex justify-center pb-2 text-base">
                <p className="text-white"> PortoBot </p>
            </div>
        </header>
    )
}