import { Parallax } from 'react-parallax';
import dev from "../img/dev.jpg"
import './img.css'
const Image3 = () => (
    <Parallax  className='image' bgImage={dev} strength={800}>
       <div className="content">
        <span className='img-txt'>DEV</span>
       </div>
    </Parallax>
);
export default Image3