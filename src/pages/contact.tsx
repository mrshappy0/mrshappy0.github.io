import Layout from "@/components/layout";
import { generateTitle } from "@/helpers";

export default function Contact() {
  const title = generateTitle(Contact.name);
  const metaTags = [
    // Viewport meta tag
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    // Favicon link tag
    { rel: "icon", href: "/favicon-16x16.png" },
    // Search Engine meta tags
    { name: "title", content: title },
    {
      name: "description",
      content:
        "Software Engineering Portfolio | Seeking New Opportunities in Full Stack Development.",
    },
    { name: "image", content: "https://i.imgur.com/LdZxaKq.png" },
    // Schema.org meta tags
    { itemProp: "name", content: title },
    { itemProp: "description", content: "Software Engineering Portfolio" },
    { itemProp: "image", content: "https://i.imgur.com/LdZxaKq.png" },
    // Open Graph meta tags
    { property: "og:title", content:  title },
    { property: "og:description", content: "Software Engineering Portfolio" },
    { property: "og:image", content: "https://i.imgur.com/LdZxaKq.png" },
    { property: "og:url", content: "https://adam-shappy.com" },
    { property: "og:site_name", content:  title },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    // Twitter meta tags
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://adam-shappy.com" },
    { property: "twitter:title", content:  title },
    {
      property: "twitter:description",
      content:
        "Software Engineering Portfolio | Seeking New Opportunities in Full Stack Development.",
    },
    {
      property: "twitter:image",
      content:
        "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
    },
  ];
  return (
    <>
      <Layout metaTags={metaTags} title={title}>
        <>
          <div>hey</div>
        </>
      </Layout>
    </>
  );
}
