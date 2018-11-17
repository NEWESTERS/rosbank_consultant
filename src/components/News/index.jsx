import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Goals extends React.Component {
    state = {
        list: [
            { avatar: "guy_avatar", name: "Петя Смолов ", content: "Приобрел смартфон iPhone Xs по специальной кредитной программе от Росбанка", image: "iPhone_XS_white.png" },
            { avatar: "woman_avatar", name: "Настя Павлова", content: "Приобрела ноутбук MacBook Pro в рассрочку по ставке 0 0 24 от Росбанка", image: "mac_book.png" }
        ]
    }

    render() {
        return(
            <div>
                <Link className="back" to="/" ></Link>
                <h1 className="label">Активность</h1>

                <div className="news-tiles">
                    {
                        this.state.list.map( (item, i) => {
                            return (
                                <div key={i} className="item">
                                    <div className="content">
                                        <div className="item-header">
                                            <img className="avatar" src={ require(`../../assets/${item.avatar}.png`) } alt={item.avatar} />
                                            <div className="name">{ item.name }</div>
                                        </div>
                                        <div className="text">{ item.content }</div>
                                        <button className="more-button">подробнее</button>
                                    </div>
                                    <img className="background" src={ require('../../assets/' + item.image) } alt="background"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}