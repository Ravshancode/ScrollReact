import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function Scroll() {
  const [count, setCounter] = useState(0);

  const [pixsel, setPixsel] = useState(500);



  useEffect(() => {
    const interval = setInterval(() => {
      DegScrollPause();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      DegScrollPause2();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      DegScrollActive();
      DegScrollActive3();
      setCounter((prevCounter) => prevCounter + 60);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  

  const ScorsScroll = document.querySelectorAll(".ScorsScroll");
  
  ScorsScroll.forEach((box) => {
    box.style.transform = `rotate(${count}deg)`;
  });

  const DegScrollPause = () => {
    const ScorsScroll = document.querySelectorAll(".ScorsScroll");

    ScorsScroll.forEach((box) => {
      box.style.animationPlayState = "paused";
    });
  };
  const DegScrollPause2 = () => {
    const ScorsScroll2 = document.querySelectorAll(".ScorsScroll");
    ScorsScroll2.forEach((box) => {
      box.style.transition = "0s";
    });
  };

  const DegScrollActive = () => {
    const ScorsScroll2 = document.querySelectorAll(".ScorsScroll");
    ScorsScroll2.forEach((box) => {
      box.style.transition = "4s";
    });
  };

  const DegScrollActive3=()=>{
    const scrolUL = document.querySelectorAll(".animationRotate");
    scrolUL.forEach((box) => {
      box.style.transition="4s";
    });
  }


  const scrolUL = document.querySelectorAll(".animationRotate");
  scrolUL.forEach((box) => {
    box.style.transform = `rotate(${-count}deg)`;
  });
  const scRoll = () => {
    const ScorsScroll = document.querySelectorAll(".scroll2");
    const ScorsScroll2 = document.querySelectorAll(".ScorsScroll");

    setPixsel(pixsel + 6);

    ScorsScroll.forEach((box) => {
      box.style.height = `${pixsel}px`;
    });
    
     setCounter(count + 5);

    
const scrolUL = document.querySelectorAll(".animationRotate");
    scrolUL.forEach((box) => {
      box.style.transition="0s";
    });


          ScorsScroll2.forEach((box) => {
      box.style.transform = `rotate(${count}deg)`;
      box.style.transition = "0s";
    });
  };
     

  return (
    <div className="wrapper">
      <div className="ScorsScroll">
        <div className="rotate bord " id="rotate">
          <ul>
            <li className="video1 animationRotate">
              <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
            <li className="video2 animationRotate">
            <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
            <li className="video3 animationRotate">
            <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
            <li className="video4 animationRotate">
            <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
            <li className="video5 animationRotate">
            <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
            <li className="video6 animationRotate">
            <ReactPlayer
                className="vidioYoutube"
                url="https://www.youtube.com/watch?v=VIIeaj9F1zs"
                width="100%"
                height="100%"
                controls={true}
              />
            </li>
          </ul>
          <div className="scroll1">
            <div className="scroll1_2" onScroll={scRoll}>
              <div className="scroll2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
