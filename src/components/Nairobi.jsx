import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaLocationDot } from "react-icons/fa6";
import "../embla.css"; // Ensure you include the CSS for Embla
import { client } from "../lib/sanity";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const EmblaDots = ({ slides, selectedIndex, onDotClick }) => (
  <div className="mt-10 flex justify-center gap-2">
    {slides.map((_, idx) => (
      <button
        key={idx}
        type="button"
        className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-200 ${
          selectedIndex === idx ? "bg-white" : "bg-transparent"
        }`}
        aria-label={`Go to slide ${idx + 1}`}
        onClick={() => onDotClick(idx)}
      />
    ))}
  </div>
);

const Nairobi = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == 'foreignListings']{
      _createdAt,
      title,
      location,
      availability,
      description,
      date,
      'slug': slug.current,
      'image': image.asset->url,
      'alt': image.alt,
      content
    }`;
      try {
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trim",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Add dot click handler
  const onDotClick = useCallback(
    (idx) => {
      if (emblaApi) emblaApi.scrollTo(idx);
    },
    [emblaApi],
  );

  return (
    <main className="relative flex h-auto w-full flex-col items-center justify-center bg-[#121216] py-10 text-white">
      <h2 itemProp="Title" className="text-center font-semibold lg:text-2xl">
        Want to view some of our current properties?
      </h2>
      <p itemProp="Description" className="my-2 text-sm text-gray-300">
        Here's one of our properties in Nairobi
      </p>

      {/* Embla Carousel */}
      <div className="embla mx-auto h-auto w-10/12 max-w-6xl">
        <div
          className="embla__viewport w-full overflow-hidden rounded-2xl border-2 border-[#2A2A2A]"
          ref={emblaRef}
        >
          <div className="embla__container flex h-[650px] min-w-full">
            {data.map((slide, index) => (
              <Link
                itemProp="Link"
                aria-label={`View details for ${slide.title}`}
                title={slide.title}
                to={`/invest/${slide.slug}`}
                className="embla__slide relative h-full w-full flex-[0_0_100%] flex-col items-center justify-between"
                key={index}
              >
                <div className="h-[500px] w-full">
                  <img
                    itemProp="Image"
                    src={slide.image}
                    alt={slide.alt}
                    className="h-full w-full rounded-xl rounded-b-none object-cover object-center"
                  />
                </div>
                <div className="mt-10 flex h-full w-full flex-col items-center">
                  <p
                    itemProp="Title"
                    className="text-lg font-bold text-white lg:text-2xl"
                  >
                    {slide.title}
                  </p>
                  <p
                    itemProp="Location"
                    className="flex items-center gap-3 text-sm underline"
                  >
                    <FaLocationDot className="text-[#7F7F7F]" />
                    {slide.location}
                  </p>
                </div>
                <p
                  itemProp="Location"
                  className="absolute right-0 top-0 m-5 rounded-full bg-black p-1 px-4"
                >
                  {slide.availability}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Embla dots */}
        <EmblaDots
          slides={data}
          selectedIndex={selectedIndex}
          onDotClick={onDotClick}
        />
      </div>
    </main>
  );
};

export default Nairobi;
