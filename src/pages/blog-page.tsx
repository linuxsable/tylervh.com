import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { blogEntries, BlogEntry } from "../blog-entries";

export const BlogPage: React.FC = () => {
  const [blogEntry, setBlogEntry] = React.useState<BlogEntry | undefined>();

  let { slug } = useParams();

  React.useEffect(() => {
    if (!setBlogEntry) {
      return;
    }

    let parsedSlug: string | undefined = slug;

    if (slug?.includes(".html")) {
      parsedSlug = slug.replace(".html", "");
    }

    const entry = blogEntries.find((entry) => entry.filename === parsedSlug);
    const data = "hi";

    if (!entry) {
      return;
    }

    setBlogEntry({ ...entry, fileContent: data });
  }, [slug]);

  if (!blogEntry) {
    return <p>Not found.</p>;
  }

  return (
    <div className="measure-wide lh-copy">
      <ReactMarkdown source={blogEntry.fileContent} />
    </div>
  );
};
