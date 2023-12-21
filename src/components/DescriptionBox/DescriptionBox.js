import React from 'react'
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'> Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tincidunt dui. Mauris laoreet commodo iaculis. Cras tincidunt a sapien vitae pulvinar. Maecenas dictum erat sed pellentesque sagittis. Aenean sodales risus at aliquam dignissim. In vel commodo sapien. Aenean massa purus, faucibus vel purus sed, dignissim imperdiet nunc. </p>
            <p>Nulla nec sapien in velit aliquet vulputate. Aenean sed nibh ut libero tristique fermentum non nec erat. Nam suscipit felis id justo dignissim, in convallis nibh accumsan. Morbi quis libero volutpat, vestibulum massa quis, condimentum massa. Phasellus in cursus ligula, et suscipit magna. In non quam posuere, ornare purus nec, sollicitudin urna</p>
        </div>
    </div>
  )
}

export default DescriptionBox
