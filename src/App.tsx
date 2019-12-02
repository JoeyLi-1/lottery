import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardComponent } from './components/card.component';
import * as CustomItem from './custom/itemsConfig.json';
import RGL, { WidthProvider } from "react-grid-layout";

const App: React.FC = () => {
  const cards: any = [];
  // CustomItem.items.forEach((item: any) => {
  //   cards.push();
  // });

  const ReactGridLayout = WidthProvider(RGL);

  const layout = [
    {i: '1', x: 0, y: 0, w: 1, h: 1, static: true},
    {i: '2', x: 0, y: 1, w: 1, h: 1, static: true},
    {i: '3', x: 0, y: 2, w: 1, h: 1, static: true},
    {i: '4', x: 1, y: 0, w: 1, h: 1, static: true},
    {i: '5', x: 1, y: 1, w: 1, h: 1, static: true},
    {i: '6', x: 1, y: 2, w: 1, h: 1, static: true},
    {i: '7', x: 2, y: 0, w: 1, h: 1, static: true},
    {i: '8', x: 2, y: 1, w: 1, h: 1, static: true},
    {i: '9', x: 2, y: 2, w: 1, h: 1, static: true}
  ];

  for(let i = 0; i < 9; ++i) {
    cards.push(<CardComponent name={i.toString()}></CardComponent>)
  }
  return (
    <div className="App">
      <ReactGridLayout layout={layout} onLayoutChange={() => {}}>
        <div key='1'><span className="text">1</span></div>
        <div key='2'><span className="text">2</span></div>
        <div key='3'><span className="text">3</span></div>
        <div key='4'><span className="text">4</span></div>
        <div key='5'><span className="text">5</span></div>
        <div key='6'><span className="text">6</span></div>
        <div key='7'><span className="text">7</span></div>
        <div key='8'><span className="text">8</span></div>
        <div key='9'><span className="text">9</span></div>
      </ReactGridLayout>
    </div>
  );
}

export default App;
