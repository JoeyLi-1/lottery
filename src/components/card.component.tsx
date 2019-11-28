import React from 'react';
import './card.css';

interface IProps {
    name: string;
}

interface IState {
    face: boolean;
}

export class CardComponent extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            face: true
        };
    }

    render() {
        if(this.state.face) {
            return (<div className="white">{this.props.name}</div>);
        } else {
            return (<div className="grey">{this.props.name}</div>);
        }
    }
}