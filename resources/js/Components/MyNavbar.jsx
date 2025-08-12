import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Link } from "@inertiajs/react";

export function MyNavbar() {
    return (
        <Navbar
            className="z-10 fixed w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            fluid
            rounded
        >
            <NavbarBrand href="https://flowbite-react.com">
                {/* <img
                    src="/favicon.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                /> */}
                <span className="self-center whitespace-nowrap text-xl text-yellow-300 font-semibold dark:text-white">
                    Batik
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <Link className="text-yellow-300" href="#">
                    Home
                </Link>
                <Link className="text-yellow-300" href="#">
                    About
                </Link>
                <Link className="text-yellow-300" href="#">
                    Services
                </Link>
                <Link className="text-yellow-300" href="#">
                    Pricing
                </Link>
                <Link className="text-yellow-300" href="#">
                    Contact
                </Link>
            </NavbarCollapse>
        </Navbar>
    );
}
