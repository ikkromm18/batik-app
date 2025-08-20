import { CardDiscover } from "../Components/CardDiscover";

export default function DiscoverBatik() {
    const cardsData = [
        {
            title: "Batik Parang",
            desc1: "Motif klasik yang melambangkan keberanian dan keagungan.",
            desc2: "Berasal dari Keraton Yogyakarta dan Surakarta.",
            img: "https://i.pinimg.com/1200x/4a/53/be/4a53be34d86fd06e8e0094900caa8470.jpg",
        },
        {
            title: "Batik Kawung",
            desc1: "Motif berbentuk lingkaran yang terinspirasi dari buah kolang-kaling.",
            desc2: "Melambangkan kemurnian hati.",
            img: "https://i.pinimg.com/736x/85/21/37/852137bb7e97e44c1f7023998f12f502.jpg",
        },
        {
            title: "Batik Mega Mendung",
            desc1: "Berasal dari Cirebon dengan motif awan berwarna biru.",
            desc2: "Melambangkan kesabaran dan keteduhan.",
            img: "https://i.pinimg.com/736x/47/15/2a/47152acefbdda13a59dca7db5b86ac9d.jpg",
        },
        {
            title: "Batik Tujuh Rupa",
            desc1: "Berasal dari Pekalongan dengan motif flora dan fauna.",
            desc2: "Terinspirasi dari budaya pesisir.",
            img: "https://i.pinimg.com/1200x/5c/0d/c9/5c0dc9e098b7b2a4d4dceac6a16656eb.jpg",
        },
        {
            title: "Batik Sogan",
            desc1: "Berasal dari Solo dan Yogyakarta dengan warna cokelat khas.",
            desc2: "Biasanya digunakan untuk acara resmi.",
            img: "https://i.pinimg.com/736x/db/83/8c/db838c4b7d8ad396c6e78fef4eb14748.jpg",
        },

        {
            title: "Batik Lasem",
            desc1: "Perpaduan budaya Tionghoa dan Jawa.",
            desc2: "Didominasi warna merah khas Lasem.",
            img: "https://i.pinimg.com/1200x/4a/53/be/4a53be34d86fd06e8e0094900caa8470.jpg",
        },
        {
            title: "Batik Betawi",
            desc1: "Warna cerah dengan motif ondel-ondel.",
            desc2: "Melambangkan keceriaan masyarakat Betawi.",
            img: "https://i.pinimg.com/736x/85/21/37/852137bb7e97e44c1f7023998f12f502.jpg",
        },
        {
            title: "Batik Dayak",
            desc1: "Motif khas suku Dayak dengan bentuk ukiran unik.",
            desc2: "Melambangkan hubungan dengan alam.",
            img: "https://i.pinimg.com/736x/47/15/2a/47152acefbdda13a59dca7db5b86ac9d.jpg",
        },
        {
            title: "Batik Bali",
            desc1: "Warna cerah dengan motif flora dan fauna tropis.",
            desc2: "Berasal dari Pulau Dewata.",
            img: "https://i.pinimg.com/1200x/5c/0d/c9/5c0dc9e098b7b2a4d4dceac6a16656eb.jpg",
        },
        {
            title: "Batik Maluku",
            desc1: "Motif laut dan rempah-rempah khas Maluku.",
            desc2: "Melambangkan kekayaan alam laut timur.",
            img: "https://i.pinimg.com/736x/db/83/8c/db838c4b7d8ad396c6e78fef4eb14748.jpg",
        },
    ];

    return (
        <>
            <div className="p-6 pt-20">
                <h1 className="mb-6 text-4xl font-bold">Discover Batik Page</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cardsData.map((card, index) => (
                        <CardDiscover
                            key={index}
                            title={card.title}
                            desc1={card.desc1}
                            desc2={card.desc2}
                            img={card.img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
