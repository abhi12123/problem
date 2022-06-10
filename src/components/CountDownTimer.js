import React, { useEffect, useState } from "react";

export default function CountDownTimer({ status, timeLimit }) {
  const [updatedTime, setUpdatedTime] = useState(timeLimit);
  const [timeoutFn, setTimeoutFn] = useState(undefined);
  useEffect(() => {
    if (status == "PLAY" && updatedTime>0) {
      setTimeoutFn(
        window.setInterval(() => {
          setUpdatedTime((updatedTime) => updatedTime - 1);
        }, 1000)
      );
    } else {
      clearInterval(timeoutFn);
    }
  }, [status]);


  useEffect(()=>{
    if(updatedTime<=0){
        clearInterval(timeoutFn)
    }
  },[updatedTime])

  return (
    <div>
      <h1>{updatedTime}</h1>
    </div>
  );
}
