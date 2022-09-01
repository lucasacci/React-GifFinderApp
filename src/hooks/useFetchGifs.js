import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {


  const [images, setImages] = useState([])

  const getImg = async () =>{
      const newImg = await getGifs(category);
      setImages(newImg);
  }

  useEffect( () => {
    getImg();
  }, [ ] )


  return{
    images,
    isLoading: false
  }
}
