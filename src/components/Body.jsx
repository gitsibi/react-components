import {imageData} from "../data/ImageData";
import "../styles/BodyStyle.css"
function Body()
{
    return(
        <div>
           {imageData.map((i)=>{
               return(
                  <div key={i.id} className="image_list">
                     <img src={i.img} alt="Lake Image" ></img>
                  </div>
               )
           })}
        </div>
    )
}

export default Body