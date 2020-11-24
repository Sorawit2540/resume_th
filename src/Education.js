import "./App.css";
import "./W3.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { faDesktop,faCog, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="Container">
      <a name="Education"></a>
      <br></br><br></br>
  <div className="w3-container Textcolor background-tab"  id="about">
  <h1 className="w3-center h-bold body_text">ประวัติการศึกษา</h1>
  <h6 className="w3-center w3-large body_text">เส้นทางสู่สายอาชีพ</h6>
  <br></br>
  <div className="w3-row-padding w3-center" >
    <div className="w3-quarter">
      <i className="w3-margin-bottom w3-jumbo w3-center"><img src="profile/mst.jpg" className="img_size_education" /></i>
      <h4 className="body_text">โรงเรียนเมืองสุราษฎร์ธานี</h4>
      <h6 className="body_text">ระดับชั้นมัธยมศึกษาปีที่ 1 - 3 <br></br>สาขา วิทย์ - คณิต</h6>
    </div>
    <div className="w3-quarter">
      <i className="w3-margin-bottom w3-jumbo"><img src="profile/svc.jpg" className="img_size_education" /></i>
      <h4 className="body_text">วิทยาลัยอาชีวศึกษาสุราษฎร์ธานี</h4>
      <h6 className="body_text">ระดับประกาศนียบัตรวิชาชีพ (ปวช. 1 - 3) สาขา คอมพิวเตอร์ธุรกิจ</h6>
    </div>
    <div className="w3-quarter">
      <i className="w3-margin-bottom w3-jumbo"><img src="profile/svc.jpg" className="img_size_education" /></i>
      <h4 className="body_text">วิทยาลัยอาชีวศึกษาสุราษฎร์ธานี</h4>
      <h6 className="body_text">ระดับประกาศนียบัตรวิชาชีพชั้นสูง <br></br>(ปวส. 1 - 2) สาขา คอมพิวเตอร์ธุรกิจ</h6>
    </div>
    <div className="w3-quarter">
      <i className="w3-margin-bottom w3-jumbo"><img src="profile/psu.jpg" className="img_size_education" /></i>
      <h4 className="body_text">มหาวิทยาลัยสงขลานครินทร์</h4>
      <h6 className="body_text">ระดับชั้นปีที่ 1 - 2 (เทียบโอน 2ปี) <br></br>สาขา เทคโนโลยีสารสนเทศ</h6>
    </div>
  </div>
</div>
    </div>
    
  );
}

export default App;
