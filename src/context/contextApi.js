import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from '../utils/api'

export const Context = createContext ();

export const AppContext = (props) =>{
    const [loading, setloading] = useState(false);
    const [searchResults, setSearchResult] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() =>{
        fetchSelectedCategoryData(selectedCategory)
    }, [selectedCategory])

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
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu
        }}>

            {props.children}
        </Context.Provider>
    )
}