// src/components/QuestionStep.jsx
import React, { useState, useEffect } from 'react';

function QuestionStep({ question, onAnswer, selectedAnswer, goToPreviousStep, canGoBack, goToNextStep, isNextDisabled }) {
  const [inputValue, setInputValue] = useState(selectedAnswer || '');
  const [inputError, setInputError] = useState('');

  // Update inputValue when question or selectedAnswer changes
  useEffect(() => {
    setInputValue(selectedAnswer || '');
    setInputError(''); // Clear error on new question
  }, [question, selectedAnswer]);

  const handleOptionClick = (optionId, nextQuestionId) => {
    onAnswer(question.id, optionId, nextQuestionId);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Clear error as user types
    if (inputError) setInputError('');
  };

  const handleNextClick = () => {
    if (question.type === 'numberInput') {
      const numValue = parseInt(inputValue);
      if (isNaN(numValue) || numValue < question.min || numValue > question.max) {
        setInputError(`Please enter a number between ${question.min} and ${question.max}.`);
        return;
      }
      onAnswer(question.id, numValue, question.nextQuestionId);
    } else {
      // This case should ideally not be reached if isNextDisabled handles it
      goToNextStep();
    }
  };

  const isCurrentSelectionMade = () => {
    if (question.type === 'radio') {
      return selectedAnswer !== undefined && selectedAnswer !== null;
    }
    if (question.type === 'numberInput') {
      const numValue = parseInt(inputValue);
      return !isNaN(numValue) && numValue >= question.min && numValue <= question.max;
    }
    return false;
  };

  return (
    <div className="question-step">
      <h3>{question.question}</h3>

      {question.type === 'radio' && (
        <div className="options-grid">
          {question.options.map(option => (
            <button
              key={option.id}
              className={`option-button ${selectedAnswer === option.id ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}`}
              onClick={() => !option.disabled && handleOptionClick(option.id, option.nextQuestionId)}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {question.type === 'numberInput' && (
        <div className="number-input-group">
          <input
            type="number"
            className="number-input-field"
            value={inputValue}
            onChange={handleInputChange}
            min={question.min}
            max={question.max}
            placeholder={`e.g., ${question.min}-${question.max}`}
          />
          {question.unit && <span className="unit">{question.unit}</span>}
          {inputError && <p style={{ color: 'red', fontSize: '0.9em', width: '100%', textAlign: 'left' }}>{inputError}</p>}
        </div>
      )}

      <div className="navigation-buttons">
        <button
          className="nav-button back"
          onClick={goToPreviousStep}
          disabled={!canGoBack}
        >
          Back
        </button>
        <button
          className="nav-button next"
          onClick={handleNextClick}
          disabled={!isCurrentSelectionMade() || isNextDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionStep;