import { books } from "@/db/booksData";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const BookCard = () => {

    const booksData = books;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                booksData.slice(0, 4).map(book => (
                    <div key={book.id}>
                        <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
                            <figure className="bg-[#d7effe] py-3 grow h-full w-full">
                                <Image
                                    className="mx-auto h-full"
                                    src={book.image_url}
                                    alt="Book Image"
                                    width={100}
                                    height={100}
                                />
                            </figure>

                            <div className="p-4">
                                <Card.Header className="grow mb-6">
                                    <Card.Title>Name: {book.title}</Card.Title>
                                    <Card.Description>Category: {book.category}</Card.Description>
                                </Card.Header>
                                <Card.Footer className="flex gap-2 justify-end">
                                    <Button>View Details</Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default BookCard;