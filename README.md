# import .p12 certificate

## Command line
```
security import ./bundle.p12 -P secretPassword
```
* import the 'bundle.p12' to the default keychain.

- -k  import to which keychain
- -A  Allow any application to access the imported key without warning (insecure, not recommended!)
- -T  Specify an application which may access the imported key (multiple -T options are allowed)

[osx - install .p12 or .cer in console macos - Stack Overflow](https://stackoverflow.com/questions/7485806/install-p12-or-cer-in-console-macos)

## How to use

```
var importCertificate = require('import-certificate');
importCertificate('./cer.p12', '1111')
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e.error);
    })
```
## Return value

### success
```
{
    success: true,
}
```

### fail
```
{
    success: false,
    error: 'security: SecKeychainItemImport: One or more parameters passed to a function were not valid.\n' 
}
```

