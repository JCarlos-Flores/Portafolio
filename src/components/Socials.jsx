//import {useState, useEffect,useRef} from 'react'
//import Social from './components/Social'
import { Reddit, Github, Twitter, LinkedIn, Youtube } from "./Svg";
//See the Location ./components? Correctly
const Social = (props) => {
  return (
    <>
      <div className="my-2">
        <Github link="https://github.com/JCarlos-Flores" />
        <Twitter link="https://twitter.com/" />
        <Youtube link="https://www.youtube.com/" />
      </div>
    </>
  );
};

export default Social;
