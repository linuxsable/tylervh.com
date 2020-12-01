import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className="text-lg max-w-2xl mx-auto pt-16">{children}</h1>;
};

export default PostTitle;
