const Immutable = require('immutable');

export default function getImmutableObject(object) {
    return Immutable.fromJS(object);
};