// import { Profile, Sidebar } from './Components';
import { useUserContext } from './context';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
    const user = useUserContext();
  return (
    <div>
      {/* <Sidebar />
      <Profile /> */}
    </div>
  );
}