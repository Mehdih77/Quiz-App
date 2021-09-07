import { Button } from '@material-ui/core';
import './Result.css';

export default function Result({score}) {
    return (
        <div className='result'>
            <h2 className='title'>Your Final Score : {score}</h2>
            <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{marginTop: 20, alignSelf: 'center'}}
            href='/' >
                Go To Home Page
            </Button>
        </div>
    )
}
