import * as React from "react";
import * as ReactDOM from "react-dom";
import pnp from 'sp-pnp-js';

import { TasksApp } from "./components/tasks/app";

require('./scss/vendor.scss');

console.info('ps-site-dev');

// The @types/sharepoint typings allow us to get intellisense at dev time
console.log(_spPageContextInfo.webAbsoluteUrl);

pnp.sp.web.lists.getByTitle('Tasks').items.get().then((items) => {
    ReactDOM.render(
        <TasksApp tasks={items} />, document.getElementById('tasks')
    );
})

