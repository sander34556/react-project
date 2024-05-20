import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useContext, useState } from "react"



function Navbar2({children}) {

    const [expanded, setExpanded] = useState(true)


  return (
    <div>
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                

                
                    <ul className="flex-1">{children}</ul>
                

                <div className="border-t flex p-3">
                    <div className="flex justify-between items-center overflow-hidden transition-all">
                        <div className="leading-4">
                            <h4 className="font-semibold">constGenius</h4>
                            <span className="text-xs text-gray-600">constgenius@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>


    </div>
  )
}

export default Navbar2;

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}