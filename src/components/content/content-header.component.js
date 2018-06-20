import React, { Component } from 'react';
import './theme/content-header.css';
import * as Gandalf from '../../sources/ic-gandalf.svg';
import * as Clown from '../../sources/ic-clown.svg';
import * as Manicure from '../../sources/ic-nail.svg';


class ContentHeader extends Component {
	render() {
		const { currentTab } = this.props;

		return (
	    	<div className="header">
				<div
					className={"header__element " + (currentTab === 'LordOfTheRing' ? "header__element_active" : '')}
					onClick={this.handleChangeTab('LordOfTheRing')}>
					<div className="header-element__icon">
						<img src={Gandalf} alt="Gandalf" />
					</div>
					<div className="header-element__text" >
						Властелин колец
					</div>
				</div>
				<div className={"header__element " + (currentTab === 'Ono' ? "header__element_active" : '')}
					 onClick={this.handleChangeTab('Ono')}>
					<div className="header-element__icon">
						<img src={Clown} alt="Clown" />
					</div>
					<div className="header-element__text" >
						Оно
					</div>
				</div>
				<div className={"header__element " + (currentTab === 'Subscribe' ? "header__element_active" : '')}
					 onClick={this.handleChangeTab('Subscribe')}>
					<div className="header-element__icon">
						<img src={Manicure} alt="Nails" />
					</div>
					<div className="header-element__text" >
						Скидки на маникюрчик
					</div>
				</div>
	    	</div>
		);
	}

    handleChangeTab = (tab) => () => {
		this.props.onChangeTab(tab);
    }
}

export default ContentHeader;
