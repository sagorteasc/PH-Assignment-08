"use client";
import BookCard from "@/components/BookCard";
import { books } from "@/db/booksData";
import { Button, SearchField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const AllBooks = () => {

    const booksData = books;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    const [searchItem, setSearchItem] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // search functionality
    const handleSearch = (title) => {
        const searchBook = booksData.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        setIsSearched(true);
        setSearchItem(searchBook)
    }

    return (
        <div className="max-w-400 mx-auto w-4/5 my-16">

            <div className="mb-5 md:w-1/2 mx-auto justify-center flex items-center">
                <SearchField name="search" className={"inline w-2/3 md:w-fit"}>
                    <SearchField.Group className={"rounded rounded-r-none w-full"}>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            className="w-70"
                            placeholder="Search book by title"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

                <Button className={"rounded rounded-l-none"} onClick={() => handleSearch(searchValue)}>
                    Search
                </Button>
            </div>

            <div className="flex justify-between items-center">
                <div className="mb-5">
                    <button
                        className=""
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    {isMenuOpen && (

                        <div className="fixed inset-0 bg-black/30 z-20" onClick={() => setIsMenuOpen(false)}>

                            <div className={`fixed top-15 left-0 h-full bg-white shadow-lg p-6 z-10 w-64 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                                <h3 className="text-center font-medium text-2xl text-gray-600 mb-3">Categories</h3>
                                <ul className="flex flex-col gap-3">
                                    <Link href={"/"}>
                                        <Button
                                            variant="outline"
                                            className={"w-full hover:bg-accent hover:shadow-xs hover:text-white transition-all duration-200 text-gray-500 text-lg"}>
                                            Story
                                        </Button>
                                    </Link>
                                    <Link href={"/"}>
                                        <Button
                                            variant="outline"
                                            className={"w-full hover:bg-accent hover:shadow-xs hover:text-white transition-all duration-200 text-gray-500 text-lg"}>
                                            Tech
                                        </Button>
                                    </Link>
                                    <Link href={"/"}>
                                        <Button
                                            variant="outline"
                                            className={"w-full hover:bg-accent hover:shadow-xs hover:text-white transition-all duration-200 text-gray-500 text-lg"}>
                                            Science
                                        </Button>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <h1 className="text-center font-bold text-4xl text-gray-800 mb-5">All Books</h1>

                <div></div>
            </div>

            <div>
                <BookCard searchItem={searchItem} isSearched={isSearched} />
            </div>
        </div>
    );
};

export default AllBooks;