# KHS-Band

---
## Adding A Photo Album To `photos.html`

Photo albums are stored in `<div>`s with the `photoBox` class in chronological order.

* Start with this template code for a photo box:
```html
<div class="photoBox">
    <a href="link 1" target="_blank">
        <div class="photoCaption">
            <h3>title</h3>
            <p>subtitle</p>
        </div>
        <img src="link 2"/>
    </a>
</div>
```
* Generate an album share link from the Google Photo album (this may have to be done by the album owner). Place this in "link 1" inside the `<a>` tag.
* Pick a feature photo from the album and generate a share link for that specific photo. Go to [this site](https://ctrlq.org/google/photos/) to generate a direct link. Paste this link into "link 2" inside the `<img>` tag.
* Pick a title for the album, and enter it into the `<h3>` tag.
* Pick a subtitle for the album, such as the number of photos, and enter it into the `<p>` tag.

---
## Changing / Adding A Page Link

Links to each page can be found in `index.html` and in `navigation.js` 

* Start with this template code for an index link in `index.html`
```html
<div class="index">
    <a href="page.html">
        <h2>title</h2>
    </a>
</div>
```
* Pick a title for the page and enter it into the the `<h2>` tag
* Put the `HTML` file name into the `<a>` tag
* In `navigation.js`, put the selected title into the `navTitles` array
* Put the `HTML` file name into the `navLinks` array in the same index as the title in the `navTitles` array
