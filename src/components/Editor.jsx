import React from 'react';
import { shape, arrayOf, func } from 'prop-types';
import ElementList from './ElementList';
import Layout from './Layout';
import Settings from './Settings';

const Editor = ({
  layoutItems,
  setLayoutItems
}) => (
  <div className="editor">
    <ElementList layoutItems={layoutItems} setLayoutItems={setLayoutItems}/>
    <Layout layoutItems={layoutItems}/>
    <Settings />
  </div>);

Editor.propTypes = {
  layoutItems: arrayOf(shape),
  setLayoutItems: func
};

Editor.defaultProps = {
  layoutItems: [],
  setLayoutItems: () => {}
};

export default Editor;
