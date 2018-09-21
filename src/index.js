const noble = require('noble');
const wifi = require('node-wifi');

wifi.init({
  iface: null,
});

wifi.scan((err, networks) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('===== WIFI SCAN RESULTS =====');
  console.log(networks);
});

wifi.getCurrentConnections((err, currentConnections) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('===== WIFI CURRENT CONNECTIONS =====');
  console.log(currentConnections);
});

wifi.scan().then(networks => {
  console.log('===== WIFI SCAN NETWORKS =====');
  console.log(networks);
}).catch(error => {
  console.log(error);
});

noble.on('scanStart', () => console.log('===== BLE SCAN STARTED ====='));

noble.startScanning();

noble.on('discover', peripheral => {
  console.log(peripheral);
  // console.log('peripheral discovered (' + peripheral.id +
  //             ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
  //             ' connectable ' + peripheral.connectable + ',' +
  //             ' RSSI ' + peripheral.rssi + ':');
  // console.log('\thello my local name is:');
  // console.log('\t\t' + peripheral.advertisement.localName);
  // console.log('\tcan I interest you in any of the following advertised services:');
  // console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
})
