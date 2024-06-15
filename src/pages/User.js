import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import RepoItem from '../components/RepoItem';
import axios from 'axios';

function User() {
  const [repos,setRepos] = useState([]);
  const location = useLocation();
  const userInfo = location.state?.userInfo;
  const userFolloinfo ={'Repositories': userInfo.public_repos, 'Followers':userInfo.followers,"Following":userInfo.following};
  useEffect(()=>{
    axios.get(`https://api.github.com/users/${userInfo.login.toLowerCase()}/repos`)
      .then(function (response) {
        setRepos(response.data);
      }).catch(function(error){
        });
    },[]);

    const reposList = repos.map(repo=>{
      return (<RepoItem key={repo.name} repoName={repo.name} 
              repoUpdDate={repo.updated_at} 
              repoDescription={repo.description}
              url={repo.html_url}/>)
   })

  const  notFound = <li className='not-found '>No public Repositories </li> 
  
  return (
    <>
        <UserInfo 
        gitUrl={userInfo.html_url}
        profileLogo={userInfo.avatar_url} 
        userName={userInfo.login}
        userFollowInfo={userFolloinfo}/>
        <h2>Repositories</h2> 
        <section className='user-repos-sect'>
          <ul>
            {repos.length >0? reposList:notFound}
          </ul>
        </section>
    </>
  )
}

export default User