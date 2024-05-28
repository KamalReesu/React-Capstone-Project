import '..//App.css'
import img1 from '..//Images/img1.jpg';
import { useNavigate } from "react-router-dom";
import img2 from '..//Images/img2.jpg';
import Cuisines from './Cuisines';
import Testimonials from './Testimonials';
import DishesImage from '../Images/dishes.jpg';


function About() {

    const navigate = useNavigate();
    return (
        <>
            <div id="carousel">
                <div id="about">
                    <h1 style={{ color: '#f4ce14' }}>Little Lemon</h1>
                    <p style={{ width: 80 + '%' }}>
                        <b>Chicago</b>
                        <br />
                        <br />
                        We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                    <br />
                    <button id="reserve" onClick={() => { navigate("/booking"); }}>Reserve a Table</button>
                </div>
                <div id="highlight-img">
                    <img className="menu" src={DishesImage} alt='dish' width={500} />
                </div>
            </div>
            <div className='about-block'>
                <div id="about-section">
                    <article>
                        <h1 style={{ color: '#f4ce14' }}>Little Lemon</h1>
                        <p style={{ width: 80 + '%' }}>
                            <b>Chicago</b>
                        </p>
                        <p>
                            Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                        </p>
                    </article>
                </div>
                <div id="img-overlay-aligner">
                    <img className="img1" src={img1} style={{ backgroundColor: 'white' }} alt='salad' width={300} />
                    <img className="img2" src={img2} style={{ backgroundColor: 'white' }} alt='dish' width={300} />
                </div>
            </div>
            <Cuisines />
            <Testimonials />
        </>
    );

}
export default About;