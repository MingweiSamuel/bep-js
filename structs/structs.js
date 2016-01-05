// Automatically generated on 2016-01-05T19:23:38+00:00
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

// === xdr source ============================================================
//
//   enum MessageType {
//     CLUSTER_CONFIG  = 0,
//     INDEX           = 1,
//     REQUEST         = 2,
//     RESPONSE        = 3,
//     PING            = 4,
//   
//     INDEX_UPDATE    = 6,
//     CLOSE           = 7
//   };
//
// ===========================================================================
xdr.enum("MessageType", {
  clusterConfig: 0,
  index: 1,
  request: 2,
  response: 3,
  ping: 4,
  indexUpdate: 6,
  close: 7,
});

// === xdr source ============================================================
//
//   union Message switch(MessageType type)
//   {
//     case CLUSTER_CONFIG:
//       ClusterConfigMessage content;
//     case INDEX:
//       void;
//     case REQUEST:
//       void;
//     case RESPONSE:
//       void;
//     case PING:
//       void;
//     case INDEX_UPDATE:
//       void;
//     case CLOSE:
//       void;
//   };
//
// ===========================================================================
xdr.union("Message", {
  switchOn: xdr.lookup("MessageType"),
  switchName: "type",
  switches: [
    ["clusterConfig", "content"],
    ["index", xdr.void()],
    ["request", xdr.void()],
    ["response", xdr.void()],
    ["ping", xdr.void()],
    ["indexUpdate", xdr.void()],
    ["close", xdr.void()],
  ],
  arms: {
    content: xdr.lookup("ClusterConfigMessage"),
  },
});

});
module.exports = types;
