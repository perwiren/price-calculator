import Link from "next/link";
import Image from "next/Image";
import TopOfMindsLogo from "public/topminds.png";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-blue-500">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://topofminds.se/go/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <Image width="155" height="40" src={TopOfMindsLogo} alt="" />
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link href="/" passHref>
              <a className="mr-4 hover:underline md:mr-6 ">Hem</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center">
        © 2022{" "}
        <a href="https://topofminds.se/go/" className="hover:underline">
          Top of Minds Go™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
