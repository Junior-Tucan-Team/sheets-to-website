import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import './index.css';
import Header from './components/partials/Header';
import Editor from './components/Editor';


function App() {
  const [layoutItems, setLayoutItems] = useState([]);

  return (
    <div className="App" >
      <Header />
      <Editor
        layoutItems={layoutItems}
        setLayoutItems={setLayoutItems}
      />
    </div>
  );
}

export default App;
