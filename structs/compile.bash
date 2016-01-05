#!/bin/bash
cd "$(dirname "$0")" &&
xdrgen -o . -l javascript *.x &&
sed -i "s/import \* as XDR from 'js-xdr';/var XDR = require('js-xdr');/" _generated.js &&
sed -i "s/export default types;/module.exports = types;/" _generated.js &&
sed -i "s/xdr => /function(xdr) /" _generated.js &&
mv _generated.js structs.js
