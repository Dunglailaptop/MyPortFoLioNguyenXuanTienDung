import { Component } from "react";
import "../components/CssFile/NavBar.css"


class Header extends Component {
   state = {clicked: false};
     // Hàm để thay đổi trạng thái clicked khi click vào biểu tượng menu
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

   render() {
    return (
      <>
     
      </>
    );
  }
}

export default Header;