import React from 'react';
import '../styles/accordion.scss';

interface AccordionItem {
    id: number;
    imgSrc?: string; // Optional image
    title: string;
    description: string;
    buttonLink?: string; // Optional button link
    buttonText?: string; // Optional button text
}

interface AccordionProps {
    accordionData: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {
    return (
        <div className="accordion my-2" id="accordionExample">
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse${item.id}`}
                        >
                            {item.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {/* Optional image */}
                            {item.imgSrc && (
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    style={{ width: '100%', marginBottom: '15px' }}
                                />
                            )}
                            <strong>{item.description}</strong>
                            <br />
                            {/* Optional button */}
                            {item.buttonLink && item.buttonText && (
                                <a href={item.buttonLink} className="btn btn-primary mt-3">
                                    {item.buttonText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
