"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import CarImg1 from "../public/images/car-1.png";
import CarImg2 from "../public/images/car-2.png";
import CarImg3 from "../public/images/car-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [blurHeader, setBlurHeader] = useState(false);

  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  // Scroll header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setBlurHeader(true);
      } else {
        setBlurHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.from(panel1Ref.current, { y: -1000, duration: 2 });
    gsap.from(panel2Ref.current, { y: 1000, duration: 2 });
    gsap.from(imgRef.current, { x: 1000, duration: 2 });
    gsap.from(titleRef.current, { y: 100, opacity: 0, delay: 2.1 });
  }, []);

  return (
    <>
      <Head>
        <title>Responsive car website - Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header
        className={`fixed w-full top-0 left-0 z-50 ${
          blurHeader
            ? 'after:content-[""] after:absolute after:w-full after:h-full after:bg-black/20 after:backdrop-blur-md after:top-0 after:left-0 after:-z-10'
            : ""
        }`}
      >
        <nav className="flex justify-between items-center h-14 mx-6 md:max-w-7xl md:mx-auto">
          <a href="#" className="text-white font-semibold">
            Race Car
          </a>

          <div
            className={`fixed top-0 bg-black/70 backdrop-blur-md w-4/5 h-full pt-28 px-14 transition-all duration-300 z-10 ${
              showMenu ? "right-0" : "-right-full"
            } md:w-2/5 md:pt-40`}
          >
            <ul className="flex flex-col gap-12 md:gap-16">
              <li>
                <a
                  href="#"
                  className="text-white font-semibold"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold"
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold"
                  onClick={() => setShowMenu(false)}
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold"
                  onClick={() => setShowMenu(false)}
                >
                  TV channels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold"
                  onClick={() => setShowMenu(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div
              className="absolute top-3 right-6 w-8 h-8 border-2 border-white rounded-full grid place-items-center cursor-pointer md:top-7"
              onClick={() => setShowMenu(false)}
            >
              <X className="text-white" size={20} />
            </div>
          </div>

          <div
            className="w-8 h-8 border-2 border-white rounded-full grid place-items-center cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <Menu className="text-white" size={20} />
          </div>
        </nav>
      </header>

      <main className="overflow-hidden">
        <section className="home">
          <Swiper
            modules={[Pagination, Navigation]}
            speed={800}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '">' +
                  String(index + 1).padStart(2, "0") +
                  "</span>"
                );
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="h-screen"
          >
            <SwiperSlide>
              <article
                className="relative pt-48 w-full h-screen"
                style={{ "--color-car": "hsl(36, 90%, 54%)" }}
              >
                <div
                  ref={panel1Ref}
                  className="absolute left-0 top-0 w-full h-2/5 bg-[var(--color-car)] md:w-1/3 md:h-full"
                ></div>
                <div
                  ref={panel2Ref}
                  className="absolute left-0 bottom-0 w-full h-3/5 bg-[#151617] md:w-2/3 md:right-0 md:left-auto md:h-full"
                ></div>

                <div className="relative h-full grid content-between z-10 mx-6 md:max-w-7xl md:mx-auto">
                  <div className="relative">
                    <div className="w-max mx-auto relative z-10">
                      <h3 className="text-6xl text-white font-['Dancing_Script'] md:text-8xl md:transform md:translate-y-2">
                        Let&apos;s
                      </h3>
                      <h1 className="text-8xl text-white font-bold md:text-[16rem] z-10">
                        RACE
                      </h1>
                    </div>
                    <div
                      ref={imgRef}
                      className="absolute max-w-none w-[400px] left-0 -bottom-32 transform z-20 translate-x-40 md:w-[800px] md:-bottom-44"
                    >
                      <Image
                        src={CarImg1}
                        alt="Orange Race Car"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="pb-12 text-center grid gap-8 md:grid-cols-2 md:items-center md:gap-24 md:pb-4 md:justify-end">
                    <div className="flex justify-center text-xl gap-6 font-semibold text-[var(--color-car)] md:gap-12">
                      <span>302 MPH</span>
                      <span>0 - 100 KM/H</span>
                      <span>360 KW</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-xl border-2 border-[var(--color-car)] px-6 py-3 rounded-full text-[var(--color-car)] justify-self-center"
                    >
                      <span className="font-semibold">Discover More</span>
                      <ArrowRight
                        className="text-[var(--color-car)] transition-transform duration-400"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article
                className="relative pt-48 w-full h-screen"
                style={{ "--color-car": "hsl(166, 90%, 40%)" }}
              >
                <div className="absolute left-0 top-0 w-full h-2/5 bg-[var(--color-car)] md:w-1/3 md:h-full"></div>
                <div className="absolute left-0 bottom-0 w-full h-3/5 bg-[#151617] md:w-2/3 md:right-0 md:left-auto md:h-full"></div>

                <div className="relative h-full grid content-between z-10 mx-6 md:max-w-7xl md:mx-auto">
                  <div className="relative">
                    <div className="w-max mx-auto relative z-10">
                      <h3 className="text-6xl text-white font-['Dancing_Script'] md:text-8xl md:transform md:translate-y-2">
                        Let&apos;s
                      </h3>
                      <h1 className="text-8xl text-white font-bold md:text-[16rem] z-10">
                        RACE
                      </h1>
                    </div>
                    <div className="absolute max-w-none w-[400px] left-0 -bottom-32 z-20 transform translate-x-40 md:w-[800px] md:-bottom-44">
                      <Image
                        src={CarImg2}
                        alt="Green Race Car"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="pb-12 text-center grid gap-8 md:grid-cols-2 md:items-center md:gap-24 md:pb-4 md:justify-end">
                    <div className="flex justify-center gap-6 font-semibold text-[var(--color-car)] md:gap-12">
                      <span>302 MPH</span>
                      <span>0 - 100 KM/H</span>
                      <span>360 KW</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 border-2 border-[var(--color-car)] px-6 py-3 rounded-full text-[var(--color-car)] justify-self-center"
                    >
                      <span className="font-semibold">Discover More</span>
                      <ArrowRight
                        className="text-[var(--color-car)] transition-transform duration-400"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article
                className="relative pt-48 w-full h-screen"
                style={{ "--color-car": "hsl(204, 90%, 50%)" }}
              >
                <div className="absolute left-0 top-0 w-full h-2/5 bg-[var(--color-car)] md:w-1/3 md:h-full"></div>
                <div className="absolute left-0 bottom-0 w-full h-3/5 bg-[#151617] md:w-2/3 md:right-0 md:left-auto md:h-full"></div>

                <div className="relative h-full grid content-between z-10 mx-6 md:max-w-7xl md:mx-auto">
                  <div className="relative">
                    <div className="w-max mx-auto relative z-10">
                      <h3 className="text-6xl text-white font-['Dancing_Script'] md:text-8xl md:transform md:translate-y-2">
                        Let&apos;s
                      </h3>
                      <h1 className="text-8xl text-white font-bold md:text-[16rem] z-10">
                        RACE
                      </h1>
                    </div>
                    <div className="absolute max-w-none w-[400px] left-0 -bottom-32 z-20 transform translate-x-40 md:w-[800px] md:-bottom-44">
                      <Image
                        src={CarImg3}
                        alt="Blue Race Car"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="pb-12 text-center grid gap-8 md:grid-cols-2 md:items-center md:gap-4 md:pb-4 md:justify-end">
                    <div className="flex justify-center gap-4 text-2xl font-semibold text-[var(--color-car)] md:gap-2">
                      <span>302 MPH</span>
                      <span>0 - 100 KM/H</span>
                      <span>360 KW</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 border-2 text-xl border-[var(--color-car)] px-6 py-3 rounded-full text-[var(--color-car)] justify-self-center"
                    >
                      <span className="font-semibold">Discover More</span>
                      <ArrowRight
                        className="text-[var(--color-car)] transition-transform duration-400"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>

          <div className="absolute left-0 top-0 w-full h-full z-10 md:max-w-7xl md:mx-auto md:left-0 md:right-0">
            <div className="absolute top-16 left-6 grid justify-center gap-3 md:top-auto md:bottom-12 md:left-0 md:gap-4">
              <div className="w-0.5 h-[88px] bg-white mb-3 md:h-[380px] md:mb-12"></div>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black text-5xl"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black text-5xl"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black text-5xl"
              >
                <Facebook size={20} />
              </a>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </main>
    </>
  );
}
