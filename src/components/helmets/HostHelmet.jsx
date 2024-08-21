import React from "react";
import { Helmet } from "react-helmet-async";

const HostHelmet = () => {
  return (
    <Helmet>
      <title>
        Boost your STR Business growth with Raum Africa Host App: Host more,
        Earn more!
      </title>
      <meta
        name="description"
        content="Discover how Raum Africa's host app empowers you to earn in Nigeria. List your property, access global booking, and register your business hassle-free. Start earning today!"
      />
      <meta property="og:site_name" content="Raum Africa Host App" />
      <meta
        property="og:title"
        content="Boost your STR Business growth with Raum Africa Host App: Host more, Earn more!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Discover how Raum Africa's host app empowers you to earn in Nigeria. List your property, access global booking, and register your business hassle-free. Start earning today!"
      />
      <meta
        property="og:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta property="og:url" content="https://raum.africa/host" />
      <link rel="canonical" href="https://raum.africa/host" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="apple-itunes-app"
        content={`app-id=6514303259, app-argument=raumhost://raumhost.app.link/`}
        data-rh="true"
      />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, showcase shortlets with raum africa, earn with Raum Africa, make money with raum africa, register your str business with raum africa, download raum mobile app, list your properties with Raum Host App"
      />
      <meta name="author" content="Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta
        name="twitter:title"
        content="Boost your STR Business growth with Raum Africa Host App: Host more, Earn more!"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Discover how Raum Africa's host app empowers you to earn in Nigeria. List your property, access global booking, and register your business hassle-free. Start earning today!"
      />
    </Helmet>
  );
};

export default HostHelmet;
