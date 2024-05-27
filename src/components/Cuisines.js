import '././Style.css'

import Pasta from '../Images/pasta.jpg';
import frenchtoast from '../Images/frenchtoast.jpg';
import taco from '../Images/taco.jpg';
import Pizza from '../Images/pizza.jpg';
import { useTheme } from './ThemeContext';

const images = [
    {id: 1, imagePath: Pasta, label: 'Italian Pasta',price:'$100'},
    {id: 2, imagePath: Pizza, label: 'Cheese Pizza',price:'$200'},
    {id: 3, imagePath: frenchtoast, label: 'French Toast',price:'$50.99'},
    {id: 4, imagePath: taco, label: 'Mexican Taco',price:'$120.99'},
];

const Cuisines = () => {
    const {theme} = useTheme();
    return (
        <>
        <div className='specials'>
        <h1 style={{ 'marginLeft':1+'rem', color: theme === "light" ? "black" : "white"}}>Specials</h1>
        <button type='button' className='online-menu'>Online Menu</button>
        </div>
        <div className='dishes-aligner'>
            {images.map(e => (
                <div className="card" key={e.id}>
                    <img src={e.imagePath} alt={e.label} className='cuisine-img'/>
                    <div className="container" style={{ backgroundColor: theme === "light" ? "rgb(189 222 211)" : "wheat"}}>
                        <h4><b>{e.label}</b> <span style={{float:'right',color:'orange',fontWeight:600}}>{e.price}</span></h4>
                        <p>Enjoy the Mouth Watering delicacy served with the freshness</p>
                        <button type='button' className='online-menu'>Order Now &nbsp;<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Cuisines;