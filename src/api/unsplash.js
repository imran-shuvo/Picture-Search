import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID xbIOGtVNrV3rw9P9Yc_PTLYlC-tx4mhxxmzTPpHGVjU' 
    }
    

})