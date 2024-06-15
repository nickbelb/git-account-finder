
import { Link } from 'react-router-dom'
import FollowInfoListItem from './FollowInfoListItem'

function UserInfo({profileLogo,userName,userFollowInfo,gitUrl}) {

  return (
    <section className='flex user-info-sect'>
        <figure className='user-img-profile'>
            <img src={profileLogo} alt='git-logo'/> 
        </figure>
        <h2>{userName}</h2>
        <ul className='user-follow-info-list'>
            {Object.entries(userFollowInfo).map(([key, value]) => (
                <FollowInfoListItem key={key} title={key} value={value}/>
            ))}
        </ul>
        <Link to={gitUrl} className='git-url'>Go to github</Link>
    </section>
  )
}

export default UserInfo