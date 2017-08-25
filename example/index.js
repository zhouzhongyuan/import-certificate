var importCertificate = require('../index');
importCertificate('./cer.p12', '1111')
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    })
