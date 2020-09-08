import React from "react";
import { useRef, useCallback, useState } from 'react';
import "./App.css";


const App = () => {
  const nextId = useRef(1);
  const [ form ,setForm ] = useState({ name: '', username: '' });
  const [ data, setData ] = useState({
    array: [],
    uselessValue: null
  })

  return (
  );
}

export default App;
