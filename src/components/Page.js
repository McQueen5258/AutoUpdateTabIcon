import React, { useEffect } from "react";

function Page({ text = "NoFound" }) {
  const initializePage = () => {
    // title
    document.title = `Page${text}`;
    const logoUrl = `/images/${text}.PNG`;

    // favicon
    let link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logoUrl;
    }

    // apple touch icon
    let linkApple = document.querySelector("link[rel~='apple-touch-icon']");
    if (linkApple) {
      linkApple.href = logoUrl;
    }
  };
  useEffect(() => {
    initializePage();
  }, []);

  return <div>Page{text}</div>;
}

export default Page;
