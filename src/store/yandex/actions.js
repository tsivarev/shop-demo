import * as types from './actionTypes';
import * as ya from '../../lib/yandex';

export function parseConfig(path) {
    return async (dispatch) => {
        let market = ya.parse(path);
        dispatch({type: types.YANDEX_CONFIG_FETCHED, market: market});
    }
}
