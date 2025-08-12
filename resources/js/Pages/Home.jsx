function Home({ nama }) {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/gIhdd5uYyOE?autoplay=1&mute=1&controls=0&loop=1&playlist=gIhdd5uYyOE&modestbranding=1&showinfo=0"
                    title="YouTube video player"
                    allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* Overlay hitam tipis biar teks jelas */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Tulisan di Tengah */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="font-semibold text-white text-3xl">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p className="font-semibold text-white text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, sit.
                    </p>
                    <h1 className="z-10 font-bold text-9xl text-white">
                        BATIK
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Home;
