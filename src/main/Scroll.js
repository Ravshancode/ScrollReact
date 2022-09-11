
import { useState,useEffect} from 'react';

function Scroll() {
  const [stateValue, setStateValue] = useState(20);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const scrollTime=()=>{
    setStateValue(10)
   }
  
   const scrollTimeOut=()=>{
    setStateValue(20)
   }


  const boxes = document.querySelectorAll('.rotate');

  boxes.forEach(box => {
    box.style.animation=`rotation ${stateValue}s`;
    box.style.animationTimingFunction= "linear";
    box.style.animationIterationCount= "infinite";
    box.style.backgroundColor = 'purple';
    box.style.width = '300px';
  });


  return(
    <div>
      
            <div className={`rotate bord `} id="rotate" onMouseOver={scrollTime} onMouseOut={scrollTimeOut}>
        <div className='video1' >{counter}</div>
        <div className='video2'></div>
        <div className='video3'></div>
       

     </div>
    </div>
  )
}

export default Scroll;