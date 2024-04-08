// import { Profile, Sidebar } from './Components';
import { useUserContext } from './context';
import {Link} from 'react-router-dom';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
    // const user = useUserContext();
    const profile = [1,2,3,4,5];

  return (
    <div>
      {/* <Sidebar />
      <Profile /> */}
      Dashboard <br/>
      {profile.map((profile)=>(
          <Link to={`/dashboard/${profile}`}> Prfile {profile} <br/></Link> 
      ))}
     
      {/* <a href="/"> Home page from a</a> */}
    </div>
  );
}