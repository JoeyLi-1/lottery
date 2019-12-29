import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardComponent } from './components/card.component';
import { OptionPanelComponent } from './components/optionPanel.component';
import { ResultPanelComponent } from './components/resultPanel.component';
import SplitPane from 'react-split-pane';


export default class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <CardComponent></CardComponent>
            </div>
        );
    }
}
