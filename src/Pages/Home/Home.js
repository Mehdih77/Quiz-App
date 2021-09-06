import { useState } from 'react';
import './Home.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Categories from '../../components/Data/Categories';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';

export default function Home({name, setName, fetchQuestions}) {

    const [categories, setCategories] = useState('');
    const [difficulty, setdifficulty] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleStartQuiz = () => {
        if (!categories || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(categories,difficulty);
            history.push('/quiz')
        }
    }

    return (
        <main className='content'>
            <div className="settings">
                <span style={{fontSize: "30px"}}>Quiz Settings</span>

                <div className='settings__select'>

                {error && <ErrorMessage>Please Fill All The Fields</ErrorMessage>}
                    
                    <TextField
                    style={{marginBottom: "25px"}}
                    label='Enter Your Name'
                    variant='outlined'
                    onChange={(e) => setName(e.target.value)} />

                    <TextField
                    select
                    label='Select Category'
                    variant='outlined'
                    style={{marginBottom: "30px"}}
                    onChange={(e) => setCategories(e.target.value)}>
                    {Categories.map(catg => (
                        <MenuItem key={catg.category} value={catg.value} >{catg.category}</MenuItem>
                    ))}
                    </TextField>

                    <TextField
                    select
                    label='Select Difficulty'
                    variant='outlined'
                    style={{marginBottom: "30px"}}
                    onChange={(e) => setdifficulty(e.target.value)}>
                        <MenuItem key='Easy' value='easy'>Easy</MenuItem>
                        <MenuItem key='Medium' value='medium'>Medium</MenuItem>
                        <MenuItem key='Hard' value='hard'>Hard</MenuItem>
                    </TextField>

                    <Button 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={handleStartQuiz}>
                        Start Quiz
                    </Button>

                </div>
            </div>

            <img src="/images/quiz.svg" className='banner' alt="quiz" />
        </main>
    )
}
