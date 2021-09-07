import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Resualt/Result';
import axios from 'axios';

function App() {

    const [name, setName] = useState('');
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async(category = "", difficulty = "") => {
        const {data} = await axios.get(
        `https://opentdb.com/api.php?amount=10${
         category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

        setQuestions(data.results)
    };

    return (
        <BrowserRouter>
            <div
                className="app"
                style={{
                backgroundImage: 'url(./images/ques1.png)'
            }}>
                <Header/>
               
               <Switch>
                 <Route path='/' exact>
                    <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
                 </Route>
                 <Route path='/quiz'>
                    <Quiz 
                        name={name}
                        questions={questions}
                        setQuestions={setQuestions}
                        score={score}
                        setScore={setScore}
                    />
                 </Route>
                 <Route path='/result'>
                    <Result name={name} score={score} />
                 </Route>
               </Switch>
               
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
