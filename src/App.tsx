import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectExample from './UseEffectExample';
import GrandParent from './GrandParent';
import ValueContext from './ValueContext';

function App() {
const [hide, setHide] = useState(false);

  return(
    <>
    <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
    {hide ? null : <UseEffectExample />}

    <ValueContext.Provider value={hide}>
    <GrandParent />
    </ValueContext.Provider>
    </>
  )
}

export default App;

