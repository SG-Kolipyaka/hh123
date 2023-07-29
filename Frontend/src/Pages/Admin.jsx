import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { postmedia } from '../Redux/PostReducer/action';
import "../css/admin.css"

const initialState = {
  datefield: "",
  title: "",
  mediaSource: "",
  mediaType:null,
  keyword: ""
};

const Admin = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, mediaType: file });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("datefield", data.datefield);
    formData.append("title", data.title);
    formData.append("mediaSource", data.mediaSource);
    formData.append("mediaType", data.mediaType);
    formData.append("keyword", data.keyword);

    dispatch(postmedia(formData));
    console.log(data);
    alert("Admin Data Added Successfully");
    setData(initialState);
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handelSubmit}>
        <h1>Admin Panel</h1>

        <label htmlFor="">Date:</label>
        <input type="date" name="datefield" value={data.datefield} onChange={handelChange} required /> <br />
        <label htmlFor="">Title:</label>
        <input type="text" name="title" value={data.title} placeholder='Enter Title' onChange={handelChange} required /> <br />
        <label htmlFor="">Media Source:</label>
        <input type="text" name="mediaSource" value={data.mediaSource} placeholder='Enter Media Source' onChange={handelChange} required /> <br />
        <label htmlFor="">Media Type:</label>
        <input type="file" name="mediaType"onChange={handleFileChange} required /> <br />
        <label htmlFor="">Keyword:</label>
        <input type="text" name="keyword" value={data.keyword} placeholder='Enter Keyword' onChange={handelChange} required /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;




