import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import userSlice from '../state/reducer/userSlice';

const Userpage = () => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const appuser = useAppSelector(s => s.user);
    
  return (
    <div>
    <Helmet>
      <title>{(appuser.user as any).name} profile</title>
    </Helmet>

        <button className='signout_b'
        onClick={
            ()=>{
                
              dispatch(userSlice.actions.signout());
              nav("/");
            }
        }
        >
            signout
        </button>

    </div>
  )
}

export default Userpage