export const MAILSERVER_HOST = '';
export const MAILSERVER_PORT = ;
export const MAILSERVER_USER = '';
export const MAILSERVER_PASSWORD = '';
export const MAILSERVER_SENDER_NAME = '';

export const MAILSERVER_SECURE = true; // secure:true for port 465, secure:false for port 587
export const MAILSERVER_CONFIG = {
    from: MAILSERVER_SENDER_NAME+' <'+MAILSERVER_USER+'>',
    user: MAILSERVER_USER,
    password: MAILSERVER_PASSWORD,
    server: MAILSERVER_HOST,
    port: MAILSERVER_PORT,
    secure: MAILSERVER_SECURE
};
