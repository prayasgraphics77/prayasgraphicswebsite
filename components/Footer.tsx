import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-8 rounded-[32px] bg-white px-8 py-12 shadow-sm md:px-16 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              aria-label="Prayas Graphics Home"
              className="flex items-center gap-2 sm:gap-3"
            >
              <Image
                src="/Prayas-Graphics-Logo.svg"
                alt="Prayas Graphics Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all object-contain shrink-0"
              />
              <Image
                src="/Prayas-Graphics-title.svg"
                alt="Prayas Graphics Title"
                width={250}
                height={80}
                className="h-8 w-auto sm:h-10 lg:h-12 transition-all object-contain shrink-0"
              />
            </Link>
            <p className="text-sm font-medium text-zinc-500 max-w-xs">
              Premium Signboards and Display Advertising Solutions for Every
              Business.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Browse
              </p>
              <Link
                href="/services"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Gallery
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Company
              </p>
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Legal
              </p>
              <Link
                href="/disclaimer"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Disclaimer
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Privacy &amp; Policy
              </Link>
            </div>
            <div className="flex flex-col gap-4 max-w-[280px]">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Visit Us
              </p>
              <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                Madhuvatsalya Apartment Shop no 3 Tukdoji Sqr, Manewada Rd, opp.
                MSEB Office, appt, Nagpur, Maharashtra 440027
              </p>
              <div className="overflow-hidden rounded-xl bg-zinc-100 h-32 w-full mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7443020843207!2d79.10267937420798!3d21.12275798454544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c147e4d218c3%3A0x3b1e05e4c2b2ffb2!2sPRAYAS%20GRAPHICS%20%7C%20ACP%20Sheet%20Work%20%7C%20Signages%20Board%20%7C%20LED%20Glow%20Sign%20Board%20%7C%20Flex%20Printing%20%7C%20Manufacturers%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1775206503124!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-6">
          <p className="text-xs font-medium text-zinc-400">
            © 2026 Prayas Graphics Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
