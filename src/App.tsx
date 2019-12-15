import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardComponent } from './components/card.component';
import SplitPane from 'react-split-pane';


export default class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <SplitPane split="vertical" minSize={500}>
                    <div className="border">
                        Test
                    </div>
                    <CardComponent></CardComponent>
                </SplitPane>
            </div>
        );
    }
}
