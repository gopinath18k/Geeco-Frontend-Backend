// src/components/SelectionTool.jsx
import React, { useState, useEffect } from "react";
import "./SelectionTool.css";

function SelectionTool({ question, onAnswer, currentAnswer, goToPreviousStep, canGoBack }) {
  const [inputValue, setInputValue] = useState(currentAnswer || "");

  useEffect(() => {
    setInputValue(currentAnswer || "");
  }, [question, currentAnswer]);

  const handleOptionChange = (optionId, nextSection) => {
    onAnswer(question.id, optionId, nextSection);
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleNextClick = () => {
    if (inputValue !== "") {
      onAnswer(question.id, inputValue, question.nextSection);
    } else {
      alert("Please select a value before continuing.");
    }
  };

  const isRangeQuestion =
    question.id.toLowerCase().includes("head") ||
    question.id.toLowerCase().includes("discharge");

  return (
    <div className="selection-tool">
      <h2 className="question-title">{question.question.split("-")[0]}</h2>
      <p className="question-subtext">
        {question.question.includes("HEAD")
          ? "Do you know how high you will need to pump water?"
          : question.question.includes("Discharge")
          ? "Do you know how much flow you will need to pump?"
          : ""}
      </p>

      {isRangeQuestion ? (
        <div className="range-container">
          <div className="range-labels">
            <span>
              ({question.min} {question.unit} – {question.max} {question.unit})
            </span>
          </div>
          <input
            type="range"
            className="range-slider"
            min={question.min}
            max={question.max}
            step="1"
            value={inputValue || question.min}
            onChange={handleRangeChange}
          />
          <div className="range-value">
            <strong>{inputValue || question.min} {question.unit}</strong>
          </div>
          <button className="next-btn" onClick={handleNextClick}>
            Next →
          </button>
        </div>
      ) : question.type === "input" ? (
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min={question.min}
            max={question.max}
            placeholder={`Enter value (${question.min}-${question.max} ${question.unit})`}
          />
          <button onClick={handleNextClick}>Next</button>
        </div>
      ) : (
        <div className="options">
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`option-button ${currentAnswer === option.id ? "selected" : ""}`}
              onClick={() => handleOptionChange(option.id, option.nextSection)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {canGoBack && (
        <button className="back-button" onClick={goToPreviousStep}>
          Back
        </button>
      )}
    </div>
  );
}

export default SelectionTool;
