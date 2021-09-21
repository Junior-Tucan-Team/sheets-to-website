import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as Elements from './Elements';

const ElementList = ({ addLayoutItem }) => {
  const onElementClick = (e) => {
    const elementName = e.target.getAttribute('data-element-name');
    const element = Elements[elementName];
    const newElement = Object.keys(element.settings).reduce((acc, curr) =>
    ({ ...acc, [curr]: element.settings[curr].default }), {});
    addLayoutItem({ ...newElement, type: elementName, id: uuidv4() });
  };

  return (
    <div className="elements">
      <ul>
        {Object.keys(Elements).map(element =>
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
