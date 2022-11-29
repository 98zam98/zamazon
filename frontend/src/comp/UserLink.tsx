import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../state/hooks';

const UserLink = () => {
    const appuser = useAppSelector(s => s.user);
    // console.log((appuser.user as any).name)
  return (
    <>
    {
      (appuser.user as any).name?
    (<Link to="/Userpage"><div className="user">{(appuser.user as any).name}</div></Link>):
    (<Link to="/Signin"><div className="signin">Sign in</div></Link>)
    // (<Link to="/"><div className="user">{(appuser.user as any).name}</div></Link>)
  }
  </>
  )
}

export default UserLink