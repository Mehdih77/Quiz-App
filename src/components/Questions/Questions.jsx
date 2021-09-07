import { useState } from 'react';
import './Questions.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

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
    const history = useHistory();

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

    const handleNextQuestion = () => {
        if (currentQues > 8) {
            history.push('/result');
        } else if (selected) {
            setCurrentQues(currentQues + 1);
            setSelected();
        } else {
            setError('Please Select An Option First');
        }
    };

    const handleQuit = () => {
        history.push('/')
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
                <div className="controls">
                    <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    style={{width: 185}}
                    onClick={handleQuit}>
                        Quit
                    </Button>
                    <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    style={{width: 185}}
                    onClick={handleNextQuestion}>
                        Next Question
                    </Button>
                </div>
            </div>
        </div>
    )
}