import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import * as vkActions from '../store/vk/actions';
import * as yaActions from '../store/yandex/actions';
import MainPanel from './MainPanel';

class App extends Component {

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
        this.props.dispatch(yaActions.parseConfig('/yandex.yml'));
    }

    render() {
        let activePanel = this.props.pageId === 'about' ? 'aboutPanel' : 'mainPanel';

        return (
            <UI.ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <UI.Root activeView="mainView">
                    <UI.View id="mainView" activePanel={activePanel} header={false}>
                        <MainPanel id="mainPanel"/>
                    </UI.View>
                </UI.Root>
            </UI.ConfigProvider>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(App);
