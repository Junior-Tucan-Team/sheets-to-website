import React, { useState } from 'react';
import { func, string } from 'prop-types';
import store from '../../redux/configureStore';

const Source = ({ questionsRequest }) => {
    const { forms } = store.getState().forms;
    const handleGetQuestions = (e) => {
    questionsRequest(e.target.value);
    };
  return (
    <>
      {forms.map((form) =>
      (
        <button onClick={handleGetQuestions} value={form.id}>
          {form.title}
        </button>
        ))}
    </>
  );
  };

Source.propTypes = {
    questionsRequest: func.isRequired
      };

export default Source;
