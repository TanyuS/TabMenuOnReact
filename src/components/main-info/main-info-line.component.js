import React, { Component } from 'react';
import './main-info-line.css';


class MainInfoLine extends Component {
    render() {
        const { data, isChosen } = this.props;

        return (
            <div className="main-info-line" onClick={this.handleClick}>
                <div className={"main-info-line__header" + (isChosen ? " main-info-line__header_chosen" : "")}>
                    <div className="main-info-line__name">{data.title}</div>
                    {!isChosen && <div className="main-info-line__count">{data.links.length}</div>}
                </div>
                {isChosen &&
                <div className="main-info-line__links links">
                    {data.links.map((link, index) =>
                        <a href={link.path} className="links__element" key={index}>
                            <div className="links-element__title">{link.title}</div>
                            <div className="links-element__subtitle">{link.subtitle}</div>
                        </a>
                    )}
                </div>
                }
            </div>
        );
    }

    handleClick = () => {
        const { data, isChosen, onClick } = this.props;
        !isChosen && onClick(data.id);
    }
}

export default MainInfoLine;
