import React from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';
import ElementList from './ElementList';
import Layout from './Layout';
import Settings from './Properties';

import {
   addLayoutItem as addLayoutItemAction,
   selectLayoutItem as selectLayoutItemAction,
   removeSelectedLayoutItem as removeSelectedLayoutItemAction,
   deleteLayoutItem as deleteLayoutItemAction
} from '../redux/actions';


const Editor = ({
  layoutItems,
  addLayoutItem,
  selectLayoutItem,
  removeSelectedLayoutItem,
  selectedElement,
  deleteLayoutItem
}) => (
  <div className="editor">
    <ElementList layoutItems={layoutItems} addLayoutItem={addLayoutItem}/>
    <Layout
      layoutItems={layoutItems}
      selectLayoutItem={selectLayoutItem}
      removeSelectedLayoutItem={removeSelectedLayoutItem}
      selectedElement={selectedElement}
      deleteLayoutItem={deleteLayoutItem}
    />
    <Settings
      selectedElement={selectedElement}
      layoutItems={layoutItems}
    />
  </div>);

Editor.propTypes = {
  layoutItems: arrayOf(shape),
  addLayoutItem: func,
  selectLayoutItem: func,
  removeSelectedLayoutItem: func,
  selectedElement: string,
  deleteLayoutItem: func
};

Editor.defaultProps = {
  layoutItems: [],
  addLayoutItem: () => {},
  selectLayoutItem: () => {},
  removeSelectedLayoutItem: () => {},
  selectedElement: '',
  deleteLayoutItem: () => {}
};

const mapStateToProps = (state) => ({
    layoutItems: state.editor.layoutItems,
    selectedElement: state.editor.selectedElement,
  });


const mapActionToProps = {
  addLayoutItem: addLayoutItemAction,
  selectLayoutItem: selectLayoutItemAction,
  removeSelectedLayoutItem: removeSelectedLayoutItemAction,
  deleteLayoutItem: deleteLayoutItemAction
};

export default connect(mapStateToProps, mapActionToProps)(Editor);
