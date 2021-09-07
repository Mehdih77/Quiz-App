import { useEffect, useState } from 'react';
import './Quiz.css';
import Questions from '../../components/Questions/Questions';
import { CircularProgress } from '@material-ui/core';

export default function Quiz({name,questions,setQuestions,score,setScore}) {

    const [options, setOptions] = useState();
    const [currentQues, setCurrentQues] = useState(0);


    useEffect(() => {
        
        setOptions(
            questions &&
            handleShuffle([
                questions[currentQues].correct_answer,
                ...questions[currentQues].incorrect_answers,
            ])
        );
    }, [questions, currentQues])

    // for shuffle place of questions
    const handleShuffle = (optionsData) => {
        return optionsData.sort(() => Math.random() - 0.5);
    }
    
    return (
        <div className='quiz'>
            <span className="subtitle">Welcome, {name}</span>

            { questions ? (
                <>
                <div className='quizInfo'>
                    <span>{questions[currentQues].category} / {questions[currentQues].difficulty}</span>
                    <span>Score: {score}</span>
                </div>

                <Questions
                questions={questions}
                options={options}
                currentQues={currentQues}
                setCurrentQues={setCurrentQues}
                score={score}
                setScore={setScore}
                correct={questions[currentQues]?.correct_answer} />

                </>
            ) : <CircularProgress 
            style={{ margin: '100px'}}
            color='inherit'
            size={150}
            thickness={1} /> }
        </div>
    )
}