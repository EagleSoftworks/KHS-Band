# KHS-Band

---
## Adding A Photo Album To `photos.html`

Photo albums are stored in `<div>`s with the `photoBox` class in chronological order.

1. Start with this template code for a photo box:
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
2. Generate an album share link from the Google Photo album (this may have to be done by the album owner). Place this in "link 1" inside the `<a>` tag.
3. Pick a feature photo from the album and generate a share link for that specific photo. Go to [this site](https://ctrlq.org/google/photos/) to generate a direct link. Paste this link into "link 2" inside the `<img>` tag.
4. Pick a title for the album, and enter it into the `<h3>` tag.
5. Pick a subtitle for the album, such as the number of photos, and enter it into the `<p>` tag.
