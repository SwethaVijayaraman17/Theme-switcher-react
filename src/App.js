import './App.css';
import React, { useState } from 'react';

function App() {
  const [subscribe, setSubscribe] = useState('Subscribe to React');
  return (
    <div className="App">
     <h1 id='welcome'>Welcome</h1>
     <h2 id='subs_content'>{subscribe}</h2>
     <button id='subscribe' onClick={() => setSubscribe('Thank you for subscribing React !!!')}>Subscribe</button>
    </div>
  );
}

export default App;
