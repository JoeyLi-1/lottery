import React from 'react';
import '../App.css';
import { Flipper, Flipped } from "react-flip-toolkit";
import _ from 'lodash';

interface IProps {
    name?: string;
}

interface IState {
    data: any;
    timer: any;
}

export class CardComponent extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            timer: undefined
        };
    }

    componentDidMount() {
        const data = [
            {id: 1, name: 'face'}, 
            {id: 2, name: 'back'}, 
            {id: 3, name: 'face'}, 
            {id: 4, name: 'back'},
            {id: 5, name: 'face'}, 
            {id: 6, name: 'back'}, 
            {id: 7, name: 'face'}, 
            {id: 8, name: 'back'}, 
            {id: 9, name: 'face'}
        ];
        this.setState({ data });
    }

    shuffleList = () => { 
        this.setState( {data: _.shuffle(this.state.data) });
    }

    renderColumn(index: number) {
        const column = [];
        const start = index * 3;
        const end = index * 3 + 3;
        for(let i = start; i < end; ++i) {
            const d = this.state.data[i];
            if(!d){
                continue;
            }
            column.push(<Flipped key={d.id} flipId={d.id}>
              <div className={d.name}></div>
            </Flipped>);
        }
        return column;
    }

    start = () => {
        const timer = setInterval(() => {
            this.shuffleList();
        }, 100);
        this.setState({ timer });
    }

    stop = () => {
        clearInterval(this.state.timer);
        this.setState({ timer: undefined });
    }

    render() {
        return (<Flipper flipKey={this.state.data.join("")}>
        <button onClick={this.start}> Start</button>
        <button onClick={this.stop}> Stop</button>
        <div className="grid">
            <div className="column">
                {this.renderColumn(0)}
            </div>
            <div className="column">
                {this.renderColumn(1)}
            </div>
            <div className="column">
                {this.renderColumn(2)}
            </div>
        </div>
    </Flipper>)
    }
}