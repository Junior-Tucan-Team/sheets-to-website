import React, { useState } from 'react';
import { shape, arrayOf, func } from 'prop-types';
import * as settingsMap from './Settings';
import * as Elements from './Elements';

const Properties = ({ selectedElement, layoutItems, updateField,
   updateStyle, submissionsRequest }) => {
  const foundedItem = layoutItems.find(item => selectedElement === item.id);
  const [tab, setTab] = useState('first');
  if (!foundedItem) {
    return null;
  }
  const { type } = foundedItem;
  const { settings } = Elements[type];
  const { category } = Elements[type];

  const onShowSettingsClick = () => {
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    settingsButton.style.display = 'none';
    settingsSection.style.display = 'block';
  };

  const hideSettings = () => {
    const settingsButton = document.getElementsByClassName('right-panel-settings-button')[0];
    const settingsSection = document.getElementsByClassName('settings-panel-open')[0];
    settingsButton.style.display = 'block';
    settingsSection.style.display = 'none';
  };

  const renderSettingsTabs = () => {
    if (category === 'header') {
      return (
        <div className="settings-tabs">
          <div className="settings-tabs-properties">Header Properties</div>
          <button onClick={hideSettings}>X</button>
          <div className="settings-tabs-buttons">
            <button onClick={() => { setTab('first'); }} name="0">Header</button>
            <button onClick={() => { setTab('second'); }} name="1">Background</button>
            <button onClick={() => { setTab('third'); }} name="2">Logo</button>
          </div>
        </div>
      );
    } else if (category === 'content') {
      return (
        <div className="settings-tabs">
          <div className="settings-tabs-properties">Content Properties</div>
          <button onClick={hideSettings}>X</button>
          <div className="settings-tabs-buttons">
            <button onClick={() => { setTab('first'); }}>Content</button>
            <button onClick={() => { setTab('second'); }}>Style</button>
          </div>
        </div>);
    }
    return <></>;
  };

  return (
    <div className="settings panel-wrapper">
      <div className="right-panel-settings-button" style={{ display: 'block' }}>
        <button className="add-element-button" onClick={onShowSettingsClick}>
          Settings
          <i className="fas fa-sliders-h" aria-hidden="true"/>
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
                name={settings[key].name}
                updateField={updateField}
                updateStyle={updateStyle}
                key={key}
                settingsKey={key}
                submissionsRequest={submissionsRequest}
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
  selectedElement: arrayOf(shape).isRequired,
  layoutItems: arrayOf(shape).isRequired,
  updateField: func.isRequired,
  updateStyle: func.isRequired,
  submissionsRequest: func.isRequired
};

export default Properties;
