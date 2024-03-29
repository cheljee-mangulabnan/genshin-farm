import React from "react";
import useFetchTalentBooks from "../hooks/useFetchTalentBooks";
import useGetChars from "../hooks/useGetChars";

import TalentBookItem from "./TalentBookItem";
import TalentBookCharList from "./TalentBookCharList";

const TalentBooks = () => {
  const { talentBookData, loading, error } = useFetchTalentBooks();
  const { allCharsData, loading: getCharsloading } = useGetChars();

  if (!loading) {
    console.log("TalentBookData is ready to render", talentBookData);
  }

  if (error) {
    console.log(error);
  }

  return (
    <section className="talentbooks p-6 bg-[#EDEDED] flex flex-col  justify-between rounded-2xl">
      {loading && <div>Loading</div>}
      {!loading &&
        talentBookData.map((talentBook) => (
          <div
            className="flex items-center justify-between"
            key={talentBook.source}
          >
            <div className="talentbook">
              <TalentBookItem
                name={talentBook.name}
                key={talentBook.name}
                chars={talentBook.characters}
                availability={talentBook.availability}
                icon={talentBook.icon}
              />
            </div>
            {!getCharsloading && (
              <TalentBookCharList
                talentBookChars={talentBook.characters}
                allCharsData={allCharsData}
              />
            )}
          </div>
        ))}
    </section>
  );
};

export default TalentBooks;
