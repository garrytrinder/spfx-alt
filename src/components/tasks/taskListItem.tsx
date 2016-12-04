import * as React from "react";
import pnp from 'sp-pnp-js';

import ITask from './interfaces';

import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

interface TaskProps {
    task: ITask
}

interface TaskState {
    isChecked: boolean;
}

export default class TaskListItem extends React.Component<TaskProps, TaskState> {
    constructor() {
        super();
        this.state = {
            isChecked: false
        };

        this.onChange = this.onChange.bind(this);
    }
    componentWillMount() {
        console.log(this.props.task.Status);
        if (this.props.task.Status === 'Completed') {
            this.setState({ isChecked: true });
        }
    }
    onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
        let status: string = isChecked ? 'Completed' : 'Not Started';
        pnp.sp.web.lists.getByTitle('Tasks')
            .items.getById(this.props.task.ID)
            .update({ Status: status })
            .then(() => { this.setState({ isChecked: isChecked }) });
    }
    render() {
        return (
            <tr>
                <td><Checkbox onChange={this.onChange} checked={this.state.isChecked} /></td>
                <td>{this.props.task.Title}</td>
            </tr>
        )
    }
}