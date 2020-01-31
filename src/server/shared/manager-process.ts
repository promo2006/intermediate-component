import * as child_process from 'child_process';
import * as path from 'path';
import * as moment from 'moment';

const UNIT_MB = 1024 * 1024;

export function FindProcess (value:string) {
    let platform = process.platform;
    return new Promise((resolve, reject) => {
        if (!(platform in finders)) {
            reject(new Error(`platform ${platform} is unsupported`));
        }
        let find:any = finders[platform];
        if (typeof find === 'string') {
            find = finders[find];
        }
        find(value).then(resolve, reject);
    });
}

export function KillTask(pid:string) {
    let platform = process.platform;
    return new Promise((resolve, reject) => {
        if (!(platform in killers)) {
            reject(new Error(`platform ${platform} is unsupported`));
        }
        let find:any = killers[platform];
        if (typeof find === 'string') {
            find = killers[find];
        }
        find(pid).then(resolve, reject);
    });
}

function ExecCommand (cmd:any, callback:any) {
    child_process.exec(cmd, {maxBuffer: 2 * UNIT_MB}, callback);
}

function StripLine(text:any, num:any):any {
    let idx = 0;
    while (num-- > 0) {
      let nIdx = text.indexOf('\n', idx);
      if (nIdx >= 0) {
        idx = nIdx + 1;
      }
    }
    return idx > 0 ? text.substring(idx) : text;
}

function MatchName(text:any, name:any):any {
    if (!name) {
      return true;
    }
    return text.match(name);
}

function SplitCustom(line:any, max:any):any {
    let cols = line.trim().split(/\s+/);
    if (cols.length > max) {
      cols[max - 1] = cols.slice(max - 1).join(' ');
    }
    return cols;
}

function ExtractColumns(text:any, idxes:any, max:any):any {
    let lines = text.split(/(\r\n|\n|\r)/);
    let columns:any[] = [];
    if (!max) {
      max = Math.max.apply(null, idxes) + 1;
    }
    lines.forEach((line:any) => {
      let cols = SplitCustom(line, max);
      let column:any[] = [];
      idxes.forEach((idx:any) => {
        column.push(cols[idx] || '');
      });
      columns.push(column);
    });
    return columns;
}

function ParseTable(data:any):any {
    let lines = data.split(/(\r\n|\n|\r)/).filter((line:any) => {
        return line.trim().length > 0;
    });
    let matches = lines.shift().trim().match(/(\w+\s*)/g);
    if (!matches) {
        return [];
    }
    let ranges:any[] = [];
    let headers = matches.map((col:any, i:any) => {
        let range = [];
        if (i === 0) {
            range[0] = 0;
            range[1] = col.length;
        } else {
            range[0] = ranges[i - 1][1];
            range[1] = range[0] + col.length;
        }
        ranges.push(range);
        return col.trim();
    });
    ranges[ranges.length - 1][1] = Infinity;
    return lines.map((line:any) => {
        let row:any = {};
        ranges.forEach((r, i) => {
            let key = headers[i];
            let value = line.substring(r[0], r[1]).trim();
            row[key] = value;
        });
        return row;
    });
}

const finders:any = {
    darwin (name:string) {
      return new Promise((resolve, reject) => {
        let cmd = `ps ax -ww -o pid,ppid,uid,gid,etime,args`;
        ExecCommand(cmd, function (err:any, stdout:any, stderr:any) {
            if (err) {
                  reject(err);
              } else {
                err = stderr.toString().trim();
                if (err) {
                    reject(err);
                    return;
                }
                let data = StripLine(stdout.toString(), 1);
                let columns = ExtractColumns(data, [0, 1, 2, 3, 4, 5], 6).filter((column:any) => {
                    if (column[0]) {
                        return MatchName(column[5], name);
                    } else {
                        return false;
                    }
                });
                let list = columns.map((column:any) => {
                    let cmd = String(column[5]).split(' ', 1)[0];
                    let dayArray = column[4].split('-');
                    let timeArray = (dayArray && dayArray.length === 2)?dayArray[1].split(':'):dayArray[0].split(':');
                    let timeSecond = (timeArray && timeArray.length === 3)?parseInt(timeArray[0])*60*60 + parseInt(timeArray[1])*60 + parseInt(timeArray[2]):parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
                    let totalSecond = (dayArray && dayArray.length === 2)?parseInt(dayArray[0])*24*60*60 + timeSecond:timeSecond;
                    return {
                        pid: column[0],
                        ppid: column[1],
                        uid: column[2],
                        gid: column[3],
                        name: path.basename(cmd),
                        cmd: column[5],
                        day: column[4],
                        time: totalSecond
                    };
                });
                resolve(list);
            }
        });
      });
    },
    linux: 'darwin',
    sunos: 'darwin',
    freebsd: 'darwin',
    win32 (name:string) {
        return new Promise((resolve, reject) => {
            let cmd = 'WMIC path win32_process get Name,Processid,ParentProcessId,Commandline,CreationDate';
            ExecCommand(cmd, function (err:any, stdout:any, stderr:any) {
                if (err) {
                    reject(err);
                } else {
                    err = stderr.toString().trim();
                    if (err) {
                        reject(err);
                        return;
                    }
                    let list = ParseTable(stdout.toString()).filter((row:any) => {
                        return MatchName(row.CommandLine, name);
                    }).map((row:any) => {
                        let valueNull:any = null;
                        let dayOriginal = row.CreationDate;
                        let day = dayOriginal.substr(0,4) + '-' + dayOriginal.substr(4,2) + '-' + dayOriginal.substr(6,2) + ' ' + dayOriginal.substr(8,2) + ':' + dayOriginal.substr(10,2) + ':' + dayOriginal.substr(12,2);
                        let dayMoment = moment(day);
                        return {
                            pid: row.ProcessId,
                            ppid: row.ParentProcessId,
                            uid: valueNull,
                            gid: valueNull,
                            name: row.Name,
                            cmd: row.CommandLine,
                            date: day,
                            time: moment().diff(dayMoment, 'seconds')
                        };
                    });
                    resolve(list);
                }
            });
        });
    }
};

const killers:any = {
    darwin (pid:string) {
      return new Promise((resolve, reject) => {
        let cmd = `kill ${pid}`;
        ExecCommand(cmd, function (err:any, stdout:any, stderr:any) {
            if (err) {
                  reject(err);
            } else {
                err = stderr.toString().trim();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            }
        });
      });
    },
    linux: 'darwin',
    sunos: 'darwin',
    freebsd: 'darwin',
    win32 (pid:string) {
        return new Promise((resolve, reject) => {
            let cmd = `Taskkill /PID ${pid} /F`;
            ExecCommand(cmd, function (err:any, stdout:any, stderr:any) {
                if (err) {
                    reject(err);
                } else {
                    err = stderr.toString().trim();
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(true);
                }
            });
        });
    }
};
