import React from 'react';
import LoadingScreen from './components/LoadingScreen/'
import { Header } from './components/Header/';

function App() {
  let loading = true;
  setTimeout(() => {
    loading = false;
  }, 2000);
  if(loading) return <LoadingScreen/>
  return (
    <Header/>
  );
}

export default App;
