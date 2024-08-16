import React from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ClipLoader } from "react-spinners";

const ContentBlock = ({ contentData }) => {
  const { title, desc, content } = contentData;
  const { id } = contentData;

  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 70,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      translateY: -80,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 70,
        duration: 2,
      },
    },
  };

  const loadingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const headings = `prose-headings:text-2xl md:prose-h1:text-5xl md:prose-h2:text-4xl prose-h4:text-3xl prose-headings:text-white`;
  const p = `prose-p:font-medium prose-p:text-white/70 prose-p:text-lg prose-p:text-justify`;
  const strong = `prose-strong:text-white prose-strong:font-bold`;
  const anchorLists = `prose-a:text-primary prose-ol:text-white/70 prose-ul:text-white/70`;

  if (!contentData) {
    return (
      <AnimatePresence>
        <motion.div
          variants={loadingVariant}
          initial="hidden"
          animate="visible"
          className="w-full h-screen flex justify-center items-center"
        >
          <ClipLoader
            color="#00F"
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title} - Raum Africa</title>
        <meta
          name="description"
          content={desc ? desc : `${title} of Raum Africa`}
        />
        <meta property="og:title" content={` ${title} - Raum Africa`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={desc ? desc : `${title} of Raum Africa`}
        />
        <meta
          property="og:image"
          content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
        />
        <meta property="og:url" content={`https://raum.africa/${id}`} />
        <link rel="canonical" href={`https://raum.africa/${id}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {content && (
        <AnimatePresence>
          <motion.article
            itemScope
            itemType={`https://raum.africa/${id}`}
            variants={componentVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`w-full ${
              content ? "h-auto" : "h-screen"
            } max-w-6xl mx-auto md:py-10 p-8 md:p-0`}
          >
            <ReactMarkdown
              className={`w-full h-auto max-w-6xl mx-auto prose ${headings} ${p} ${strong} ${anchorLists} pt-24`}
            >
              {content}
            </ReactMarkdown>
          </motion.article>
        </AnimatePresence>
      )}
    </>
  );
};

export default ContentBlock;
