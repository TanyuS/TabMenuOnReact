import React, { Component } from 'react';
import './subscribe.css';
import SubscribeFooter from "./subscribe-footer.component";


class Subscribe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubscribed: false,
        }
    }

    render() {

        return (
            <div className="subscribe">
                <div className="subscribe__text">
                    Хотите получать уведомления о новых скидках на&nbsp;маникюрчик? Мы пришлем Вам уведомление о&nbsp;запуске новых акций компании.
                </div>
                <SubscribeFooter onChange={this.handleChangeSubscribe} isSubscribed={this.state.isSubscribed} />
            </div>
        );
    }

    handleChangeSubscribe = () => {
        this.setState({
            isSubscribed: !this.state.isSubscribed,
        })
    }

}

export default Subscribe;
