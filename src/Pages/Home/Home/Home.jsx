import React from 'react';
import Destinations from '../Destinations/Destinations';
import Stories from '../Stories/Stories';
import Section4 from '../section4/Section4';
import TestimonialsAndReview from '../TestimonialsAndReview/TestimonialsAndReview';
import BlogPost from '../BlogPost/BlogPost';
import NewsLetter from '../NewsLetter/NewsLetter';
import PopularTour from '../PopularTour/PopularTour';

const Home = () => {
    return (
        <>
            <PopularTour></PopularTour>
            <Destinations></Destinations>
            <Stories></Stories>
            <Section4></Section4>
            <TestimonialsAndReview></TestimonialsAndReview>
            <BlogPost></BlogPost>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;