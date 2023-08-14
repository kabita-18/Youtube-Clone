import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItems from "./LeftNavMenuItems";
import {categories} from "../utils/constants";
import { Context } from '../context/contextApi';


const LeftNav = () => {

    const {selectCatogary, setSelectCatogary, mobileMenu} = useContext(Context);
    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type){
            case "category":
                return setSelectCatogary(name);
            case "home":
                return setSelectCatogary(name);
            case "menu":
                return false;

            default:
                break;
        }
    }
    return (
        <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>
            <div className="flex px-5 flex-col"></div>
            {categories.map((item) => {
                return(
                    <div key ={item.name}>
                        <LeftNavMenuItems
                            text={item.type === "home" ?"Home" : item.name}
                            icon = {item.icon}

                            action ={() => {
                                clickHandler(item.name, item.type)
                                navigate("/");
                            }}
                            className={`$ {
                                selectCatogary === item.name ? "bg-white/[0.15]" : " "}`}

                        />

                        {item.divider && (
                            <hr className='my-5 border-white/[0.2]'/>
                        )}
                    </div>
                )
            })}
            <hr className='my-5 border-white/[0.2]'/>
            <div className='text-white/[0.5] text-[12px]'>
                Clone By: Kabita Kumari
            </div>
        </div>
    );
}

export default LeftNav;
