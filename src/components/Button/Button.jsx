import React from 'react';

const Button = (props) => {
    const {children}=props;
    return (
        <div>
            <button className="btn bg-red-500 text-white mt-2">{children}</button>
        </div>
    );
};

export default Button;