import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-white text-opacity-60 font-semibold xl:text-2xl">
        {children}
      </Link>
    </li>
  );
}
