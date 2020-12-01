---
title: "Tempi DAW Sync"
date: "2020-02-10T10:00:00.000Z"
author:
  name: Tyler Van Hoomissen
---

Below are my notes about how to sync up your modular system using a midi device and the Tempi (from Make Noise). I use the uMidi device from Intellijel, but this can be adapted to other midi modules.

## The Patch

Let's setup the Tempi to receive both our clock input and our start/stop input from the DAW. This ensures the patch will start & stop with the DAW transport.

1. uMidi > Clock 1/32 OUT > Tempi > Tempo IN

This sets up the tempo correctly for Tempi. Using 32nd notes is important: it ensures a high resolution is sent to the Tempi so that it can establish the correct tempo quickly, thus staying in time with your song. If the clock division is too low, like 1/8th, the Tempi would fail to sync fast enough with the DAW.

2. uMidi > Run OUT > Tempi > Mod IN

This sets up the playhead of the DAW to turn on & off with Tempi. This is important when using sequencers with your modular system: when you hit record, you want your sequence to start playing in order to record it properly in time.

## Tempi Program Edit

This setup ensures that the Tempi will start/stop with the DAW.

1. Button 5 = **Blue**
2. Button 6 = **Red**

Happy patching!
