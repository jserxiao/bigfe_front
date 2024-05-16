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
};
const docLink = 'https://docs.qq.com/doc/DZU11WXFheXBJcmFL?layoutKey=newdoc&createInMall=true&disableFilter=true&folder=&is_panel=1&panel_key=29c5da37528bde745e50babdec8e2169&panel_type=doc&panel_connection_type=2&is_preload=0&fromPage=doc_list_new&create_type=2&aid_position=templatemall&aid_pos=templatemall';

  return (
    <div className="App">
      <header className="App-header">
        <span class="mb-20">欢迎登陆xjk的前端学习站点</span>
        <content>
          <span class="link" onClick={() => link(docLink)}>前端知识框架</span>
        </content>
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
