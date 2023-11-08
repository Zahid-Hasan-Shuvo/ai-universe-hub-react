import { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowDown, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData]=useState({})
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId]=useState(null)


  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);

  useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res=>res.json())
    .then(data=>setSingleData(data.data))
  },[uniqueId])

  const handleButton = () => {
    setShowAll(true);
  };

  //sort by date
const handleSort=()=>{
  const sortedData=data.sort((a, b)=>{
    return new Date(b.published_in)- new Date(a.published_in)

  })

  setData([...data, sortedData])
}


//////////////////
  return (
    <div>
      <button onClick={handleSort} className="bg-red-600 mt-5 text-white btn ">Sort by Date<FontAwesomeIcon icon={faArrowDown} /></button>
      <div className="grid grid-cols-1 shadow-2xl  md:grid-cols-2 lg:grid-cols-3  mt-3 gap-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData key={singleData.id} singleData={singleData} setUniqueId={setUniqueId}></SingleData>
        ))}
      </div>
      <Modal singleData={singleData} ></Modal>

      { !showAll&&
        <button onClick={handleButton} className="btn bg-red-500 text-white my-7">
        See more..
      </button>
      }
    </div>
  );
};

export default Card;
