import * as moment from 'moment';
import * as timezone from 'moment-timezone';

export function ConvertDateTimeZone(date: string,hour:string,timeZone:string):any {
    //date formato YYYY-MM-DD
    //datos de fecha
    let arrayDate = date.split('-');
    let objDate = {year:arrayDate[0]
                    ,month:parseInt(arrayDate[1])-1
                    ,day:arrayDate[2]
                    ,hour:hour};
    let dateTimeZone = timezone.tz(objDate,timeZone).utc().format('YYYY-MM-DD HH:mm:ss');
    return dateTimeZone;
}

export function FormatUTC(date: string):any {
    //date formato "2017-07-18T21:45:12+0000"
    //datos de fecha
    let dateTimeZone = moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
    return dateTimeZone;
}

export function ConvertRangeHourNumber(hour:string):any {
    //hora formato "00:00:00 - 00:59:59"
    //datos de fecha
    let arrayHour = hour.split('-');
    let hourNumber:number = parseInt((arrayHour[0] && arrayHour[0].length > 2)?arrayHour[0].substr(0,2):'0');
    return hourNumber.toString();
}

export function CompleteLength(input:string, length:number, padding:string):any {
    let str = input + '';
    return (length <= str.length) ? str : CompleteLength(str+padding, length, padding);
}
