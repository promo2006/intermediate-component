const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const password = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

export function InconcertEncrypt(myText) : string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, password, Buffer.from(iv));
    const encrypted = Buffer.concat([cipher.update(myText), cipher.final()]);

    return `${encrypted.toString('hex')}-${iv.toString('hex')}`;
}

export function InconcertDecrypt(myEncryptedText) : string {
    const iv = crypto.randomBytes(24);
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(password), iv);
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