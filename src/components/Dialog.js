import React, { useRef,useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


function Dialog({open,onClose,userExists,userInfo}){ 
  const  ref = useRef(null);
  let iconClass = userExists ? 'fa-check':'fa-heart-crack ';
  useEffect(()=>{
    if(open){
        setTimeout(()=>{ref.current?.showModal()},500);
    }else{
        ref.current?.close();
    }},[open]);


 return (
    <dialog  className={`task-card flex ${open?'visible':''}`}  ref={ref}>
       <i className="fa-solid fa-x" onClick={onClose}/>
       <i className= {`fa-solid main-icon ${iconClass}`} ></i>
        <p>{userExists ? `Username was found`:'User not found'}</p>
        <Link 
        to={userExists?{ pathname: '/user'}:'/'}
        state={userExists?{userInfo}:null}  
        onClick={onClose}>
                {userExists ? 'See details':'Try again'}
        </Link>
    </dialog>
  )
}

export default Dialog;

