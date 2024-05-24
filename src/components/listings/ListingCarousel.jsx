import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const ListingCarousel = ({ carousel }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === carousel.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < carousel.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden pb-10">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="w-full h-full flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imageSet={carousel} imgIndex={imgIndex} />
      </motion.div>

      <Dots imgs={carousel} imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imageSet, imgIndex }) => {
  console.log(imageSet);
  return (
    <>
      {imageSet.map((imgUrl, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgUrl.url})`, // Correctly use imgUrl as the URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgs, imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-1 w-5 transition-colors ${
              idx === imgIndex ? "bg-primary" : "bg-primary/10"
            }`}
          />
        );
      })}
    </div>
  );
};
