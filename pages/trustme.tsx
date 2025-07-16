export default function TrustMe() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "black",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&rel=0"
                title="Rick Astley - Never Gonna Give You Up"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ pointerEvents: "none" }}
            />
        </div>
    );
}