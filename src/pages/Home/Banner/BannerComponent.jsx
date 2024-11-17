import React from 'react';
import BannerText from './BannerText';

const BannerComponent = ({image}) => {
    return (
        <div
            className="hero min-h-screen "
            style={{
                backgroundImage: `url(${image})`
                ,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <BannerText></BannerText>
        </div>
    );
};

export default BannerComponent;