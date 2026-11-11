# Travel Time Atlas

A static website: no build step, no npm, no server needed.

Content so far: Copernicus Science Centre (Warsaw) and Nicolaus Copernicus.

## Preview
Open `index.html` in a browser.

## Deploy on GitHub Pages
1. Create a repository and upload the **contents** of this folder (not the folder itself).
2. Settings, Pages: Branch `main`, folder `/(root)`.
3. Open `https://USERNAME.github.io/REPO/`.

## Add content
Add records to `assets/js/data/places.js`, `figures.js` and `events.js`. Event dates may use optional `month` and `day` for sorting within a year.
Images: put files in `assets/images/places/` or `figures/` and set the `image` field. Empty fields show a placeholder.
