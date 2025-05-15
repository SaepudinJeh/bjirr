"use client";

import LayoutQuote from "@/components/commons/layout_quote.common";
import NavbarCustom from "@/components/commons/navbar.common";
import VideoPlayerCustom from "@/components/commons/video.common";
import useMemeStore from "@/stores/meme.store";
import React from "react";

export default function Deprecated({ params }: { params: { slug: string } }) {
    const { setCurrentMemeBySlug, currentMeme } = useMemeStore()

    React.useEffect(() => { setCurrentMemeBySlug(params.slug) }, [params.slug, setCurrentMemeBySlug]);

    return (
        <LayoutQuote>
            <h1 className="sm:text-lg font-semibold">{currentMeme?.title}</h1>
            <p className="text-xs text-gray-500">{currentMeme?.date}</p>

            { currentMeme?.media ? (
                <div className="mt-7 flex flex-col gap-2">
                    <VideoPlayerCustom key={currentMeme.media} src={currentMeme?.media} width="200" />
                </div>
            ) : null }
        </LayoutQuote>
    )
}