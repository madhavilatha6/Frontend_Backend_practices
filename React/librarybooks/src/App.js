import React from 'react';
import MyComponent from './components/style_module';
import Book, { Items } from './components/view';
import { Bookdetails } from './components/mock';

function App() {
  console.log(Bookdetails);
  
  return (
    <div>
      <Bookdetails />
      <Items />
      <Book />
      <MyComponent />
    </div>
  );
}

export default App;
