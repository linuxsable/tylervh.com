import React from "react";
import { Link } from "react-router-dom";
import { blogEntries } from "../blog-entries";

const getFriendlyDate = (dateJSON: string) => {
  return new Date(dateJSON).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

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
        {blogEntries
          .sort(
            (a, b) =>
              new Date(b.published).getTime() - new Date(a.published).getTime()
          )
          .map((entry) => (
            <li className="pv1" key={entry.filename}>
              <Link
                to={`/blog/${entry.filename}`}
                className="black-70 link hover-black underline"
              >
                {getFriendlyDate(entry.published)} - {entry.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
