import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default class Promotions extends Component {

    render() {
        let style = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };

        let style1 = style;
        style1.backgroundImage = "url('https://shkolazhizni.ru/img/content/i104/104244_or.jpg')";

        let style2 = style;
        style2.backgroundImage = "url('https://productcenter.ru/images/187730-ubtan-1280x768.jpg')";

        let style3 = style;
        style3.backgroundImage = "url('https://avatars.mds.yandex.net/get-pdb/28866/0a61c110-5024-40fd-a98c-3af1f1048943/s800')";

        return (
            <UI.Group>
                <UI.Gallery
                    slideWidth="100%"
                    align="right"
                    bullets="light"
                    style={{height: '60vw'}}
                >

                    <div style={style1}>
                        <UI.Div style={{
                            color: '#fff'
                        }}>Скидка 50% на все!</UI.Div>
                    </div>
                    <div style={style2}>
                        <UI.Div style={{
                            color: '#fff'
                        }}>Скидка 50% на все!</UI.Div>
                    </div>
                    <div style={style3}>
                        <UI.Div style={{
                            color: '#fff'
                        }}>Скидка 50% на все!</UI.Div>
                    </div>
                </UI.Gallery>
            </UI.Group>
        );
    }
}
