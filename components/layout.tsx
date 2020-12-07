import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main className="px-8 sm:px-0">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
