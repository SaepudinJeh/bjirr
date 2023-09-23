"use client"

import Logo from "@/components/commons/logo.common";
import Image from "next/image";
import Stories from 'react-insta-stories';
import { useState } from 'react';
import { emberGD } from "@/utils/embedGD.util";
import { DATA_MOMENTS } from "@/datas/stories/moments.data";
import { Story } from "react-insta-stories/dist/interfaces";


export default function MomentStories() {
    const [stories, setStories] = useState<Story[]>(DATA_MOMENTS);

    const storyContent = {
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
    }

    return (
        <div className="max-h-screen w-full flex items-center justify-center h-screen shadow-xl bg-amber-50">
            <Logo />

            <div className="shadow-2xl shadow-amber-900/60 font-primary">
                <Stories
                    stories={stories}
                    defaultInterval={3500}
                    storyStyles={storyContent}
                    loop={true}
                    keyboardNavigation={true}
                    // isPaused={true}
                    // //   currentIndex={()=>{}}
                    // onStoryStart={() => { }}
                    // onStoryEnd={() => { }}
                    // onAllStoriesEnd={onAllStoriesEndHandler}

                />
            </div>
        </div>
    );
}