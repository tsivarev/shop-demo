import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import vk from './vk/reducer';
import ya from './yandex/reducer';

export const rootReducer = combineReducers({
    vk: vk,
    ya: ya,
    router: routerReducer,
});
