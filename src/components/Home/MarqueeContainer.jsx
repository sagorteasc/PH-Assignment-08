import Marquee from "react-fast-marquee";

const MarqueeContainer = ({ booksInfo }) => {
    return (
        <div>
            <Marquee speed={50} pauseOnHover={true} className="bg-gray-700 text-gray-300">
                <div>
                    {
                        booksInfo.map(book =>
                            <span
                                key={book.id}>
                                {`"New Arrivals: ${book.title} ${book.category === "Science" ? "| Special Discount on Memberships..." : ""}"`}
                                <span className="mx-5">||</span>
                            </span>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeContainer;