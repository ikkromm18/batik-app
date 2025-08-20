export default function About() {
    return (
        <>
            <div className="">
                <section className="relative h-screen bg-[url('/images/bg-about.jpg')] bg-cover bg-center bg-no-repeat pt-16">
                    {/* Garis atas */}
                    <hr className="relative z-0 w-full border-dashed custom-dash" />

                    {/* Teks BATIK */}
                    <h1
                        className="relative z-0 text-[300px] font-bold text-[#FCAD34] text-center leading-none"
                        style={{ fontFamily: "Irish Grover, cursive" }}
                    >
                        BATIK
                    </h1>

                    {/* Garis bawah */}
                    <hr className="relative z-0 w-full border-dashed custom-dash" />

                    {/* Gambar di tengah bawah */}
                    <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                        <img
                            className="max-w-[400px] w-full"
                            src="/images/batik-pw2.png"
                            alt="Batik"
                        />
                    </div>
                </section>
                <section className="min-h-screen bg-[#843514]"></section>
            </div>
        </>
    );
}
