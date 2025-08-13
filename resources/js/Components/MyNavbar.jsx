import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // untuk transisi keluar

    const navItems = [
        "Home",
        "About",
        "Discover Batik",
        "Fun & Feedback",
        "Grattitude",
    ];

    const openMenu = () => {
        setIsVisible(true);
        setTimeout(() => setIsOpen(true), 10); // delay kecil biar transisi jalan
    };

    const closeMenu = () => {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 1000); // tunggu animasi selesai
    };

    return (
        <nav className="z-10 fixed w-full bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-yellow-300 font-extrabold text-xl">
                        BATIK
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={openMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-yellow-300 hover:bg-yellow-300/20 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Fullscreen Menu */}
            {isVisible && (
                <div
                    className={`fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transform transition-transform duration-1000 ${
                        isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                >
                    {/* Tombol Close */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 text-yellow-300 hover:text-yellow-400 transition-colors"
                    >
                        <svg
                            className="h-8 w-8"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Menu Items */}
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="relative text-yellow-300 text-3xl font-semibold group"
                            onClick={closeMenu}
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-1000 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
