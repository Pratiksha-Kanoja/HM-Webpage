import './Imgbox.css'
import Images from '../Img/Img';
function Imgbox({img}){
    return(
        <div id='box'>
            <img src={img} style={{width: "100%",height:"100%",objectFit:'cover'}}/>
        </div>
    )
}
export default Imgbox;