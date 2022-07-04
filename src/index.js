import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import { BrowserRouter,Link } from 'react-router-dom';
import { Routes,Route,NavLink,HashRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Home(){
  return(
    <div>
      <h2>홈</h2>
      집...
    </div>
  );
}

function Topics(){
  return(
    <div>
      <h2>토픽</h2>
      소식...
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2>콘택트</h2>
      내용...
    </div>
  );
}

// url을 통해 넘어오는 값에 따라 화면이 변하도록 만드는 법
function App(){
  return(
    <div>
      <div>안녕 리액트 라우터 돔</div>
      {/* <ul>
        <li><a href='/'>H홈</a></li>
        <li><a href='/topics'>T토픽</a></li>
        <li><a href='/contact'>C콘텐트</a></li>
      </ul> */}
      {/* 새로고침현상 없애기 위해 링크 임포트 후 삽입 */}
      <ul>
        <li><NavLink to="/">H홈</NavLink></li>
        <li><NavLink to="/topics">T토픽</NavLink></li>
        <li><NavLink to="/contact">C콘텐트</NavLink></li>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route exact path='/topics' element={<Topics></Topics>} />
        <Route exact path='/contact' element={<Contact></Contact>} />
        <Route exact path='*' element={"Not Found"}>못찾았어요</Route>
      </Routes>
    </div>
  );
}

// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

// 주소값 뒤에 # 표시가 함께 나옴!
ReactDOM.render(<HashRouter><App /></HashRouter>,document.getElementById('root'));
reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
