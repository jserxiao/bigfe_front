import './App.css';
import {useState, useEffect} from 'react';
import {useRequest} from 'ahooks';

function App() {
const getData = async () => {
  const res = await fetch('http://110.41.132.237:3000/test');
  const json = await res.json();
  return json?.a;
};
const { data, error, loading } = useRequest(getData);

  return (
    <div className="App">
      <header className="App-header">
        welcome to xiao's app {data}
      </header>
    </div>
  );
}

export default App;
