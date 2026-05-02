import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-accent text-4xl font-bold">404</h1>
            <h3 className="text-accent opacity-85 font-medium text-2xl">Page Not Found</h3>
            <Link href={"/"}><Button>Go Home</Button></Link>
        </div>
    );
};

export default NotFound;