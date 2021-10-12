import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsRequest, submissionsRequest } from '../../redux/actions';
import { filterByQuestionType } from '../../utils/filterBy';
import AutoComplete from '../../utils/AutoComplete';
import { updateSubmissionsRequest } from '../../redux/actions/submissionActions';
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
    const editScreen = () => {
      const handler = document.getElementsByClassName('header-source-handler')[0];
      if (!edit) {
        handler.style.display = 'none';
      } else {
        handler.style.display = 'block';
      }
    };
  const changeEditMode = () => {
    setEdit(!edit);
    editScreen();
  };
  const searchFunction = search => forms.filter(item =>
    (item.title.toLowerCase()).startsWith(search.toLowerCase()));
  const urlToObject = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    return file;
  };
  const dispatch = useDispatch();
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

  const modifySubmissions = (e) => {
    const payload = {
      key: e.target.name,
      value: e.target.value,
      submissionID,
      formID
    };
    dispatch(updateSubmissionsRequest(payload));
  };

  const renderManual = () => {
    if (manual) {
      if (!edit) {
        return (
          typeof submissions !== 'undefined' ? submissions.map(submission => (
            <div className="manuel-listing-cards">
              <div className="submission-number">0</div>
              <div>
                { foundItem.source.image !== '' ?
                  <img
                    className="manuel-cards-image"
                    src={submission.answers[foundItem.source.image].answer}
                    alt="content"
                  /> :
                  <></>
              }
              </div>
              <div className="manuel-listing-info">
                <h2 className="manuel-info-text manuel-info-header">
                  {foundItem.source.header !== '' ? submission.answers[foundItem.source.header].answer : ''}
                </h2>
                <p className="manuel-info-text manuel-info-desc">
                  Description
                  {/* {foundItem.source.description !== '' ? submission.answer
                s[foundItem.source.description].answer : ''} */}
                </p>
              </div>
              <button
                className="settingsButton"
                onClick={() => { changeEditMode(); setSubmissionID(submission.id); }}
              >
                <div className="blue-cog-back">
                  <i className="fa fa-cog blue-cog" aria-hidden="true"/>
                </div>
              </button>
            </div>)) : <>You did not select any forms.</>
        );
      } else {
        return (
          <div>
            <button onClick={changeEditMode} className="manual-back-button">
              <i className="fa fa-angle-left"/>
              Back
            </button>
            {submissionID}
            <div className="manual-edit-submission">
              <label htmlFor="manualImg">
                Image
                <input
                  id="manualImg"
                  type="file"
                  accept="image/*"
                  alt="image"
                //   value={urlToObject(submissions.find(sub => sub.id === submissionID)
                // .answers[foundItem.source.image].answer)}
                />
              </label>
              <label htmlFor="manual-header">
                Header
                <input
                  type="text"
                  id="manual-header"
                  name={foundItem.source.header}
                  defaultValue={submissions.find(sub => sub.id === submissionID)
                    .answers[foundItem.source.header].answer}
                  onBlur={modifySubmissions}
                />
              </label>
              <label htmlFor="manual-desc">
                Description
                <input
                  type="text"
                  id="manual-desc"
                  name={foundItem.source.description}
                  defaultValue={submissions.find(sub => sub.id === submissionID)
                    .answers[foundItem.source.description].answer}
                  onBlur={modifySubmissions}
                />
              </label>
              <label htmlFor="manual-price">
                Price
                <input
                  type="text"
                  id="manual-price"
                  name={foundItem.source.price}
                  defaultValue={submissions.find(sub => sub.id === submissionID)
                    .answers[foundItem.source.price].answer}
                  onBlur={modifySubmissions}
                />
              </label>
            </div>
            <div className="wide-horizontal-line"/>
          </div>
        );
      }
    } else {
      return (
        <div>
          <span className="source-settings-headers" style={{ marginLeft: '20px' }}>Content Source</span>
          <button className="select-table-button source-settings-headers" onClick={setIsOpen}>
            Select a Table
          </button>
          <div className="wide-horizontal-line" />
        </div>
      );
    }
  };

  return (
    <>
      <div className="header-source-handler">
        <div className="header-source">SOURCE</div>
        <div className="desc-source">Select Source</div>
        <div className="header-source-handler-buttons">
          <button onClick={() => { setManual(false); }}>
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
          <div className="source-settings-headers" style={{ marginTop: '-20px' }}>Content Source</div>
          <div className="table-name-info">
            <i className="fa fa-table" style={{ marginLeft: '7px', marginRight: '12px', color: '#0D953B', borderRadius: '4px' }}/>
            {forms.filter(form => form.id === foundItem.source.formID)[0].title}
          </div>
          <label className="source-headers" htmlFor="select-image">IMAGE</label>
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
          <label className="source-headers" htmlFor="select-header">HEADER</label>
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
          <label className="source-headers" htmlFor="select-description">DESCRIPTION</label>
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
          <label className="source-headers" htmlFor="select-description">PRICE</label>
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
