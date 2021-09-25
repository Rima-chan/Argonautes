import Wave1 from '../assets/wave1.svg';
import Wave2 from '../assets/wave5.svg';

function Footer() {
    return (
        <div className="grid grid-cols-1 grid-rows-1 w-full">
            <img src={ Wave1 } alt="Svg vague 1" className="col-start-1 col-end-1 row-start-1 row-end-1 z-10"/>
            <img src={ Wave2 } alt="Svg vague 2" className="col-start-1 col-end-1 row-start-1 row-end-1 z-0"/>
        </div>
    )
}

export default Footer;