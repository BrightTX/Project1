import { useState } from 'react'
import './App.css'
import EffectDemo from './components/Effect'
import ThemedButton from "./components/Theme/ThemedButton";
import ThemeProvider from "./components/Theme/ThemeProvider";
import ThemedCard from './components/Theme/ThemedCard'
import Form from './components/Form';
import UniqueComponent from './components/UniqueComponent';

function App() {

  return (
    <>
      {/* <ThemeProvider>
        <ThemedButton />
        <ThemedCard />
      </ThemeProvider> */}
      {/* <EffectDemo/> */}
      {/* <Form></Form> */}
      <UniqueComponent/>

    </>
  )
}

export default App
