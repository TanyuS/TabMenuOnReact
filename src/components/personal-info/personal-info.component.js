import React, { Component } from 'react';
import './personal-info.css';


class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 0,
            title: 0,
            ages: 0,
        }
    }

    render() {
        return (
            <div className="personal-info">
                <div className="personal-info__element">
                    <label className={
                        "personal-info__label " +
                        (this.checkIsSelected(this.state.name) ? "personal-info__label_selected" : "")
                    }>
                        Имя
                    </label>
                    <select
                        defaultValue={"0"}
                        className={
                            "personal-info__selectbox " +
                            (this.checkIsSelected(this.state.name) ? "personal-info__selectbox_selected" : "")
                        }
                        onChange={this.handleChange('name')}>
                        <option value="0">Имя</option>
                        <option value="1">Арагорн</option>
                        <option value="2">Рыжий </option>
                        <option value="3">Белый предатель</option>
                        <option value="4">Лесной маг-наркоман</option>
                    </select>
                </div>
                <div className="personal-info__element">
                    <label
                        className={
                            "personal-info__label " +
                            (this.checkIsSelected(this.state.title) ? "personal-info__label_selected" : "")
                        }>
                        Титул
                    </label>
                    <select
                        defaultValue={"0"}
                        className={
                            "personal-info__selectbox " +
                            (this.checkIsSelected(this.state.title) ? "personal-info__selectbox_selected" : "")
                        }
                        onChange={this.handleChange('title')}>
                        <option value="0">Титул</option>
                        <option value="1">Царь</option>
                        <option value="2">Предводитель дунэдайн </option>
                        <option value="3">Главный задрот на районе</option>
                        <option value="4">Растаман</option>
                    </select>
                </div>
                <div className="personal-info__element">
                    <label
                        className={
                            "personal-info__label " +
                            (this.checkIsSelected(this.state.ages) ? "personal-info__label_selected" : "")
                        }>
                        Годы жизни
                    </label>
                    <select
                        defaultValue={"0"}
                        className={
                            "personal-info__selectbox " +
                            (this.checkIsSelected(this.state.ages) ? "personal-info__selectbox_selected" : "")
                        }
                        onChange={this.handleChange('ages')}>
                        <option value="0">Годы жизни</option>
                        <option value="1">1245 - 1445</option>
                        <option value="2">1145 - 1323</option>
                        <option value="3">845 - c.y.</option>
                        <option value="4">1245 - 1445</option>
                    </select>
                </div>
            </div>
        );
    }

    handleChange = (selectType) => (value) => {
        const currentValue = Number(value.target.value);
        switch (selectType) {
            case 'name': {
                this.setState({
                    name: currentValue,
                });
                break;
            }
            case 'title': {
                this.setState({
                    title: currentValue,
                });
                break;
            }
            case 'ages': {
                this.setState({
                    ages: currentValue,
                });
                break;
            }
        }
        this.checkIsSelected(currentValue);
    };

    checkIsSelected = (value) => {
        return !!value;
    };
}

export default PersonalInfo;
