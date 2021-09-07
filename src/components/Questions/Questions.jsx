import { useState } from 'react';
import './Questions.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function Questions({
questions,
setQuestions,
options,
currentQues,
setCurrentQues,
score,
setScore,
correct}) {
        
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    // for selecting right OR wrong answer
    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select"; // add className
        } else if (selected === i && selected !== correct) {
            return "wrong"; // add className
        } else if (i === correct) {
            return "select"; // add className
        }
    }

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) {
            setScore(score + 1);
        };
        setError(false)
    }


    return (
        <div className='question'>
        <h1>Question {currentQues + 1}</h1>
            
            <div className="singleQuestion">
                <h2>{questions[currentQues].question}</h2>

                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    {options && 
                    options.map(i => (
                        <button
                        onClick={() => handleCheck(i)}
                        className={`singleOption ${selected && handleSelect(i) }`}
                        key={i}
                        disabled={selected}>
                            {i}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}