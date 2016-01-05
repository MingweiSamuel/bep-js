// Automatically generated on 2016-01-05T08:11:47-08:00
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

// === xdr source ============================================================
//
//   struct ClusterConfigMessage {
//       string DeviceName<64>;
//       string ClientName<64>;
//       string ClientVersion<64>;
//       Folder Folders<1000000>;
//       Option Options<64>;
//   };
//
// ===========================================================================
xdr.struct("ClusterConfigMessage", [
  ["deviceName", xdr.string(64)],
  ["clientName", xdr.string(64)],
  ["clientVersion", xdr.string(64)],
  ["folders", xdr.varArray(xdr.lookup("Folder"), 1000000)],
  ["options", xdr.varArray(xdr.lookup("Option"), 64)],
]);

// === xdr source ============================================================
//
//   struct Folder {
//       string ID<256>;
//       Device Devices<1000000>;
//       unsigned int Flags;
//       Option Options<64>;
//   };
//
// ===========================================================================
xdr.struct("Folder", [
  ["id", xdr.string(256)],
  ["devices", xdr.varArray(xdr.lookup("Device"), 1000000)],
  ["flags", xdr.uint()],
  ["options", xdr.varArray(xdr.lookup("Option"), 64)],
]);

// === xdr source ============================================================
//
//   struct Device {
//       opaque ID<32>;
//       string Name<64>;
//       string Addresses<64>;
//       unsigned int Compression;
//       string CertName<64>;
//       hyper MaxLocalVersion;
//       unsigned int Flags;
//       Option Options<64>;
//   };
//
// ===========================================================================
xdr.struct("Device", [
  ["id", xdr.varOpaque(32)],
  ["name", xdr.string(64)],
  ["addresses", xdr.string(64)],
  ["compression", xdr.uint()],
  ["certName", xdr.string(64)],
  ["maxLocalVersion", xdr.hyper()],
  ["flags", xdr.uint()],
  ["options", xdr.varArray(xdr.lookup("Option"), 64)],
]);

// === xdr source ============================================================
//
//   struct Option {
//       string Key<64>;
//       string Value<1024>;
//   };
//
// ===========================================================================
xdr.struct("Option", [
  ["key", xdr.string(64)],
  ["value", xdr.string(1024)],
]);

});
module.exports = types;
