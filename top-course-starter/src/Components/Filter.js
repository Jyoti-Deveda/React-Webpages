import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from 'react';

const Filter = (props) => {
    let filterData = props.filterData;
    let category=props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    const navRef = useRef();
    function showNavBar(){
        navRef.current.classList.toggle('responsive_nav')
    }

    const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 700px)' })
        

    return (
        <div className="flex flex-row flex-nowrap h-16 w-[90%] ml-[10%] filter-container">
            <div ref={navRef} className="w-11/12 flex flex-wrap  justify-center space-x-4 gap-y-4  py-4 transition filter-section">
                {
                    filterData.map( (data) => (
                        <button 
                        className={`text-lg px-2 py-1 rounded-md font-medium
                        text-white bg-black hover:bg-opacity-50 border-2 max-w-max
                        transition-all duration-300 
                        ${category === data.title ? "bg-opacity-60 border-white" : 
                        "bg-opacity-40 border-transparent"}`}
                        onClick={() => filterHandler(data.title)}
                        key={data.id}>{data.title}</button>
                    ))
                }
                <button onClick={showNavBar} className="nav-btn nav-close-btn absolute top-2 right-2 text-transparent">
                    <FaTimes/>
                </button>
            </div>
            <button onClick={showNavBar} className="nav-btn text-transparent">
                <FaBars/>
            </button>
        </div>
        
  )
}

export default Filter;