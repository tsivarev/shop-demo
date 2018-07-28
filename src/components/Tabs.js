import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default class Tabs extends Component {

    render() {
        return (
            <UI.Group>
                <UI.HorizontalScroll>
                    <UI.Tabs type="buttons">
                        {
                            Object.keys(this.props.categories).map((categoryId) => this.renderOne(this.props.categories[categoryId]))
                        }
                    </UI.Tabs>
                </UI.HorizontalScroll>
            </UI.Group>
        );
    }

    renderOne(category) {
        return (
            <UI.TabsItem key={category.id}>
                {category.name}
            </UI.TabsItem>
        );
    }
}
