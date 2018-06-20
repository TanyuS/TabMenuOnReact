import React, { Component } from 'react';
import './main-info.css';
import {MAIN_INFO_FIXTURE as data} from './main.info.fixture';
import MainInfoLine from "./main-info-line.component";


class MainInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLine: 1,
        }
    }

    render() {

        return (
            <div className="main-info">
                <div className="main-info__list">
                    {data.map(line => <MainInfoLine key={line.id} data={line} isChosen={line.id === this.state.currentLine} onClick={this.handleChangeLine}/>)}
                </div>

                <div className="main-info-footer">
                    <a href="/all-info" className="main-info-footer__link">
                        Подробная информация
                    </a>
                </div>
            </div>
        );
    }

    handleChangeLine = (lineId) => {
        this.setState({
            currentLine: lineId,
        })
    }

}

export default MainInfo;
