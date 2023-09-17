import { ReactNode } from 'react';

interface LayoutQuoteProps {
    children: ReactNode;
}

export default function LayoutQuote({ children }: LayoutQuoteProps) {
    return (
        <div className="font-primary h-fit mt-14 w-full xl:w-[600px] xl:px-0 xl:mx-auto lg:px-56 md:px-40 sm:px-20 xs:px-16 xxs:px-7 px-4 pb-14 text-center flex items-center flex-col justify-center">
            {children}
        </div>
    )
}