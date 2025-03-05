import Conversations from "../conversations/Conversations"
import Logout from "../logout/Logout"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>

        <Logout/>
    </div>
  )
}

export default Sidebar