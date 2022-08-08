import React, {useState} from 'react'
import "./style.css";
import Menu from "./menuAPI";
import MenuCard from './MenuCard';
import MenuNavBar from './MenuNavBar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),
  "All"
]

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

      if(category==="All"){
        setMenuData(Menu);
        return;
      }

      const updateList = Menu.filter((curElem)=>{
        return curElem.category === category;
      })
      setMenuData(updateList);
    }
  return (
    <>
        <MenuNavBar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant