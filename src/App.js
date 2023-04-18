import "./App.css";

import image1 from "./photos/1.png";
import image2 from "./photos/2.png";
import image3 from "./photos/3.png";
import image4 from "./photos/4.png";
import image5 from "./photos/5.png";
import image6 from "./photos/6.png";
import image7 from "./photos/7.png";
import image8 from "./photos/8.png";
import image9 from "./photos/9.png";
import image10 from "./photos/10.png";
import image11 from "./photos/11.png";
import image12 from "./photos/12.png";
import image13 from "./photos/13.png";
import image14 from "./photos/14.png";
import image15 from "./photos/15.png";
import image16 from "./photos/16.png";
import image17 from "./photos/17.png";
import image18 from "./photos/18.png";
import image19 from "./photos/19.png";
import image20 from "./photos/20.png";
import image21 from "./photos/21.png";
import image22 from "./photos/22.png";
import image23 from "./photos/23.png";
import image24 from "./photos/24.png";
import image25 from "./photos/25.png";
import image26 from "./photos/26.png";
import image27 from "./photos/27.png";
import image28 from "./photos/28.jpeg";
import image29 from "./photos/29.jpeg";
import image30 from "./photos/30.jpeg";
import image31 from "./photos/31.jpeg";
import image32 from "./photos/32.jpeg";
import image33 from "./photos/33.jpeg";

function App() {
  const randomImageNumber = Math.floor(Math.random() * (33 - 1 + 1) + 1);
  console.log(`image${randomImageNumber.toString()}`);

  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
  ];

  const imageToDisplay = imageList[randomImageNumber - 1];

  return (
    <div className="App">
      <img
        style={{ minWidth: "45%", maxWidth: "50%" }}
        alt=""
        src={imageToDisplay}
      ></img>
    </div>
  );
}

export default App;
