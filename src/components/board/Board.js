import React from "react";
import './Board.css'

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardHeight: window.innerHeight * 0.75,
            boardWidth: window.innerHeight * 0.75 / 0.6
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        if (windowWidth < windowHeight * 0.75 / 0.6) {
            this.setState({
                boardHeight: (windowWidth - 24) * 0.6,
                boardWidth: windowWidth - 24
            });
        } else {
            this.setState({
                boardHeight: windowHeight * 0.75,
                boardWidth: windowHeight * 0.75 / 0.6
            });
        }
    };

    render() {
        return <div className={'boardWrapper'} style={{height: this.state.boardHeight, width: this.state.boardWidth}}>
            <div className={'boardContent'}>
                {this.props.children}
            </div>
        </div>
    }


}
