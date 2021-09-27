# photography-portfolio-2021

React website code for a photography portfolio.

## Setup

```
npm ci
npm start
```

## Photos

* Photos are kept in src/photos directory. 
* Each photo will have various versions, these versions are broken down by image width. The app looks for 8 versions based 4 different MUI breakpoints. The MUI v5 breakpoint sizes are 600, 900, 1200, and 1536. However, if a retina display is detected, the app will use images of sizes 1200, 1800, 2400, and 3072. 
* Code for setting up the images is in /src/photos/index.js. See the bottom of the file for how the image size selection/setup gets done.
* The PhotoViewer component takes in an "album". This object is what's defined in the array in src/photos/index.js.  The concept of an album simply allows the viewer to take in multiple images for certain situations (panoramas, prev/next images, etc etc), but typically it only uses 1 photo.
* If in the future MUI changes the breakpoint sizes, rather than re-do all of your images you can manually revert the breakpoints to whatever you want. Ex:

```
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

```