import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridIem } from './GifGridIem';

export const GifGrid = ({category}) => {

/* const [images, setImages] = useState([]);



 */


  //getGifs();


const {data:images,loading} = useFetchGifs(category);




  return (
    <>
    <h3>{ category } </h3>

    {loading && <p>Loading</p> }
    
     <div className='card-grid'>

      <h3>{ category } </h3>
   
        {
          images.map(img => (

          <GifGridIem 
          key = {img.id}
          {...img}
          />

          ))
        }



    </div> 
    </>
  )
}
