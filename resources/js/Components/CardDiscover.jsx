"use client";

import { Card } from "flowbite-react";

export function CardDiscover({ title, desc1, desc2, img }) {
    return (
        <Card
            className="overflow-hidden cursor-pointer w-96 h-96 group" // persegi panjang vertikal
            renderImage={() => (
                <div className="relative w-full h-full">
                    {/* Gambar */}
                    <img
                        src={img}
                        alt={title}
                        className="object-cover w-full h-full transition-all duration-500 group-hover:grayscale"
                    />

                    {/* Overlay Gelap */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Judul (tetap) */}
                    <h2 className="absolute inset-0 z-10 flex items-center justify-center px-2 text-2xl font-bold text-center text-white">
                        {title}
                    </h2>

                    {/* Paragraf muncul dari bawah */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 text-white transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="mb-1 text-center">{desc1}</p>
                        <p className="text-center">{desc2}</p>
                    </div>
                </div>
            )}
        />
    );
}
