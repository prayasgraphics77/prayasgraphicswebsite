import React from "react";

interface StructuredDataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

export default function StructuredData({
  title,
  description,
  url,
  image = "https://prayasgraphics.com/og-image.jpg",
  datePublished,
  dateModified,
  authorName = "Prayas Graphics",
}: StructuredDataProps) {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prayas Graphics",
    url: "https://prayasgraphics.com/",
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://prayasgraphics.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Prayas Graphics",
      url: "https://prayasgraphics.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prayasgraphics.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://prayasgraphics.com" + url,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://prayasgraphics.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://prayasgraphics.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: "https://prayasgraphics.com" + url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
}
