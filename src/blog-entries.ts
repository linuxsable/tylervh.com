export interface BlogEntry {
  title: string;
  published: string;
  filename: string;
  fileContent?: string;
}

export const blogEntries: BlogEntry[] = [
  {
    title: "Tempi DAW Sync",
    published: "2020-02-10T08:00:00.000Z",
    filename: "tempi-daw-sync",
  },
  {
    title: "Millions of Miles",
    published: "2017-01-01T08:00:00.000Z",
    filename: "millions-of-miles",
  },
  {
    title: "Introducing Avo 🥑",
    published: "2020-04-08T07:00:00.000Z",
    filename: "introducing-avo",
  },
  {
    title: "How to Drive a Developer Crazy",
    published: "2012-09-12T07:00:00.000Z",
    filename: "how-to-drive-a-developer-crazy",
  },
];
