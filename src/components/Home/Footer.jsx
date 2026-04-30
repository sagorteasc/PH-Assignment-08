import FooterLogo from "@/assets/Footer-logo.png"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#1e293b]">
            <div className="max-w-400 mx-auto px-6 py-8">
                <div className="grid gap-4 md:grid-cols-4 pb-5">
                    <div className="space-y-5 mb-6 md:mb-0 md:w-11/12 col-span-2">
                        <div className="items-center flex">
                            <Image
                                src={FooterLogo}
                                alt="Footer Logo"
                                width={200}
                                height={200}
                                className="block"
                            />
                        </div>
                        <p className="font-medium text-gray-500">Your digital library companion. Borrow, read, and discover thousands of books from the comfort of home.</p>
                        <div className="flex gap-4">
                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-accent transition-colors duration-200">
                                <FaFacebookF />
                            </div>

                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-black transition-colors duration-200">
                                <FaXTwitter />
                            </div>

                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-pink-600 transition-colors duration-200">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 col-span-1 py-5">
                        <h3 className="font-bold text-2xl text-gray-400 mb-4">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            <Link href={"/"}><li className="text-gray-500 hover:underline">Home</li></Link>
                            <Link href={"/allbooks"}><li className="text-gray-500 hover:underline">All Books</li></Link>
                            <Link href={"/profile"}><li className="text-gray-500 hover:underline">My Profile</li></Link>
                        </ul>
                    </div>

                    <div className="col-span-1 py-5">
                        <h3 className="font-bold text-2xl text-gray-400 mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600"><span className="font-semibold text-gray-500">Email:</span> support@readhub.com</li>
                            <li className="text-gray-600"><span className="font-semibold text-gray-500">Contact:</span> +8801234567</li>
                            <li className="text-gray-600"><span className="font-semibold text-gray-500">Location:</span> Shop No-88, Nilkhet, Dhaka</li>
                        </ul>
                    </div>
                </div>

                <hr className="text-gray-700 pb-5" />

                <div className="flex justify-between flex-col md:flex-row gap-4">
                    <h4 className="text-gray-600 font-medium text-lg whitespace-nowrap">&copy; 2026 ReadHub. All rights reserved.</h4>

                    <div>
                        <ul className="flex justify-between gap-4">
                            <li className="text-gray-600">Privacy Policy</li>
                            <li className="text-gray-600">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;