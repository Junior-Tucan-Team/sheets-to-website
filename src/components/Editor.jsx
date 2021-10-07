import React, { useEffect } from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import { connect, useSelector } from 'react-redux';
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
   requestGetForms as requestGetFormsAction,
   submissionsRequest as submissionsRequestAction
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
  requestGetForms,
  submissionsRequest
}) => {
    const currentMode = useSelector(state => state.editor.mode);
    useEffect(() => {
      requestGetForms();
    }, []);
    return (
      <div className="editor">
        {
          currentMode === 'editor'
            ? <ElementList selectLayoutItem={selectLayoutItem} addLayoutItem={addLayoutItem}/>
            : null
        }
        <Layout
          layoutItems={layoutItems}
          selectLayoutItem={selectLayoutItem}
          removeSelectedLayoutItem={removeSelectedLayoutItem}
          selectedElement={currentMode === 'editor' ? selectedElement : ''}
          deleteLayoutItem={deleteLayoutItem}
          updateField={updateField}
          updateStyle={updateStyle}
          currentMode={currentMode}
        />
        {
          currentMode === 'editor'
            ? <Properties
                selectedElement={selectedElement}
                layoutItems={layoutItems}
                updateField={updateField}
                updateStyle={updateStyle}
                currentMode={currentMode}
            />
            : null
        }
      </div>
    );
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
  requestGetForms: func,
  submissionsRequest: func
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
  requestGetForms: () => {},
  submissionsRequest: () => {}
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
  requestGetForms: requestGetFormsAction,
  submissionsRequest: submissionsRequestAction
};

export default connect(mapStateToProps, mapActionToProps)(Editor);
