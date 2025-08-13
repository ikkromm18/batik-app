import { Footer, FooterIcon } from "flowbite-react";

import { BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/video/video-home.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay hitam tipis biar teks jelas */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Tulisan di Tengah */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="font-semibold text-yellow-300 text-3xl">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p className="font-semibold text-yellow-300 text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, sit.
                    </p>
                    <h1 className="font-bold text-[250px] text-yellow-300">
                        BATIK
                    </h1>
                    <p className="font-semibold text-yellow-300 text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, sit.
                    </p>
                    <p className="font-semibold text-yellow-300 text-3xl">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <Footer
                    container
                    className="absolute bottom-0 left-0 p-4 bg-transparent"
                >
                    <div className="flex space-x-6">
                        <FooterIcon
                            href="#"
                            icon={BsYoutube}
                            className="text-yellow-300 hover:text-yellow-400 text-2xl"
                        />
                        <FooterIcon
                            href="#"
                            icon={FaTiktok}
                            className="text-yellow-300 hover:text-yellow-400 text-2xl"
                        />
                        <FooterIcon
                            href="#"
                            icon={BsInstagram}
                            className="text-yellow-300 hover:text-yellow-400 text-2xl"
                        />
                    </div>
                </Footer>
            </div>
        </>
    );
}

export default Home;
