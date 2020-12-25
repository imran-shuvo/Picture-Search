import "./ImageList.css";
import ImageCard from  "./ImageCard";
import React from "react";




const ImageList = (props)=>{
//    const images =  props.images.map(({id,urls,description})=>{
//         return(
//         <div>
//             <img  key = {id} src={urls.regular} alt={description}></img>
//         </div>)
//     })

    const images = props.images.map((image)=>{
        return (
            <div key = {image.id}>
                <ImageCard  image = {image} />
            </div>
        )
    })

    return(

             <div className="image-list">{images}</div>
        
        
        )

}

export default ImageList