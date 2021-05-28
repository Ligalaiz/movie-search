export default function starStyleUse(imdbID) {
  return /* html */ `
  .rating-area-${imdbID} {
    overflow: hidden;
    width: 265px;
    margin: 0 auto;
    max-width: 210px;
  }
  .rating-area-${imdbID}:not(:checked) > .star__item-${imdbID} {
    display: none;
  }
  .rating-area-${imdbID}:not(:checked) > label {
    float: right;
    width: 42px;
    padding: 0;
    cursor: pointer;
    font-size: 32px;
    line-height: 32px;
    color: lightgrey;
    text-shadow: 1px 1px #bbb;
  }
  .rating-area-${imdbID}:not(:checked) > label:before {
    content: "★";
    font-size: 32px;
  }
  .rating-area-${imdbID} > .star__item-${imdbID}:checked ~ label {
    color: gold;
    text-shadow: 1px 1px #c60;
  }
  .rating-area-${imdbID}:not(:checked) > label:hover,
  .rating-area-${imdbID}:not(:checked) > label:hover ~ label {
    color: gold;
  }
  .rating-area-${imdbID} > .star__item-${imdbID}:checked + label:hover,
  .rating-area-${imdbID} > .star__item-${imdbID}:checked + label:hover ~ label,
  .rating-area-${imdbID} > .star__item-${imdbID}:checked ~ label:hover,
  .rating-area-${imdbID} > .star__item-${imdbID}:checked ~ label:hover ~ label,
  .rating-area-${imdbID} > label:hover ~ .star__item-${imdbID}:checked ~ label {
    color: gold;
    text-shadow: 1px 1px goldenrod;
  }
  .rate-area-${imdbID} > label:active {
    position: relative;
  }
  `;
}
