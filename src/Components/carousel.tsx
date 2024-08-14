import React from 'react';
import '../styles/carousel.scss';

interface CarouselItem {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
}

interface CarouselProps {
    carouselData: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselData }) => {
    return (
        <div className="container-fluid bg-dark bg-gradient p-0">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {carouselData.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.imgSrc} className="object-fit-sm-contain rounded" alt={item.title} />
                            <div className="container">
                                <div className={`carousel-caption ${index === 0 ? 'text-start' : index === 2 ? 'text-end' : ''}`}>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p><a className="btn btn-lg btn-primary" href={item.buttonLink}>{item.buttonText}</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
