import React from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { arrayOf, func, shape, string } from 'prop-types';
import * as Elements from './Elements';

const outsideElementsClasses = ['settings-panel-open', 'left-panel-open', 'webpage', 'editor', 'layout'];
function Layout({
   layoutItems,
   selectedElement,
   selectLayoutItem,
   removeSelectedLayoutItem,
   deleteLayoutItem,
   updateField,
   currentMode
  }) {
  const handleSelectItem = (e) => {
    if (currentMode === 'editor') {
      const selectedId = e.currentTarget.getAttribute('data-element-id');
      selectLayoutItem(selectedId);
    }
  };

  const removeSelectedItem = () => {
    const foundDeletedIndex = layoutItems.findIndex(item => item.id === selectedElement);
    removeSelectedLayoutItem();
    deleteLayoutItem(foundDeletedIndex);
};
    const emptySelectedElement = (e) => {
      if (outsideElementsClasses.includes(e.target.className)) {
        removeSelectedLayoutItem();
         const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
         const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
         settingsButton.style.display = 'block';
         settingsSection.style.display = 'none';
      }
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
  const ref = useDetectClickOutside({
    onTriggered: emptySelectedElement,
    disableClick: false,
  });
  return (
    <div className="layout">
      <div className="webpage">
        {
        layoutItems.map((layoutItem, index) => {
          const ElementComponent = Elements[layoutItem.type].Component;
          const isSelected = selectedElement === layoutItem.id;
          if (isSelected) {
            return (
              <div className="webpage-each-div" style={{ border: '2px solid #13E17E' }} ref={ref}>
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
            <div className={currentMode === 'editor' ? 'webpage-each-div' : null}>
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
  updateField: func.isRequired,
  currentMode: string.isRequired
};
export default Layout;
