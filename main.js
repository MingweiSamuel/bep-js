#!/usr/bin/env node
"use strict";

var dgram = require('dgram');
var parser = require('packet');
var BufferOffset = require('buffer-offset');

var socket = dgram.createSocket('udp6', function(msg, rinfo) {
  console.log('Received %d bytes from %s:%d', msg.length, rinfo.address, rinfo.port);
  console.log(msg);
  console.log(parseAnnounce(msg));
});
socket.bind(21027);
console.log('Socket listening');



function parseAnnounce(buffer) {
  var types = require('./structs/structs.js');
  return types.Announcement.fromXDR(buffer);
}
/*
function parseAnnounce(buffer) {
  function parseDevice(buffer) {
    function parseAddress(buffer) {
      var len = buffer.getUInt32BE();
      return {
        url: buffer.getString('ascii', len)
      };
    }

    function parseRelay(buffer) {
      var data = parseDevice(buffer);
      data.latency = buffer.getUInt32BE();
      return data;
    }

    var device = {};
    var idLength = buffer.getUInt32BE();
    device.id = buffer.getString('ascii', idLength);

    var addressCount = buffer.getUInt32BE();
    device.addresses = [];
    for (var i = 0; i < addressCount; i++)
      device.addresses.push(parseAddress(buffer));
    
    var relayCount = buffer.getUInt32BE();
    device.relays = [];
    for (var i = 0; i < relayCount; i++)
      device.relays.push(parseRelay(buffer));

    return device;
  }

  buffer = BufferOffset.convert(buffer);

  var magic = buffer.getUInt32BE();
  if (magic !== 0x9D79BC40)
    return null;
  var announce = {};
  
  announce.device = parseDevice(buffer);

  var extraDeviceCount = buffer.getUInt32BE();
  announce.extraDevices = [];
  for (var i = 0; i < extraDeviceCount; i++)
    announce.extraDevices.push(parseDevice(buffer));

  return announce;
}*/
