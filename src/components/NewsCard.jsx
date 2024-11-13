import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import noImage from "../assets/no-image.png";

const NewsCard = function ({ data, scrollPosition }) {
  return (
    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl dark:bg-zinc-800 py-8 px-8 md:grid-cols-2 md:gap-2 shadow-[5px_5px_0px_0px_rgba(45,212,191)] nw-card" data-aos="fade-up">
      <span className="nw-image">
        <LazyLoadImage
          className="rounded-t-lg"
          src={data.urlToImage ? data.urlToImage : noImage}
          effect="blur"
          delayTime={5000}
          scrollPosition={scrollPosition}
        />
      </span>

      <div className="flex flex-col pr-1">
        <span title={data.title}>
          <h5 className="text-xl tracking-wide text-black  dark:text-white overflow-hidden line-clamp-3 top-0 mb-8">
            {data.title}
          </h5>
        </span>
        <a
          target="_blank"
          href={data.url}
          className="inline-flex items-center py-2 text-sm font-medium text-center text-black dark:text-purple-500"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <span className="text-yellow-800 text-xs font-medium me-2 rounded dark:text-yellow-300">
        Source: {data.source.name}
      </span>
    </div>
  );
};

export default trackWindowScroll(NewsCard);
