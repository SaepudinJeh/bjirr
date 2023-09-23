import { ReactNode } from 'react';

export default function ContainerChat({ children }: { children: ReactNode }) {
    return (
        <div className="font-primary flex flex-col items-center justify-center w-screen bg-gray-100 text-gray-800 p-5 sm:p-10 overflow-hidden">
            <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto gap-y-3.5 pb-14">
                    {children}
                </div>
            </div>
        </div>
    )
}