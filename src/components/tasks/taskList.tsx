import * as React from "react";
import ITask from './interfaces';

import TaskListItem from './taskListItem';

interface TaskListProps {
    tasks: ITask[]
}

export default class TaskList extends React.Component<TaskListProps, any> {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.tasks.map((task) => {
                        return (
                            <TaskListItem key={task.GUID} task={task} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}