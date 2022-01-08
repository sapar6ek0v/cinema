import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Media = ({media}) => {
    return (
        <div className='actor-media-block'>
            <span className='actor-link-block'><a className='actor-link'  href={media.instagram_id ? `https://www.instagram.com/${media.instagram_id}/` : "https://www.instagram.com/" }><FontAwesomeIcon icon={faInstagram}/></a></span>
            <span className='actor-link-block'><a className='actor-link'  href={media.facebook_id ? `https://www.facebook.com/${media.facebook_id}/` : 'https://www.facebook.com/'}><FontAwesomeIcon icon={faFacebook}/></a></span>
            <span className='actor-link-block'><a className='actor-link'  href={media.twitter_id ? `https://twitter.com/${media.twitter_id}/` : 'https://twitter.com/'}><FontAwesomeIcon icon={faTwitter}/></a></span>
        </div>
    );
};

export default Media;