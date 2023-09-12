import Image from "next/image";

export default function Imagem ({ src,width, height })  {
    return (
        <div className="flex justify-end">
            <div className='rounded-lg border border-blue-300 w-40 h-50 mt-3 mr-2 border-4 md:w-60 md:h-50 md:mr-4 lg:w-72 lg:h-58'>
                <Image className="rounded-lg md:w-60 md:h-50 lg:w-72 lg:h-56" src={src} width={width} height={height} />
            </div>
        </div>
    )
}
