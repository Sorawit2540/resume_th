import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="Container body_text">
      <a name="History"></a>
      <br></br>
      <br></br>
      <br></br>
      <header className="App-header container-fluid">
        <div className="header Textcolor">
          <h1 className="App h-bold body_text">ประวัติการทำงาน</h1>
          <p>ประสบการณ์ทางด้านสายโปรแกรมเมอร์ตลอด 1 ปี</p>
        </div>
        <div className="row">
          <div className="column">
            
          <a href="profile/po_12.png" target="_black">
              <img src="profile/po_12.png" className="img_size" />
            </a>
          <a href="profile/po_2.png" target="_black">
              <img src="profile/po_2.png" className="img_size" />
            </a>
            <a href="profile/po_14.png" target="_black">
              <img src="profile/po_14.png" className="img_size" />
            </a>
            <a href="profile/po_4.png" target="_black">
              <img src="profile/po_4.png" className="img_size" />
            </a>
          </div>
          <div className="column">
          <a href="profile/po_1.png" target="_black">
              <img src="profile/po_1.png" className="img_size" />
            </a>
            <a href="profile/po_13.png" target="_black">
              <img src="profile/po_13.png" className="img_size" />
            </a>
          </div>
          <div className="column">
          <a href="profile/po_9.png" target="_black">
              <img src="profile/po_9.png" className="img_size" />
            </a>
            <a href="profile/po_7.png" target="_black">
              <img src="profile/po_7.png" className="img_size" />
            </a>
          </div>
          <div className="column">
          <a href="profile/po_8.png" target="_black">
              <img src="profile/po_8.png" className="img_size" />
            </a>
            <a href="profile/po_10.png" target="_black">
              <img src="profile/po_10.png" className="img_size" />
            </a>
            <a href="profile/po_11.png" target="_black">
              <img src="profile/po_11.png" className="img_size" />
            </a>
            <a href="profile/po_3.png" target="_black">
              <img src="profile/po_3.png" className="img_size" />
            </a>
          </div>
        </div>
      </header>
      <br></br><br></br><br></br>
        <div className="container-fluid Textcolor">
        <div className="row">
          <br></br>
          <div className="col-sm-6 background-tab">
            <br></br>
            <h3 className="h-bold body_text">ประสบการณ์การทำงาน</h3>
            <ul>
            <li><h6 className="body_text">พัฒนาเว็บไซต์ให้บริษัทตามงานทีได้รับมอบหมาย</h6></li>
            <li><h6 className="body_text">เว็บไซต์สะสมแต้มแลกสินค้า,e-commerceเบื้องต้น</h6></li>
            <li><h6 className="body_text">เว็บไซต์ประชาสัมพันธ์,2ภาษาต่างๆ</h6></li>
            <li><h6 className="body_text">ซัพพอร์ตงานลูกค้า</h6></li>
            </ul>
          </div>
          <div className="col-sm-6 background-tab">
            <br></br>
            <h3 className="h-bold body_text">ทักษะด้านโปรแกรมเมอร์</h3>
            <h6 className="body_text">ด้านการออกแบบเว็บไซต์ (react js html css javascript)</h6>
            <div className="container">
              <div className="skills css">55%</div>
            </div>
            <br></br>
            <h6 className="body_text">ด้านการพัฒนาเว็บไซต์ (php laravel & mysql)</h6>
            <div className="container">
              <div className="skills html">80%</div>
            </div>
            <br></br>
            <h6 className="body_text">ด้านการเขียนแอปพลิเคชัน (reactnative ionic framework)</h6>
            <div className="container">
              <div className="skills js">65%</div>
            </div>
            <br></br><br></br><br></br>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
