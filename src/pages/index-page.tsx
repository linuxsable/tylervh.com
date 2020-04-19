import React from "react";

export const IndexPage: React.FC = () => {
  return (
    <div>
      <p className="measure-wide lh-copy">
        Tyler builds software for teams at
        <a
          href="http://atlassian.com"
          className="black-70 link hover-black underline"
        >
          Atlassian
        </a>
        and creates modular analogue music under the moniker
        <a
          href="http://atomstates.bandcamp.com"
          className="black-70 link hover-black underline"
        >
          Atom States
        </a>
        .
      </p>
      <ul className="list f5 pl0 mt4 mb0">
        <li className="pv1">
          <a
            href="blog/introducing-avo.html"
            className="black-70 link hover-black underline"
          >
            Apr 08, 2020 – Introducing Avo 🥑
          </a>
        </li>
        <li className="pv1">
          <a
            href="blog/tempi-daw-sync.html"
            className="black-70 link hover-black underline"
          >
            Feb 10, 2020 – Tempi DAW Sync
          </a>
        </li>
        <li className="pv1">
          <a
            href="blog/millions-of-miles.html"
            className="black-70 link hover-black underline"
          >
            Jan 01, 2017 – Millions of Miles
          </a>
        </li>
        <li className="pv1">
          <a
            href="blog/how-to-drive-a-developer-crazy.html"
            className="black-70 link hover-black underline"
          >
            Sep 12, 2012 – How to Drive a Developer Crazy
          </a>
        </li>
      </ul>
    </div>
  );
};
