const crypto = require('crypto');

const algorithm = 'aes192';
const password = 'abcdefg';

export function InconcertEncrypt(myText) : string {
    let cipher = crypto.createCipher(algorithm, password);
    let encrypted = '';
    cipher.on(
        'readable',
        () => {
            const data = cipher.read();
            if (data) 
                encrypted += data.toString('hex');
        }
    );
    cipher.on(
        'end',
        () => {
            return encrypted;
        }
    );

    cipher.write(myText);
    cipher.end();

    return encrypted;
}

export function InconcertDecrypt(myEncryptedText) : string {
    let decipher = crypto.createDecipher(algorithm, password);
    let decrypted = '';
    decipher.on(
        'readable',
        () => {
            const data = decipher.read();
            if (data)
                decrypted += data.toString('utf8');
        }
    );
    decipher.on(
        'end',
        () => {
            return decrypted;
        }
    );

    decipher.write(myEncryptedText, 'hex');
    decipher.end();

    return decrypted;   
}