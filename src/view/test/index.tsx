import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface TestProps {
    name: string;
}

interface TestState {
    count: number;
}

class Test extends React.Component<RouteComponentProps<TestProps>, TestState> {
    constructor (props: RouteComponentProps<TestProps>) {
        super(props);
        this.state = {
            count:0,
        };

        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        setInterval (this.increase, 1000);
    }

    increase = () => {
        const {count} = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        const {name} = this.props.match.params;
        const {count} = this.state;

        return (
            <React.Fragment>
                <h1>{name} counter</h1>
                <div>count value: {count}</div>
            </React.Fragment>
        )
    }
}

export default Test;