import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import * as Elements from './Elements';

const ElementList = ({ layoutItems, setLayoutItems }) => {
  const onElementClick = (e) => {
    const elementName = e.target.getAttribute('data-element-name');
    const element = Elements[elementName];
    const newElement = Object.keys(element.settings).reduce((acc, curr) =>
    ({ ...acc, [curr]: element.settings[curr].default }), {});
    setLayoutItems([...layoutItems, { ...newElement, name: elementName }]);
  };

  return (
    <div className="elements">
      <ul>
        {Object.keys(Elements).map(element =>
          <li
            key={element}
            data-element-name={Elements[element].name}
            onClick={onElementClick}
          >
            {Elements[element].title}
          </li>)}
      </ul>
    </div>
  );
};

ElementList.propTypes = {
  layoutItems: arrayOf(shape),
  setLayoutItems: func
};

ElementList.defaultProps = {
  layoutItems: [],
  setLayoutItems: () => {}
};

export default ElementList;
