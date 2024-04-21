import React from "react";

const Note = ({ color, className }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame 1321314551">
        <path
          id="Vector"
          d="M23.3764 1.00981V29.7969C23.3764 33.1579 20.6515 35.8831 17.2901 35.8831C13.9288 35.8831 11.2043 33.1583 11.2043 29.7969C11.2043 26.4355 13.9291 23.7107 17.2905 23.7107C17.9008 23.7107 18.4887 23.8029 19.0444 23.9701V16.5872C18.463 16.5092 17.8771 16.4695 17.2905 16.4683C9.95043 16.4683 4 22.4324 4 29.7894C4 37.1464 9.95043 43.1106 17.2905 43.1106C24.6307 43.1106 30.5807 37.1464 30.5807 29.7894V15.0715C33.5259 17.1917 37.0645 18.3297 40.6935 18.3238V11.125C35.1136 11.125 30.5897 6.59172 30.5897 1H23.3811L23.3764 1.00981Z"
          fill={color}
          className="dark:fill-white"
        />
      </g>
    </svg>
  );
};

export default Note;
