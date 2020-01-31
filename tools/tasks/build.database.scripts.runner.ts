import { APP_NAME, APP_VERSION, DIST_DIR, APP_DATABASE_SRC  } from '../config';
//import { MSSQL_TESTING_CONFIG_CREATE, MSSQL_TESTING_CONFIG_USAGE } from '../../src/server/config/mssql.testing.config';
import { MSSQL_CONFIG } from '../../src/server/config/mssql.config';
import * as log4js from 'log4js';

// En el proyecto de speechanalytics no hay configuracion para testing
const MSSQL_TESTING_CONFIG_CREATE: any = MSSQL_CONFIG;
const MSSQL_TESTING_CONFIG_USAGE: any = MSSQL_CONFIG;

let sql = require('mssql');
let logger = log4js.getLogger('Sql');

export function createDataBase(): (done: () => void) => void {
    return done => {
        let promises: Promise<boolean>[] = [];
        var queries = readProcessFile(APP_NAME + '_' + APP_VERSION + '_testing_database.sql');
        queries.forEach(function(query:string){
            if (query && query !== ' ') {
                promises.push(makeBulk(query, true).then());
            }
        });

        Promise.all(promises)
        .then(() => {
            logger.info('Data base creation finished with ' + promises.length + ' queries.');
            createStructure(done);
        }).catch(function(err) {
            if (err.toString().includes('Database \'InconcertTesting\' already exists. Choose a different database name')) {
                logger.info('Database already exist ...');
                done();
            }
        });
    };
}

function createStructure(callback:any) {
    let promises: Promise<boolean>[] = [];
    logger.info('Creating Testing Tables');
    var queries = readProcessFile(APP_NAME + '_' + APP_VERSION + '_testing_structure.sql');
    queries.forEach(function(query:string){
        if (query && query !== ' ') {
            promises.push(makeBulk(query, false).then());
        }
    });

    Promise.all(promises).then(() => {
        logger.info('Data base structure finished with ' + promises.length + ' queries.');
        createProcedures(callback);
    });
}

function createProcedures(callback:any) {
    let promises: Promise<boolean>[] = [];
    logger.info('Creating Procedures');
    var queries = readProcessFile(APP_NAME + '_' + APP_VERSION + '_testing_procedures.sql');
    queries.forEach(function(query:string){
        if (query && query !== ' ') {
            promises.push(makeBulk(query, false).then());
        }
    });
    Promise.all(promises).then(() => {
        logger.info('Data base procedures finished with ' + promises.length + ' queries.');
        insertData(callback);
    });
}

function insertData(callback:any) {
    let promises: Promise<boolean>[] = [];
    logger.info('Insert Testing Data');
    let queries: any = readProcessFile(APP_NAME + '_' + APP_VERSION + '_testing_data.sql');
    queries.forEach(function(query:string){
        if (query && query !== ' ') {
            promises.push(makeBulk(query, false).then());
        }
    });
    Promise.all(promises).then(() => {
        logger.info('Data insert finished with ' + promises.length + ' queries.');
        endDataBaseRestore(callback);
    });
}

function endDataBaseRestore(callback:any) {
    logger.info('Testing DataBase restore Finished');
    callback();
}

function readProcessFile(fileName:string): any {
    var fs = require('fs');
    var path = require('path');
    var filePath = path.join(DIST_DIR, fileName);

    return fs.readFileSync(filePath, 'utf-8')
        .replace(/InconcertOnline/g, MSSQL_TESTING_CONFIG_USAGE.database)
        .replace(/USE(.*?)$\n/gm,'')
        .replace(/SET(.*?)$\nGO/gm,'')
        .replace(/END;/gm,'END')
        .replace(/--(.*?)$/gm,'')
        .replace(/(\r\n|\n|\r|\t)/gm,' ')
        .replace(/    /gm,' ')
        .replace(/  /gm,' ')
        .split('GO');
}

function makeBulk(query:string, create:boolean):Promise <boolean> {
    let connection: any;
    if (create) {
        connection = MSSQL_TESTING_CONFIG_CREATE;
    } else {
        connection = MSSQL_TESTING_CONFIG_USAGE;

    }
    return new sql.connect(connection)
    .then(
        (result: any) => {
            return new sql.Request(result)
            .batch(query)
            .then((dump: any) => {
                result.close();
                return Promise.resolve(true);
            })
            .catch((err: any) => {
                if ( err.toString().indexOf('Choose a different database name') === 0 ) {
                    logger.error(' Execution Error: ' +err);
                    logger.error(query);
                }
                return Promise.reject(err);
            });
        }
    ).catch(
        (err: any) => {
            if ( err.toString().indexOf('Choose a different database name') === 0 ) {
                logger.error('Connection Error: ' + err.message);
            }
            return Promise.reject(err);
        }
    );
}
