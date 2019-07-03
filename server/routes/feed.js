const express = require("express");
const request = require("request");
const router = express.Router();

const flickrHost = "https://api.flickr.com/services/feeds/photos_public.gne";

function getPublicPhotos(req, res, next) {
  const tag = req.query.tag;
  const publicAPi = `${flickrHost}?format=json&nojsoncallback=1&tags=${tag};`;

  request(
    publicAPi,
    {
      json: true
    },
    (err, resp, body) => {
      if (err) {
        next(err);
      }
      res.json(body.items);
    }
  );
}

router.get("/photos", getPublicPhotos);

module.exports = router;
