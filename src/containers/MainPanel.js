import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as yaSelectors from '../store/yandex/reducer';
import Gallery from "../components/Gallery";
import Tabs from "../components/Tabs";

class MainPanel extends Component {

    render() {
        return (
            <UI.Panel id={this.props.id}>
                <UI.Gallery slideWidth='100%' align="left" style={{height: '60vw'}} bullets="light"
                            className='gallery-wrap'>
                    <img className='banner-image'
                         src="https://pp.userapi.com/c824700/v824700840/14da65/q7P4C73ERDU.jpg"/>
                    <img className='banner-image' src="https://productcenter.ru/images/187730-ubtan-1280x768.jpg"/>
                    <img className='banner-image' src="https://shkolazhizni.ru/img/content/i104/104244_or.jpg"/>
                </UI.Gallery>

                <Gallery title="Для вас"/>
                <Gallery title="Популярное"/>

                <Tabs categories={this.props.mainCategories}/>
            </UI.Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        mainCategories: yaSelectors.getMainCategories(state),
    };
}

export default connect(mapStateToProps)(MainPanel);
