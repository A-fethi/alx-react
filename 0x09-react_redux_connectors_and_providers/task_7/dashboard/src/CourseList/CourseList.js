import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';

const styles = StyleSheet.create({
    table: {
        width: '90%',
        marginTop: '30px',
        border: '1px solid #ddd',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export class CourseList extends Component {
    constructor(props) {
        super(props);
        this.onChangeRow = this.onChangeRow.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow(id, checked) {
        if (checked) {
            this.props.selectCourse(id);
        } else {
            this.props.unSelectCourse(id);
        }
    }

    render() {
        const { listCourses } = this.props;
        // const listCourses = null;

        return (
            <table id="CourseList" className={css(styles.table)}>
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow
                        textFirstCell="Course name"
                        textSecondCell="Credit"
                        isHeader={true}
                    />
                </thead>
                <tbody>
                    {(!listCourses || listCourses.length === 0) && (
                        <CourseListRow
                            textFirstCell="No course available yet"
                            isHeader={false}
                        />
                    )}

                    {listCourses &&
                        listCourses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                id={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                isHeader={false}
                                isChecked={course.isSelected}
                                onChangeRow={this.onChangeRow}
                            />
                        ))}
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func,
};

CourseList.defaultProps = {
    listCourses: null,
    fetchCourses: () => { },
    selectCourse: () => { },
    unSelectCourse: () => { },
};

export const mapStateToProps = (state) => {
    const coursesList = getListCourses(state);
    return {
        listCourses: coursesList,
    };
};

const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);