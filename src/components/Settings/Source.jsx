import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsRequest, submissionsRequest } from '../../redux/actions';
import { filterByQuestionType } from '../../utils/filterBy';
import AutoComplete from '../../utils/AutoComplete';
import { updateSubmissionsRequest } from '../../redux/actions/submissionActions';
import './Styles/source.css';


const tableIcon = () => (
  <svg className="table-icon-green" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="4" fill="#54B45C"/>
    <rect width="40" height="40" rx="4" fill="url(#paint0_linear_748:6247)"/>
    <path d="M11.4371 29.9996C10.309 29.9996 10.0012 29.6958 10.0011 28.5628C9.9996 18.4021 9.99973 21.5747 10.0009 11.414C10.0011 10.3326 10.3261 10.0022 11.4138 10.002C21.5826 9.99933 18.4181 9.99933 28.5869 10.002C29.6594 10.0022 29.9983 10.3456 29.9985 11.4224C30.0005 21.583 30.0004 18.4105 29.9988 28.5711C29.9986 29.6914 29.681 29.9995 28.5496 29.9996C23.4652 30.0003 25.0474 29.9999 19.9631 29.9999C14.8989 29.9999 16.5013 30.0003 11.4371 29.9996ZM28.2096 28.5714C28.4095 28.5714 28.5714 28.4095 28.5714 28.2096V24.3135C28.5714 24.1137 28.4095 23.9518 28.2096 23.9518H24.3135C24.1137 23.9518 23.9518 24.1137 23.9518 24.3135V28.2096C23.9518 28.4095 24.1137 28.5714 24.3135 28.5714H28.2096ZM18.0519 28.5714H21.948C22.1479 28.5714 22.3098 28.4095 22.3098 28.2096V24.3135C22.3098 24.1137 22.1479 23.9518 21.948 23.9518H18.0519C17.8521 23.9518 17.6902 24.1137 17.6902 24.3135V28.2096C17.6902 28.4095 17.8521 28.5714 18.0519 28.5714ZM11.7903 28.5714H15.6864C15.8863 28.5714 16.0482 28.4095 16.0482 28.2096V24.3135C16.0482 24.1137 15.8863 23.9518 15.6864 23.9518H11.7903C11.5905 23.9518 11.4286 24.1137 11.4286 24.3135V28.2096C11.4286 28.4095 11.5905 28.5714 11.7903 28.5714ZM24.3135 22.3098H28.2096C28.4095 22.3098 28.5714 22.1479 28.5714 21.9481V18.0519C28.5714 17.8521 28.4095 17.6902 28.2096 17.6902H24.3135C24.1137 17.6902 23.9518 17.8521 23.9518 18.0519V21.9481C23.9518 22.1479 24.1137 22.3098 24.3135 22.3098ZM18.0519 22.3098H21.948C22.1479 22.3098 22.3098 22.1479 22.3098 21.9481V18.0519C22.3098 17.8521 22.1479 17.6902 21.948 17.6902H18.0519C17.8521 17.6902 17.6902 17.8521 17.6902 18.0519V21.9481C17.6902 22.1479 17.8521 22.3098 18.0519 22.3098ZM11.7903 22.3098H15.6864C15.8863 22.3098 16.0482 22.1479 16.0482 21.9481V18.0519C16.0482 17.8521 15.8863 17.6902 15.6864 17.6902H11.7903C11.5905 17.6902 11.4286 17.8521 11.4286 18.0519V21.9481C11.4286 22.1479 11.5905 22.3098 11.7903 22.3098ZM18.0519 16.0482H21.948C22.1479 16.0482 22.3098 15.9504 22.3098 15.8297V13.4767C22.3098 13.356 22.1479 13.2582 21.948 13.2582H18.0519C17.8521 13.2582 17.6902 13.356 17.6902 13.4767V15.8297C17.6902 15.9504 17.8521 16.0482 18.0519 16.0482ZM24.3019 16.0482H28.198C28.3979 16.0482 28.5598 15.9504 28.5598 15.8297V13.4767C28.5598 13.356 28.3979 13.2582 28.198 13.2582H24.3019C24.1021 13.2582 23.9402 13.356 23.9402 13.4767V15.8297C23.9402 15.9504 24.1021 16.0482 24.3019 16.0482ZM11.7903 16.0482H15.6864C15.8863 16.0482 16.0482 15.9504 16.0482 15.8297V13.4767C16.0482 13.356 15.8863 13.2582 15.6864 13.2582H11.7903C11.5905 13.2582 11.4286 13.356 11.4286 13.4767V15.8297C11.4286 15.9504 11.5905 16.0482 11.7903 16.0482Z" fill="white"/>
    <circle cx="28" cy="28" r="7" fill="#C4C4C4"/>
    <circle cx="28" cy="28" r="7" fill="url(#paint1_linear_748:6247)"/>
    <path d="M28.4596 26.9598L24.9667 26.9598C24.4654 26.9598 24.0586 27.3667 24.0586 27.8679C24.0586 28.3692 24.4654 28.7761 24.9667 28.7761L28.4596 28.7761L28.4596 31.5005L33.0002 27.8679L28.4596 24.2354L28.4596 26.9598Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_748:6247" x1="40" y1="20.4447" x2="0.0133062" y2="20.4442" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0CDEAC"/>
        <stop offset="0.807292" stopColor="#13E17E"/>
      </linearGradient>
      <linearGradient id="paint1_linear_748:6247" x1="35" y1="28.1556" x2="21.0047" y2="28.1555" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0CDEAC"/>
        <stop offset="0.807292" stopColor="#13E17E"/>
      </linearGradient>
    </defs>
  </svg>
);

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
  const dispatch = useDispatch();
  const renderForms = () => (
    <div className="source-pop-up">
      <div className="source-handler">
        <div className="source-pop-up-header">
          <div>
            {tableIcon()}
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
            className="source-next-button"
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
              {/* <div className="submission-number">0</div> */}
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
            {/* {submissionID} */}
            <div className="manual-edit-submission">
              <button onClick={changeEditMode} className="manual-back-button">
                <i className="fa fa-angle-left"/>
                BACK
              </button>
              <label htmlFor="manualImg" className="font-header-class image-header-class">
                IMAGE
                <button className="choose-a-file-button">
                  <label htmlFor="manualImg">CHOOSE A FILE</label>
                  <input
                    id="manualImg"
                    type="file"
                    accept="image/*"
                    alt="image"
                    className="manual-inputs"
                    style={{ display: 'none' }}
                  //   value={urlToObject(submissions.find(sub => sub.id === submissionID)
                  // .answers[foundItem.source.image].answer)}
                  />
                </button>
              </label>
              <div className="wide-horizontal-line" />
              <label htmlFor="manual-header">
                <div className="font-header-class">HEADER</div>
                <div className="font-description-class">Heading Text</div>
                <input
                  type="text"
                  className="manual-inputs"
                  id="manual-header"
                  name={foundItem.source.header}
                  defaultValue={submissions.find(sub => sub.id === submissionID)
                    .answers[foundItem.source.header].answer}
                  onBlur={modifySubmissions}
                />
              </label>
              <label htmlFor="manual-desc">
                <div className="font-header-class">DESCRIPTION</div>
                <div className="font-description-class">Description Text</div>
                <input
                  type="text"
                  className="manual-inputs manual-inputs-desc"
                  id="manual-desc"
                  name={foundItem.source.description}
                  defaultValue={submissions.find(sub => sub.id === submissionID)
                    .answers[foundItem.source.description].answer}
                  onBlur={modifySubmissions}
                />
              </label>
              <label htmlFor="manual-price">
                <div className="font-header-class">PRICE</div>
                <div className="font-description-class">Price Text</div>
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
            <div className="wide-horizontal-line" />
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
