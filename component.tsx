import * as React from 'react';

interface HelloName {
    name : string;
}

export class Hello extends React.Component<HelloName, {name:string}> {
    constructor(props : HelloName) {
        super(props);
        this.state = {name:props.name};
        this.props;
    }

    render() {
        return <div>Hello, {this.state.name}</div>;
    }
}