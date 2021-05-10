import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h3 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h3>
            <div className="list-unstyled mt-3">
                 {
                     props.menuItems.map((item, index) => <h5 key={index}><Link to={item.link} className="text-secondary text-decoration-none">{item.name}</Link></h5>)
                 }
            </div>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;