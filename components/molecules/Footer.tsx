import React from "react";
import Link from "next/link";

import Container from "../ui/Container";
import { Icons } from "../ui/Icons";

const Footer = () => {
  return (
    <footer className="bg-secondary-text">
      <Container>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-6">
          <p className="text-primary-text">
            © 2023 Zamrood by PT Teknologi Pandu Wisata
          </p>
          <div className="contact flex items-center gap-6">
            <Link href={"#"}>
              <Icons.facebook />
            </Link>
            <Link href={"#"}>
              <Icons.instagram className="size-7" />
            </Link>
            <Link href={"#"}>
              <Icons.email className="size-7" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
