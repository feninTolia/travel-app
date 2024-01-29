import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className=" padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="regular-14 flex  flex-col gap-4 text-gray-30">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row items-baseline"
                  >
                    <p className=" whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </li>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((social) => (
                    <li key={social}>
                      <Link href="/">
                        <Image
                          src={social}
                          width={24}
                          height={24}
                          alt={social.replace('.svg', '')}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

interface IFooterColumnProps extends PropsWithChildren {
  title: string;
}

const FooterColumn = ({ title, children }: IFooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="bold-18 whitespace-nowrap">{title}</h3>
      {children}
    </div>
  );
};
export default Footer;
