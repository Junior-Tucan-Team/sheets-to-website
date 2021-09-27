import React, { useState } from 'react';
import { shape, arrayOf, func } from 'prop-types';
import * as settingsMap from './Settings';
import * as Elements from './Elements';


const Properties = ({ selectedElement, layoutItems, updateField, updateStyle }) => {
  const foundedItem = layoutItems.find(item => selectedElement === item.id);
  const [tab, setTab] = useState('first');
  if (!foundedItem) {
    return null;
  }
  const { type } = foundedItem;
  const { settings } = Elements[type];
  const { category } = Elements[type];

  const renderSettingsTabs = () => {
    if (category === 'header') {
      return (
        <div className="settings-tabs">
          <h2>Header Properties</h2>
          <button onClick={() => { setTab('first'); }} name="0">Header</button>
          <button onClick={() => { setTab('second'); }} name="1">Background</button>
          <button onClick={() => { setTab('third'); }} name="2">Logo</button>
        </div>
      );
    } else if (category === 'content') {
      return (
        <div className="settings-tabs">
          <h2>Content Properties</h2>
          <button onClick={() => { setTab('first'); }}>Content</button>
          <button onClick={() => { setTab('second'); }}>Style</button>
        </div>);
    }
    return <></>;
  };

  return (
    <div className="settings">
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
              />
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

Properties.propTypes = {
  selectedElement: arrayOf(shape).isRequired,
  layoutItems: arrayOf(shape).isRequired,
  updateField: func.isRequired,
  updateStyle: func.isRequired
};

export default Properties;
