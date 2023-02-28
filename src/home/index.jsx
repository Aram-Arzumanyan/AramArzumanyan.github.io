import { useState } from 'react';
import './style.scss';
import n1 from '../assets/image/n1.jpg';
import n2 from '../assets/image/n2.jpg';
import n3 from '../assets/image/n3.jpg';
import n4 from '../assets/image/n4.jpg';
import n5 from '../assets/image/n5.jpg';
import n6 from '../assets/image/n6.jpg';
import Images from '../components';

function Home() {

 const [obj,setObj] = useState(
    [
        {
            id:1,
            img:n1,
        },
        {
            id:2,
            img:n2,
        },
        {
            id:3,
            img:n3,
        },
        {
            id:4,
            img:n4,
        },
        {
            id:5,
            img:n5,
        },
        {
            id:6,
            img:n6,
        },
    ]
 )
    return(
        <section className=' hOme G-container'>
            <div className='title'><h1>Interior Design</h1>
            <h3 style={{color:'red'}}>Showcase.</h3>
            <hr />
            </div>

            <div className='imag'>
                {obj.map((el)=><Images key={el.id} item={el}/>)}
            </div>
        </section>
    )
    
}
export default Home