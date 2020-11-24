import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardDeck } from "react-bootstrap";
import { faUser, faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="Container body_text">
      <Header />
      <header className="App-header container-fluid">
      <a name="App"></a>
        <br></br>
        <br></br>
        <br></br>
        <CardDeck className="Textcolor">
          <Card className="col-sm-4 shadow-sm p-0 mb-5 bg-light rounded-0">
            {/* <Card.Img variant="top" src="profile/sorawit.jpg" />*/}
             <Card.Img variant="top" src="profile/sorawit_2.png" />
            <Card.Body>
              <Card.Title>
                <h1 className="App body_text">สรวิศ เรืองศรี</h1>
              </Card.Title>
              <Card.Text>
                <h6 className="body_text">ชื่อเล่น : บอม</h6>
                <h6 className="body_text">วันเกิด : 10 เมษายน 2540 </h6>
                <h6 className="body_text">สัญชาติ : ไทย </h6>
                <h6 className="body_text">หมู่เลือด : O</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-sm-8 shadow-sm p-3 mb-5 bg-light rounded-0">
            <Card.Body>
              <Card.Title>
                <h1 className="body_text">
                  <FontAwesomeIcon icon={faUser} className="Texticon"/> ข้อมูลส่วนตัว
                </h1>
              </Card.Title>
              <br></br>
              <Card.Title>
                <h5 className="h-bold body_text">ข้อมูลร่างกาย</h5>
              </Card.Title>
              <Card.Text>
                <h6 className="body_text">ส่วนสูง : 173 นํ้าหนัก : 64 เพศ : ชาย </h6>
              </Card.Text>
              <hr className="black"></hr>
              <Card.Title>
                <h5 className="h-bold body_text">ข้อมูลที่อยู่</h5>
              </Card.Title>
              <Card.Text>
                <h6 className="body_text">
                  วิเศษสุขคอนโด ซอยนาวีเจริญทรัพย์ ถนนกาญจนาภิเษก แขวง/เขตบางแค
                  กรุงเทพมหานคร 10160
                </h6>
              </Card.Text>
              <hr className="black"></hr>
              <Card.Title>
                <h5 className="h-bold body_text">ข้อมูลติดต่อ</h5>
              </Card.Title>
              <Card.Text>
                <h6 className="body_text">sorawit.ruangsri@gmail.com 0910278493</h6>
              </Card.Text>
              <hr className="black"></hr>
              <Card.Title>
                <h5 className="h-bold body_text">คติประจำตัว</h5>
              </Card.Title>
              <Card.Text>
                <h6 className="body_text">
                  การจะมาซึ่งความสําเร็จนั้นไม่ได้ขึ้นอยู่กับพรสวรรรค์ทีติดตัวมาตั้งแต่เกิดแต่มันจะมาพร้อมกับพรแสวงการพยายามในการลงมือทําเพื่อให้เกิดความสําเร็จสูงสุด
                </h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </header>
    </div>
  );
}

export default App;
