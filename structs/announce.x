struct Announcement {
    unsigned int Magic;
    Device This;
    Device Extra<>;
};

struct Device {
    opaque ID<32>;
    Address Addresses<16>;
    Relay Relays<16>;
};

struct Address {
    string URL<2083>;
};

struct Relay {
    string URL<2083>;
    int Latency;
};
