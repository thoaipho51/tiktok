import { useState } from "react";
const defaultImage = 'https://fakeimg.pl/160x160/f2f2f2/474747?text=No-Image'


import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



const Image = ({src, alt, className, fallback: customFallback = defaultImage, ...props}) => {

    const [fallback, setFallback] = useState('')

    const handleError = ()=> {
        setFallback(customFallback)
    }

    //Mục đích tạo css riêng cho component image và lấy cả className Truyền vào 
    const classes = cx('wrapper', {
        [className]: className,
    });

    return <img className={classes} src={fallback || src} alt={alt} {...props} onError={handleError}/>
}
 
export default Image;