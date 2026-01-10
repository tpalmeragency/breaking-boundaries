import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const textStyles = 'font-sans font-extralight transition-colors';
  return (
    <footer className="z-index-10 relative bg-[#0E0E0E] px-6 py-12 text-gray-300 md:px-20">
      {/* Footer content */}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a className="hover:!text-default" href={'/'}>
            <h1 className="sr-only">Navigation Bar</h1>
            <Image
              src="/images/branding/t-palmer-logo.svg"
              alt="Company Logo"
              width={182}
              height={83}
              priority
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <span className="invisible block font-medium">Home</span>

            {/* visible text */}
            <Link
              href={'#hero'}
              className="absolute top-0 left-0 font-extralight text-white transition-[font-weight] hover:cursor-pointer hover:font-medium"
            >
              Home
            </Link>
          </div>
          <div className="relative">
            <span className="invisible block font-medium">About</span>

            {/* visible text */}
            <Link
              href={'#about'}
              className="absolute top-0 left-0 font-extralight text-white transition-[font-weight] hover:cursor-pointer hover:font-medium"
            >
              About
            </Link>
          </div>
          <div className="relative">
            <span className="invisible block font-medium">Launch</span>

            {/* visible text */}
            <Link
              href={'#launch'}
              className="absolute top-0 left-0 font-extralight text-white transition-[font-weight] hover:cursor-pointer hover:font-medium"
            >
              Launch
            </Link>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <span className="invisible block font-medium">Privacy Policy</span>

            {/* visible text */}
            <Link
              href={'/'}
              className="absolute top-0 left-0 font-extralight text-white transition-[font-weight] hover:cursor-pointer hover:font-medium"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="relative">
            <span className="invisible block font-medium">Terms & Conditions</span>

            {/* visible text */}
            <Link
              href={'/'}
              className="absolute top-0 left-0 font-extralight text-white transition-[font-weight] hover:cursor-pointer hover:font-medium"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Podcast & Social Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-sans text-lg font-medium text-white">Follow our Podcast</h3>
          <div className="flex items-center gap-4">
            {/* <button className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Link href="/">
                <Image
                  src="/images/icons/icon-footer-apple-music.svg"
                  width={30}
                  height={35}
                  alt="Apple Music"
                />
              </Link>
            </button>
            <button className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Link href="/">
                <Image
                  src="/images/icons/icon-footer-spotify.svg"
                  width={30}
                  height={35}
                  alt="Spotify"
                />
              </Link>
            </button>
            <button className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Link href="/">
                <Image
                  src="/images/icons/icon-footer-amazon-music.svg"
                  width={30}
                  height={35}
                  alt="Amazon Music"
                />
              </Link>
            </button> */}
            <button className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Link href="/">
                <Image
                  src="/images/icons/icon-footer-youtube.svg"
                  width={30}
                  height={35}
                  alt="Youtube"
                />
              </Link>
            </button>
            <button className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Link href="/">
                <Image
                  src="/images/icons/icon-footer-instagram.svg"
                  width={30}
                  height={35}
                  alt="Instagram"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
