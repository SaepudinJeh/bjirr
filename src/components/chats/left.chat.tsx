import Image, { StaticImageData } from "next/image";

interface LeftChatProps {
    message: string;
    time: string;
    photo?: StaticImageData;
}

export default function LeftChat({ message, photo, time }: LeftChatProps) {
    return (
        <div className="flex w-full space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300 overflow-hidden shadow">
                {photo ? (
                    <Image src={photo} alt="photo" />
                ) : null}

                {/* {iconify ? (
                    <img src={photo} alt="photo" />
                ) : null} */}
            </div>
            <div>
                <div className="bg-gray-100 text-gray-800 sm:p-3 p-2 rounded-r-2xl rounded-bl-2xl">
                    <p className="text-xs xs:text-sm">{message}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">{time}</span>
            </div>
        </div>
    )
}