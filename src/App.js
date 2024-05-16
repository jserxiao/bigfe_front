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
  window.open(path);
}
  return (
    <div className="App">
      <header className="App-header">
        欢迎登陆xjk的前端学习站点
      </header>
      <footer className="App-footer">
        <span class="link" onClick={() => link('https://beian.miit.gov.cn/')}>赣ICP备2024033381号</span>
        <div style={{marginTop: '20px'}}>
          <span class="frend-link">友情链接：</span>
          <span class="frend-link link" onClick={() => link('https://sfengweb.com')}>随风sfeng</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
