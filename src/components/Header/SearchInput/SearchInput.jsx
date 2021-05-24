import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.sass';

export function SearchInput() {
  const [toSearch, setToSearch] = useState(false);
  const [search, setSearch] = useState(``);
  const todos = useSelector((state) => state.todo);
  
  return (
    <>
      <input
        className="input"
        onChange={(e) => {
         setSearch(e.target.value);
          if (e.target.value.length > 0) {setToSearch(true)}
          if (e.target.value == ``) {setToSearch(false)}
        }
      }
      />
    </>
  );
}
