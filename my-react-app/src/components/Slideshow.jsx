import { useState } from "react";
import "./Slideshow.scss";

export default function Slideshow({ images = [], title = "" }) {
  const [index, setIndex] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <button
          className="prev"
          onClick={prev}
          aria-label={`Image précédente - ${index}/${images.length}`}
        >
          ‹
        </button>
      )}

      <img src={images[index]} alt={`${title} - photo ${index + 1}`} />

      {images.length > 1 && (
        <button
          className="next"
          onClick={next}
          aria-label={`Image suivante - ${
            index + 2 > images.length ? 1 : index + 2
          }/${images.length}`}
        >
          ›
        </button>
      )}

      {images.length > 1 && (
        <div
          className="count"
          aria-label={`Image ${index + 1} sur ${images.length}`}
        >
          {index + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
