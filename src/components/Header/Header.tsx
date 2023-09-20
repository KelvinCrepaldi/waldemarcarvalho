import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";

const Header = (): JSX.Element => {
  const paths = [
    {
      name: "WORK",
      url: "/",
    },
    {
      name: "ABOUT ME",
      url: "/about",
    },
    {
      name: "RELL",
      url: "/rell",
    },
  ];

  return (
    <header className="w-full bg-gray-950 flex justify-between p-2 pb-5">
      <div>
        <Image src={logo} width={50} height={50} alt="waldemar logo" />
      </div>
      <nav>
        <ul className="flex">
          {paths.map((path, index) => (
            <li key={index}>
              <Link className="m-2 p-1" href={path.url}>
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
