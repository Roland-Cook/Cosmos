import { Link } from "react-router-dom"
import "../scss/style.scss"

function Footer (){
    return (
    <div id="info-box">
    <ul>
        <li><Link to="/dailyPicture"> Astronomy Picture of the Day </Link></li>
        <li><Link to="/peopleInSpace"> People In Space Now </Link></li>
    </ul>
</div>
    )
} 
export default Footer
