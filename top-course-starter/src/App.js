import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData} from './data';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import Spinner from './Components/Spinner';

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    //making the loading spinner visible till the data is being fetched
    setLoading(true);
    // console.log("Set loader-true")
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // console.log("Fetched data")
    }
    catch(error){
      // console.log("Culd not fetch data")
      toast.error("Network issue");
      // fetchData();
      // console.log("Fetchdata called")
      process.exit(1);
    }
    //once data is fetched remove the loading spinner
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2 w-[100%]">
      <div >
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData}
        // the category variable is created in app.js , updated in filter.js and used in cards.js 
          category={category}
          setCategory = {setCategory}
        />
      </div>

      <div className="w-11/12 max-w-{1200px} mx-auto flex justify-center items-center min-h-{50vh}">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
};

export default App;
