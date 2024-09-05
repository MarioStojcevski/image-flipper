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
import image30 from "./photos/30.jpeg";
import image31 from "./photos/31.jpeg";
import image33 from "./photos/33.jpeg";
import image34 from "./photos/34.jpg";
import image35 from "./photos/35.jpg";
import image36 from "./photos/36.png";
import image37 from "./photos/37.jpg";
import image38 from "./photos/38.jpg";
import image39 from "./photos/39.jpg";
import image40 from "./photos/40.jpg";
import image41 from "./photos/41.jpg";
import image42 from "./photos/42.jpg";
import image43 from "./photos/43.jpg";
import image44 from "./photos/44.jpg";
import image45 from "./photos/45.jpg";
import image46 from "./photos/46.jpg";
import image47 from "./photos/47.jpg";
import image48 from "./photos/48.png";
import image49 from "./photos/49.jpg";
import image50 from "./photos/50.jpg";
import image51 from "./photos/51.jpg";
import image52 from "./photos/52.jpg";

function App() {
  const randomImageNumber = Math.floor(Math.random() * (52 - 1 + 1) + 1);

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
    image30,
    image31,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
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
