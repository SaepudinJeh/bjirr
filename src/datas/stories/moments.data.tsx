"use client"

import { emberGD } from "@/utils/embedGD.util";
import { Image } from "@nextui-org/react";
import { Story } from "react-insta-stories/dist/interfaces";

interface HeaderStories {
    heading: string;
    subheading: string;
    profileImage: string
}

const headerStory: HeaderStories = {
    heading: "Saepudin",
    subheading: "saepudinjeh@gmail.com",
    profileImage: 'https://wkwkwk.vercel.app/images/aing%201.svg'
}

export const DATA_MOMENTS = (): Story[] => {
    const initialStories: Story[] = [
        // {
        //     header: headerStory,
        //     content: (({}) => {
        //         return (
        //             <div className="w-full h-full flex flex-col items-center justify-center bg-black">
        //                 <div 
        //                     className="text-white absolute left-0 top-20 min-h-full w-full h-full px-4 z-40 flex items-center justify-center bg-amber-900/30"
        //                     style={{ backgroundColor: 'rgb(120 53 15 / 0.5 )' }}
        //                 >
        //                     <div className="w-full bg-black">
        //                         <h1 style={{ fontSize: '2rem', marginBottom: "0.7rem", fontWeight: '700' }}>Hey👋</h1>
        //                         <p>
        //                             Ini akan tampak lucu jika kamu menyukainya,
        //                             aku kira tidak karena ini semua berkaitan tentangku
        //                             semoga ada dirimu diantara orang-orang yang pernah aku temui :)
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="h-full w-full grayscale">
        //                     <Image
        //                         src={emberGD("1LjYHTpYVx9wikUa1hJah7NbsEiy-Igs_")}
        //                         loading="lazy"
        //                         alt="Me"
        //                         className="w-full h-full object-cover object-center z-0 grayscale"
        //                     />
        //                 </div>
        //             </div>
        //         )
        //     }),
        //     duration: 8000,
        // },
        {
            url: emberGD('1d2JC4MJ38F_ThMYWlNEVx7x9urZLvJZ3'),
            type: 'image',
            header: headerStory,
            seeMore: ({ close }: { close: Function }) => {
                return (
                    <div className="w-full min-h-full bg-white flex items-center justify-center shadow-xl h-full">
                        <div>wkwkwkwk</div>
                    </div>
                )
            },
        },
        {
            url: emberGD("1jh0iGjJXApyeXZFJAiCHGQKCPc_ePsy3"),
            type: 'image',
            header: headerStory,
            //   seeMore: ({ close }) => {
            //           return <div onClick={close}>Hello, click to close this.</div>;
            //       },
        },
        // {
        //     url: 'https://i.imgur.com/Zo5Kpnd.mp4',
        //     type: 'video',
        //     header: headerStory
        // },
        // {
        //     url: 'https://i.imgur.com/LBRXhIq.jpg',
        //     type: 'image',
        //     header: headerStory,
        // },
        // {
        //     url: 'https://i.imgur.com/ARMxyC4.png',
        //     type: 'image',
        //     header: headerStory,
        // }
    ]

    return initialStories
}