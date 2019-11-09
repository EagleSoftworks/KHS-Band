# KHS-Band

---
## 📷 Adding A Photo Album To `photos.html`

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
## ⚙️ Changing / Adding A Page Link

Links to each page can be found in `index.html` and in `navigation.js`.

* Start with this template code for an index link in `index.html`:

```html
<div class="index">
    <a href="page.html">
        <h2>title</h2>
    </a>
</div>
```
* Pick a title for the page and enter it into the the `<h2>` tag
* Put the `HTML` file name into the `<a>` tag.
* In `navigation.js`, put the selected title into the `navTitles` array.
* Put the `HTML` file name into the `navLinks` array in the same index as the title in the `navTitles` array.
* In `styles.css`, calculate the height of `#navBtn:hover #navigation` by multiplying `41px` by the number of total links.
   * This needs to be calculated without `calc()` because edge doesn't transition well with that function.

---
## 🎵 Adding A Song To `library-data.js`

Songs are organized in alphabetical order in `library-data.js`.

* A new song can be added to the `songs` array in `library-data.js` with this template:

```javascript
{
    title: "song name",
    composer: "composer name",
    arranger: "arranger name"
},
```
* The name of the song can be put in place of the `"song name"`.
* The composer of the song can be put in place of the `"composer name"`, or `"n/a"` if there is no composer.
* The arranger of the song can be put in place of the `"arranger name"`, or `"n/a"` if there is no arranger.
* Don't forget the quotes around each string and the commas after the `title` and `composer`.
* If the new song has a song before it, remember to add commas after the closing curly brackets
