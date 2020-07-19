import Link from "next/link";

const Nav = () => {
  return (
    <div className="border-b border-gray-500">
      <ul className="flex">
        <li className="p-4 text-xl text-gray-800 font-medium">
          <Link href="/">
            <a>Dreams</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
