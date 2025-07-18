import { useRef } from "react";

export default function RickRoll() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleClick = async () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = false;

        try {
            await video.play();
            if (video.requestFullscreen) {
                await video.requestFullscreen();
            }
        } catch (err) {
            console.error("Error trying to play video:", err);
        }
    };

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
            <button
                onClick={handleClick}
                style={{
                    padding: "1rem 2rem",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    zIndex: 10000,
                }}
            >
                Click Me 👀
            </button>

            <video
                ref={videoRef}
                src="https://s3.tebi.io/storage-cluster-01/rickroll-output.mp4"
                title="Rick Astley - Never Gonna Give You Up"
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
                    display: "none", // hide initially
                }}
                onPlay={(e) => {
                    e.currentTarget.style.display = "block"; // show video once playing
                }}
            />
        </div>
    );
}
