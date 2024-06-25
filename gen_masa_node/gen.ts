import { exec } from 'child_process';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { MasaConf } from '../src/MasaBase/MasaBase';


function executeCommand(command: string): Promise<{stdout: string, stderr: string, exitcode: number}> {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({stdout, stderr, exitcode: 0});
            }
        });
    });
}

function genItem(masaconf: MasaConf): Promise<any> {
    return new Promise((resolve, reject) => {
        let dcn = masaconf.dcn;
        let serviceid = masaconf.serviceid;
        let scenarioid = masaconf.scenarioid;
        let sname = `${dcn}_${serviceid}_${scenarioid}`;
        let name = `Masa_${dcn}_${serviceid}_${scenarioid}`;

        let nodespath = path.join(__dirname, '../nodes');

        let basedcn = 'DC0';
        let baseserviceid = '03300132';
        let basescenarioid = '01';
        let basesname = `${basedcn}_${baseserviceid}_${basescenarioid}`;
        let basenode = `Masa_${basedcn}_${baseserviceid}_${basescenarioid}`;

        let exepath = nodespath;
        let command = `cd ${exepath} && cp -rf ${basenode} ${name}`;
        (async () => {
            try {
                await executeCommand(command);
            } catch(error) {
                reject({name: name, error: error});
            }
        })()

        let jsfiles = [
            `.node.d.ts`,
            `.node.js`,
            `.node.js.map`,
            `.node.json`
        ];
        for (let jsfile of jsfiles) {
            exepath = path.join(nodespath, name);
            command = `cd ${exepath} && mv ${basenode}${jsfile} ${name}${jsfile}`;
            (async () => {
                try {
                    await executeCommand(command);
                } catch(error) {
                    reject({name: name, error: error});
                }
            })()

            command = `cd ${exepath} && sed -i 's/${basesname}/${sname}/g' ${name}${jsfile}`;
            (async () => {
                try {
                    await executeCommand(command);
                } catch(error) {
                    reject({name: name, error: error});
                }
            })()
        }

        exepath = path.join(nodespath, name);
        command = `cd ${exepath} && rm masa.json`;
        (async () => {
            try {
                await executeCommand(command);
            } catch(error) {
                reject({name: name, error: error});
            }
        })()

        let jdata = new Uint8Array(Buffer.from(JSON.stringify(masaconf)));
        writeFileSync(path.join(__dirname, `../nodes/${name}/masa.json`), jdata, {flag: 'w'});
        resolve(name);
    });
}

(async () => {
    let masaconf: MasaConf[] = JSON.parse(readFileSync(path.join(__dirname, 'masa.json'), { encoding: 'utf8' }));
    for (let item of masaconf) {
        try {
            let res = await genItem(item);
            console.log(`${res} done`);
        } catch(error) {
            console.log(`fail: ${error}`);
        }
    }
})();