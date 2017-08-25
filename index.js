const path = require('path');
const spawn = require('child_process').spawn;
function importCertificate(certificatePath, certificatePassword) {
    return new Promise((resolve, reject) => {
        const ls = spawn('security', ['import', certificatePath, `-P`, certificatePassword, '-A']);
        ls.stdout.on('data', (data) => {
            console.log('info', `Import certificate. ${data}`);
        });
        ls.stderr.on('data', (data) => {
            data = data.toString();
            reject({
                success: false,
                error: data
            });
        });
        ls.on('close', (code) => {
            resolve({
                success: true,
            });
        });
    });
}
module.exports = importCertificate;
