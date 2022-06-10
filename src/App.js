import logo from './logo.svg';
import './App.css';
import BottomSheet from './components/BottomSheet';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

function App() {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setShowBottomSheet(true)} className='bottom-sheet-btn'>Open Bottom Sheet</button>
      <BottomSheet showBottomSheet={showBottomSheet} hideBottomSheet={()=>setShowBottomSheet(false)}>
        <div>Data 1</div>
        <div>Data 2</div>
      </BottomSheet>
      
      <Timer/>
    </div>
  );
}

export default App;
