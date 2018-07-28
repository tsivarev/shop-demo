import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default class GalleryItem extends Component {

    render() {
        const itemStyle = {
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 12,
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 8
        };

        return (
            <div style={itemStyle}>
                <UI.Avatar type='app' size={80}
                           src="https://www.passion.ru/imgs/2017/05/12/13/735426/72d63a4e3215f9d571830210bef72b54f3f286b1.jpg"
                           style={{marginBottom: 8}}/>
                <div className='gallery-item-name'>{this.props.title}</div>
                <div className='gallery-item-description'>{this.props.description}</div>
            </div>

        );
    }
}
