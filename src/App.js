import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(100);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
    setTemp("");
  }

  return (
    <div className="App">
      <h1 className="title">QR Code Generator</h1>
      <div className="card input-box">
        <div className="gen">
          <input
            type="text"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Masukkan Text"
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <div className="extra-option">
            <label>Background Color:</label>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value.substring(1))}
            />
          </div>
          <div className="extra-option">
            <label>Dimension:</label>
            <input
              type="range"
              min="100"
              max="600"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card output-box">
        <img src={qrCode} alt="QR Code" />
        <a href={qrCode} download="QRCode">
          <button type="button" id="download" className="button">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
