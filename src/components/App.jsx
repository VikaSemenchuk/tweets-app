import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title } from "./App.styled";
import { APIgetUsers } from "../services/tweetsApi";

import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

import { lazy } from 'react';

const LazyHomePage = lazy(() => import('../pages/homePage/HomePage'));
const LazyTweetsPage = lazy(() => import('../pages/TweetsPage'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path='tweets' element={<LazyTweetsPage />} />
      </Route>
    </Routes>
  );
  //   const [count, setCount] = useState(0)
  // // APIgetUsers()
  //   return (
  //     <>
  //       <div>
  //         <a href="https://vitejs.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       {/* <h1>Vite + React</h1> */}
  //       <Title>Vite + React</Title>

  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //       {/* <Loader /> */}
  //     </>
  //   )
};

export default App;
