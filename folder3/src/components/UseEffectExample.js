import React, { useState, useEffect } from 'react';


const UseEffectExample = () => {

  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
