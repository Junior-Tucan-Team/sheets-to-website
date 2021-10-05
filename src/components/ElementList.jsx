import React, { useState } from 'react';
import { func } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Elements from './Elements';


const ElementList = ({ selectLayoutItem, addLayoutItem }) => {
  const [currentCategory, setCategory] = useState('header');
  const onElementClick = (e) => {
    const elementName = e.target.getAttribute('data-element-name');
    const element = Elements[elementName];
    const newElement = Object.keys(element.settings).reduce((acc, curr) =>
    ({ ...acc, [curr]: element.settings[curr].default }), {});
    const item = { ...newElement, type: elementName, id: uuidv4() };
    addLayoutItem(item);
    selectLayoutItem(item.id);
  };

  const onCategoryClick = (e) => {
    setCategory(e.target.getAttribute('name'));
  };

  const onAddElementClick = () => {
    const leftPanelOpen = document.getElementsByClassName('left-panel-open')[0];
    const leftPanelAddButton = document.getElementsByClassName('left-panel-add-button')[0];
    leftPanelOpen.style.display = 'block';
    leftPanelAddButton.style.display = 'none';
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    settingsButton.style.display = 'block';
    settingsSection.style.display = 'none';
  };

  const onRemoveElementClick = () => {
    const leftPanelOpen = document.getElementsByClassName('left-panel-open')[0];
    const leftPanelAddButton = document.getElementsByClassName('left-panel-add-button')[0];
    leftPanelOpen.style.display = 'none';
    leftPanelAddButton.style.display = 'block';
  };

  const renderElements = () => (
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

  return (
    <div className="elements panel-wrapper">
      <div className="left-panel-add-button" style={{ display: 'block' }}>
        <button className="add-element-button" onClick={onAddElementClick}>
          Add Elements
          <i className="fa fa-plus" aria-hidden="true"/>
        </button>
      </div>
      <div style={{ display: 'none' }} className="left-panel-open">
        <div className="leftPanelChild">
          <span className="addElementSpan" ><div> Add Element </div><i onClick={onRemoveElementClick} className="fa fa-times" aria-hidden="true"/></span>
        </div>
        {renderElements()}
      </div>
    </div>
  );
};

ElementList.propTypes = {
  addLayoutItem: func,
  selectLayoutItem: func,
};

ElementList.defaultProps = {
  addLayoutItem: () => {},
  selectLayoutItem: () => {}
};

export default ElementList;
