import { Card, Chip } from "@heroui/react";

const WhyReadHub = () => {
    return (
        <div className="max-w-400 mx-auto w-4/5 my-16">
            <div className="flex mb-5 flex-col space-y-2 justify-center">
                <Chip className="text-[#6563ee] bg-[#dbeafe] font-medium mx-auto">❓ Why ReadHub</Chip>
                <h1 className="text-center font-bold text-4xl text-gray-800">Built for Every Reader</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="w-full flex flex-col h-full rounded-xl hover:scale-105 transition-all duration-200 shadow hover:shadow-md border border-black/30">
                    <figure className="p-4 rounded-full w-fit bg-[#d7effe]">
                        ⚡
                    </figure>

                    <div>
                        <Card.Header className="grow">
                            <Card.Title className="font-bold text-xl text-gray-800 mb-2">Instant Access</Card.Title>
                            <Card.Description className="text-gray-700">Borrow any book in seconds. No waiting, no paperwork, no hassle.</Card.Description>
                        </Card.Header>

                    </div>
                </Card>

                <Card className="w-full flex flex-col h-full rounded-xl hover:scale-105 transition-all duration-200 shadow hover:shadow-md border border-black/30">
                    <figure className="p-4 rounded-full w-fit bg-[#feeeb1]">
                        🔒
                    </figure>

                    <div>
                        <Card.Header className="grow">
                            <Card.Title className="font-bold text-xl text-gray-800 mb-2">Secure & Private</Card.Title>
                            <Card.Description className="text-gray-700">Your reading history is never shared with third parties.</Card.Description>
                        </Card.Header>

                    </div>
                </Card>

                <Card className="w-full flex flex-col h-full rounded-xl hover:scale-105 transition-all duration-200 shadow hover:shadow-md border border-black/30">
                    <figure className="p-4 rounded-full grow h-full w-fit bg-[#c2f8dd]">
                        📚
                    </figure>

                    <div>
                        <Card.Header className="grow">
                            <Card.Title className="font-bold text-xl text-gray-800 mb-2">Huge Collection</Card.Title>
                            <Card.Description className="text-gray-700">Over 12,000 books across every genre, updated weekly with new arrivals.</Card.Description>
                        </Card.Header>

                    </div>
                </Card>
            </div>

        </div>
    );
};

export default WhyReadHub;