import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Goals extends React.Component {
    state = {
        balance : 20400,
        current_goal: {
            name: "iPhone Xs max 256GB",
            cost: 120000,
            image: 'iPhone_XS'
        },

        future_goals: [
            {
                name: "Air Pods",
                cost: 12000,
                image: 'Air_Pods'
            },
            {
                name: "Apple Watch Series 4",
                cost: 30000,
                image: 'Apple_Watch'
            }
        ]
    }

    onGoalMoreClick = () => {
        console.log(this.state.current_goal.name)
    }

    render() {
        const { current_goal : goal, balance, future_goals } = this.state,
            percent = Math.floor(balance / goal.cost * 100)

        return(
            <div>
                <Link className="back" to="/" ></Link>
                <h1 className="label">Текущая цель</h1>
                <div className="current-goal" onClick={this.onGoalMoreClick}>
                    <h1 className="name">{ goal.name }</h1>
                    <h2 className="progress">{ `${balance}₽ / ${goal.cost}₽` }</h2>
                    <img className="image" src={ require( `../../assets/${goal.image}.png` ) } alt={goal.image} />
                    <div className="progress-bar">
                        <div className="bar" style={{ width: percent + "%" }} />
                    </div>
                </div>

                <h1 className="label">Запланированные цели</h1>
                <div className="future_goals">
                    {
                        future_goals.map( (goal, i) => {
                            const percent = Math.floor(balance / goal.cost * 100);

                            return (
                                <div key={i} className="goal">
                                    <div className="name">{ goal.name }</div>
                                    <img className="image" src={ require(`../../assets/${goal.image}.png`) } alt={goal.image} />
                                    <div className="progress-bar">
                                        <div className="bar" style={{ width: percent + "%" }}>
                                            {
                                                percent >= 100 ? "Цель достигнута" : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>                
            </div>
        )
    }
}