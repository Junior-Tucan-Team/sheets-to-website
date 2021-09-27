import React from 'react';
import { shape, string, arrayOf, func } from 'prop-types';

const Component = ({ submissons, item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container px-5 py-24 mx-auto">
      <div className="w-full mb-8">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }}>{item.title}</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }}> {item.description}</p>
      </div>
      <div className="flex flex-wrap -m-4">
        {
              submissons.map(submission =>
                <div key={submission.title} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={submission.cardImage} alt="content"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{submission.cardTitle}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{submission.cardTitle}</h2>
                    <p className="leading-relaxed text-base">{submission.cardDescription}</p>
                  </div>
                </div>)
          }
      </div>
    </div>
  </section>
    );

Component.propTypes = {
  submissons: arrayOf(shape({
    cardTitle: string,
    cardDescription: string,
    cardImage: string,
  })),
  onClick: func,
  item: shape({
    id: string
  })
};

Component.defaultProps = {
    submissons: [
        {
          cardTitle: 'Pizza',
          cardDescription: 'Pepperoni',
          cardImage: 'https://dummyimage.com/720x600'

        },
        {
          cardTitle: 'Hamburger',
          cardDescription: 'Cheese',
          cardImage: 'https://dummyimage.com/720x600'
        },
    ],
    onClick: () => {},
    item: string
};

const title = 'Card List';
const type = 'cardlist';
const category = 'content';

const settings = {
  title: {
    default: 'Heading Text',
    type: 'textbox',
    name: 'Heading Text',
    tab: 'second'
  },
  description: {
    default: 'Description',
    type: 'textbox',
    name: 'Description',
    tab: 'second'
  },
  table: {
    type: 'select',
    tab: 'first'
  }
};

export default {
  title,
  Component,
  settings,
  type,
  category
};
