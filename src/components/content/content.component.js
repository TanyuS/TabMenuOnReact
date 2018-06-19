import React, { Component } from 'react';
import './theme/content.css';
import ContentHeader from "./content-header.component";
import PersonalInfo from "../personal-info/personal-info.component";
import ContentSubheader from "./content-subheader.component";
import MainInfo from "../main-info/main-info.component";
import Subscribe from "../subscribe/subscribe.component";


class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTab: 'Subscribe',
		}
	}

	render() {
		const {currentTab} = this.state;

		return (
	    	<div className="content">
				<ContentHeader currentTab={currentTab} onChangeTab={this.onChangeTab} />
				<div className="content__body">
					<ContentSubheader title={this.getTitle()} />
					{this.renderBody()}
				</div>
	    	</div>
		);
	}

    onChangeTab = (currentTab) => {
        this.setState({
            currentTab,
        });
    };

    renderBody = () => {
		switch (this.state.currentTab) {
			case 'LordOfTheRing': {
				return <PersonalInfo />
			}
            case 'Ono': {
                return <MainInfo />
            }
            case 'Subscribe': {
                return <Subscribe />
            }
		}
	};

    getTitle = () => {
		switch (this.state.currentTab) {
			case 'LordOfTheRing': {
				return 'Личная карточка'
			}
			case 'Ono': {
				return 'Основная информация'
			}
			case 'Subscribe': {
				return 'Подписка'
			}
		}
	};
}

export default Content;
