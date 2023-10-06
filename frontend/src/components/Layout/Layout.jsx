import React from "react";

import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>

      <main style={{ minHeight: "75vh" }}>{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Auto Essentials",
  description: "Mern Stack Project with Ai",
  keywords: "mern,react,mern,node,express,products,mongodb",
  author: "Hammad",
};
