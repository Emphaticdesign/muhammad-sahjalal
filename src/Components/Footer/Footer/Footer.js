import React from 'react';
import SocialMedia from '../../SocialMedia/SocialMedia';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import myLogo from '../../../Images/logo.png';

const Footer = () => {

    const ourAddress = [
        { name: " Gulshan-1, Dhaka, Bangladesh." },
        { name: "muhammadsahjalal953@gmail.com" },

    ]
    const services = [
        { name: "Web Design" },
        { name: "Web Development" },
        { name: "ReactJs Developer " },
        { name: "E-commerce" }
    ]
    const image = [
        { name: '' }
    ]


    const Information = [
        { name: "Project", link: "/project" },
        { name: "Blog", link: "/blog" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-2">
                <div className="row py-5">
                    <FooterCol key={4} menuTitle="" menuItems={image}>
                        <div className="mt-3 footer-logo">
                            <img src={myLogo} alt="" />
                            <p>Increasing my knowledge in
                            programming fields and
                            new technologies especially,
                            web development and
                            web Design field.</p>
                        </div>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Information" menuItems={Information} />
                    <FooterCol key={6} menuTitle="Services" menuItems={services} />
                    <FooterCol key={4} menuTitle="Get in Touch" menuItems={ourAddress}>
                        <div className="mt-3 footer-phone">
                            <h6>Phone</h6>
                            <h5>+880 1739684481</h5>
                        </div>
                    </FooterCol>
                </div>
            </div>

            <div>
                <SocialMedia></SocialMedia>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} Sahjalal . All Rights Reserved</p>
            </div>
        </footer>

    );
};

export default Footer;