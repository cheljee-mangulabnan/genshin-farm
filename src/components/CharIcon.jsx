import React from "react";

// Display Chars that can farm on the current day separated by region

const CharIcon = ({ char, chars: allChars, fourStars }) => {
  const getCharIconUrl = () => {
    // Check if we're getting the correct char
    // console.log(char);
    const altCharNames = ["lyney", "freminet", "lynette"];
    let charIconUrl = `https://genshin.jmp.blue/characters/${char}/icon`;
    if (charIconUrl.includes(`traveler`)) {
      return charIconUrl.concat(`-big-lumine`);
    }
    // if charname is in altCharNames then return string with icon-big
    else if (altCharNames.includes(char)) {
      return charIconUrl.concat(`-big`);
    } else {
      return charIconUrl;
    }
  };
  const fallbackCharIconUrl = `https://genshin.jmp.blue/characters/${char}/icon-big`;

  return (
    <div className="max-w-[6rem] bg-indigo-600 m-1 rounded-xl overflow-hidden">
      <img
        src={getCharIconUrl()}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = fallbackCharIconUrl;
        }}
        className="object-cover object-position-top w-[6rem] h-[6rem]"
      />
    </div>
  );
};

export default CharIcon;
