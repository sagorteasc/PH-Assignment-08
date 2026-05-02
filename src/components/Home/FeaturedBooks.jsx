import { Chip } from "@heroui/react";
import BookCard from "../BookCard";

const FeaturedBooks = () => {


    return (
        <div className="max-w-400 mx-auto w-4/5 my-16">

            <div className="flex flex-col mb-5 space-y-2 justify-center">
                <Chip className="text-[#6563ee] bg-[#dbeafe] font-medium mx-auto">✨ Featured</Chip>
                <h1 className="text-center font-bold text-4xl text-gray-800 animate__animated animate__tada animate__slow animate__infinite">Trending This Week</h1>
            </div>
            <div>
                <BookCard />
            </div>
        </div>
    );
};

export default FeaturedBooks;