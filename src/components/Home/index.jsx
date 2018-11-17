import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { URLS } from '../../utils';
import './index.scss';

export default class Home extends React.Component {
    state = {
        parts: {
            goals: 45,
            spent: 25,
            free: 30
        },

        balance : 20400,
        current_goal: {
            name: "iPhone Xs max 256GB",
            cost: 120000,
            image: 'iPhone_XS'
        },

        recomendations: [
            { key: 1, icon: "ticket", content: "Мероприятия" },
            { key: 2, icon: "shopping cart", content: "Одежда" }
        ],

        news: [
            { avatar: "guy_avatar", content: "Владос накопил на Xiaomi" },
            { avatar: "woman_avatar", content: "Паша прочитал Коран" }
        ],

        mainGoalProgress: 36
    }

    onNewsMoreClick = (index) => {
        console.log(this.state.news[index].content)
    }

    onGoalMoreClick = () => {
        console.log('Goal clicked')
    }

    onPlusClick = () => {
        console.log('Add free limit')
    }

    render() {
        const { parts, balance, current_goal: goal } = this.state,
            percent = Math.floor(balance / goal.cost * 100)

        return(
            <div>
                <div className="page-header">
                    <div className="money-title">Свободные средства</div>
                    <div className="container">
                        <div className="money">64.000₽</div>
                        <img className="plus-button" src={ require('../../assets/plus-button.png') } onClick={ this.onPlusClick } alt="plus-button" />
                    </div>
                </div>

                <div className="diagram-bar">
                    <div className="goals part" style={{ width: parts.goals + '%' }}></div>
                    <div className="spent part" style={{ width: parts.spent + '%' }}></div>
                    <div className="free part" style={{ width: parts.free + '%' }}></div>
                </div>

                <div className="diagram-legend">
                    <div className="goals legend"><div className="dot" />{ parts.goals + '%' } — цели</div>
                    <div className="spent legend"><div className="dot" />{ parts.spent + '%' } — расходы</div>
                    <div className="free legend"><div className="dot" />{ parts.free + '%' } — остаток</div>
                </div>

                <Link className="category-header" to={URLS.RECOMENDATIONS}><h2>Рекомендации</h2><h3>развернуть</h3></Link>
                <List className="recomendations-preview" items={this.state.recomendations} />

                <Link className="category-header" to={URLS.GOALS}><h2>Цели</h2><h3>развернуть</h3></Link>
                <div className="goals-placeholder" onClick={this.onGoalMoreClick}>
                    <h2 className="current-goal-label">Текущая цель</h2>
                    <h1 className="name">{ goal.name }</h1>
                    <h2 className="progress">{ `${balance}₽ / ${goal.cost}₽` }</h2>
                    <img className="image" src={ require( `../../assets/${goal.image}.png` ) } alt={goal.image} />
                    <div className="progress-bar">
                        <div className="bar" style={{ width: percent + "%" }} />
                    </div>
                </div>

                

                <Link className="category-header" to={URLS.NEWS}><h2>Активность</h2><h3>развернуть</h3></Link>
                <div className="news-list">
                    {
                        this.state.news.map( (item, i) => {
                            return (
                                <div key={i} className="item">
                                    <img className="avatar" src={ require(`../../assets/${item.avatar}.png`) } alt={item.avatar} />
                                    <div className="text">{ item.content }</div>
                                    <button className="more-button" onClick={ this.onNewsMoreClick.bind(this, i) }>смотреть</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}