interface DividerProps {
    label: string;
}

export default function DividerChat({ label }: DividerProps) {
    return (
        <div className="flex ml-auto justify-center bg-gray-100 w-fit mx-auto px-3 py-0.5 rounded-full text-xs sm:text-sm text-gray-600">
            <span>{label}</span>
        </div>
    )
}

DividerChat.defaultProps = {
    label: "Hari ini"
}