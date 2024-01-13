import Image from "next/image";

interface RightChatProps {
    message: string;
    photo?: string;
    time: string;
}

export default function RightChat({ message, time, photo }: RightChatProps) {
    return (
        <div className="flex w-full space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-lime-200 text-lime-800 sm:p-3 p-2 rounded-l-2xl rounded-br-2xl">
                    <p className="text-xs xs:text-sm">{message}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none justify-end flex mt-2">{time}</span>
            </div>
            <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300">
                {photo ? (
                    <Image src={photo} alt="photo" fill />
                ) : null}
            </div>
        </div>
    )
}

RightChat.defaultProps = {
    message: "wkwkwkw",
    time: "2 min ago"
}