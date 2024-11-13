import React from "react";

export default function India() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 900 600"
      className="w-5 h-5 mr-2 rounded-full"
    >
      <path fill="#f93" d="M0 0h900v200H0z" />
      <path fill="#fff" d="M0 200h900v200H0z" />
      <path fill="#128807" d="M0 400h900v200H0z" />
      <g transform="translate(450 300)">
        <circle r="92.5" fill="#008" />
        <circle r="80" fill="#fff" />
        <circle r="16" fill="#008" />
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a" fill="#008">
                <circle r="3.5" transform="rotate(7.5 -40 610.282)" />
                <path d="m0 80 3-48-2-16.031V15h-2v.969L-3 32l3 48z" />
              </g>
              <use xlinkHref="#a" transform="rotate(15)" />
            </g>
            <use xlinkHref="#b" transform="rotate(30)" />
          </g>
          <use xlinkHref="#c" transform="rotate(60)" />
        </g>
        <use xlinkHref="#d" transform="rotate(120)" />
        <use xlinkHref="#d" transform="rotate(-120)" />
      </g>
    </svg>
  );
}
