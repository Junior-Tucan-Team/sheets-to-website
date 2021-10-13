import React, { useState } from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import * as settingsMap from './Settings';
import WebsiteDesign from './Settings/WebsiteDesign';
import * as Elements from './Elements';

const Properties = ({ selectedElement, layoutItems, updateField,
   updateStyle, selectLayoutItem }) => {
  const foundedItem = layoutItems.find(item => selectedElement === item.id);
  const [tab, setTab] = useState('first');
  const onShowSettingsClick = () => {
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    settingsSection.style.display = 'flex';
    settingsButton.style.display = 'none';
    const addElementButton = document.getElementsByClassName('left-panel-add-button')[0];
    const addElementSection = document.getElementsByClassName('left-panel-open')[0];
    addElementButton.style.display = '';
    addElementSection.style.display = 'none';
  };

  const hideSettings = () => {
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    settingsSection.style.display = 'none';
    settingsButton.style.display = '';
  };
  if (!foundedItem) {
    return (
      <div className="settings panel-wrapper" >
        <div className="right-panel-settings-button">
          <button className="add-element-button" onClick={onShowSettingsClick}>
            <i className="fas fa-paint-roller right-icon" />
          </button>
        </div>
        <div className="settings-panel-open" style={{ display: 'none', marginTop: '30px' }}>
          <div className="settings-tabs-properties">Website Design Properties <button onClick={hideSettings} style={{ marginLeft: '6px' }}><i className="fa fa-times"/></button></div>
          <WebsiteDesign
            layoutItems={layoutItems}
            updateStyle={updateStyle}
            selectLayoutItem={selectLayoutItem}
          />
        </div>
      </div>);
  }
  const { type } = foundedItem;
  const { settings } = Elements[type];
  const { category } = Elements[type];

  const renderSettingsTabs = () => {
    if (category === 'header') {
      return (
        <div className="settings-tabs">
          <div className="settings-tabs-properties">Header Properties <button onClick={hideSettings}><i className="fa fa-times"/></button></div>
          <div className="settings-tabs-buttons">
            <button onClick={() => { setTab('first'); }} name="0">HEADER</button>
            <button onClick={() => { setTab('second'); }} name="1">BACKGROUND</button>
            <button onClick={() => { setTab('third'); }} name="2">LOGO</button>
          </div>
        </div>
      );
    } else if (category === 'content') {
      return (
        <div className="settings-tabs">
          <div className="settings-tabs-properties">Content Properties<button onClick={hideSettings}><i className="fa fa-times"/></button></div>
          <div className="settings-tabs-buttons">
            <button onClick={() => { setTab('first'); }}>CONTENT</button>
            <button onClick={() => { setTab('second'); }}>STYLE</button>
          </div>
        </div>);
    } else if (category === 'footer') {
      return (
        <div className="settings-tabs">
          <div className="settings-tabs-properties">Footer Properties<button onClick={hideSettings}><i className="fa fa-times"/></button></div>
        </div>);
    }
    return <></>;
  };
  return (
    <div className="settings panel-wrapper">
      <div className="right-panel-settings-button">
        <button className="add-element-button" onClick={onShowSettingsClick}>
          <i className="fas fa-paint-roller right-icon" />
        </button>
      </div>
      <div className="settings-panel-open" style={{ display: 'none' }}>
        {renderSettingsTabs()}
        {Object.keys(settings).map((key) => {
        if (settings[key].tab === tab) {
          const Component = settingsMap[settings[key].type] || <div>Unknown setting type</div>;
          return (
            <div>
              <Component
                category={category}
                name={settings[key].name}
                value={settings[key].name}
                updateField={updateField}
                updateStyle={updateStyle}
                key={key}
                settingsKey={key}
                selectedElement={selectedElement}
              />
            </div>
          );
        }
        return <></>;
      })}
      </div>
    </div>
  );
};

Properties.propTypes = {
  selectedElement: string,
  layoutItems: arrayOf(shape).isRequired,
  updateField: func.isRequired,
  updateStyle: func.isRequired,
  selectLayoutItem: func.isRequired,
};

Properties.defaultProps = {
  selectedElement: ''
};

export default Properties;
