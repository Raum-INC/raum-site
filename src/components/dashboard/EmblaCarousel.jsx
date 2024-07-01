// EmblaCarousel.js
import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../embla.css"; // Ensure you include the CSS for Embla
import AutoPlay from "embla-carousel-autoplay";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container w-full flex">
          {slides.map((slide, index) => (
            <div className="embla__slide w-full flex-[0_0_100%]" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
