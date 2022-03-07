import "./style/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    return(
        <>
        <div className="side_body">
            <input type="checkbox" id="check" onClick={() => console.log("checkbox clicked")}/>
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn" />
                <i className="fas fa-times" id="cancel" />
            </label>
            <div className="sidebar">
                <Link to="/" className="side_link"><header className="side_header">My App</header></Link>
                <ul>
                    <li><Link className="side_link" to="/addDetails"><i className=" side_link fas fa-qrcode"></i>Add Details</Link></li>
                    <li><Link className="side_link" to="/profile"><i className=" side_link fas fa-link"></i>Profile</Link></li>
                    <li><Link className="side_link" to="/signup"><i className=" side_link fas fa-stream"></i>Sign up</Link></li>
                    <li><Link className="side_link" to="/login"><i className=" side_link fas fa-calendar-week"></i>Log out</Link></li>
                    <li><Link className="side_link" to="/"><i className=" side_link far fa-question-circle"></i>About</Link></li>
                    <li><Link className="side_link" to="/"><i className=" side_link fas fa-sliders-h"></i>Services</Link></li>
                    <li><Link className="side_link" to="/"><i className=" side_link far fa-envelope"></i>Contact</Link></li>
                </ul>
            </div>
            <section>{props.children}</section>
        </div>
        </>
    )
}

export default Sidebar;