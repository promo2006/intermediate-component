const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes192';
const password = 'abcdefg';

let cipher = crypto.createCipher(algorithm, password);
let decipher = crypto.createDecipher(algorithm, password);

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
        console.log(encrypted);
    }
);

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
        console.log(decrypted);
    }
)

cipher.write('mi mamá me mima');
cipher.end();
decipher.write(encrypted, 'hex');
decipher.end();

/*
const key = crypto.scryptSync(password, 'salt', '24');

const iv = Buffer.alloc(16, 0);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = '';
cipher.on('readable', () => {
  let chunk;
  while (null !== (chunk = cipher.read())) {
    encrypted += chunk.toString('hex');
  }
});
cipher.on('end', () => {
  console.log(encrypted);
  // Prints: e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa
});

cipher.write('some clear text data');
cipher.end();


/*
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('Necesito vacaciones')
                   .digest('hex');
console.log(hash);


// Verificamos si existe nuestro archivo de registro
try {
    if (fs.existsSync('data.txt')) {
        console.log("The file exists.");
    } else {
        console.log('The file does not exist.');
    }
} catch (err) {
    console.error(err);
}
*/
