const Immutable = require('immutable');

export default function accessImmutableObject(object, array) {
    const Obj = Immutable.fromJS(object);
    return Obj.getIn(array, undefined);
};