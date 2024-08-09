import Image from "next/image";
import Link from "next/link";

import logo from "@/public/img/logo-white.png";
import { Icons } from "./ui/Icons";

const MiniBanner = () => {
  return (
    <div className="container px-4 sm:px-6 mx-auto ">
      <div
        className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url(/img/banner.webp)",
        }}
      >
        <div className="flex flex-col w-full md:flex-row gap-2 items-center md:justify-between">
          <Image
            src={logo}
            alt="Zamrood"
            width={0}
            height={0}
            className="w-36 h-auto"
          />
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-primary-text text-center w-8/12 md:w-full md:text-base">
              Want to see other destinations? Check us out at our website
            </p>
            <Link
              href="https://www.zamrood.com"
              className="no-underline text-primary-text flex items-center gap-2 font-semibold md:text-xl"
            >
              pandooin.com <Icons.arrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
