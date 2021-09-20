import React, { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/partials/Header';
import './index.css';

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
