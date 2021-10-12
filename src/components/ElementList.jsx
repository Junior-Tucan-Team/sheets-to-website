import React, { useState } from 'react';
import { func } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Elements from './Elements';


const ElementList = ({ selectLayoutItem, addLayoutItem }) => {
  const [currentCategory, setCategory] = useState('header');
  const onElementClick = (e) => {
    let clickedElement = e.target;
    while (clickedElement.getAttribute('data-element-name') === null) {
      clickedElement = clickedElement.parentElement;
    }
    const elementName = clickedElement.getAttribute('data-element-name');
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
    leftPanelOpen.style.transform = 'translateX(0px)';
    leftPanelAddButton.style.transform = 'translateX(-160px)';
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    settingsSection.style.transform = 'translateX(360px)';
  };

  const onRemoveElementClick = () => {
    const leftPanelOpen = document.getElementsByClassName('left-panel-open')[0];
    const leftPanelAddButton = document.getElementsByClassName('left-panel-add-button')[0];
    leftPanelOpen.style.transform = 'translateX(-360px)';
    leftPanelAddButton.style.transform = 'translateX(0px)';
  };
  const renderElements = () => (
    <div className="leftPanelChild">
      <div className="leftPanelChildSpans">
        <button onClick={onCategoryClick} name="header">HEADER</button>
        <button onClick={onCategoryClick} name="content">CONTENT</button>
        <button onClick={onCategoryClick} name="footer">FOOTER</button>
      </div>
      <ul className="leftPanelElements">
        {Object.keys(Elements).filter(element =>
     Elements[element].category === currentCategory).map(element =>
       <li
         key={element}
         data-element-name={Elements[element].type}
         onClick={onElementClick}
       >
         {Elements[element].view}
       </li>)}
      </ul>
    </div>
  );

  return (
    <div className="elements panel-wrapper">
      <div className="left-panel-add-button">
        <button className="add-element-button" onClick={onAddElementClick}>
          <div>Add Elements</div>
          <i className="fa fa-plus" aria-hidden="true" style={{ marginLeft: '6px' }}/>
        </button>
      </div>
      <div className="left-panel-open">
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
