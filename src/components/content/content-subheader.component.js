import React, { Component } from 'react';
import './theme/content-subheader.css';


class ContentSubheader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'LordOfTheRing',
        }
    }

    render() {
        const {title} = this.props;

        return (
            <div className="content-subheader">
                <div className="content-subheader__title">
                    {title}
                </div>
                <div className="content-subheader__line" />
            </div>
        );
    }

}

export default ContentSubheader;
