import React from 'react';
import './App.css';
import List from './ToDo/List';
import ReactWordcloud from 'react-wordcloud';

import words from './ToDo/words';

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>To Do List WordCloud</h1>
      </div>
      <div className="w-100 h-100">
        <ReactWordcloud words={ words } />
      </div>
      <List />
    </div>
  );
}

export default App;
