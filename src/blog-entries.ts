import tempiDawSync from "./blog-entries/tempi-daw-sync.md";
import millionsOfMiles from "./blog-entries/millions-of-miles.md";
import introducingAvo from "./blog-entries/introducing-avo.md";
import howToDriveADeveloperCrazy from "./blog-entries/how-to-drive-a-developer-crazy.md";
import newTrackFirstBloom from "./blog-entries/new-track-first-bloom.md";

export interface BlogEntry {
  title: string;
  published: string;
  filename: string;
  fileContent: string;
}

export const blogEntries: BlogEntry[] = [
  {
    title: "Tempi DAW Sync",
    published: "2020-02-10T08:00:00.000Z",
    filename: "tempi-daw-sync",
    fileContent: tempiDawSync,
  },
  {
    title: "Millions of Miles",
    published: "2017-01-01T08:00:00.000Z",
    filename: "millions-of-miles",
    fileContent: millionsOfMiles,
  },
  {
    title: "Introducing Avo 🥑",
    published: "2020-04-08T07:00:00.000Z",
    filename: "introducing-avo",
    fileContent: introducingAvo,
  },
  {
    title: "How to Drive a Developer Crazy",
    published: "2012-09-12T07:00:00.000Z",
    filename: "how-to-drive-a-developer-crazy",
    fileContent: howToDriveADeveloperCrazy,
  },
  {
    title: "New Track: First Bloom",
    published: "2020-04-19T07:00:00.000Z",
    filename: "new-track-first-bloom",
    fileContent: newTrackFirstBloom,
  },
];
