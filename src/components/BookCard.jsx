"use client";
import { books } from "@/db/booksData";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BookCard = ({ searchItem, isSearched, categoryBooks, isCategorySearch }) => {

    const booksData = books;
    const pathname = usePathname();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                pathname === "/" ?
                    booksData.slice(0, 4).map(book => (
                        <div key={book.id}>
                            <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
                                <figure className="py-3 grow h-full w-full bg-[#d7effe]">
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
                                        <Card.Title className="font-bold text-xl text-gray-800">Name: {book.title}</Card.Title>
                                        <Card.Description className="text-gray-700">Category: {book.category}</Card.Description>
                                    </Card.Header>
                                    <Card.Footer className="flex gap-2 justify-end">
                                        <Link href={`/${book.id}`}><Button>View Details</Button></Link>
                                    </Card.Footer>
                                </div>
                            </Card>
                        </div>
                    ))
                    :
                    isSearched ?
                        searchItem.length === 0 ?
                            <div className="flex flex-col justify-center items-center h-40 space-y-3 col-span-full">
                                <h2 className="font-bold text-3xl text-center text-blue-300">Book that are you looking for is not found</h2>
                                <Link href={"/allbooks"}><Button className={"rounded"}>Go Back</Button></Link>
                            </div>
                            : searchItem.map(book => (
                                <div key={book.id}>
                                    <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
                                        <figure className="py-3 flex flex-col h-50 w-full bg-[#d7effe]">
                                            <Image
                                                className="mx-auto flex-1"
                                                src={book.image_url}
                                                alt="Book Image"
                                                width={100}
                                                height={100}
                                            />
                                        </figure>

                                        <div className="p-4 flex flex-col h-40">
                                            <Card.Header className="grow mb-6">
                                                <Card.Title className="font-bold text-xl text-gray-800">Name: {book.title}</Card.Title>
                                                <Card.Description className="text-gray-700">Category: {book.category}</Card.Description>
                                            </Card.Header>
                                            <Card.Footer className="gap-2 justify-end">
                                                <Link href={`/${book.id}`}><Button>View Details</Button></Link>
                                            </Card.Footer>
                                        </div>
                                    </Card>
                                </div>
                            ))
                        :
                        isCategorySearch ?
                            categoryBooks.map(book => (
                                <div key={book.id}>
                                    <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
                                        <figure className="py-3 flex flex-col h-50 w-full bg-[#d7effe]">
                                            <Image
                                                className="mx-auto flex-1"
                                                src={book.image_url}
                                                alt="Book Image"
                                                width={100}
                                                height={100}
                                            />
                                        </figure>

                                        <div className="p-4 flex flex-col h-40">
                                            <Card.Header className="grow mb-6">
                                                <Card.Title className="font-bold text-xl text-gray-800">Name: {book.title}</Card.Title>
                                                <Card.Description className="text-gray-700">Category: {book.category}</Card.Description>
                                            </Card.Header>
                                            <Card.Footer className="gap-2 justify-end">
                                                <Link href={`/${book.id}`}><Button>View Details</Button></Link>
                                            </Card.Footer>
                                        </div>
                                    </Card>
                                </div>
                            ))
                            : booksData.map(book => (
                                <div key={book.id}>
                                    <Card className="w-full flex flex-col h-full rounded-xl p-0 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
                                        <figure className="py-3 flex flex-col h-50 w-full bg-[#d7effe]">
                                            <Image
                                                className="mx-auto flex-1"
                                                src={book.image_url}
                                                alt="Book Image"
                                                width={100}
                                                height={100}
                                            />
                                        </figure>

                                        <div className="p-4 flex flex-col h-40">
                                            <Card.Header className="grow mb-6">
                                                <Card.Title className="font-bold text-xl text-gray-800">Name: {book.title}</Card.Title>
                                                <Card.Description className="text-gray-700">Category: {book.category}</Card.Description>
                                            </Card.Header>
                                            <Card.Footer className="gap-2 justify-end">
                                                <Link href={`/${book.id}`}><Button>View Details</Button></Link>
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