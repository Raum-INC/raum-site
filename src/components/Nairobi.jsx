import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../embla.css"; // Ensure you include the CSS for Embla
import { client } from "../lib/sanity";

const Nairobi = () => {
  const [data, setData] = useState([]);

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trim",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="relative flex w-full flex-col items-center justify-center bg-[#121216] py-10 text-white">
      <h2 className="text-center font-semibold lg:text-2xl">
        Want to view some of our current properties?
      </h2>
      <p className="my-2 text-sm text-gray-300">
        Here's one of our properties in Nairobi
      </p>

      {/* Embla Carousel */}
      <div className="embla mx-auto w-10/12 max-w-6xl">
        <div
          className="embla__viewport w-full overflow-hidden rounded-md"
          ref={emblaRef}
        >
          <div className="embla__container mx-auto flex h-[400px] w-full">
            {data.map((slide, index) => (
              <a
                aria-label={`View details for ${slide.title}`}
                title={slide.title}
                href={`${slide.slug}`}
                rel="noreferrer"
                target="_blank"
                className={`embla__slide relative h-[400px] w-full ${index <= 1 ? "flex-[0_0_105%] lg:flex-[0_0_102%]" : "flex-[0_0_80]"} items-center justify-center`}
                key={index}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full rounded-xl object-cover object-center"
                />
                <div className="absolute inset-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/45 to-transparent p-10">
                  <p className="text-lg font-bold text-white lg:text-2xl">
                    {slide.title}
                  </p>
                  <p className="text-sm">{slide.location}</p>
                </div>
                <p className="absolute right-0 top-0 m-5 rounded-full bg-black p-1 px-4">
                  {slide.availability}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nairobi;
