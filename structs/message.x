enum MessageType {
  CLUSTER_CONFIG  = 0,
  INDEX           = 1,
  REQUEST         = 2,
  RESPONSE        = 3,
  PING            = 4,

  INDEX_UPDATE    = 6,
  CLOSE           = 7
};

union Message switch(MessageType type)
{
  case CLUSTER_CONFIG:
    ClusterConfigMessage content;
  case INDEX:
    void;
  case REQUEST:
    void;
  case RESPONSE:
    void;
  case PING:
    void;
  case INDEX_UPDATE:
    void;
  case CLOSE:
    void;
};