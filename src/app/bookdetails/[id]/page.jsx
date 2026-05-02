import { books } from "@/db/booksData";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const BookDetails = async ({ params }) => {

    const { id } = await params;
    const booksData = books;

    const specificBookData = booksData.find(book => book.id === +id);
    const { title, author, description, available_quantity, image_url, category } = specificBookData;

    return (
        <div className="max-w-400 w-11/12 md:w-3/4 mx-auto my-16">
            <div>
                <Card className="w-full flex flex-col md:flex-row h-full rounded-xl p-0 shadow-md drop-shadow-2xl">
                    <div className="p-8 bg-[#d7effe]">
                        <figure className="flex flex-col h-full w-full">
                            <Image
                                className="mx-auto flex-1"
                                src={image_url}
                                alt="Book Image"
                                width={250}
                                height={250}
                            />
                        </figure>
                    </div>

                    <div className="px-8 py-10 flex flex-col justify-center items-center my-auto h-full">
                        <Card.Header className="grow mb-6 space-y-4">
                            <Card.Description className="text-accent text-sm">{category}</Card.Description>
                            <Card.Title className="font-extrabold text-3xl text-gray-800">{title}</Card.Title>
                            <Card.Description className="text-gray-600">By {author}</Card.Description>
                            <div className="flex gap-3">
                                <div className="border-l border-gray-400"></div>
                                <Card.Description className="text-gray-500 text-lg leading-7">{description}</Card.Description>
                            </div>
                            <Card.Description className="text-gray-700 text-lg">Copies Available: <span className="text-[#2fa54a] font-bold">{available_quantity}</span></Card.Description>
                            <Button
                                variant="outline"
                                className={"text-[#2fa54a] bg-[#d7fce7] border border-[#2fa54a] hover:bg-[#2fa54a] hover:text-white hover:shadow-md transition-colors duration-200"}>
                                Borrow This Book
                            </Button>
                        </Card.Header>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default BookDetails;