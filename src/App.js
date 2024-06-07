import './App.css';
import {useState, useLayoutEffect,useRef,useMemo, useEffect} from 'react';
import {useRequest} from 'ahooks';
import {apps} from './subapp.conf.ts';
import { useSize } from 'ahooks';
import {screenshot} from '../utils/dom.js';
const docLink = 'https://docs.qq.com/doc/DZU11WXFheXBJcmFL?layoutKey=newdoc&createInMall=true&disableFilter=true&folder=&is_panel=1&panel_key=29c5da37528bde745e50babdec8e2169&panel_type=doc&panel_connection_type=2&is_preload=0&fromPage=doc_list_new&create_type=2&aid_position=templatemall&aid_pos=templatemall';

function App() {
  const getData = async () => {
    const res = await fetch('https://xiaojiakun.top/test/');
    const json = await res.json();
    return json?.a;
  };
  const { data, error, loading } = useRequest(getData);
  const link = (path) => {
    window.open(path);
  };
  const appContentRef = useRef();
  const appContentSize = useSize(appContentRef);
  const microAppStyle = useMemo(() => ({
    height: appContentSize?.height
  }));

  useLayoutEffect(() => {
    appContentRef.current = document.querySelector('.App-content');
  }, [])

  return (
    <div className="App" id="content">
      <header className="App-header">
        <span class="mb-20">欢迎登陆xjk的前端学习站点</span>
        <span className="screenshot" onClick={() => screenshot('content')}>截图</span>
      </header>
      <main className="App-content">
       {apps.map(x => <micro-app class="microapp" {...x} style={microAppStyle} key={x.name}></micro-app>)}
      </main>
      <footer className="App-footer">
        <span className="link mr-20" onClick={() => link('https://beian.miit.gov.cn/')}>赣ICP备2024033381号</span>
        <span className="link" onClick={() => link('https://beian.mps.gov.cn/#/query/webSearch')}>赣公网安备36010802001011号</span>
        <div style={{marginTop: '20px'}}>
          <span className="frend-link">学习导航：</span>
          <span className="frend-link link mr-20" onClick={() => link(docLink)}>前端知识框架</span>
          <span className="frend-link">组件库文档：</span>
          <span className="frend-link link" onClick={() => link('//xiaojiakun.top/docs')}>xatom ui</span>
        </div>
        <div style={{marginTop: '20px'}}>
          <span className="frend-link">友情链接：</span>
          <span className="frend-link link" onClick={() => link('https://sfengweb.com')}>随风sfeng</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
