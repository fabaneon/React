import React, { useState } from 'react';

function Counter() {
  // useState 사용으로 변수 선언 및 초기화
  const [number, setNumber] = useState(0); 

  const onIncrease = () => {
    // setNumber 함수를 통한 state 값 변경
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    // setNumber 함수를 통한 state 값 변경
    setNumber(prevNumber => prevNumber - 1);
  }

  // onClick 이벤트에 state 변경 이벤트 바인딩
  return (
    <section>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </section>
  );
}

export default Counter;