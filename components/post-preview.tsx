import DateFormatter from "./date-formatter";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <div>
      <h3 className="leading-snug text-lg">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-6 text-sm">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostPreview;
