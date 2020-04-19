import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
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

    if (!entry) {
      return;
    }

    setBlogEntry(entry);
  }, [slug]);

  const Heading: React.FC<any> = (props) => {
    const className = "pt3";

    switch (props.level) {
      case 1:
        return <h2>{props.children}</h2>;
      case 2:
        return <h3 className={className}>{props.children}</h3>;
      case 3:
        return <h4 className={className}>{props.children}</h4>;
      case 4:
        return <h5 className={className}>{props.children}</h5>;
      default:
        return null;
    }
  };

  if (!blogEntry) {
    return <p>Not found.</p>;
  }

  return (
    <div className="measure-wide lh-copy">
      <ReactMarkdown
        source={blogEntry.fileContent}
        renderers={{ heading: Heading }}
      />
    </div>
  );
};
