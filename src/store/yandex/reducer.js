import Immutable from 'seamless-immutable'
import _ from 'lodash';
import * as types from './actionTypes';

const initialState = Immutable({
    ya: undefined,
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.YANDEX_CONFIG_FETCHED:
            return state.merge({
                market: action.market
            });
        default:
            return state;
    }
}

export function getMarket(state) {
    return state.ya.market;
}

export function getMainCategories(state) {
    let market = getMarket(state);
    if (!market) {
        return [];
    }

    return _.reduce(market.categories, function (result, category) {
        if (category && category.parentId === null) {
            result[category.id] = {
                id: category.id,
                name: category.text,
            };
        }

        return result;
    }, {});
}

