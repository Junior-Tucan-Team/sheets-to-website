import React, { useState } from 'react';
import { func, string } from 'prop-types';
import store from '../../redux/configureStore';
import './Styles/source.css';

const Source = ({ submissionsRequest }) => {
    const { forms } = store.getState().forms;
    const handleGetSubmissions = (e) => {
      submissionsRequest(e.target.value);
    };
  return (
    <div className="source-handler">
      {forms.map((form) =>
      (
        <button onClick={handleGetSubmissions} value={form.id}>
          {form.title}
        </button>
        ))}
    </div>
  );
  };

Source.propTypes = {
    submissionsRequest: func.isRequired
      };

export default Source;
