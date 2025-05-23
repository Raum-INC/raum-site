import FeaturedBlog from "./FeaturedBlog";

const BlogHero = () => {
  return (
    <main
      itemScope
      itemType="https://raum.africa/blog"
      className="h-auto w-full"
    >
      <section className="space-y-10 p-4 lg:p-12">
        <h1 itemProp="title" className="text-3xl font-bold lg:text-6xl">
          Blog
        </h1>
        <p itemProp="description" className="text-base font-medium lg:text-lg">
          Discover how we're transforming the staycation experience with
          <br /> an all-in-one platform that makes booking short-term and
          extended
          <br /> stays easier than ever. Through relatable storytelling, we show
          you
          <br /> smart home features and a strong commitment to sustainability,
          <br />
          redefining what it means to get away without going far.
        </p>
      </section>
      <section className="p-4 lg:p-12">
        <FeaturedBlog />
      </section>
    </main>
  );
};

export default BlogHero;
