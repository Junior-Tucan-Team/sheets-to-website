import React, { useEffect } from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';
import ElementList from './ElementList';
import Layout from './Layout';
import Properties from './Properties';

import {
   addLayoutItem as addLayoutItemAction,
   selectLayoutItem as selectLayoutItemAction,
   removeSelectedLayoutItem as removeSelectedLayoutItemAction,
   deleteLayoutItem as deleteLayoutItemAction,
   updateField as updateFieldAction,
   updateStyle as updateStyleAction,
   requestGetForms as requestGetFormsAction
} from '../redux/actions';

const Editor = ({
  layoutItems,
  addLayoutItem,
  selectLayoutItem,
  removeSelectedLayoutItem,
  selectedElement,
  deleteLayoutItem,
  updateField,
  updateStyle,
  requestGetForms
}) => {
    useEffect(() => {
      requestGetForms();
    }, []);
    return (
      <div className="editor">
        <ElementList layoutItems={layoutItems} addLayoutItem={addLayoutItem}/>
        <Layout
          layoutItems={layoutItems}
          selectLayoutItem={selectLayoutItem}
          removeSelectedLayoutItem={removeSelectedLayoutItem}
          selectedElement={selectedElement}
          deleteLayoutItem={deleteLayoutItem}
          updateField={updateField}
          updateStyle={updateStyle}
        />
        <Properties
          selectedElement={selectedElement}
          layoutItems={layoutItems}
          updateField={updateField}
          updateStyle={updateStyle}
        />
      </div>);
  };
Editor.propTypes = {
  layoutItems: arrayOf(shape),
  addLayoutItem: func,
  selectLayoutItem: func,
  removeSelectedLayoutItem: func,
  selectedElement: string,
  deleteLayoutItem: func,
  updateField: func,
  updateStyle: func,
  requestGetForms: func
};

Editor.defaultProps = {
  layoutItems: [],
  addLayoutItem: () => {},
  selectLayoutItem: () => {},
  removeSelectedLayoutItem: () => {},
  selectedElement: '',
  deleteLayoutItem: () => {},
  updateField: () => {},
  updateStyle: () => {},
  requestGetForms: () => {}
};

const mapStateToProps = (state) => ({
    layoutItems: state.editor.layoutItems,
    selectedElement: state.editor.selectedElement,
  });


const mapActionToProps = {
  addLayoutItem: addLayoutItemAction,
  selectLayoutItem: selectLayoutItemAction,
  removeSelectedLayoutItem: removeSelectedLayoutItemAction,
  deleteLayoutItem: deleteLayoutItemAction,
  updateField: updateFieldAction,
  updateStyle: updateStyleAction,
  requestGetForms: requestGetFormsAction
};

export default connect(mapStateToProps, mapActionToProps)(Editor);
