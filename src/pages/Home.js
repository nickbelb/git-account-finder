import React, {useState } from 'react'
import gitLogo from '../assets/img/github.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Dialog from '../components/Dialog';

function Home () {
  const TOKEN = process.env.REACT_APP_API_TOKEN ;
  const options = {headers: { Authorization: `Bearer ${TOKEN}`}};
  const [isLoading, setIsLoading] = useState(false);
  const [isCardOpen,setIsCardOpen] = useState(false);
  const [userExists,setUserExists] = useState(false);
  const [userInfo,setUserInfo] = useState(null);
  const [path,setPath] = useState('/');
  const { register, handleSubmit} = useForm();

  const searchUser = async (data)=>{
    setIsLoading(true);
    axios.get(`https://api.github.com/users/${data.username}`,options)
         .then(function (response) {
              console.log(response.data)
              setUserExists(true);
              setUserInfo(response.data);
              setPath('/user');
        }).catch(function(error){
              setUserExists(false)
              setPath('/');
        }).finally(function() {
              setIsCardOpen(true);
              setIsLoading(false);
        });
  }

  const spinner = <i className="fa-solid fa-spinner fa-spin"></i>
  return (
    <>
    <section className='flex'>
        <figure>
            <img src={gitLogo} alt='git-logo'/> 
        </figure>
        <form onSubmit={handleSubmit(searchUser)} >
            <input type='text' placeholder='User name' {...register("username")}/>
        </form>
        <p>Welcome to git-finder</p>
        <p className='spinner'>{isLoading? spinner : ''} </p>
    </section>
    <Dialog open={isCardOpen} onClose={()=> setIsCardOpen(false)} path={path} userInfo={userInfo} userExists={userExists}/>
    </>
  )
}

export default  Home;