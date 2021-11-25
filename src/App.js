import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [gotoLink, setGotoLink] = useState("");
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(480);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      const frame = element.querySelector(".frame").contentWindow;
      frame.addEventListener("resize", (event) => {
        setWidth(event.target.innerWidth);
        setHeight(event.target.innerHeight);
      });
    }
  }, [ref]);

  return (
    <div className="App" ref={ref}>
      <div className="header">
        <input
          type="number"
          name="width"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="number"
          name="height"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={() => setGotoLink(link)}>Check this site</button>
      </div>
      <div className="res-frame">
        <iframe
          src={gotoLink}
          style={{ width: `${width}px`, height: `${height}px` }}
          title="site to check"
          className="frame"
        />
      </div>
    </div>
  );
}

export default App;
