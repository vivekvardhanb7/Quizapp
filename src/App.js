import React, { useState } from 'react';
import aptitudeQuestions from './Components/aptitudeQuestions';
import pythonQuestions from './Components/pythonQuestions';
import javaQuestions from './Components/javaQuestions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the CSS file

function App() {
  const [subject, setSubject] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // State for selected option

  const handleAnswerOptionClick = () => {
    const isCorrect = selectedOption === questions[subject][questionIndex].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions[subject].length) {
      setQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
    // Reset selected option after clicking submit
    setSelectedOption(null);
  };

  const handleSubjectChange = (newSubject) => {
    setSubject(newSubject);
    setQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const questions = {
    aptitude: aptitudeQuestions,
    python: pythonQuestions,
    java: javaQuestions
  };

  const getPerformanceMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) {
      return "Excellent job! You're a master!";
    } else if (percentage >= 70) {
      return "Good job! Keep practicing to improve!";
    } else if (percentage >= 50) {
      return "You did well, but there's room for improvement.";
    } else {
      return "Don't worry, keep practicing and you'll get better!";
    }
  };

  return (
    <div className="container"> 
      <header>
        <h1>Quiz App - {subject ? `${subject.charAt(0).toUpperCase() + subject.slice(1)} ` : 'Home'}</h1>
      </header>
      <div className="buttons">
        <button className="btn btn-primary" onClick={() => handleSubjectChange('python')}>Python</button>
        <button className="btn btn-primary" onClick={() => handleSubjectChange('java')}>Java</button>
        <button className="btn btn-primary" onClick={() => handleSubjectChange('aptitude')}>Aptitude</button>
      </div>

      {subject && questions[subject] && !showScore ? (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {questionIndex + 1}</span>/{questions[subject].length}
            </div>
            <div className='question-text'>{questions[subject][questionIndex].question}</div>
          </div>
          <div className='answer-section'>
            {questions[subject][questionIndex].options.map((option) => (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id={option.id}
                  name="option"
                  value={option.id}
                  checked={option.id === selectedOption}
                  onChange={() => setSelectedOption(option.id)} // Update selected option on change
                />
                <label className="form-check-label" htmlFor={option.id}>{option.text}</label>
              </div>
            ))}
            <button className="btn btn-primary" onClick={handleAnswerOptionClick}>
              {questionIndex < questions[subject].length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </>
      ) : (
        <>
          {subject && questions[subject] ? (
            <div className='score-section'>
              You scored {score} out of {questions[subject].length}
              <div>{getPerformanceMessage(score, questions[subject].length)}</div>
            </div>
          ) : null}
          <button className="btn btn-primary" onClick={() => handleSubjectChange(subject)}>Retake {subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : ''} Quiz</button>
        </>
      )}

      <footer>
        <p>Quiz App by Vivek</p>
      </footer>
    </div>
  );
}

export default App;
