import React from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import HeaderSettings from './Elements/ElementSettings/HeaderSettings/HeaderSettings';
import * as settingsMap from './Settings';
import * as Elements from './Elements';

console.log(settingsMap);
const Properties = ({ selectedElement, layoutItems }) => {
  const foundedItem = layoutItems.find(item => selectedElement === item.id);

  if (!foundedItem) {
    return null;
  }
  const { type } = foundedItem;
  const { settings } = Elements[type];

  return (
    <div className="settings">
      {Object.keys(settings).map((key) => {
        const Component = settingsMap[settings[key].type] || <div>Unknown setting type</div>;
       return (
         <div>
           <Component />
         </div>
        );
      })}
    </div>
  );
};

Properties.propTypes = {
  selectedElement: arrayOf(shape).isRequired,
  layoutItems: arrayOf(shape).isRequired,
};

export default Properties;
