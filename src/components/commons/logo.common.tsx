import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="absolute left-0 top-0 p-3 sm:p-5 bg-amber-800 text-white shadow shadow-amber-200 font-sevillana">
            Home
        </Link>
    )
}