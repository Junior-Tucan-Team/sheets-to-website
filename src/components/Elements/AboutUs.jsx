import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Us
        </h1>
        <p className="mb-8 leading-relaxed">{item.description}</p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src={item.image} />
      </div>
    </div>
  </section>
);

Component.propTypes = {
  item: shape({
    description: string.isRequired,
    image: string.isRequired
  }).isRequired,
  onClick: func.isRequired
};

const title = 'About Us';
const type = 'about';

const settings = {
  image: {
    default: 'https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/572/346/1572346076_5db818dc5a77a-thumb.jpg',
    type: 'image'
  },
  description: {
    default: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
    type: 'text'
  }
};

export default {
  title,
  Component,
  settings,
  type
};
