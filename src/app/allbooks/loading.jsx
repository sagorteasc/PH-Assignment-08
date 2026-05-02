import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-40">
            <Spinner />
        </div>
    );
};

export default Loading;