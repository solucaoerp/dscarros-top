import './styles.css';
import carIcon from '../../assets/images/car.png';

export default function CarCard() {
    return (
        <div className="container">
            <div className="car-card">
                <div>
                    <img src={carIcon} alt="Carro" />
                </div>
                <div className="card-description">
                    <h3>Lorem ipsum dolor</h3>
                </div>
            </div>
        </div>
    );
}
