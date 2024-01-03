import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Terms = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/terms-and-conditions"
        );
        if (response.ok) {
          const data = await response.json();
          setMarkdownContent(data.content.content);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMarkdownContent();
  }, []);

  const headings = `prose-headings:text-2xl md:prose-h1:text-5xl md:prose-h2:text-4xl prose-h4:text-3xl prose-headings:text-white`;
  const p = `prose-p:font-medium prose-p:text-white/70 prose-p:text-lg prose-p:text-justify`;
  const strong = `prose-strong:text-white prose-strong:font-bold`;
  const anchorLists = `prose-a:text-primary prose-ol:text-white/70 prose-ul:text-white/70`;

  return (
    <article className="w-full h-auto max-w-6xl mx-auto md:py-10 p-8 md:p-0">
      <ReactMarkdown
        className={`w-full h-auto max-w-6xl mx-auto prose ${headings} ${p} ${strong} ${anchorLists}`}
      >
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
};

export default Terms;
