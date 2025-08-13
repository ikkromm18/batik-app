import { Link } from "@inertiajs/react";
import MyNavbar from "@/Components/MyNavbar";

export default function Layout({ children }) {
    return (
        <main>
            <header>
                {/* <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link> */}

                <MyNavbar />
            </header>
            <article>{children}</article>
        </main>
    );
}
