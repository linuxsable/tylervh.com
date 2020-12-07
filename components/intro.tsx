const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 text-4xl">
      <h4>
        Tyler builds software for teams at{" "}
        <a href="http://atlassian.com" className="underline">
          Atlassian
        </a>{" "}
        and creates modular analogue music under the moniker{" "}
        <a href="http://atomstates.bandcamp.com" className="underline">
          Atom States
        </a>
        .
      </h4>
    </section>
  );
};

export default Intro;
