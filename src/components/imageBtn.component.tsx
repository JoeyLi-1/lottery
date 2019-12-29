import React from 'react';

interface ImageButtonComponentProps {
    oval?: boolean;
    onClick: Function;
    image?: string;
}

interface ImageButtonComponentStates {
    oval: boolean;
}

export class ImageButtonComponent extends React.Component<ImageButtonComponentProps, ImageButtonComponentStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            oval: true
        }
    }

    onClick = () => {
        this.props.onClick();
    }

    render() {
        return (
            <button className="CenterBtn" onClick={this.onClick}><img className="CenterBtnImg" src={require("../asset/open2.jpg")}></img></button>
        )
    }
}