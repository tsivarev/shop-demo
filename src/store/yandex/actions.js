import * as types from './actionTypes';
import * as Yandex from '../../lib/yandex';

export function parseConfig(path) {
    return async (dispatch) => {
        let market = Yandex.parse(path);
        dispatch({type: types.YANDEX_CONFIG_FETCHED, market: market});
    }
}
