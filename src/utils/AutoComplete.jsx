import React, { useState, useEffect, useCallback } from 'react';
import { func, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { splitDate } from './adjustModifiedDate';

const AutoComplete = ({ value, onChange, search, setFormID }) => {
  const [suggestions, setSuggestions] = useState();
  const [selectedTable, setSelectedTable] = useState('');
  const handleValueChange = e => onChange(e.target.value);
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  const findSuggestions = useCallback(newValue => {
    const newSuggestions = search(value);
    setSuggestions(newSuggestions);
  }, [search, value]);

  useEffect(() => {
    findSuggestions(value);
  }, [value]);

  return (
    <div className="autoComplete">
      <input type="text" value={value} onChange={handleValueChange} placeholder="Search in your tables"/>
      {suggestions?.length ? (
        <div className="suggestions">
          {suggestions.map(suggestion => {
            if (suggestion.id === selectedTable) {
              return (
                <button
                  style={{ border: '3px solid rgb(50, 142, 218)' }}
                  onClick={(e) => {
                    setFormID(suggestion.id);
                    setSelectedTable(suggestion.id);
                    }
                  }
                >
                  <i className="fa fa-table suggestion-icon-first" aria-hidden="true"/>
                  <div className="suggestion-title-div">
                    <div className="suggestion-title-divf">{suggestion.title}</div>
                    <span className="suggestion-count-span">{suggestion.count} submissions. Modified on
                      {splitDate(suggestion.updated_at)}
                    </span>
                  </div>
                </button>
              );
            } else {
              return (
                <button
                  onClick={(e) => {
                    setFormID(suggestion.id);
                    setSelectedTable(suggestion.id);
                  }
                }
                >
                  <i className="fa fa-table suggestion-icon-first" aria-hidden="true"/>
                  <div className="suggestion-title-div">
                    <div className="suggestion-title-divf">{suggestion.title}</div>
                    <span className="suggestion-count-span">{suggestion.count} submissions. Modified on
                      {splitDate(suggestion.updated_at)}
                    </span>
                  </div>
                </button>
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
};



AutoComplete.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  search: func.isRequired,
  setFormID: func.isRequired,
};

export default AutoComplete;
