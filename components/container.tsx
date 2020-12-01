import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="max-w-2xl mx-auto text-base">{children}</div>;
};

export default Container;
