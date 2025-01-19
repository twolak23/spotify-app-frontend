import LogoutButton from "../misc/LogoutButton";
import GetPlaylistsPage from "../playlists/GetPlaylistsPage"

const Dashboard = () => {    
    return ( <div>
        <LogoutButton />
        <GetPlaylistsPage></GetPlaylistsPage>
    </div> );
}
 
export default Dashboard;