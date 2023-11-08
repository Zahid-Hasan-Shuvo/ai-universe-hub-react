import React from 'react';

const Modal = (props) => {
    const {image_link, description,  features}=props.singleData;
    const { integrations}=props.singleData;
    
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <div className="card lg:card-side bg-base-100 ">
 
  <div className="card-body d-flex flex-col">
    <h2 className="card-title text-sm">{description? description:'not found'}</h2>
   <div>
<div>
<span className='text-3xl bold'>Features</span>
{
  Object.values(features || {}).map((feature)=> <p> {feature.feature_name} </p>
   
  )
}
</div>

<div>
  Integrations

</div>



   </div>

    <figure><img className='w-96'  src={image_link && image_link[0]} alt="Album"/></figure>
    
  </div>
  
</div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;