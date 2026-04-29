import { Button, Chip } from "@heroui/react";
import { BiRightArrow } from "react-icons/bi";
import { books } from "@/db/booksData";
import MarqueeContainer from "./MarqueeContainer";
import { LuPartyPopper } from "react-icons/lu";

const Banner = () => {

    const booksInfo = books;

    return (
        <div className="mb-16">
            <div className="bg-linear-to-br from-[#234dd9] via-[#5246e6] to-[#713deb] px-8 py-20 flex flex-col justify-center items-center space-y-5 text-white text-center">
                <Chip className="bg-transparent backdrop-blur-3xl border text-white">
                    <LuPartyPopper width={6} />
                    <Chip.Label className="font-medium"> Over 10,000 Books available</Chip.Label>
                </Chip>
                <h1 className="font-extrabold text-3xl whitespace-nowrap md:text-6xl">Find Your <span className="text-[#fcd34d]">Next Read</span></h1>
                <p className="md:text-lg">Borrow books instantly. No late fees, no queues. Your personal library, always with you.</p>
                <Button variant="outline" className="text-white rounded hover:bg-blue-500 hover:rounded-2xl hover:shadow-md transition-colors duration-200">Browse Now <BiRightArrow /></Button>
            </div>

            <MarqueeContainer booksInfo={booksInfo} />
        </div>
    );
};

export default Banner;