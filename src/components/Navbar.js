import { Component } from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import style from "../components/CssFile/Navbar.module.css";
import Header from "./Header";
import "../components/CssFile/NavBar.css"

class Navbar extends Component {
  state = { clicked: false };
  // Hàm để thay đổi trạng thái clicked khi click vào biểu tượng menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="container_nav mx-auto px-8 ">
          <div id="Nav" className="mb-20 flex items-center justify-between py-6">
        
            <div id={style.logodiv} className="flex flex-shrink-0 items-center">
              <h1 className={style.logotext} alt="logo">NguyenXuanTienDung</h1>
            </div>
            <div id={style.groupdiv} className="m-8 flex items-center justify-center gap-4 text-2xl">




              <div className="group-menu">
                <ul id="Navbar" className={this.state.clicked ? "#Navbar active" : "#Navbar"}>
                  <li><a href="#" className="Active">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Skill</a></li>
                  <li><a href="#">Expensive</a></li>
                  <li><a href="#">Langue</a></li>
                </ul>
              </div>
              <div id="Mobile" onClick={this.handleClick}>
                <i
                  id="bar"
                  className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                  onClick={this.handleClick}
                ></i>
              </div>

            </div>






            {/* <FaLinkedin />
            <FaGithub />
            <FaInstagramSquare/>
            <FaSquareXTwitter/> */}
          </div>
        </div>
      </>
    );
  }
}



export default Navbar;