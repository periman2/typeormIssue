import {createConnection, Connection} from "typeorm";

import { Customer } from "./customer.entity";

const connectionString: string = process.env.NEST_MSSQL_CONNECTION;

createConnection({
    type: "mssql",
    url: connectionString,
    entities: [Customer],
    options: {
        encrypt: true
    },
    synchronize: true
}).then(
    (connection) => {})
    .catch(err => {
        throw err;
    });

//Expecting bug: (node:7000) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): 
//QueryFailedError: Error: Could not create constraint or index. See previous errors.