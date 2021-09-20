import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import './index.css';

function App() {
  // const [layoutItems, setLayoutItems] = useState([]);

  return (
    <div className="App" >
      {/* <Header />
      <Editor
        layoutItems={layoutItems}
        setLayoutItems={setLayoutItems}
      /> */}
      <LoginPage />
    </div>
  );
}

export default App;
