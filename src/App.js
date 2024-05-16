import './App.css';
import {useState, useEffect} from 'react';
import {useRequest} from 'ahooks';

function App() {
const getData = async () => {
  const res = await fetch('https://xiaojiakun.top/test/');
  const json = await res.json();
  console.log(json?.a);
  return json?.a;
};
const { data, error, loading } = useRequest(getData);
const link = (path) => {
  window.location.href = path;
}
  return (
    <div className="App">
      <header className="App-header">
        欢迎登陆xjk的前端学习站点
      </header>
      <footer className="App-footer">
        <span class="link" onClick={() => link('https://beian.miit.gov.cn/')}>赣ICP备2024033381号</span>
      </footer>
    </div>
  );
}

export default App;
