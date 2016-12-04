import * as React from "react";

import ITask from './interfaces';

import TaskList from './taskList';

interface ITaskAppProps {
    tasks: ITask[]
}

interface ITaskAppState {
    tasks: ITask[]
}

export class TasksApp extends React.Component<ITaskAppProps, ITaskAppState> {
    constructor(props: ITaskAppProps) {
        super(props);
        this.state = { tasks: this.props.tasks };
    }

    render() {
        return (
            <div>
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }
}