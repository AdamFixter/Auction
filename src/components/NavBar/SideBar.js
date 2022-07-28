import { MdHome } from "react-icons/md";
import SideBarItem from "./SideBarItem";

function SideBar() {
    return (
        <nav className="flex flex-col bg-gray-800">
            <SideBarItem to="/" name="Home" icon={MdHome}/>
            <SideBarItem to="/auctions" name="Auctions" icon={MdHome}/>
        </nav>
    )
}

export default SideBar;