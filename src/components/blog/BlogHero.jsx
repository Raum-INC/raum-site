import FeaturedBlog from "./FeaturedBlog";

const BlogHero = () => {
  return (
    <main className="w-full h-auto">
      <section className="p-4 lg:p-12 space-y-10">
        <h1 className="font-bold text-3xl lg:text-6xl">Blog</h1>
        <p className="font-medium text-base lg:text-lg">
          We are revolutionizing staycations by providing an all-in-one platform
          <br />
          for booking short-term and long stays, along with dream properties,
          <br />
          using AI, VR tours, smart home tech, and prioritize sustainability.
        </p>
      </section>
      <section className="p-4 lg:p-12">
        <FeaturedBlog />
      </section>
    </main>
  );
};

export default BlogHero;
