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
  const [manual, setManual] = useState(false);
  const [edit, setEdit] = useState(false);
  const [submissionID, setSubmissionID] = useState('');
  const [formID, setFormID] = useState('');
  const foundItem = useSelector((state) =>
  state.editor.layoutItems.find((item) => item.id === state.editor.selectedElement));
  const forms = useSelector((state) => state.forms.forms);
  const questions = useSelector((state) =>
    state.questions.questions[foundItem.source.formID]);
  const submissions = useSelector(state =>
    state?.submissions?.submissions[foundItem.source.formID]);
  const dispatch = useDispatch();
  const searchFunction = search => forms.filter(item =>
    (item.title.toLowerCase()).startsWith(search.toLowerCase()));

  const renderForms = () => (
    <div className="source-pop-up">
      <div className="source-handler">
        <div className="source-pop-up-header">
          <div>
            <i className="fa fa-table"/>
            <span>Source from Table</span>
          </div>
          <i className="fa fa-times" aria-hidden="true" onClick={() => { setIsOpen(!isOpen); setAutoSearchValue(''); }}/>
        </div>
        <div className="source-select-section">
          <span className="text-bold">Select a Table</span>
          <span className="text-desc">Choose which form you want to take action with the button</span>
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
  const renderManual = () => {
    if (manual) {
      if (!edit) {
        return (typeof submissions !== 'undefined' ? submissions.map(submission => (
          <div className="flex submissionss-center lg:w-3/5 mx-auto border-b pb-10 mb-10
            border-gray-200 sm:flex-row flex-col"
          >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
          submissionss-center justify-center
          rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
            >
              { foundItem.source.image !== '' ? <img
                className="h-40 rounded w-full
            object-cover object-center mb-6"
                src={submission.answers[foundItem.source.image].answer}
                alt="content"
              /> : <></>}
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font
            font-medium mb-2"
              >{foundItem.source.header !== '' ? submission.answers[foundItem.source.header].answer : ''}
              </h2>
              <p className="leading-relaxed text-base">
                {foundItem.source.description !== '' ? submission.answers[foundItem.source.description].answer : ''}
              </p>
            </div>
            <button
              className="settingsButton"
              onClick={() => { setEdit(true); setSubmissionID(submission.id); }}
            ><i className="fa fa-cog" aria-hidden="true"/>
            </button>
          </div>)) : <></>);
      } else {
        console.log('settings');
      }
    }




    return <></>;
  };

  const editSubmission = () => {

  };
  return (
    <>
      <div className="header-source-handler">
        <div className="header-source">SOURCE</div>
        <div className="desc-source">Select Source</div>
        <div className="header-source-handler-buttons">
          <button onClick={() => { setIsOpen(true); setManual(false); }}>
            From Table
          </button>
          <button onClick={() => setManual(true)}>
            Manual
          </button>
        </div>
      </div>
      {isOpen ? renderForms() : <></>}
      {!manual && foundItem.source.formID ? (
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
        </div>) :
        <div className="manual">
          {renderManual()}
        </div>
        }
    </>
  );
  };


Source.propTypes = {
    updateField: func.isRequired,
    settingsKey: string.isRequired,
    selectedElement: string.isRequired
      };

export default Source;
