import { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const Like = () => {

    const [status, setStatus] = useState(false)
    const handleLike =()=>{
        setStatus(!status)
    }
  return (
  status ?  <AiFillHeart color="#ff6b81" size={30} onClick={handleLike}/> :  <AiOutlineHeart color="#ff6b81" size={30} onClick={handleLike}/>
  )
}

export default Like