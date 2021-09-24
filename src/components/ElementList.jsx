import React, { useState } from 'react';
import { func } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Elements from './Elements';


const ElementList = ({ addLayoutItem }) => {
  const [currentCategory, setCategory] = useState('header');
  const [isOpen, setIsOpen] = useState(false);
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

  const onAddElementClick = () => {
    setIsOpen(!isOpen);
  };

  const renderElements = () => {
    if (isOpen) {
      return (
        <div className="leftPanelChild">
          <div className="leftPanelChildSpans">
            <span onClick={onCategoryClick} name="header">Header</span>
            <span onClick={onCategoryClick} name="content">Content</span>
            <span onClick={onCategoryClick} name="footer">Footer</span>
          </div>
          <ul className="leftPanelElements">
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
    }
    return <></>;
  };

  return (
    <div className="elements">
      <div className="leftPanelChild">
        <span className="addElementSpan" onClick={onAddElementClick} >Add Element</span>
      </div>
      {renderElements()}
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
