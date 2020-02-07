var fs = require('fs');
var crypto = require('crypto');
var algorithm = 'aes192';
var password = 'abcdefg';
var cipher = crypto.createCipher(algorithm, password);
var decipher = crypto.createDecipher(algorithm, password);
var encrypted = '';
cipher.on('readable', function () {
    var data = cipher.read();
    if (data)
        encrypted += data.toString('hex');
});
cipher.on('end', function () {
    console.log(encrypted);
});
var decrypted = '';
decipher.on('readable', function () {
    var data = decipher.read();
    if (data)
        decrypted += data.toString('utf8');
});
decipher.on('end', function () {
    console.log(decrypted);
});
cipher.write('mi mamá me mima');
cipher.end();
decipher.write('8e59ccff5a8d8dce97b7b504e3096bd4cfc5aa573803b4b579340e6f3e6eb405', 'hex');
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
