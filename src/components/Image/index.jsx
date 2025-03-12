import { useState } from "react";
const defaultImage = 'https://fakeimg.pl/160x160/f2f2f2/474747?text=No-Image'


const Image = ({src, alt, ...props}) => {

    const [fallback, setFallback] = useState('')

    const handleError = ()=> {
        setFallback(defaultImage)
    }

    return <img src={fallback || src} alt={alt} {...props} onError={handleError}/>
}
 
export default Image;