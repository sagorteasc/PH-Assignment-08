import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {

    const pathname = usePathname();

    return (
        <Link href={href} className={`${pathname === href ? "text-accent" : ""}`}>{children}</Link>
    );
};

export default NavLink;