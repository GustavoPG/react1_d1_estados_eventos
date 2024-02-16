import React from 'react';
import '../assets/css/socialButton.css';

const SocialButton = ({ links }) => {
    //console.log(namesIcon);
    return (
        <div className='my-icons'>
            {
                links.map((link, index) =>

                    <a key={index} href={link.url} className="my-icon" target="_blank">
                        <i className={link.iconName}></i>
                    </a>

                )
            }
        </div>
    );
};

export default SocialButton;