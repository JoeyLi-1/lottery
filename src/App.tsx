import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardComponent } from './components/card.component';
import * as CustomItem from './custom/itemsConfig.json';

const App: React.FC = () => {
  const cards: any = [];
  CustomItem.items.forEach((item: any) => {
    cards.push(<CardComponent name={item.name}></CardComponent>);
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {cards}
        
      </header>
      <body>
      <button onClick={() => {}}>Change</button>
      </body>
      
    </div>
  );
}

export default App;
