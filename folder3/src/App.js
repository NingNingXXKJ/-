import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';
import UseRefExample from './components/UseRefExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseReducerExample from './components/UseReducerExample';
import CustomHookExample from './components/CustomHookExample';


function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/use-state">useState</Link></li>
        <li><Link to="/use-effect">useEffect</Link></li>
        <li><Link to="/use-context">useContext</Link></li>
        <li><Link to="/use-ref">useRef</Link></li>
        <li><Link to="/use-callback">useCallback</Link></li>
        <li><Link to="/use-memo">useMemo</Link></li>
        <li><Link to="/use-reducer">useReducer</Link></li>
        <li><Link to="/custom-hook">Custom Hook</Link></li>
      </ul>
    </nav>
  );
}
