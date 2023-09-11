import Image from "next/image";

export default function Imagem ({ src,width, height })  {
    return (
        <div className="flex justify-end">
            <div className='rounded-lg border border-blue-300 w-40 h-50 mt-3 mr-2 border-4'>
                <Image className="rounded-lg" src={src} width={width} height={height} />
            </div>
        </div>
    )
}