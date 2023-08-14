import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from '../utils/api'

export const Context = createContext ();

export const AppContext = (props) =>{
    const [loading, setloading] = useState(false);
    const [searchResults, setSearchResult] = useState([]);
    const [selectCatogary, setSelectCatogary] = useState("New");
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(() =>{
        fetchSelectedCategoryData(selectCatogary)
    }, [selectCatogary])

    const fetchSelectedCategoryData = (query) =>{
        setloading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) =>{
            console.log(contents);
            setSearchResult(contents);
            setloading(false);
        })
    }
    return (
        <Context.Provider value= {{
            loading,
            setloading,
            searchResults,
            setSearchResult,
            selectCatogary,
            setSelectCatogary,
            mobileMenu,
            setmobileMenu
        }}>

            {props.children}
        </Context.Provider>
    )
}