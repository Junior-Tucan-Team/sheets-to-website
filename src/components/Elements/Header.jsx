import React from 'react';
import { shape, string, func } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={item.image}/>
          { item.logo ? <img src={item.logo} alt="logo"/> : null}
          <div className="text-center relative z-10 w-full">
            <h2 style={{ color: item.fntclrtitle, fontSize: item.fntSztitle }} className="text-2xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
            <p style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription }} className="leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );

Component.propTypes = {
  item: shape({
    title: string.isRequired,
    description: string.isRequired,
    image: string.isRequired
  }).isRequired,
  onClick: func.isRequired,
};

const title = 'Header';
const type = 'header';
const category = 'header';

const settings = {
  title: {
    default: 'Before they sold out',
    type: 'textbox',
    name: 'Heading Text',
  },
  description: {
    default: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
    type: 'textbox',
    name: 'Sub-heading Text'
  },
  image: {
    default: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
    type: 'image',
    name: 'Header Background'
  },
  logo: {
    default: '',
    type: 'logo',
    name: 'Add Logo'
  }
};

export default {
  title,
  Component,
  settings,
  type,
  category
};
