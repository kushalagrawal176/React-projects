import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from "react-icons/fa"


export default function MenuItem({item}){

    const [DisplayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...DisplayCurrentChildren,
            [getCurrentLabel]: !DisplayCurrentChildren[getCurrentLabel],
        })
    }

    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ?
                <span onClick={()=> handleToggleChildren(item.label)}>
                    {
                        DisplayCurrentChildren[item.label] ? <FaMinus color="#fff" size={12}/> : <FaPlus color="#fff" size={12}/>
                    }
                </span>
                : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 && DisplayCurrentChildren[item.label]? 
            <MenuList list = {item.children} />
            : null
        }
    </li>
}