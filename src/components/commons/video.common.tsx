"use client";

import { useEffect, useRef } from "react";

type VideoPropsType = {
  width?: string;
  height?: string;
  type?: string;
  src: string;
  poster?: string;
}

export default function VideoPlayerCustom({ 
  height, 
  src, 
  type, 
  width,
  poster
}: VideoPropsType) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset video ketika src berubah
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.currentTime = 0;
    }
  }, [src]);

  return (
    <video 
      ref={videoRef}
      width={width ?? "320"} 
      height={height ?? "240"} 
      controls 
      preload="metadata" 
      poster={poster}
      className="rounded-xl shadow-md"
      key={src} // Juga tambahkan key internal
    >
      <source src={src} type={type ?? "video/mp4"} />
      Your browser does not support the video tag.
    </video>
  )
}