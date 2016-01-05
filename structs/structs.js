// Automatically generated on 2016-01-04T21:40:17-08:00
// DO NOT EDIT or your changes may be overwritten

/* jshint maxstatements:2147483647  */
/* jshint esnext:true  */

var XDR = require('js-xdr');


var types = XDR.config(function(xdr) {
// === xdr source ============================================================
//
//   struct Announcement {
//       unsigned int Magic;
//       Device This;
//       Device Extra<>;
//   };
//
// ===========================================================================
xdr.struct("Announcement", [
  ["magic", xdr.uint()],
  ["this", xdr.lookup("Device")],
  ["extra", xdr.varArray(xdr.lookup("Device"), 2147483647)],
]);

// === xdr source ============================================================
//
//   struct Device {
//       opaque ID<32>;
//       Address Addresses<16>;
//       Relay Relays<16>;
//   };
//
// ===========================================================================
xdr.struct("Device", [
  ["id", xdr.varOpaque(32)],
  ["addresses", xdr.varArray(xdr.lookup("Address"), 16)],
  ["relays", xdr.varArray(xdr.lookup("Relay"), 16)],
]);

// === xdr source ============================================================
//
//   struct Address {
//       string URL<2083>;
//   };
//
// ===========================================================================
xdr.struct("Address", [
  ["url", xdr.string(2083)],
]);

// === xdr source ============================================================
//
//   struct Relay {
//       string URL<2083>;
//       int Latency;
//   };
//
// ===========================================================================
xdr.struct("Relay", [
  ["url", xdr.string(2083)],
  ["latency", xdr.int()],
]);

});
module.exports = types;
