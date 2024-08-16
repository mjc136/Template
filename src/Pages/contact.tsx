import React from 'react';
import Accordion from '../Components/accordion';

const accordionData = [
    {
        id: 1,
        title: 'Accordion Item #1',
        description: 'Some representative placeholder content for the first accordion item.',
    },
    {
        id: 2,
        title: 'Accordion Item #2',
        description: 'Some representative placeholder content for the second accordion item.',
    },
    {
        id: 3,
        title: 'Accordion Item #3',
        description: 'Some representative placeholder content for the third accordion item.',
        buttonText: 'Go somewhere',
        buttonLink: '#'
    }
];

const Contact: React.FC = () => {
    return (
        <>
            <h2>Contact Us</h2>
            <Accordion accordionData={accordionData} />
        </>
    );
};

export default Contact;