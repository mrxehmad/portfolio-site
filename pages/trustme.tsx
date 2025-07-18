"use client";

import { useRef, useState, useEffect } from "react";

export default function RickRoll() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [started, setStarted] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Avoid running video-related code during SSR
        setIsClient(true);
    }, []);

    const handleClick = async () => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        video.muted = false;

        try {
            await video.play();

            // Safely request fullscreen
            const requestFullscreen = 
                video.requestFullscreen ||
                (video as any).webkitRequestFullscreen ||
                (video as any).mozRequestFullScreen ||
                (video as any).msRequestFullscreen;

            if (requestFullscreen) {
                requestFullscreen.call(video);
            }

            setStarted(true);
        } catch (error) {
            console.error("Video playback failed:", error);
        }
    };

    if (!isClient) return null; // Ensure code only runs on client

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            {!started && (
                <button
                    onClick={handleClick}
                    style={{
                        padding: "1rem 2rem",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        zIndex: 10000,
                        background: "#fff",
                        color: "#000",
                        border: "none",
                        borderRadius: "8px",
                    }}
                >
                    Click Me 👀
                </button>
            )}

            <video
                ref={videoRef}
                src="https://s3.tebi.io/storage-cluster-01/rickroll-output.mp4"
                loop
                controls={false}
                playsInline
                preload="auto"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: 9998,
                    pointerEvents: "none",
                    display: started ? "block" : "none",
                }}
            />
        </div>
    );
}
// This code is a React component that plays a RickRoll video when the user clicks a button.
// // It uses the useRef hook to reference the video element and the useState hook to manage