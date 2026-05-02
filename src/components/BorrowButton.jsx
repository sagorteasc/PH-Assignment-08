"use client";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const BorrowButton = () => {

    const handleBorrowBook = () => {
        toast.success("Successfully borrowed the book");
    }

    return (
        <Button
            onClick={handleBorrowBook}
            variant="outline"
            className={"text-[#2fa54a] bg-[#d7fce7] border border-[#2fa54a] hover:bg-[#2fa54a] hover:text-white hover:shadow-md transition-colors duration-200"}>
            Borrow This Book
        </Button>
    );
};

export default BorrowButton;