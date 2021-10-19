import './App.css';
import {TodoPage} from './Components/Pages/TodoPage';
import {Show} from './Components/Pages/Show';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <TodoPage/>
                    </Route>
                    <Route path='/:id'>
                        <Show/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
