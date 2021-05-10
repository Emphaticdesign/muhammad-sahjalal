import React from 'react';
import Typewriter from 'typewriter-effect';
import Footer from '../Footer/Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <h3>Working Progress</h3>
            <h5>Try Again Later</h5>
            <h5>
                <Typewriter
                    options={{
                        strings: ['Thank You!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h5>
            <br/><br/><br/>
            <Footer></Footer>
        </div>
    );
};

export default Blog;