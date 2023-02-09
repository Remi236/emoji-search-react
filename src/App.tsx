import React, { useState } from 'react';
import { EmojiGrid } from './components/EmojiGrid';
import { SearchInput } from './components/SearchInput';
import './styles/App.css';
import './styles/Emoji.css';

const App = () =>  {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Search App</h1>
      </header>
      <main id='content'>
        <section className='emoji-wrap'>
          <SearchInput handleSearch={setSearch}/>
          <EmojiGrid search={search}/>
        </section>
      </main>
      <footer>
        <p className="copyright">
          © 2023 by Remi Kykoyubi. All rights reversed
        </p>
      </footer>
    </div>
  )
};

export default App;
