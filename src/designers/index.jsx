import './style.scss';
import jhon from '../assets/image/jhon.jpg';
import jane from '../assets/image/jane.jpg';
import mike from '../assets/image/mike.jpg';
import { useState } from 'react';
import User from '../components/Users';

function Designers() {

    let [obj,setObj]=useState(
        [
            {
                id:1,
                img:jhon,
                h1:'John Doe',
                h3:'CEO & Founder',
                p:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
            },
            {
                id:2,
                img:jane,
                h1:'Jane Doe',
                h3:'Designer',
                p:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
            },
            {
              id:3,
              img:mike,
              h1:'Mike Ross',
              h3:'Architect',
              p:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
            }
        ]
    )
    return(
        <section className='designers  G-container'>

 <div className='title'>
<h1 style={{color:'red',fontSize:'55px'}}>Designers.</h1>
<hr />
<p>The best team in the world.</p><br />
<p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 </div>
<br /><p style={{fontSize:'20px'}}><b> Our designers are thoughtfully chosen:</b></p>

<div className='users'>
    {
        obj.map((el)=><User key={el.id} item={el} />)
    }
</div>

        </section>
    )
    
}
export default Designers