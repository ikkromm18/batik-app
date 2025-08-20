import { Footer, FooterIcon } from "flowbite-react";

import { BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 object-cover w-full h-full"
                    src="/video/homepage.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay hitam tipis biar teks jelas */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Tulisan di Tengah */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    style={{ fontFamily: "Irish Grover, cursive" }}
                >
                    <p className="text-3xl font-semibold text-yellow-300">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p className="text-3xl font-semibold text-yellow-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, sit.
                    </p>
                    <h1 className="font-bold text-[300px] text-yellow-300">
                        BATIK
                    </h1>
                    <p className="text-3xl font-semibold text-yellow-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Magnam, sit.
                    </p>
                    <p className="text-3xl font-semibold text-yellow-300">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <Footer
                    container
                    className="absolute bottom-0 left-0 px-8 py-4 bg-transparent"
                >
                    <div className="flex space-x-6">
                        <FooterIcon
                            href="#"
                            icon={BsYoutube}
                            className="text-2xl text-yellow-300 hover:text-yellow-400"
                        />
                        <FooterIcon
                            href="#"
                            icon={FaTiktok}
                            className="text-2xl text-yellow-300 hover:text-yellow-400"
                        />
                        <FooterIcon
                            href="#"
                            icon={BsInstagram}
                            className="text-2xl text-yellow-300 hover:text-yellow-400"
                        />
                    </div>
                </Footer>
            </div>
        </>
    );
}

export default Home;
