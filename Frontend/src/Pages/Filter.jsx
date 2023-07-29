import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/filter.css';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialparam = searchParams.getAll('mediaSource');
  const initialtitle = searchParams.get('title');
  const initialkey = searchParams.get('keyword');

  const [mediaSource, setmediaSource] = useState(initialparam || []);
  const [title, setTitle] = useState(initialtitle || '');
  const [keyword, setKey] = useState(initialkey || '');

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };

  const handelKey = (e) => {
    setKey(e.target.value);
  };

  const handelChange = (e) => {
    let newarr = [...mediaSource];
    const value = e.target.value;
    if (newarr.includes(value)) {
      newarr = newarr.filter((el) => el !== value);
    } else {
      newarr.push(value);
    }
    setmediaSource(newarr);
  };

  useEffect(() => {
    let obj = {
      mediaSource,
    };
    title && (obj.title = title);
    keyword && (obj.keyword = keyword);

    setSearchParams(obj);
  }, [mediaSource, title, keyword]);

  return (
    <div className="filter-1">
      <div>
        <h3>Apply Filters For Fast Search</h3>
        <h5>1. Filter on the basis of mediaSource</h5>
        <label htmlFor="">Youtube:</label>
        <input
          type="checkbox"
          value={'Youtube'}
          onChange={handelChange}
          checked={mediaSource.includes('Youtube')}
        />
        <label htmlFor="">Instagram:</label>
        <input
          type="checkbox"
          value={'Instagram'}
          onChange={handelChange}
          checked={mediaSource.includes('Instagram')}
        />
        <label htmlFor="">PhotoGrapher:</label>
        <input
          type="checkbox"
          value={'PhotoGrapher'}
          onChange={handelChange}
          checked={mediaSource.includes('PhotoGrapher')}
        />

        <h5>2. Search on the basis of Title</h5>
        <input
          type="text"
          placeholder="Search on the basis of title"
          value={title}
          onChange={handelTitle}
        />

        <h5>3. Search on the basis of Keyword</h5>
        <input
          type="text"
          placeholder="Search on the basis of Keyword"
          value={keyword}
          onChange={handelKey}
        />
      </div>
    </div>
  );
};

export default Filter;
