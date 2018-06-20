import React, { Component } from 'react';
import './subscribe-footer.css';
import * as SwitchOn from '../../sources/ic-switch-on.svg';
import * as SwitchOff from '../../sources/ic-switch-off.svg';


class SubscribeFooter extends Component {
    render() {
        const {isSubscribed, onChange} = this.props;

        return (
            <div className="subscribe-footer">
                <div className="subscribe-footer__text">
                    Оформить подписку
                </div>
                <div className="subscribe-footer__switcher" onClick={onChange}>
                    <img src={isSubscribed ?  SwitchOn : SwitchOff} alt="Switcher" />
                </div>
            </div>
        );
    }

}

export default SubscribeFooter;
