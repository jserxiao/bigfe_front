import './App.css';
import {useState, useEffect} from 'react';
import {useRequest} from 'ahooks';

function App() {
const getData = async () => {
  const res = await fetch('https://xiaojiakun.top/test/');
  const json = await res.json();
  return json?.a;
};
const { data, error, loading } = useRequest(getData);

  return (
    <div className="App">
      <header className="App-header">
        welcome to xiao's app {data}
      </header>
      <footer className="App-footer">
        <a href="https://beian.miit.gov.cn/">赣ICP备2024033381号</a>
      </footer>
    </div>
  );
}

export default App;
