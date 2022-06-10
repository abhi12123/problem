import React, { useEffect, useState } from 'react'
import CountDownTimer from './CountDownTimer'

export default function Timer() {
    const [status, setStatus] = useState('PAUSE')
  return (
    <div className='timer'>
        <CountDownTimer  status={status} timeLimit={10}/>
        <button onClick={()=>setStatus('PAUSE')} disabled={status=='PAUSE'}>Pause</button>
        <button onClick={()=>setStatus('PLAY')} disabled={status=='PLAY'}>Resume</button>
    </div>
  )
}
