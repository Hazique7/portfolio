import { Parallax } from 'react-parallax';
import Dream from "../img/dream.jpg"

import './img.css'
import Navbar from './Navbar';
const Image1 = () => (
   <><Navbar /><Parallax className='image' bgImage={Dream} strength={1000}>
        <div id='Home' className="content">
            <span className='img-txt'> dream big</span>
        </div>
    </Parallax></>
);
export default Image1