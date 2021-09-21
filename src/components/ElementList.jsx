import React, { useState } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Elements from './Elements';


const ElementList = ({ addLayoutItem }) => {
  const [currentCategory, setCategory] = useState('header');

  const onElementClick = (e) => {
    const elementName = e.target.getAttribute('data-element-name');
    const element = Elements[elementName];
    const newElement = Object.keys(element.settings).reduce((acc, curr) =>
    ({ ...acc, [curr]: element.settings[curr].default }), {});
    addLayoutItem({ ...newElement, type: elementName, id: uuidv4() });
  };

  const onCategoryClick = (e) => {
    setCategory(e.target.getAttribute('name'));
  };

  return (
    <div className="elements">
      <span onClick={onCategoryClick} name="header">Header</span>
      <span onClick={onCategoryClick} name="content">Content</span>
      <span onClick={onCategoryClick} name="footer">Footer</span>

      <ul>
        {Object.keys(Elements).filter(element =>
     Elements[element].category === currentCategory).map(element =>
       <li
         key={element}
         data-element-name={Elements[element].type}
         onClick={onElementClick}
       >
         {Elements[element].title}
       </li>)}
      </ul>

    </div>
  );
};

ElementList.propTypes = {
  addLayoutItem: func
};

ElementList.defaultProps = {
  addLayoutItem: () => {}
};

export default ElementList;
