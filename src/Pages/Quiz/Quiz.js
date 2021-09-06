import { useEffect } from 'react';
import { useState } from 'react';
import './Quiz.css';

export default function Quiz({name,questions,setQuestions,score,setScore}) {

    const [options, setOptions] = useState();
    const [currentQues, setCurrentQues] = useState(0);

    const handleShuffle = (optionsData) => {
        return optionsData.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currentQues]?.correct_answer,
                ...questions[currentQues]?.incorrect.answer,
            ])
        );
    }, [questions])


    return (
        <div>
            quiz
        </div>
    )
}