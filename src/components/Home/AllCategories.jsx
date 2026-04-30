import { books } from "@/db/booksData";
import { Card, Chip } from "@heroui/react";

const AllCategories = () => {

    const booksData = books;

    return (
        <div className="max-w-400 mx-auto w-4/5 my-16">
            <div className="flex mb-5 flex-col space-y-2 justify-center">
                <Chip className="text-[#6563ee] bg-[#dbeafe] font-medium mx-auto">🏷️ Categories</Chip>
                <h1 className="text-center font-bold text-4xl text-gray-800">Browse by Genre</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md border bg-[#feeeb1] border-[#fcda6a]">
                    <div className="flex flex-col space-y-3 justify-center items-center p-10">
                        <span>📖</span>
                        <h2 className="font-bold text-2xl text-gray-800">Story</h2>
                        <p className="font-medium text-gray-700">3,248 books</p>
                    </div>
                </Card>

                <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md border bg-[#d7effe] border-[#a9d0fd]">
                    <div className="flex flex-col space-y-3 justify-center items-center p-10">
                        <span>💻</span>
                        <h2 className="font-bold text-2xl text-gray-800">Technology</h2>
                        <p className="font-medium text-gray-700">1,892 books</p>
                    </div>
                </Card>

                <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md border bg-[#c2f8dd] border-[#8bebc5]">

                    <div className="flex flex-col space-y-3 justify-center items-center p-10">
                        <span>🔬</span>
                        <h2 className="font-bold text-2xl text-gray-800">Science</h2>
                        <p className="font-medium text-gray-700">2,104 books</p>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default AllCategories;