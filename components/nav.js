import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <ul className="flex">
        <li className="p-6 text-xl text-gray-800 font-medium">
          <Link href="/">
            <a>Dreams</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
