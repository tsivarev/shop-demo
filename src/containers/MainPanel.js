import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as yaSelectors from '../store/yandex/reducer';
import Gallery from "../components/Gallery";
import Tabs from "../components/Tabs";
import Promotions from "../components/Promotions";

class MainPanel extends Component {

    render() {
        return (
            <UI.Panel id={this.props.id}>
                <div>
                    <img width="100%" src="https://productcenter.ru/images/187730-ubtan-1280x768.jpg"/>
                </div>
                <Tabs categories={this.props.mainCategories}/>
                <Gallery title="Для вас"/>
                <Promotions/>
                <Gallery title="Популярное"/>
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
