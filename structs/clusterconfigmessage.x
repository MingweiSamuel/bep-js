struct ClusterConfigMessage {
    string DeviceName<64>;
    string ClientName<64>;
    string ClientVersion<64>;
    Folder Folders<1000000>;
    Option Options<64>;
};

struct Folder {
    string ID<256>;
    Device Devices<1000000>;
    unsigned int Flags;
    Option Options<64>;
};

struct Device {
    opaque ID<32>;
    string Name<64>;
    string Addresses<64>;
    unsigned int Compression;
    string CertName<64>;
    hyper MaxLocalVersion;
    unsigned int Flags;
    Option Options<64>;
};

struct Option {
    string Key<64>;
    string Value<1024>;
};

