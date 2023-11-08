import { faArrowDown, faArrowRight, faCalendar, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleData = (props) => {
    const {id, name, features, description, image, published_in}=props.singleData;
   
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl border-2 border-stone-700">
  <figure><img src={image} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold ">Features</h2>
    {
        features.map((feature, index)=> <p className='text-left '>{index+1}.{feature}</p> )
    }
  
    <div className=" border-b-2 border-white "> 
    </div>
      <div className='flex justify-between'>
      <div>
       <p className='text-white font-bold text-left'>{name}</p>
        <p className='text-left'>   <FontAwesomeIcon icon={faCalendarDay} /> {published_in}</p>
       </div>
        <div>
       
       <button onClick={()=>props.setUniqueId(id)}>
       <span className="btn"  onClick={()=>document.getElementById('my_modal_1').showModal()}> 
        <FontAwesomeIcon className='cursor-pointer' icon={faArrowRight} />
        </span>
       </button>
       
        </div>
      </div>
    
  </div>
</div>
        </div>
    );
};

export default SingleData;