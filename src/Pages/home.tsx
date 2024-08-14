import React from 'react';
import Carousel from '../Components/carousel';

const carouselData = [
    {
        id: 1,
        imgSrc: 'https://picsum.photos/1200/600',
        title: 'Example headline.',
        description: 'Some representative placeholder content for the first slide of the carousel.',
        buttonText: 'Sign up today',
        buttonLink: '#'
    },
    {
        id: 2,
        imgSrc: 'https://picsum.photos/1000/1000',
        title: 'Another example headline.',
        description: 'Some representative placeholder content for the second slide of the carousel.',
        buttonText: 'Learn more',
        buttonLink: '#'
    },
    {
        id: 3,
        imgSrc: 'https://picsum.photos/1500/1000',
        title: 'One more for good measure.',
        description: 'Some representative placeholder content for the third slide of this carousel.',
        buttonText: 'Browse gallery',
        buttonLink: '#'
    }
];

const Home: React.FC = () => {
    return (
        <>
            <div>
                <Carousel carouselData={carouselData} />
                <h2>Home Page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis, est nec aliquam congue, tellus metus vehicula dui,
                    id vehicula urna nibh at eros. Morbi vel facilisis nisi. Pellentesque elit ante, malesuada eget lobortis id, finibus mollis diam.
                    Donec vitae justo sit amet diam aliquam maximus. Proin fringilla lorem vitae lorem ornare dignissim. Phasellus pellentesque,
                    lorem in elementum consectetur, nunc orci lobortis risus, vel sagittis sem lectus a ligula. Integer id neque accumsan felis ornare elementum ac ut dolor.
                    Nullam et ultricies mauris. Duis accumsan sodales massa, vel efficitur libero pellentesque maximus. Curabitur ut felis consequat, vestibulum leo id, porta enim.
                    Aliquam erat volutpat. Vestibulum eget tempor mi, non vulputate risus. Proin dolor magna, tempus quis maximus id, suscipit a nisi. Morbi rutrum malesuada nunc,
                    aliquet vestibulum ante tristique id. Nam eu justo iaculis, tempor erat sed, accumsan quam. Suspendisse non rhoncus nibh.</p>
            </div>
        </>
    );
};

export default Home;