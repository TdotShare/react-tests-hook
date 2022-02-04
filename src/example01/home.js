import React, { useState, useEffect } from 'react';
import Content from './content';



function Home() {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState(0)
  const [contentIsOpen, setIsOpen] = useState(true)




  // useEffect(() => { // componentDidMount
  //   console.log(`rerender home component ! (componentDidMount)`)
  // }, []);


  // useEffect(() => { // componentDidUpdate
  //   console.log(`rerender home component ! (componentDidUpdate)`)
  // }); // No second argument, so run after every render.

  // useEffect(() => { // componentDidUpdate
  //   console.log(`item rerender`)
  // } , [item]); // จะไม่ rerender หาก item ไม่มีการเปลี่ยนแปลง







  console.log(`rerender home component !`)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <br />

      <button onClick={() => setItem(item + 1)}>
        Click Item {item}
      </button>

      <br />

      <button onClick={() => setIsOpen(false)}>
        Click Close Content
      </button>

      <div style={{ 'padding': '1%' }}></div>
      {
        contentIsOpen ?

        <Content />

        :

        <div></div>
      }
    

    </div>
  );
}

export default Home;
