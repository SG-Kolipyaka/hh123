import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getmedia } from '../Redux/PostReducer/action';
import '../css/home.css';
import { useSearchParams, useLocation } from "react-router-dom";
import Filter from './Filter';

const Home = () => {
  const [data, setData] = useState({});
  let [searchParams] = useSearchParams();
  const { media } = useSelector((store) => store.mediareducer);
  const dispatch = useDispatch();

  const location=useLocation()
  


  let obj2={
    params:{
      mediaSource:searchParams.getAll("mediaSource"),
      title:searchParams.get("title"),
      keyword:searchParams.get("keyword")
    }
  }
  
  
  useEffect(() => {
   

  
   
    dispatch(getmedia(obj2));
  }, [location.search]);

  return (
    <>
    <Filter/>

      <div className="media-container">
        {media?.map((el, index) => {
          return (
            <div className="media-item" key={index}>
              {el.mediaType.endsWith('.mp4') || el.mediaType.endsWith('.avi') || el.mediaType.endsWith('.mov') ? (
                <video controls>
                  <source src={`http://localhost:8083/${el.mediaType}`} type="video/mp4" />
                  {/* Add more video source types if needed */}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={`http://localhost:8083/${el.mediaType}`} alt="imag" />
              )}
              <h4>title: {el.title}</h4>
              <h4>Post Source: {el.mediaSource}</h4>
              <h4>Short Name: {el.keyword}</h4>
              <h5>Posted on: {el.datefield}</h5>
              <button style={{ backgroundColor: "brown", width: "50%", height: "30px" }}>View Detail</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
