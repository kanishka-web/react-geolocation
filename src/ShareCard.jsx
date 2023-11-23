import React from 'react';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

const Card = ({ content }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
    width: '300px',
    height: '200px',
  };

  const shareIconsStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  };

  const shareUrl = 'https://example.com'; // Replace with your card's URL

  return (
    <div style={cardStyle}>
      <p>{content}</p>

      <div style={shareIconsStyle}>
        <TwitterShareButton url={shareUrl}>
          <img src="twitter.jpg" alt="Share on Twitter" style={{width:"30px",height:"30px"}}/>
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl}>
          <img src="facebook.png" alt="Share on Facebook" style={{width:"30px",height:"30px"}} />
        </FacebookShareButton>

        {/* <InstagramShareButton url={shareUrl}>
          <img src="insta.jpg" alt="Share on Instagram" />
        </InstagramShareButton> */}
      </div>
    </div>
  );
};

export default Card;
