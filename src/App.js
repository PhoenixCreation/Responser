import React, { useState } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [gotoLink, setGotoLink] = useState("");
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(480);

  return (
    <div className="App">
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
          width={width}
          height={height}
          title="site to check"
          className="frame"
        />
      </div>
    </div>
  );
}

export default App;
