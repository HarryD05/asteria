import React from "react";
import { Helmet } from "react-helmet";

const defaultTitle = "Asteria Magazine";
const defaultURL = "https://asteriamagazine.co.uk";

const SEO = ({ seo = {} }) => {
  const metaTags = [];
  let title = defaultTitle;

  if (seo["title"] !== null && seo["title"] !== undefined && seo["title"] !== "") {
    title = seo["title"];
    metaTags.push({ name: "twitter:title", content: seo["title"] });
    metaTags.push({ name: "og:title", content: seo["title"] });
    metaTags.push({ itemprop: "name", content: seo["title"] });

    metaTags.push({ name: "twitter:card", content: "summary_large_image" });
    metaTags.push({ name: "og:type", content: "website" });
    metaTags.push({ name: "og:site_name", content: "Asteria Website" });

    if (seo["description"] !== null && seo["description"] !== undefined) {
      metaTags.push({ name: "description", content: seo["description"] });
      metaTags.push({ name: "twitter:description", content: seo["description"] });
      metaTags.push({ name: "og:description", content: seo["description"] });
      metaTags.push({ itemprop: "description", content: seo["description"] });
    }

    if (seo["image"] !== null && seo["image"] !== undefined) {
      metaTags.push({
        name: "image", content: defaultURL + seo["image"]
      });
      metaTags.push({ name: "og:image", content: defaultURL + seo["image"] });
      metaTags.push({ name: "twitter:image", content: defaultURL + seo["image"] });
      metaTags.push({ itemprop: "image", content: defaultURL + seo["image"] });
    }

    if (seo["keywords"] !== null && seo["keywords"] !== undefined) {
      metaTags.push({ name: "keywords", content: seo["keywords"] });
    }

    if (seo["url"] !== null && seo["url"] !== undefined) {
      let url = seo["url"];
      if (url.slice(0, 4).toLowerCase() !== "http") {
        url = defaultURL + url;
      }

      if (url.slice(url.length - 1) !== "/") {
        url += "/";
      }

      metaTags.push({ name: "twitter:url", content: url });
      metaTags.push({ name: "og:url", content: url });
    }
  }

  if (metaTags.length > 0) {
    return <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      meta={metaTags}
      title={title}
    />
  }

  return null;
};

export default SEO;