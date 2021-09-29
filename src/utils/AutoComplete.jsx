import React, { useState, useEffect, useCallback } from 'react';
import { func, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { getQuestionsRequest } from '../redux/actions/questionActions';
import { splitDate } from './adjustModifiedDate';

const AutoComplete = ({ value, onChange, search, key, updateField, setFormID, setIsOpen }) => {
  const [suggestions, setSuggestions] = useState();
  const handleValueChange = e => onChange(e.target.value);
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  const findSuggestions = useCallback(newValue => {
    if (!newValue) {
      return setSuggestions();
    }
    const newSuggestions = search(value);
    setSuggestions(newSuggestions);
  }, [search, value]);

  useEffect(() => {
    findSuggestions(value);
  }, [value]);

  return (
    <div className="autoComplete">
      <input type="text" value={value} onChange={handleValueChange} />
      {suggestions?.length ? (
        <div className="suggestions">
          {suggestions.map(suggestion => (
            <button
              onClick={(e) => {
                dispatch(getQuestionsRequest(suggestion.id));
                setFormID(suggestion.id);
                dispatch(updateField({
                  formID: suggestion.id
                }, key));
                setIsOpen(false);//   Should be removed after implementation of Next Button
              }
            }
            >
              {suggestion.title}
              <br/>
              <span>{suggestion.count} submissions. Modified on
                {splitDate(suggestion.updated_at)}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};



AutoComplete.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  search: func.isRequired,
  key: string.isRequired,
  updateField: func.isRequired,
  setFormID: func.isRequired,
  setIsOpen: func.isRequired
};

export default AutoComplete;
