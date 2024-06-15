import React from 'react'
import { Link } from 'react-router-dom'

function RepoItem({repoName,repoUpdDate,repoDescription,url}) {
  return (
    <li > 

        <p className='repo-update-date'>{`Updated at ${new Date(repoUpdDate).toDateString()}`}</p>
        <Link to={url} className='repo-name'>{repoName}</Link>
        <p className='repo-desc'>{repoDescription===null? 'No description': repoDescription}</p>
        
    </li>
  )
}

export default RepoItem