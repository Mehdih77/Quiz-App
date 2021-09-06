import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Resualt/Result';

function App() {
    return (
        <BrowserRouter>
            <div
                className="app"
                style={{
                backgroundImage: 'url(./images/ques1.png)'
            }}>
                <Header/>
               
               <Switch>
                 <Route path='/' component={Home} />
                 <Route path='/quiz' component={Quiz} />
                 <Route path='/result' component={Result} />
               </Switch>
               
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
