import { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);

  const handleButton = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 shadow-2xl  md:grid-cols-2 lg:grid-cols-3  mt-3 gap-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData key={singleData.id} singleData={singleData}></SingleData>
        ))}
      </div>

      { !showAll&&
        <button onClick={handleButton} className="btn bg-red-500 text-white my-7">
        See more..
      </button>
      }
    </div>
  );
};

export default Card;
