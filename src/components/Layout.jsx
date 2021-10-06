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

  const showSettings = () => {
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    settingsButton.style.display = 'none';
    settingsSection.style.display = 'block';
    const addElementButton = document.getElementsByClassName('left-panel-add-button')[0];
    const addElementSection = document.getElementsByClassName('left-panel-open')[0];
    addElementButton.style.display = 'block';
    addElementSection.style.display = 'none';
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
              <div className="webpage-each-div" style={{ border: '2px solid #13E17E' }}>
                <ElementComponent
                  key={index.toString()}
                  item={layoutItem}
                  update={updateField}
                />
                <button
                  className="deleteButton"
                  onClick={removeSelectedItem}
                ><i className="fas fa-trash-alt" />
                </button>
                <button
                  className="settingsButton"
                  onClick={showSettings}
                ><i className="fa fa-cog" aria-hidden="true"/>
                </button>
              </div>
            );
          }
          return (
            <div className="webpage-each-div">
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
