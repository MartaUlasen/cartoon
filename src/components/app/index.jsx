import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CharacterList from 'components/characterList';
import Character from 'components/character';
import './index.scss';

const App = () => (
    <div className='app' data-testid='app'>
        <header className='header'>
            <Link to='/' className='logo'>The Rick and Morty</Link>
        </header>
        <main className='main'>
            <Switch>
                <Route exact path='/' component={CharacterList} />
                <Route exact path='/characters/:id' render={({ match: { params: { id } } }) => <Character id={id} />} />
            </Switch>
        </main>
    </div>
);

export default App;
