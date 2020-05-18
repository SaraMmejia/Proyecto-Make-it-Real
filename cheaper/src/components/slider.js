import React from 'react';
import food from '../images/food.png';
import fruver from '../images/fruver.png';
import superm from '../images/superm.png';
import pan from '../images/pan.png';
import chocolate from '../images/chocolate.png';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

class Slider extends React.Component {

    render() {
        return (
                <Carousel className="container-slider">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={food}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Descuentos hasta del 40%</h3>
                            <p>Pagando con tu tarjeta Exito.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fruver}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Frutas siempre frsecas</h3>
                            <p>Aprovecha, tenemos promociones todos los jueves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pan}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Tenemos sorpresas para ti</h3>
                            <p>Solo en Jumbo, obtienes el 50%.Todos los Sábados</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={chocolate}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Lo que mas te gusta</h3>
                            <p>Aprovecha la oferta en chocolates suizos.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={superm}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

        )

    }
}

export default Slider;