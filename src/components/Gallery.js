import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import GalleryItem from "./GalleryItem";

export default class Gallery extends Component {

    render() {
        return (
            <UI.Group>
                <UI.Header className='group-header' level='2' aside={
                    <span className='all-items'
                          style={{color: UI.colors.accentBlue}}
                          onClick={() => {
                          }}>
                                Показать все
                            </span>
                }>
                    {this.props.title}
                </UI.Header>

                <UI.HorizontalScroll>
                    <div style={{display: 'flex'}}>
                        <GalleryItem title="IRIS" description=""/>
                        <GalleryItem title="IRIS" description=""/>
                        <GalleryItem title="IRIS" description=""/>
                        <GalleryItem title="IRIS" description=""/>
                        <GalleryItem title="IRIS" description=""/>
                    </div>
                </UI.HorizontalScroll>
            </UI.Group>
        );
    }
}
