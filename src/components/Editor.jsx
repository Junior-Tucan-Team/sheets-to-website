import React, { useEffect } from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import { connect, useSelector } from 'react-redux';
import ElementList from './ElementList';
import Layout from './Layout';
import Properties from './Properties';
import LoginPage from './LoginPage';

import {
   addLayoutItem as addLayoutItemAction,
   selectLayoutItem as selectLayoutItemAction,
   removeSelectedLayoutItem as removeSelectedLayoutItemAction,
   deleteLayoutItem as deleteLayoutItemAction,
   updateField as updateFieldAction,
   updateStyle as updateStyleAction,
   requestGetForms as requestGetFormsAction,
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
}) => {
  const currentMode = useSelector(state => state.editor.mode);
  const loggedIn = useSelector(state => state.auth?.user?.appKey);

  useEffect(() => {
    requestGetForms();
  }, [loggedIn]);

  useEffect(() => {
    const panelWrapper = document.getElementsByClassName('panel-wrapper');
    for (let i = 0; i < panelWrapper.length; i += 1) {
      if (currentMode === 'editor') {
        panelWrapper[i].style.opacity = 1;
        panelWrapper[i].style.pointerEvents = '';
      } else {
        panelWrapper[i].style.opacity = 0;
        panelWrapper[i].style.pointerEvents = 'none';
      }
    }
  }, [currentMode]);
  return (
    <>
      {
        loggedIn ?
          <></> :
          <div className="login-pop-up-background">
            <LoginPage/>
          </div>
      }
      <div className="editor">
        <ElementList selectLayoutItem={selectLayoutItem} addLayoutItem={addLayoutItem}/>
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
        <Properties
          selectedElement={selectedElement}
          layoutItems={layoutItems}
          updateField={updateField}
          updateStyle={updateStyle}
          selectLayoutItem={selectLayoutItem}
        />
      </div>
    </>
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
};

export default connect(mapStateToProps, mapActionToProps)(Editor);
