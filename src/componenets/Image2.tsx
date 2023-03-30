import { Parallax } from 'react-parallax';
import code from "../img/code.jpg"
import './img.css'
const Image2 = () => (
    <Parallax  className='image' bgImage={code} strength={800}>
       <div className="content">
        <span className='img-txt'> code</span>
       </div>
    </Parallax>
);
export default Image2