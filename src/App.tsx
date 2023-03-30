import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import ContactUS from './componenets/ContactMe';
import Image1 from './componenets/Image1';
import Image2 from './componenets/Image2';
import Image3 from './componenets/Image3';
import TEXTBOX from './componenets/TEXTBOX';
import TEXTBOX2 from './componenets/TEXTBOX2';

function App() {
  return (
    <BrowserRouter>
<Image1/>
<TEXTBOX/>
<Image2/>
<TEXTBOX2 />
<Image3/>
{/* <ContactMe/> */}
<ContactUS phone={'0345-2220279'} email={'haziqueahmedkhan1@gmail.com'} address={'Pakistan,Karachi'}/>
</BrowserRouter>
  );
}

export default App;
