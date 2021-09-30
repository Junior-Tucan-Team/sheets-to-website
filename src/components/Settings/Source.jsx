import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsRequest, submissionsRequest } from '../../redux/actions';
import { filterByQuestionType } from '../../utils/filterBy';
import AutoComplete from '../../utils/AutoComplete';
import './Styles/source.css';


const Source = ({ updateField, settingsKey: key, selectedElement }) => {
  const [autoSearchValue, setAutoSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState({
    formID: '',
    image: '',
    header: '',
    description: '',
    price: ''
  });
  const [formID, setFormID] = useState('');
  const foundItem = useSelector((state) =>
  state.editor.layoutItems.find((item) => item.id === state.editor.selectedElement));
  const forms = useSelector((state) => state.forms.forms);
  const questions = useSelector((state) =>
    state.questions.questions[foundItem.source.formID]);
  const dispatch = useDispatch();
  const searchFunction = search => forms.filter(item =>
    (item.title.toLowerCase()).startsWith(search.toLowerCase()));

  const renderForms = () => (
    <div className="source-pop-up">
      <div className="source-handler">
        <div className="source-pop-up-header">
          <div>
            <img src="" alt="placeHolder"/>
            <span>Select from Table</span>
          </div>
          <button onClick={() => { setIsOpen(!isOpen); setAutoSearchValue(''); }}>X</button>
        </div>
        <div className="source-select-section">
          <span>Select a Table</span>
          <span>Choose which form you want to take action with the button</span>
          <AutoComplete
            value={autoSearchValue}
            onChange={setAutoSearchValue}
            search={searchFunction}
            setFormID={setFormID}
          />
        </div>
        <div className="source-select-buttons">
          <button onClick={() => { setIsOpen(!isOpen); setAutoSearchValue(''); }}>Back</button>
          <button
            disabled={!formID}
            onClick={() => {
              dispatch(getQuestionsRequest(formID));
              dispatch(submissionsRequest(formID));
              setSource({ ...source, formID });
              updateField({ ...source, formID }, key);
              setIsOpen(false);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <label>
        Content Source
        <button onClick={() => setIsOpen(!isOpen)} style={{ border: '2px solid black', background: 'green', color: 'cornsilk' }}>
          Select your table source
        </button>
      </label>
      {isOpen ? renderForms() : <></>}
      { foundItem.source.formID ? (
        <div className="select-handler">
          <label htmlFor="select-image">IMAGE</label>
          <select
            id="select-image"
            onChange={(e) => {
              setSource({ ...source, image: e.target.value });
              updateField({ ...source, image: e.target.value }, key);
            }}
          >
            <option value="" selected disabled hidden>Choose here</option>
            {filterByQuestionType(['control_textbox'])(questions).map((column) => (
              <option value={questions[column].qid}>
                {questions[column].text}
              </option>))
    }
          </select>
          <label htmlFor="select-header">HEADER</label>
          <select
            id="select-header"
            onChange={(e) => {
              setSource({ ...source, header: e.target.value });
              updateField({ ...source, header: e.target.value }, key);
            }}
          >
            <option value="" selected disabled hidden>Choose here</option>
            {filterByQuestionType(['control_textbox', 'control_fullname'])(questions).map((column) => (
              <option value={questions[column].qid}>
                {questions[column].text}
              </option>))
    }
          </select>
          <label htmlFor="select-description">DESCRIPTION</label>
          <select
            id="select-description"
            onChange={(e) => {
            setSource({ ...source, description: e.target.value });
            updateField({ ...source, description: e.target.value }, key);
          }}
          >
            <option value="" selected disabled hidden>Choose here</option>
            {filterByQuestionType(['control_textarea', 'control_textbox'])(questions).map((column) => (
              <option value={questions[column].qid}>
                {questions[column].text}
              </option>))
    }
          </select>
          <label htmlFor="select-description">PRICE</label>
          <select
            id="select-description"
            onChange={(e) => {
            setSource({ ...source, price: e.target.value });
            updateField({ ...source, price: e.target.value }, key);
          }}
          >
            <option value="" selected disabled hidden>Choose here</option>
            {filterByQuestionType(['control_textarea', 'control_textbox'])(questions).map((column) => (
              <option value={questions[column].qid}>
                {questions[column].text}
              </option>))
    }
          </select>
        </div>) : null}
    </>
  );
  };


Source.propTypes = {
    updateField: func.isRequired,
    settingsKey: string.isRequired,
    selectedElement: string.isRequired
      };

export default Source;
