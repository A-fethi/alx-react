import { filterTypeSelected, getNotifications, getUnreadNotifications, getUnreadNotificationsByType } from "./notificationSelector";
import { Map, fromJS } from 'immutable';

const createTestState = (overrides = {}) => ({
    notifications: {
        filterTypeSelected: 'all',
        notifications: [
            { id: 1, message: 'Notification 1', read: false },
            { id: 2, message: 'Notification 2', read: true },
        ],
        ...overrides,
    },
});

describe('Tests for filterTypeSelected selector', () => {
    it('should work as expected', () => {
        const state = createTestState({ filterTypeSelected: 'unread' });
        expect(filterTypeSelected(state)).toBe('unread');
    });
});

describe('Tests for getNotifications selector', () => {
    it('should return a list of the message entities within the reducer', () => {
        const state = createTestState();
        expect(getNotifications(state)).toEqual([
            { id: 1, message: 'Notification 1', read: false },
            { id: 2, message: 'Notification 2', read: true },
        ]);
    });
});

describe('Tests for getUnreadNotificationsByType selector', () => {
    it("test that getUnreadNotificationsByType return a list of the message entities within the reducer", function () {
        const state = {
            notifications: fromJS({
                filter: "DEFAULT",
                messages: {
                    1: {
                        id: 1,
                        type: "default",
                        value: "New course available",
                        isRead: true,
                    },
                    2: {
                        id: 2,
                        type: "urgent",
                        value: "New resume available",
                        isRead: false,
                    },
                    3: {
                        id: 3,
                        type: "urgent",
                        html: { __html: "xxx" },
                        isRead: true,
                    },
                },
            }),
        };

        const expectedResult = [
            {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: false,
            },
        ];

        const selected = getUnreadNotificationsByType(state);

        expect(selected.toJS()).toEqual(expectedResult);
    });

    it("verify that the selector returns unread urgent notifications when the filter is set", function () {
        const state = {
            notifications: fromJS({
                filter: "URGENT",
                messages: {
                    1: {
                        id: 1,
                        type: "urgent",
                        value: "New course available",
                        isRead: false,
                    },
                    2: {
                        id: 2,
                        type: "urgent",
                        value: "New resume available",
                        isRead: true,
                    },
                    3: {
                        id: 3,
                        type: "default",
                        html: { __html: "xxx" },
                        isRead: false,
                    },
                },
            }),
        };

        const expectedResult = [
            {
                id: 1,
                type: "urgent",
                value: "New course available",
                isRead: false,
            },
        ];

        const selected = getUnreadNotificationsByType(state);

        expect(selected.toJS()).toEqual(expectedResult);
    });
});
    // it('should return a list of the message entities within the reducer', () => {
    //     const state = createTestState();
    //     expect(getUnreadNotifications(state)).toEqual([{ id: 1, message: 'Notification 1', read: false }]);
    // });
// });