import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Stories from '../Stories/Stories';
import Section4 from '../section4/Section4';
import TestimonialsAndReview from '../TestimonialsAndReview/TestimonialsAndReview';
import BlogPost from '../BlogPost/BlogPost';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <>
            <Banner></Banner>
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