// eslint-disable

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './component/Header'
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Button from './component/Button';


function App() {

  let logo = '변경이 자주 없는 부분';

  let [a,b] = useState(['남자 코트 추천','파이썬 독학','강남 우동 맛집']);

  let [num,numIdx] = useState(0)

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'white'}}>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{a[0]} <span onClick={()=>{numIdx(num+1)}}> 👍 </span> {num} </h4>
        <p>2월 17일 발행 <button onClick={() =>{
          let copy = ([...a]);
          copy.sort()
          b(copy);
          }}>변경</button></p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

function sndApp(){
  let name = 'Tom';
  const user = {
    name : 'naver',
    url : 'https://naver.com'
  }

  return(
    <div className='sndApp' style={{textAlign: 'center'}}>
      <Header />
      <h1 style={{
        color : 'white',
        backgroundColor : 'black'
      }}> Hello {name} <p> {2+3} </p><p>{user['name']}</p></h1>
      <a href={user.url}>{user.name}</a>
      <div>
        <Hello />
        <Button />
        <Welcome />
      </div>
    </div>
  )
}

export default sndApp;
