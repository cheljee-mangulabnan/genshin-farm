import React from "react";

const useGenerateCharIconUrl = ({ charData }) => {
  const altCharNames = ["lyney", "freminet", "lynette"];
  let charIconUrl = `https://genshin.jmp.blue/characters/${charData.url_name}/icon`;
  if (charData.url_name.includes(`traveler`)) {
    return charIconUrl.concat(`-big-lumine`);
  }
  // if charname is in altCharNames then return string with icon-big
  else if (altCharNames.includes(charData.url_name)) {
    return charIconUrl.concat(`-big`);
  } else {
    return charIconUrl;
  }
};

export default useGenerateCharIconUrl;
