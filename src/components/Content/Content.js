import React from 'react';
import ImageOne from '../../images/lunch1.png';
import ImageTwo from '../../images/lunch2.png'

const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Healthy Meal Plan</h2>
                <p>Crispy, delicious, and nutritious.</p>
                <span>$16</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Fried Chicken Bento</h2>
            <p>Crispy, delicious, and nutritious.</p>
            <span>$18</span>
        </div>
    </div>
    </>
    );
};

export default Content;