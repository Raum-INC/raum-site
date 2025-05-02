import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MdArrowForwardIos } from "react-icons/md";

const ListingRules = ({ product }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [showMore, setShowMore] = useState(false);

  const { owner } = product;

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      setMarkdownContent(owner.cancellationPolicy.content);
    };

    fetchMarkdownContent();
  }, [owner.cancellationPolicy.content]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const headings = `prose-headings:text-2xl md:prose-h1:text-5xl md:prose-h2:text-4xl prose-h4:text-3xl prose-headings:text-white`;
  const p = `prose-p:font-medium prose-p:text-white/70 prose-p:text-lg prose-p:text-left`;
  const strong = `prose-strong:text-white prose-strong:font-bold`;
  const anchorLists = `prose-a:text-primary prose-ol:text-white/70 prose-ul:text-white/70 prose-ol:list- prose-ul:list- prose-ol:list-outside prose-ul:list-outside`;
  return (
    <>
      {markdownContent && (
        <main className="flex h-auto w-full flex-col items-start justify-center gap-5">
          <p itemProp="Cancellation Policy">Cancellation Policy</p>
          <ReactMarkdown
            itemProp={`description`}
            className={`h-auto w-full max-w-7xl ${
              showMore === false ? `line-clamp-3` : ""
            } prose ${headings} ${p} ${strong} ${anchorLists}`}
          >
            {markdownContent}
          </ReactMarkdown>
          <button
            onClick={handleShowMore}
            className="flex items-center justify-start gap-2 text-sm underline underline-offset-2"
          >
            {showMore === false ? `Show more` : `Show less`}
            <MdArrowForwardIos size={10} />
          </button>
        </main>
      )}
    </>
  );
};

export default ListingRules;
