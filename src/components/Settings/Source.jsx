import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import { getQuestionsRequest } from '../../redux/actions';
import { filterByQuestionType } from '../../utils/filterBy';
import { splitDate } from '../../utils/adjustModifiedDate';
import AutoComplete from '../../utils/AutoComplete';
import './Styles/source.css';


const Source = ({ submissionsRequest, updateField, settingsKey: key }) => {
  const [value, setValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState({
    entries: [],
    questions: []
  });
  const [formID, setFormID] = useState('');
  const forms = useSelector((state) => state.forms.forms);
  const questions = useSelector((state) => state.questions.questions[formID]);
  const dispatch = useDispatch();
  const handleGetSubmissions = async (e) => {
    await submissionsRequest(e.target.value);
    setTimeout(() => {
      setSource({
        ...source, entries: store.getState().submissions.submissions
      });
    }, 1000);
  };

  const searchFunction = search => forms.filter(item => item.title.startsWith(search));

  const renderForms = () => (
    <div className="source-pop-up">
      <div className="source-handler">
        <div className="source-pop-up-header">
          <div>
            <img src="" alt="placeHolder"/>
            <span>Select from Table</span>
          </div>
          <button onClick={() => { setIsOpen(!isOpen); setValue(); }}>X</button>
        </div>
        <div className="source-select-section">
          <span>Select a Table</span>
          <span>Choose which form you want to take action with the button</span>
          <AutoComplete
            value={value}
            onChange={setValue}
            search={searchFunction}
            key={key}
            updateField={updateField}
            setFormID={setFormID}
            setIsOpen={setIsOpen} //     Should be removed after implementation of Next Button
          />
          {value ?
            <></> :
            forms.map((form) =>
              (
                <button
                  onClick={(e) => {
                    dispatch(getQuestionsRequest(form.id));
                    setFormID(form.id);
                    dispatch(updateField({
                      formID: form.id
                    }, key));
                    setIsOpen(!isOpen);
                  }
                }
                  value={form.id}
                >
                  {form.title}
                  <br/>
                  <span>{form.count} submissions. Modified on
                    {splitDate(form.updated_at)}
                  </span>
                </button>
              ))
          }

        </div>
        <div className="source-select-buttons">
          <button onClick={() => { setIsOpen(!isOpen); setValue(); }}>Back</button>
          <button>Next</button>
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
      { formID ? (
        <div className="select-handler">

          <label htmlFor="select-image">IMAGE</label>
          <select
            id="select-image"
          >
            {filterByQuestionType(['control_upload'])(questions).map((column) => (
              <option value={column}>
                {questions[column].text}
              </option>))
    }
          </select>
          <label htmlFor="select-header">HEADER</label>
          <select id="select-header">
            {filterByQuestionType(['control_textbox'])(questions).map((column) => (
              <option>
                {questions[column].text}
              </option>))
    }
          </select>
          <label htmlFor="select-description">DESCRIPTION</label>
          <select id="select-description">
            {filterByQuestionType(['control_textarea', 'control_textbox'])(questions).map((column) => (
              <option>
                {questions[column].text}
              </option>))
    }
          </select>
        </div>) : null}
    </>
  );
  };


Source.propTypes = {
    submissionsRequest: func.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

export default Source;
