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

  const formIcon = () => (
    <svg className="form-icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.72447 23.9996C0.370813 23.9996 0.00141286 23.6349 0.00126736 22.2753C-0.000475642 10.0825 -0.000323471 13.8896 0.00113003 1.69685C0.00127403 0.399178 0.391312 0.0026907 1.6966 0.00239985C13.8991 -0.00079995 10.1017 -0.00079995 22.3043 0.00239985C23.5912 0.0026907 23.998 0.41474 23.9983 1.70689C24.0006 13.8997 24.0005 10.0926 23.9986 22.2853C23.9983 23.6297 23.6172 23.9994 22.2595 23.9996C16.1583 24.0003 18.0569 23.9999 11.9557 23.9999C5.87864 23.9999 7.80156 24.0003 1.72447 23.9996ZM21.8516 22.2857C22.0913 22.2857 22.2857 22.0913 22.2857 21.8516V17.1763C22.2857 16.9365 22.0913 16.7421 21.8516 16.7421H17.1763C16.9365 16.7421 16.7421 16.9365 16.7421 17.1763V21.8516C16.7421 22.0913 16.9365 22.2857 17.1763 22.2857H21.8516ZM9.66233 22.2857H14.3377C14.5774 22.2857 14.7718 22.0913 14.7718 21.8516V17.1763C14.7718 16.9365 14.5774 16.7421 14.3377 16.7421H9.66233C9.42256 16.7421 9.22819 16.9365 9.22819 17.1763V21.8516C9.22819 22.0913 9.42256 22.2857 9.66233 22.2857ZM2.14841 22.2857H6.82374C7.0635 22.2857 7.25788 22.0913 7.25788 21.8516V17.1763C7.25788 16.9365 7.0635 16.7421 6.82374 16.7421H2.14841C1.90864 16.7421 1.71427 16.9365 1.71427 17.1763V21.8516C1.71427 22.0913 1.90864 22.2857 2.14841 22.2857ZM17.1763 14.7718H21.8516C22.0913 14.7718 22.2857 14.5774 22.2857 14.3377V9.66234C22.2857 9.42257 22.0913 9.2282 21.8516 9.2282H17.1763C16.9365 9.2282 16.7421 9.42257 16.7421 9.66234V14.3377C16.7421 14.5774 16.9365 14.7718 17.1763 14.7718ZM9.66233 14.7718H14.3377C14.5774 14.7718 14.7718 14.5774 14.7718 14.3377V9.66234C14.7718 9.42257 14.5774 9.2282 14.3377 9.2282H9.66233C9.42256 9.2282 9.22819 9.42257 9.22819 9.66234V14.3377C9.22819 14.5774 9.42256 14.7718 9.66233 14.7718ZM2.14841 14.7718H6.82374C7.0635 14.7718 7.25788 14.5774 7.25788 14.3377V9.66234C7.25788 9.42257 7.0635 9.2282 6.82374 9.2282H2.14841C1.90864 9.2282 1.71427 9.42257 1.71427 9.66234V14.3377C1.71427 14.5774 1.90864 14.7718 2.14841 14.7718ZM9.66233 7.25788H14.3377C14.5774 7.25788 14.7718 7.1405 14.7718 6.99569V4.17203C14.7718 4.02723 14.5774 3.90984 14.3377 3.90984H9.66233C9.42256 3.90984 9.22819 4.02723 9.22819 4.17203V6.99569C9.22819 7.1405 9.42256 7.25788 9.66233 7.25788ZM17.1623 7.25788H21.8377C22.0774 7.25788 22.2718 7.1405 22.2718 6.99569V4.17203C22.2718 4.02723 22.0774 3.90984 21.8377 3.90984H17.1623C16.9226 3.90984 16.7282 4.02723 16.7282 4.17203V6.99569C16.7282 7.1405 16.9226 7.25788 17.1623 7.25788ZM2.14841 7.25788H6.82374C7.0635 7.25788 7.25788 7.1405 7.25788 6.99569V4.17203C7.25788 4.02723 7.0635 3.90984 6.82374 3.90984H2.14841C1.90864 3.90984 1.71427 4.02723 1.71427 4.17203V6.99569C1.71427 7.1405 1.90864 7.25788 2.14841 7.25788Z" fill="#0099FF"/>
    </svg>
  );

  const blueTickIcon = () => (
    <svg className="blue-tick-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#4277FF"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.7217 7.9145C17.3507 7.54348 16.7492 7.54348 16.3781 7.9145L10.3558 13.9368L7.62185 11.2028C7.25083 10.8318 6.64929 10.8318 6.27827 11.2028C5.90724 11.5739 5.90724 12.1754 6.27827 12.5464L9.68404 15.9522C10.0551 16.3232 10.6566 16.3232 11.0276 15.9522L17.7217 9.25808C18.0928 8.88706 18.0928 8.28552 17.7217 7.9145Z" fill="white"/>
    </svg>
  );

  return (
    <div className="autoComplete">
      <input type="text" value={value} onChange={handleValueChange} placeholder="Search in your tables"/>
      {suggestions?.length ? (
        <div className="suggestions">
          {suggestions.map(suggestion => {
            if (suggestion.id === selectedTable) {
              return (
                <button
                  style={{ border: '2px solid rgb(50, 142, 218)' }}
                  onClick={(e) => {
                    setFormID(suggestion.id);
                    setSelectedTable(suggestion.id);
                    }
                  }
                >
                  {formIcon()}
                  <div className="suggestion-title-div">
                    <div className="suggestion-title-divf">{suggestion.title}</div>
                    <span className="suggestion-count-span">{suggestion.count} submissions. Modified on
                      {splitDate(suggestion.updated_at)}
                    </span>
                  </div>
                  {blueTickIcon()}
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
                  {formIcon()}
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
