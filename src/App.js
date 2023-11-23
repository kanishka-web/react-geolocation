import React from 'react';
import LocationComponent from './LocationComponent';
import ShareCard from './ShareCard'

const App = () => {
  return (
    <div>
      <h1>Get User's Current Location</h1>
      <LocationComponent />
      <ShareCard content={"hello"}/>
    </div>
  );
};

export default App;

