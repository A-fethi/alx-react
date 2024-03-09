import { selectCourse, unSelectCourse, setCourses, fetchCourses } from "./courseActionCreators";
// import fetchMock from 'fetch-mock';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// const middlewares = () => {
//     return [thunk];
// };
// const mockStore = configureStore(middlewares);

describe('Tests for creators actions', () => {
    it('should return { type: SELECT_COURSE, index: 1 }', () => {
        const action = {
            type: 'SELECT_COURSE',
            index: 1,
        };
        expect(selectCourse(1)).toEqual(action);
    });

    // it('should return { type: UNSELECT_COURSE, index: 1 }', () => {
    //     const action = {
    //         type: 'UNSELECT_COURSE',
    //         index: 1,
    //     };
    //     expect(unSelectCourse(1)).toEqual(action);
    // });
    // it('verifies that the fetch is working correctly', () => {
    //     const store = mockStore({});
    //     // fetchMock.restore();
    //     // fetchMock.get('./courses.json', '{}');

    //     return store.dispatch(fetchCourses()).then(() => {
    //         const actions = store.getActions();
    //         expect(actions[0]).toEqual(setCourses({}));
    //     });
    // });
});