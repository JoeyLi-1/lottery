import React from 'react';
import { Flipper, Flipped } from "react-flip-toolkit";
import _ from 'lodash';
import SkyLight from 'react-skylight';
import { ImageButtonComponent } from './imageBtn.component';
import styles from './card';

interface IProps {
    name?: string;
}

interface IState {
    data: any;
    timer: any;
    simpleDialog: any;
}

export class CardComponent extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            timer: undefined,
            simpleDialog: undefined
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

    setModalRef = (ref: any) => {
        this.setState({ simpleDialog: ref });
    }

    openModal = () => {
        this.state.simpleDialog.show();
    }

    render() {
        return (
            <div>
                <ImageButtonComponent onClick={this.openModal}></ImageButtonComponent>
                <SkyLight 
                    hideOnOverlayClicked 
                    ref={this.setModalRef} 
                    dialogStyles={styles.dialogStyles}
                    transitionDuration={1000}>
                    <Flipper flipKey={this.state.data.join("")}>
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
                    </Flipper>
                    <button onClick={this.start}> Start</button>
                    <button onClick={this.stop}> Stop</button>
                </SkyLight>
            </div>)
    }
}