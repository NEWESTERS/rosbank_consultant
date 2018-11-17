import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Icon } from 'semantic-ui-react';

export default class Recomendations extends React.Component {
    state = {
        tiles: [
            { icon: "ticket", title: "20% скидка", text: "на приобретение билета в Большой театр", color: "#9d002b" },
            { icon: "shopping cart", title: "5% cashback", text: "на приобретение одежды от наших партнёров", color: "#bf0135" },
            { icon: "yandex", title: "300р по промокоду \"rosbank-2018\"", text: "на оплату заказа \"Яндекс.Еда\"", color: "#3f3f3f" },
            { icon: "leanpub", title: "15% скидка", text: "на оплату аудио и электронных книг", color: "#000" }
        ],

        categories: [
            { icon: "plane", name: "Путешествия" },
            { icon: "ticket", name: "Мероприятия" },
            { icon: "beer", name: "Кафе и бары" },
            { icon: "home", name: "Дом" }
        ]
    }

    render() {
        return(
            <div>
                <Link className="back" to="/" />
                <h1 className="label">Рекомендации</h1>
                <div className="recomendation-tiles">
                    {
                        this.state.tiles.map( (item, i) => {
                            return (
                                <div key={i} className="tile" style={{backgroundColor: item.color}}>
                                    <Icon className="icon" name={ item.icon } />
                                    <div className="text-container">
                                        <div className="title">{ item.title }</div>
                                        <div className="text">{ item.text }</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="recomendation-categories">
                    {
                        this.state.categories.map( (item, i) => {
                            return (
                                <div key={i} className="item">
                                    <i aria-hidden="true" className={`${item.icon} icon`}></i>
                                    <div className="content"> { item.name }</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}