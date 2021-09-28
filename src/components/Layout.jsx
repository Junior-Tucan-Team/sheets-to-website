import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import * as Elements from './Elements';

function Layout({
   layoutItems,
   selectedElement,
   selectLayoutItem,
   removeSelectedLayoutItem,
   deleteLayoutItem,
   updateField
  }) {
  const handleSelectItem = (e) => {
    const selectedId = e.currentTarget.getAttribute('data-element-id');
    selectLayoutItem(selectedId);
  };

  const removeSelectedItem = () => {
    const foundDeletedIndex = layoutItems.findIndex(item => item.id === selectedElement);
    removeSelectedLayoutItem();
    deleteLayoutItem(foundDeletedIndex);
};

  return (
    <div className="layout">
      <div className="webpage">
        {
        layoutItems.map((layoutItem, index) => {
          const ElementComponent = Elements[layoutItem.type].Component;
          const isSelected = selectedElement === layoutItem.id;
          if (isSelected) {
            return (
              <div style={{ border: '10px solid black' }}>
                <ElementComponent
                  key={index.toString()}
                  item={layoutItem}
                  update={updateField}
                />
                <button
                  className="deleteButton"
                  onClick={removeSelectedItem}
                ><i className="fa fa-trash-o" aria-hidden="true" />
                </button>
                <button
                  className="settingsButton"
                  onClick={removeSelectedItem}
                ><i className="fa fa-cog" aria-hidden="true"/>
                </button>
              </div>
            );
          }
          return (
            <div>
              <ElementComponent
                key={index.toString()}
                item={layoutItem}
                onClick={handleSelectItem}
              />
            </div>
            );
        })
        }
      </div>
    </div>
  );
}

Layout.propTypes = {
  layoutItems: arrayOf(shape).isRequired,
  selectedElement: arrayOf(shape).isRequired,
  selectLayoutItem: func.isRequired,
  removeSelectedLayoutItem: func.isRequired,
  deleteLayoutItem: func.isRequired,
  updateField: func.isRequired
};
export default Layout;
