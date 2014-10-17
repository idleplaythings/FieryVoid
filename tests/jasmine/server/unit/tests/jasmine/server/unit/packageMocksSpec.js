// goal: read JSON metadata for packages and create the mocks
// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "jquery": {},
  "accounts-ui": {},
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "a91d27a2f506f8a1daae516eee9f60ce03595c01"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 9
            },
            "handle": {
              "type": "function",
              "refID": 11
            },
            "listen": {
              "type": "function",
              "refID": 13
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 15
            },
            "emit": {
              "type": "function",
              "refID": 17
            },
            "addListener": {
              "type": "function",
              "refID": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "type": "function",
              "refID": 21
            },
            "removeListener": {
              "type": "function",
              "refID": 23
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 25
            },
            "listeners": {
              "type": "function",
              "refID": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 9
            },
            "handle": {
              "ref": 11
            },
            "listen": {
              "ref": 13
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 0
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    },
    "WebAppInternals": {
      "type": "object",
      "members": {
        "identifyBrowser": {
          "type": "function"
        },
        "generateBoilerplateInstance": {
          "type": "function"
        },
        "staticFilesMiddleware": {
          "type": "function"
        },
        "bindToProxy": {
          "type": "function"
        },
        "addRoute": {
          "type": "function"
        },
        "reloadClientPrograms": {
          "type": "function"
        },
        "generateBoilerplate": {
          "type": "function"
        },
        "staticFiles": {
          "type": "object",
          "members": {
            "/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/underscore.js.map"
                }
              }
            },
            "/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/907f41ce7b84611715fdacaf42af1d82f4502b5e.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/907f41ce7b84611715fdacaf42af1d82f4502b5e.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/meteor.js.map"
                }
              }
            },
            "/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/265926494aaa3929cd2e30da265211c5929f37a4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/265926494aaa3929cd2e30da265211c5929f37a4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/jquery.js.map"
                }
              }
            },
            "/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/tracker.js.map"
                }
              }
            },
            "/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/random.js.map"
                }
              }
            },
            "/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/localstorage.js.map"
                }
              }
            },
            "/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/json.js.map"
                }
              }
            },
            "/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/base64.js.map"
                }
              }
            },
            "/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ejson.js.map"
                }
              }
            },
            "/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/check.js.map"
                }
              }
            },
            "/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/07e201b648f16be8435a4f666156995eeda0c750.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/07e201b648f16be8435a4f666156995eeda0c750.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/logging.js.map"
                }
              }
            },
            "/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/retry.js.map"
                }
              }
            },
            "/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reload.js.map"
                }
              }
            },
            "/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/id-map.js.map"
                }
              }
            },
            "/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ordered-dict.js.map"
                }
              }
            },
            "/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/geojson-utils.js.map"
                }
              }
            },
            "/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d08e67b8b9ef5f236184319cc86e6e14b5cf11be.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d08e67b8b9ef5f236184319cc86e6e14b5cf11be.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/minimongo.js.map"
                }
              }
            },
            "/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ddp.js.map"
                }
              }
            },
            "/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/follower-livedata.js.map"
                }
              }
            },
            "/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/application-configuration.js.map"
                }
              }
            },
            "/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/mongo.js.map"
                }
              }
            },
            "/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/deps.js.map"
                }
              }
            },
            "/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/539b5fc23cf5e63bc8e324543a1026b138316a8c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/539b5fc23cf5e63bc8e324543a1026b138316a8c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/htmljs.js.map"
                }
              }
            },
            "/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/observe-sequence.js.map"
                }
              }
            },
            "/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reactive-var.js.map"
                }
              }
            },
            "/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/88aac5d3c26b7576ac55bb3afc5324f465757709.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/88aac5d3c26b7576ac55bb3afc5324f465757709.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/blaze.js.map"
                }
              }
            },
            "/packages/accounts-base.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-base.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6ed32803c332f93f65e36a195f42e58a62ed028d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6ed32803c332f93f65e36a195f42e58a62ed028d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-base.js.map"
                }
              }
            },
            "/packages/service-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/service-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/service-configuration.js.map"
                }
              }
            },
            "/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/templating.js.map"
                }
              }
            },
            "/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/reactive-dict.js.map"
                }
              }
            },
            "/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/session.js.map"
                }
              }
            },
            "/packages/sha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/sha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/sha.js.map"
                }
              }
            },
            "/packages/srp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/srp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/srp.js.map"
                }
              }
            },
            "/packages/accounts-password.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-password.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c517b689e15ab07dd443895b7ed801683dda159.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c517b689e15ab07dd443895b7ed801683dda159.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-password.js.map"
                }
              }
            },
            "/packages/accounts-ui-unstyled.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-ui-unstyled.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/edf2fed66a568185c5a5c0c245d45982aa571679.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/edf2fed66a568185c5a5c0c245d45982aa571679.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-ui-unstyled.js.map"
                }
              }
            },
            "/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/less.js.map"
                }
              }
            },
            "/packages/accounts-ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1ff79db616cce9b320fe8aed6103eded31248467.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1ff79db616cce9b320fe8aed6103eded31248467.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/accounts-ui.js.map"
                }
              }
            },
            "/packages/standard-app-packages.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/standard-app-packages.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/standard-app-packages.js.map"
                }
              }
            },
            "/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_core.js.map"
                }
              }
            },
            "/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ui.js.map"
                }
              }
            },
            "/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_layout.js.map"
                }
              }
            },
            "/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/iron_router.js.map"
                }
              }
            },
            "/packages/ldk_three.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ldk_three.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3de95ffc7b7ae7dfd4d0cafcc2f4518cc8884879.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3de95ffc7b7ae7dfd4d0cafcc2f4518cc8884879.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/ldk_three.js.map"
                }
              }
            },
            "/packages/mrt_q.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/mrt_q.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b14911b392c0c719b7722942ac5e160801ddf8ff.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b14911b392c0c719b7722942ac5e160801ddf8ff.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/mrt_q.js.map"
                }
              }
            },
            "/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2a812f08e615736fedd44f1d63f780a64163b6ee.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2a812f08e615736fedd44f1d63f780a64163b6ee.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/packages/url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/f267b683007ca477629c166b4bd43499e3122351.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/f267b683007ca477629c166b4bd43499e3122351.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/url.js.map"
                }
              }
            },
            "/packages/http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/http.js.map"
                }
              }
            },
            "/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_core.js.map"
                }
              }
            },
            "/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/amplify.js.map"
                }
              }
            },
            "/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/92751561da596e9009d1c1baacb9aa21064ce18d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/92751561da596e9009d1c1baacb9aa21064ce18d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/autoupdate.js.map"
                }
              }
            },
            "/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/meteor-platform.js.map"
                }
              }
            },
            "/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/webapp.js.map"
                }
              }
            },
            "/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/livedata.js.map"
                }
              }
            },
            "/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3c496d2950151d744a8574297b46d2763a123bdf.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3c496d2950151d744a8574297b46d2763a123bdf.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/spacebars.js.map"
                }
              }
            },
            "/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/client/view/template.fleet.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/client/view/template.fleet.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/view/template.game.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/view/template.game.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/client/view/template.hullImageList.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/client/view/template.hullImageList.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/client/view/template.hulleditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/client/view/template.hulleditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/client/view/template.moduleEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/client/view/template.moduleEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/template.shipDesignArmorMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/template.shipDesignArmorMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/template.shipDesignEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/template.shipDesignEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/template.shipMenuOwned.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/template.shipMenuOwned.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shiphtmlentry/client/view/template.ShipHtmlEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shiphtmlentry/client/view/template.ShipHtmlEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/createShip/template.createShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/createShip/template.createShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipListing/template.shipListEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipListing/template.shipListEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipMenu/template.shipMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipMenu/template.shipMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipdisplay/template.shipDisplay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipdisplay/template.shipDisplay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/topmenu/template.topmenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/topmenu/template.topmenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/client/template.actionBar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/client/template.actionBar.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/template.clickCatcher.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/template.clickCatcher.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/template.page.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/template.page.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/template.smallHullImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/template.smallHullImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/template.smallModuleImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/template.smallModuleImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/template.smallShipDesignImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/template.smallShipDesignImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/lib/Action.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/lib/Action.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/effects/lib/ParticleEffect.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/effects/lib/ParticleEffect.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/effects/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/effects/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/lib/TraitVariable.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/lib/TraitVariable.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/lib/ShipStatusSymbol.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/lib/ShipStatusSymbol.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/weaponModule/lib/BaseWeaponModule.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/weaponModule/lib/BaseWeaponModule.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/weaponModule/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/weaponModule/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/base/lib/BaseTemplate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/base/lib/BaseTemplate.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/lib/Icon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/lib/Icon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/math/model/lib/Vector3.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/math/model/lib/Vector3.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/lib/ShipEditorInputAction.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/lib/ShipEditorInputAction.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/lib/ShipStatusManager.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/lib/ShipStatusManager.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/lib/Sprite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/lib/Sprite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/lib/SpritePhong.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/lib/SpritePhong.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/tooltip/model/lib/TooltipView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/tooltip/model/lib/TooltipView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/componentposition/lib/ComponentPositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/componentposition/lib/ComponentPositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/lib/Hotkey.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/lib/Hotkey.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/lib/DIC/DIC.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/lib/DIC/DIC.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/lib/DIC/Factory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/lib/DIC/Factory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/math/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/math/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/lib/namespace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/lib/namespace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/lib/stats.min.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/lib/stats.min.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/lib/three.min.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/lib/three.min.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/lib/bootstrap.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/lib/bootstrap.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/controller/controller.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/controller/controller.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/math/Vector2.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/math/Vector2.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/math/Vector3.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/math/Vector3.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/model/model.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/model/model.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Arc.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Arc.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Augment.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Augment.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Button.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Button.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/CoordinateConverter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/CoordinateConverter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Curve.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Curve.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/DrawingToCanvas.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/DrawingToCanvas.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Ellipse.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Ellipse.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/ImageLoader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/ImageLoader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Line.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Line.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/MathLib.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/MathLib.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/ObjectContainer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/ObjectContainer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Particle.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Particle.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/ParticleEmitter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/ParticleEmitter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Path.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Path.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Raytrace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Raytrace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/ReactiveComponent.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/ReactiveComponent.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/SeedRandom.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/SeedRandom.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Textures.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Textures.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/Tools.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/Tools.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/VectorUtils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/VectorUtils.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/requestAnimFrame.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/requestAnimFrame.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/user.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/lib/user.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/crew/ShipStatusSymbolCrew.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/crew/ShipStatusSymbolCrew.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/power/ShipStatusSymbolPower.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/power/ShipStatusSymbolPower.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/scanner/ShipStatusSymbolScanner.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/scanner/ShipStatusSymbolScanner.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/sensor/ShipStatusSymbolSensor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/sensor/ShipStatusSymbolSensor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/symbols/thrust/ShipStatusSymbolThrust.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/symbols/thrust/ShipStatusSymbolThrust.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/shaders/ShipSpriteShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/shaders/ShipSpriteShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/weaponFire/Projectile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/weaponFire/Projectile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/strategies/arc/WeaponArcStrategy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/strategies/arc/WeaponArcStrategy.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/strategies/range/FixedRangeStrategy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/strategies/range/FixedRangeStrategy.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/strategies/range/RangePenaltyStrategy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/strategies/range/RangePenaltyStrategy.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/strategies/scatter/WeaponScatterStrategy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/strategies/scatter/WeaponScatterStrategy.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/strategies/target/ShipTargetStrategy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/strategies/target/ShipTargetStrategy.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/model/inputaction/SelectActionBar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/model/inputaction/SelectActionBar.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/model/inputaction/ShowActionBarForSelectedShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/model/inputaction/ShowActionBarForSelectedShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/crew/model/status/CrewStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/crew/model/status/CrewStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/cursor/client/model/CustomCursor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/cursor/client/model/CustomCursor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/client/input/ShowEWMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/client/input/ShowEWMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/client/view/fleet.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/client/view/fleet.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/ui/RadialMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/ui/RadialMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/ui/ReplayUI.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/ui/ReplayUI.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/ui/TurnUi.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/ui/TurnUi.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/ui/WaypointMenuButton.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/ui/WaypointMenuButton.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/view/game.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/view/game.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexagon/model/coordinate/Axial.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexagon/model/coordinate/Axial.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexagon/model/coordinate/Cube.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexagon/model/coordinate/Cube.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexagon/model/coordinate/Offset.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexagon/model/coordinate/Offset.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/model/hotkey/Cancel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/model/hotkey/Cancel.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/model/hotkey/Left.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/model/hotkey/Left.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/model/hotkey/Right.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/model/hotkey/Right.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/client/view/hullImageList.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/client/view/hullImageList.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/client/view/hulleditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/client/view/hulleditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/module/ModuleIcon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/module/ModuleIcon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/module/ModuleIconEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/module/ModuleIconEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/module/ModuleIconPlacing.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/module/ModuleIconPlacing.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/ship/ShipIcon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/ship/ShipIcon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/ship/ShipIconEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/ship/ShipIconEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/ship/ShipIconHull.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/ship/ShipIconHull.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/ship/ShipIconHullEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/ship/ShipIconHullEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/model/ship/SpriteGrid.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/model/ship/SpriteGrid.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ActivateTileOnMouseMove.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ActivateTileOnMouseMove.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/DisplayRoutes.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/DisplayRoutes.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/EditorShipHullVisibility.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/EditorShipHullVisibility.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/HideHullAtZoom.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/HideHullAtZoom.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/HighlightActiveRoute.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/HighlightActiveRoute.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/HullEditorClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/HullEditorClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/RemoveInputModeOnCancel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/RemoveInputModeOnCancel.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/Replay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/Replay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/SelectMovementStepOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/SelectMovementStepOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/SelectShipOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/SelectShipOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/SelectedShipMarker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/SelectedShipMarker.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShipSideMarker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShipSideMarker.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowGridOnZoom.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowGridOnZoom.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowModuleDetailView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowModuleDetailView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowModuleDetailViewEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowModuleDetailViewEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowMomevemenTooltipOnRouteMouseOver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowMomevemenTooltipOnRouteMouseOver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowMovementMenuOnRouteClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowMovementMenuOnRouteClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/ShowShipStatusView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/ShowShipStatusView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/inputaction/TurnButtons.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/inputaction/TurnButtons.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/client/view/moduleEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/client/view/moduleEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/client/view/MovementButton.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/client/view/MovementButton.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/client/view/MovementDisplayWaypoint.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/client/view/MovementDisplayWaypoint.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/client/view/MovementRadialMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/client/view/MovementRadialMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/client/view/MovementVisualizer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/client/view/MovementVisualizer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/Move.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/Move.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/Speed.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/Speed.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/SpeedAccelerate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/SpeedAccelerate.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/SpeedDeaccelerate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/SpeedDeaccelerate.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/Turn.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/Turn.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/TurnLeft.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/TurnLeft.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/action/TurnRight.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/action/TurnRight.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/effects/Bolt.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/effects/Bolt.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/effects/ParticleEffectExplosion.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/effects/ParticleEffectExplosion.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/effects/ParticleEffectTrail.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/effects/ParticleEffectTrail.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/status/PowerStatusOffline.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/status/PowerStatusOffline.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/status/PowerStatusPowerOutput.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/status/PowerStatusPowerOutput.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/status/PowerStatusPowered.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/status/PowerStatusPowered.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/shipDesignArmorMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/shipDesignArmorMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/shipDesignEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/shipDesignEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/view/shipMenuOwned.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/view/shipMenuOwned.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shiphtmlentry/client/view/ShipHtmlEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shiphtmlentry/client/view/ShipHtmlEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTrait.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTrait.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitCrewProvider.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitCrewProvider.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitEnergyConsumer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitEnergyConsumer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitEnergyProducer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitEnergyProducer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitRequiresCrew.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitRequiresCrew.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitScanner.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitScanner.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitSensor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitSensor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitThrustProducer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitThrustProducer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitThruster.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitThruster.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitTurret.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitTurret.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/traits/ModuleTraitWeapon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/traits/ModuleTraitWeapon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/module/ModuleSprite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/module/ModuleSprite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSprite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSprite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteHull.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteHull.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteModule.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteModule.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteModules.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteModules.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteSelected.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteSelected.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteSide.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteSide.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sprite/model/ship/ShipSpriteSilhouette.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sprite/model/ship/ShipSpriteSilhouette.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/ProjectilePathResolver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/ProjectilePathResolver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/ShipWeaponFireAnimator.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/ShipWeaponFireAnimator.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/WeaponFireAnimationFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/WeaponFireAnimationFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/animation/WeaponFireAnimationService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/animation/WeaponFireAnimationService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/DisplayFireOrdersOnActionButtons.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/DisplayFireOrdersOnActionButtons.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/HighlightSelectedWeapons.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/HighlightSelectedWeapons.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/RemoveFireOrderAtWeaponSelect.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/RemoveFireOrderAtWeaponSelect.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/SelectAndDeselectWeapons.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/SelectAndDeselectWeapons.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/SelectWeapon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/SelectWeapon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/ShowCurrentFireOrders.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/ShowCurrentFireOrders.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/ShowWeaponArcsOnWeaponMouseOver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/ShowWeaponArcsOnWeaponMouseOver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/ShowWeaponTargetingOnMouseOver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/ShowWeaponTargetingOnMouseOver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/inputaction/TargetShipOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/inputaction/TargetShipOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/view/ArcIndicatorService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/view/ArcIndicatorService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/weaponModule/WeaponModuleFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/weaponModule/WeaponModuleFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/weaponModule/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/weaponModule/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/createShip/createShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/createShip/createShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipListing/shipListEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipListing/shipListEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipMenu/shipMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipMenu/shipMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/shipdisplay/shipDisplay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/shipdisplay/shipDisplay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/topmenu/topmenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/topmenu/topmenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/BloomPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/BloomPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/DotScreenPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/DotScreenPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/EffectComposer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/EffectComposer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/FilmPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/FilmPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/MaskPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/MaskPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/RenderPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/RenderPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/SavePass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/SavePass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/ShaderPass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/ShaderPass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/postprocessing/TexturePass.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/postprocessing/TexturePass.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BasicShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BasicShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BleachBypassShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BleachBypassShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BlendShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BlendShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BokehShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BokehShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BokehShader2.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BokehShader2.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/BrightnessContrastShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/BrightnessContrastShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/ColorCorrectionShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/ColorCorrectionShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/ColorifyShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/ColorifyShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/ConvolutionShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/ConvolutionShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/CopyShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/CopyShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/DOFMipMapShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/DOFMipMapShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/DotScreenShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/DotScreenShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/EdgeShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/EdgeShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/EdgeShader2.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/EdgeShader2.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/FXAAShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/FXAAShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/FilmShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/FilmShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/FocusShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/FocusShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/FresnelShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/FresnelShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/HorizontalBlurShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/HorizontalBlurShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/HorizontalTiltShiftShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/HorizontalTiltShiftShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/HueSaturationShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/HueSaturationShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/KaleidoShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/KaleidoShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/LuminosityShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/LuminosityShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/MirrorShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/MirrorShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/NormalMapShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/NormalMapShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/RGBShiftShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/RGBShiftShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/SSAOShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/SSAOShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/SepiaShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/SepiaShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/TriangleBlurShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/TriangleBlurShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/UnpackDepthRGBAShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/UnpackDepthRGBAShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/VerticalBlurShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/VerticalBlurShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/VerticalTiltShiftShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/VerticalTiltShiftShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/shaders/VignetteShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/shaders/VignetteShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/model/ActionBar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/model/ActionBar.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/model/ActionButton.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/model/ActionButton.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/model/ActionButtonWeapon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/model/ActionButtonWeapon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/armor/model/Armor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/armor/model/Armor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/canvasicon/model/ModuleIconOnCanvas.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/canvasicon/model/ModuleIconOnCanvas.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/canvasicon/model/ShipDesignIconOnCanvas.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/canvasicon/model/ShipDesignIconOnCanvas.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/componentposition/model/HullLayoutPositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/componentposition/model/HullLayoutPositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/componentposition/model/ModuleLayoutPositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/componentposition/model/ModuleLayoutPositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/componentposition/model/ShipDesignPositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/componentposition/model/ShipDesignPositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/componentposition/model/ShipPositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/componentposition/model/ShipPositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageModule.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageModule.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipHull.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipHull.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipHullAndModules.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipHullAndModules.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipHullBumpMap.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipHullBumpMap.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipHullNormalMap.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipHullNormalMap.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipModules.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipModules.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipModulesNormalMaps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipModulesNormalMaps.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/compositeimage/model/CompositeImageShipSilhouette.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/compositeimage/model/CompositeImageShipSilhouette.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/coordinateconverter/model/CoordinateConverterViewPort.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/coordinateconverter/model/CoordinateConverterViewPort.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/crew/model/Crew.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/crew/model/Crew.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/crew/model/CrewManagement.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/crew/model/CrewManagement.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/cursor/client/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/cursor/client/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/model/DamageManagement.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/model/DamageManagement.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/model/DamageTile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/model/DamageTile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/model/HitLocationService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/model/HitLocationService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/model/ShipDamageStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/model/ShipDamageStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/effects/model/SpriteEffectThrusterGlow.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/effects/model/SpriteEffectThrusterGlow.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/client/EWRadialMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/client/EWRadialMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/client/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/client/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/EWOrder.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/EWOrder.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/EWService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/EWService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/EwTypes.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/EwTypes.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/Scanner.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/Scanner.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/ShipEWUsage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/ShipEWUsage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/ShipEWUsageFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/ShipEWUsageFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/model/ShipElectronicWarfareStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/model/ShipElectronicWarfareStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/event/model/Dispatcher.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/event/model/Dispatcher.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/event/model/Event.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/event/model/Event.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/event/model/EventListener.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/event/model/EventListener.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/client/route.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/client/route.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/collection/Fleets.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/collection/Fleets.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/controller/FleetController.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/controller/FleetController.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/model/Fleet.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/model/Fleet.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/model/FleetEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/model/FleetEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/model/FleetStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/model/FleetStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/model/ShipsInFleetDisplay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/model/ShipsInFleetDisplay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/route.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/route.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/client/subscribe.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/client/subscribe.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/collection/Games.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/collection/Games.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/controller/GameController.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/controller/GameController.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/Game.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/Game.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameAnimationLoop.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameAnimationLoop.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameClient.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameClient.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameHtmlContainer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameHtmlContainer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameScene.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameScene.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameState.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameState.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/GameStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/GameStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/Scrolling.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/Scrolling.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/ShipService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/ShipService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/UiEventManager.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/UiEventManager.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/model/Zooming.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/model/Zooming.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/gameaction/model/GameActionManager.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/gameaction/model/GameActionManager.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/Grid.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/Grid.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/GridHullLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/GridHullLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/GridLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/GridLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/Tile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/Tile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/TileHull.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/TileHull.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/TileLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/TileLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/TileLayoutArmor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/TileLayoutArmor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/TileLayoutModules.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/TileLayoutModules.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/model/TilePlacingModule.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/model/TilePlacingModule.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/CoordinateResolver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/CoordinateResolver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/GridService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/GridService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/Hex.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/Hex.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexGrid.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexGrid.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexGridRenderer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexGridRenderer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexHighlighter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexHighlighter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexLayoutRenderer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexLayoutRenderer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexLayoutTextureProvider.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexLayoutTextureProvider.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/model/HexRenderer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/model/HexRenderer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/model/HotkeyFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/model/HotkeyFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hotkey/model/HotkeySet.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hotkey/model/HotkeySet.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/client/routes.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/client/routes.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/model/HullEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/model/HullEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/model/HullEditorService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/model/HullEditorService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/model/ReactiveHullLayoutDisplay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/model/ReactiveHullLayoutDisplay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/ActiveTile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/ActiveTile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/InputMode.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/InputMode.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/InputModeSelect.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/InputModeSelect.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/InputModeWeapon.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/InputModeWeapon.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/InputState.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/InputState.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/model/SelectedShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/model/SelectedShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/math/model/Matrix4.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/math/model/Matrix4.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/client/routes.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/client/routes.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/input/ModuleEditorClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/input/ModuleEditorClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/model/ModuleEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/model/ModuleEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/model/ModuleEditorService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/model/ModuleEditorService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/model/ModuleImageChooser.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/model/ModuleImageChooser.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/modulelist/model/ModuleList.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/modulelist/model/ModuleList.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/modulelist/model/ReactiveModuleList.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/modulelist/model/ReactiveModuleList.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/client/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/client/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/MovementAbility.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/MovementAbility.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/MovingService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/MovingService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/PathRenderer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/PathRenderer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/PathResolver.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/PathResolver.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/Position.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/Position.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/Route.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/Route.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ShipAnimationDetails.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ShipAnimationDetails.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ShipAnimator.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ShipAnimator.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ShipMovementAnimationService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ShipMovementAnimationService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ShipMovementHandler.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ShipMovementHandler.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ShipMovementStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ShipMovementStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrustCost.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrustCost.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrustManagement.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrustManagement.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrustProducer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrustProducer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrustService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrustService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/Thruster.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/Thruster.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrusterInUse.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrusterInUse.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/model/ThrusterUsage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/model/ThrusterUsage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particlePath/model/ParticlePath.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particlePath/model/ParticlePath.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particlePath/model/ParticlePathEmitter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particlePath/model/ParticlePathEmitter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/EffectManager.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/EffectManager.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/EffectParticle.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/EffectParticle.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/model/EffectParticleEmitter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/model/EffectParticleEmitter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/position/model/GridPositionComparison.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/position/model/GridPositionComparison.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/position/model/PositionService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/position/model/PositionService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/EnergyConsumer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/EnergyConsumer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/EnergyProducer.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/EnergyProducer.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/PowerService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/PowerService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/model/ShipPowerStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/model/ShipPowerStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/raytrace/model/DirectionalRaytrace.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/raytrace/model/DirectionalRaytrace.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/sensor/model/SensorManagement.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/sensor/model/SensorManagement.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/client/subscribe.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/client/subscribe.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/collection/HullImageDocument.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/collection/HullImageDocument.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/collection/HullLayoutDocument.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/collection/HullLayoutDocument.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/collection/HullPatternImageDocument.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/collection/HullPatternImageDocument.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/collection/ShipDesigns.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/collection/ShipDesigns.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/HullLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/HullLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/HullLayoutRepository.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/HullLayoutRepository.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/Ship.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/Ship.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/ShipDesign.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/ShipDesign.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/ShipDesignInGame.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/ShipDesignInGame.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/ShipDesignStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/ShipDesignStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/model/ShipStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/model/ShipStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/client/route.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/client/route.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/PlaceArmorOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/PlaceArmorOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/PlaceModuleOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/PlaceModuleOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/RemoveModuleOnClick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/RemoveModuleOnClick.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/ShowArmorMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/ShowArmorMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/ShowGridOnShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/ShowGridOnShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/ShowSelectedModuleIconInEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/ShowSelectedModuleIconInEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/input/ShowShipStatusViewEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/input/ShowShipStatusViewEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/model/EditorShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/model/EditorShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/model/SelectedModuleDisplay.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/model/SelectedModuleDisplay.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/model/ShipApperanceMenu.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/model/ShipApperanceMenu.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/model/ShipDesignEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/model/ShipDesignEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/model/ShipDesignEditorService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/model/ShipDesignEditorService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipeditor/model/ShipEditor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipeditor/model/ShipEditor.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shiphtmlentry/model/ShipHtmlEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shiphtmlentry/model/ShipHtmlEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/collection/ModuleLayoutCollection.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/collection/ModuleLayoutCollection.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/Module.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/Module.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleImageStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleImageStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleLayout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleLayout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleLayoutOnShip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleLayoutOnShip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/model/ModuleLayoutRepository.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/model/ModuleLayoutRepository.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/ShipStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/ShipStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/ShipStatusSymbolService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/ShipStatusSymbolService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/model/ShipStatusView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/model/ShipStatusView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/collection/Terrain.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/collection/Terrain.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/Asteroid.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/Asteroid.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/AsteroidBelt.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/AsteroidBelt.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/AsteroidBeltFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/AsteroidBeltFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/AsteroidParticle.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/AsteroidParticle.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/AsteroidParticleEmitter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/AsteroidParticleEmitter.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/GameTerrain.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/GameTerrain.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/Star.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/Star.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/model/StarFieldFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/model/StarFieldFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/testDrive/model/GameTestdrive.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/testDrive/model/GameTestdrive.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/controller/TimelineController.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/controller/TimelineController.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/model/Time.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/model/Time.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/model/Timeline.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/model/Timeline.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/model/TimelineEntry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/model/TimelineEntry.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/model/TimelineFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/model/TimelineFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/model/TimelineStorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/model/TimelineStorage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/tooltip/client/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/tooltip/client/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/tooltip/model/ModuleDetailView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/tooltip/model/ModuleDetailView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/tooltip/model/MovementTooltip.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/tooltip/model/MovementTooltip.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/tooltip/model/ShipTooltipView.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/tooltip/model/ShipTooltipView.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/uicomponentviewservice/model/UIComponentViewService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/uicomponentviewservice/model/UIComponentViewService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/client/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/client/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/FireOrder.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/FireOrder.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/ShipWeaponStatus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/ShipWeaponStatus.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponArc.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponArc.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponArcService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponArcService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponFire.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponFire.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponFireFactory.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponFireFactory.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponIndicatorService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponIndicatorService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponManagement.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponManagement.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/model/WeaponService.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/model/WeaponService.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/helpers/router.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/spectrum.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/helpers/spectrum.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/clickCatcher.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/clickCatcher.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/smallHullImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/smallHullImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/smallModuleImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/smallModuleImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/template/smallShipDesignImage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/template/smallShipDesignImage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/three/FTLEffectShader.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/client/three/FTLEffectShader.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/actionbar/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/actionbar/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/armor/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/armor/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/coordinateconverter/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/coordinateconverter/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/damage/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/damage/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/electronicWarfare/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/electronicWarfare/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/event/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/event/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/fleetEditor/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/fleetEditor/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/functions.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/functions.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/game/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/game/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/gameaction/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/gameaction/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/grid/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/grid/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hexgrid/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hexgrid/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/hulleditor/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/hulleditor/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/icon/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/icon/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/inputMode/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/inputMode/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/moduleeditor/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/moduleeditor/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/modulelist/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/modulelist/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/movement/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/movement/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/particleeffects/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/particleeffects/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/position/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/position/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/power/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/power/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/ship/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/ship/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdesigneditor/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdesigneditor/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipdisplay/Display.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipdisplay/Display.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipmodule/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipmodule/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/shipstatus/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/shipstatus/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/terrain/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/terrain/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/testDrive/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/testDrive/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/testDrive/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/testDrive/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/timeline/methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/timeline/methods.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/uicomponentviewservice/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/uicomponentviewservice/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/features/weapon/dic.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/features/weapon/dic.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css.map"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/spinner.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/spinner.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/._.DS_Store": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/._.DS_Store"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/raster.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/raster.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/background/bluespace3.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/background/bluespace3.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/effect/effectTextures1024.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/effect/effectTextures1024.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/effect/explosion128.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/effect/explosion128.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/effect/explosion512.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/effect/explosion512.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/effect/thrusterglow.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/effect/thrusterglow.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/effect/thrusterglow2.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/effect/thrusterglow2.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/arrow.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/arrow.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/create_shipdesign.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/create_shipdesign.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/damageBrushes-normal.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/damageBrushes-normal.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/damageBrushes.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/damageBrushes.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/fireOrder.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/fireOrder.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/grid.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/grid.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/hullgrid.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/hullgrid.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/target.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/target.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/x.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/x.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/misc/x.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/misc/x.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/armorheavy-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/armorheavy-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/armorlight-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/armorlight-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/armormedium-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/armormedium-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew2x3-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew2x3-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew2x3-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew2x3-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew2x3-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew2x3-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew3x2-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew3x2-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew3x2-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew3x2-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/crew3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/crew3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/engine2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/engine2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/engine3x4-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/engine3x4-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/engine8x4-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/engine8x4-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/engine8x4-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/engine8x4-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/lightturret-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/lightturret-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/lightturret-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/lightturret-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/lightturret-over.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/lightturret-over.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/railgunmkI-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/railgunmkI-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/railgunmkI-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/railgunmkI-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/railgunmkI-over.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/railgunmkI-over.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/reactor1-bump.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/reactor1-bump.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/reactor1-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/reactor1-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/reactor1-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/reactor1-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/reactor1-outsidebump.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/reactor1-outsidebump.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/retro1-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/retro1-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x2-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x2-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x3-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x3-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x3-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x3-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x4-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x4-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner2x4-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner2x4-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner3x2-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner3x2-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner4x2-inside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner4x2-inside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/scanner4x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/scanner4x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/thruster3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/thruster3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/thruster5x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/thruster5x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/thrusters1-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/thrusters1-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/thrusters1-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/thrusters1-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/psd/effectTextures.xcf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/psd/effectTextures.xcf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/psd/jasper.psd": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/psd/jasper.psd"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/psd/modules.psd": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/psd/modules.psd"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/psd/reactor1.psd": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/psd/reactor1.psd"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/aurora-base.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/aurora-base.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/aurora-bump.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/aurora-bump.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/aurora-details.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/aurora-details.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/aurora-shadow.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/aurora-shadow.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/hullpatterntest.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/hullpatterntest.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/jasper1-base.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/jasper1-base.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/jasper1-bump.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/jasper1-bump.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/jasper1-details.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/jasper1-details.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/jasper1-normal.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/jasper1-normal.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/jasper1-shadow.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/jasper1-shadow.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/morningstar-base.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/morningstar-base.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/morningstar-bump.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/morningstar-bump.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/morningstar-details.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/morningstar-details.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/ship/morningstar-shadow.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/ship/morningstar-shadow.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/._.DS_Store": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/._.DS_Store"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/._hex.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/._hex.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/asteroid_256.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/asteroid_256.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/asteroid_4096.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/asteroid_4096.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/asteroid_512.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/asteroid_512.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/asteroid_base_512.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/asteroid_base_512.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/hex.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/hex.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/planet1.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/planet1.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/terrain/star1.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/terrain/star1.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/crew3x2-hull.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/crew3x2-hull.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/crew3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/crew3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/lightturret-over.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/lightturret-over.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/reactor1-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/reactor1-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/scanner3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/scanner3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/bump/thruster3x2-outside.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/bump/thruster3x2-outside.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/CnC.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/CnC.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/advancedAssaultLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/advancedAssaultLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/antimatterConverter.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/antimatterConverter.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/assaultLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/assaultLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/ballisticTorpedo.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/ballisticTorpedo.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/battleLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/battleLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/burstBeam.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/burstBeam.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/cargoBay.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/cargoBay.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/catapult.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/catapult.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/electroPulseGun.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/electroPulseGun.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/elintArray.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/elintArray.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/energyMine.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/energyMine.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/engine.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/engine.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/fusionCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/fusionCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/gatlingPulseCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/gatlingPulseCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/graviticBolt.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/graviticBolt.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/graviticCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/graviticCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/graviticCutter.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/graviticCutter.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/graviticLance.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/graviticLance.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/gravitonBeam.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/gravitonBeam.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/gravitonBeamDuo.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/gravitonBeamDuo.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/gravitonPulsar.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/gravitonPulsar.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/guardianArray.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/guardianArray.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/hangar.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/hangar.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/heavyArray.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/heavyArray.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/heavyBolter.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/heavyBolter.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/heavyLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/heavyLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/heavyPlasma.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/heavyPlasma.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/heavyPulse.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/heavyPulse.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/hvyParticleCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/hvyParticleCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/improvedIonCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/improvedIonCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/interceptor.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/interceptor.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/ionBolt.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/ionBolt.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/ionCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/ionCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/ionTorpedo.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/ionTorpedo.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/jammer.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/jammer.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/jumpEngine.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/jumpEngine.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightGraviticBolt.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightGraviticBolt.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightGravitonBeam.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightGravitonBeam.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightParticleBeam.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightParticleBeam.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightParticleBlaster.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightParticleBlaster.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightParticleCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightParticleCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightPlasma.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightPlasma.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightPulse.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightPulse.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightfusionCannon2.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightfusionCannon2.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/lightfusionCannon3.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/lightfusionCannon3.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/magGun.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/magGun.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/matterCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/matterCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/mediumLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/mediumLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/mediumPlasma.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/mediumPlasma.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/mediumPulse.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/mediumPulse.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/missile1.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/missile1.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/missile2.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/missile2.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/molecularDisruptor.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/molecularDisruptor.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/neutronLaser.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/neutronLaser.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/pairedParticleGun.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/pairedParticleGun.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/pairedParticleGun3.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/pairedParticleGun3.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/particleBlaster.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/particleBlaster.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/particleCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/particleCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/particleCutter.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/particleCutter.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/particleRepeater.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/particleRepeater.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/plasmaAccelerator.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/plasmaAccelerator.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/plasmaStream.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/plasmaStream.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/quadPulsar.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/quadPulsar.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/reactor.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/reactor.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/repeaterGun.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/repeaterGun.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/scanner.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/scanner.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/scatterPulsar.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/scatterPulsar.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/shield.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/shield.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/shieldGenerator.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/shieldGenerator.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/shockCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/shockCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/solarCannon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/solarCannon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/stdParticleBeam.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/stdParticleBeam.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/stealth.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/stealth.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster1.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster1.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster2.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster2.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster3.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster3.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster4.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster4.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster_small_1.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster_small_1.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster_small_2.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster_small_2.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster_small_3.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster_small_3.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/thruster_small_4.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/thruster_small_4.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/module/ui/twinArray.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/aatu/workspace/FieryVoid/.meteor/local/build/programs/web.browser/app/module/ui/twinArray.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?907f41ce7b84611715fdacaf42af1d82f4502b5e\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/907f41ce7b84611715fdacaf42af1d82f4502b5e.map\",\"size\":107421,\"hash\":\"907f41ce7b84611715fdacaf42af1d82f4502b5e\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?265926494aaa3929cd2e30da265211c5929f37a4\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/265926494aaa3929cd2e30da265211c5929f37a4.map\",\"size\":1295407,\"hash\":\"265926494aaa3929cd2e30da265211c5929f37a4\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?192a05cc46b867dadbe8bf90dd961f6f8fd1574f\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map\",\"size\":66854,\"hash\":\"192a05cc46b867dadbe8bf90dd961f6f8fd1574f\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?803a2be518a0c6c3949e45cf65c4ad627a3d603a\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map\",\"size\":35207,\"hash\":\"803a2be518a0c6c3949e45cf65c4ad627a3d603a\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?07e201b648f16be8435a4f666156995eeda0c750\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/07e201b648f16be8435a4f666156995eeda0c750.map\",\"size\":27996,\"hash\":\"07e201b648f16be8435a4f666156995eeda0c750\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?da8974b7231dd8c0caccb5f322dcf97329d486d1\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map\",\"size\":25926,\"hash\":\"da8974b7231dd8c0caccb5f322dcf97329d486d1\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?d08e67b8b9ef5f236184319cc86e6e14b5cf11be\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/d08e67b8b9ef5f236184319cc86e6e14b5cf11be.map\",\"size\":427493,\"hash\":\"d08e67b8b9ef5f236184319cc86e6e14b5cf11be\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map\",\"size\":617168,\"hash\":\"ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?9bc2c5a8b2796fab86b51660ca643e5a49a30c84\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map\",\"size\":146178,\"hash\":\"9bc2c5a8b2796fab86b51660ca643e5a49a30c84\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?539b5fc23cf5e63bc8e324543a1026b138316a8c\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/539b5fc23cf5e63bc8e324543a1026b138316a8c.map\",\"size\":110444,\"hash\":\"539b5fc23cf5e63bc8e324543a1026b138316a8c\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?88aac5d3c26b7576ac55bb3afc5324f465757709\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/88aac5d3c26b7576ac55bb3afc5324f465757709.map\",\"size\":385864,\"hash\":\"88aac5d3c26b7576ac55bb3afc5324f465757709\"},{\"path\":\"packages/accounts-base.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-base.js?6ed32803c332f93f65e36a195f42e58a62ed028d\",\"sourceMap\":\"packages/accounts-base.js.map\",\"sourceMapUrl\":\"/packages/6ed32803c332f93f65e36a195f42e58a62ed028d.map\",\"size\":108969,\"hash\":\"6ed32803c332f93f65e36a195f42e58a62ed028d\"},{\"path\":\"packages/service-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/service-configuration.js?262da6fb1e9c97be84333c429c9a2929c80f8e3b\",\"sourceMap\":\"packages/service-configuration.js.map\",\"sourceMapUrl\":\"/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map\",\"size\":5082,\"hash\":\"262da6fb1e9c97be84333c429c9a2929c80f8e3b\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?599ba307216da826d8b335332ebcc9a497a369a0\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/599ba307216da826d8b335332ebcc9a497a369a0.map\",\"size\":11910,\"hash\":\"599ba307216da826d8b335332ebcc9a497a369a0\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?442b1bc169c2a1fb8c1fc5420041baa1ed9cb940\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map\",\"size\":6487,\"hash\":\"442b1bc169c2a1fb8c1fc5420041baa1ed9cb940\"},{\"path\":\"packages/sha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sha.js?65ef52f7221944768bfc2049d6b7e163c8ae2615\",\"sourceMap\":\"packages/sha.js.map\",\"sourceMapUrl\":\"/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map\",\"size\":19584,\"hash\":\"65ef52f7221944768bfc2049d6b7e163c8ae2615\"},{\"path\":\"packages/srp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/srp.js?e2e28156e8c912d504a3586351c8a1119f664cfd\",\"sourceMap\":\"packages/srp.js.map\",\"sourceMapUrl\":\"/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map\",\"size\":173470,\"hash\":\"e2e28156e8c912d504a3586351c8a1119f664cfd\"},{\"path\":\"packages/accounts-password.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-password.js?6c517b689e15ab07dd443895b7ed801683dda159\",\"sourceMap\":\"packages/accounts-password.js.map\",\"sourceMapUrl\":\"/packages/6c517b689e15ab07dd443895b7ed801683dda159.map\",\"size\":33053,\"hash\":\"6c517b689e15ab07dd443895b7ed801683dda159\"},{\"path\":\"packages/accounts-ui-unstyled.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-ui-unstyled.js?edf2fed66a568185c5a5c0c245d45982aa571679\",\"sourceMap\":\"packages/accounts-ui-unstyled.js.map\",\"sourceMapUrl\":\"/packages/edf2fed66a568185c5a5c0c245d45982aa571679.map\",\"size\":244892,\"hash\":\"edf2fed66a568185c5a5c0c245d45982aa571679\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/accounts-ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-ui.js?1ff79db616cce9b320fe8aed6103eded31248467\",\"sourceMap\":\"packages/accounts-ui.js.map\",\"sourceMapUrl\":\"/packages/1ff79db616cce9b320fe8aed6103eded31248467.map\",\"size\":1346,\"hash\":\"1ff79db616cce9b320fe8aed6103eded31248467\"},{\"path\":\"packages/standard-app-packages.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/standard-app-packages.js?be7072e6abfda638502b63fa0f809c85c8c2b8ed\",\"sourceMap\":\"packages/standard-app-packages.js.map\",\"sourceMapUrl\":\"/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map\",\"size\":1306,\"hash\":\"be7072e6abfda638502b63fa0f809c85c8c2b8ed\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?fe41a023a7a6f1ded90b0729437928a8ddccc7d4\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map\",\"size\":31679,\"hash\":\"fe41a023a7a6f1ded90b0729437928a8ddccc7d4\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?32038885cb1dad7957291ffebfffcb7f8cd57d20\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map\",\"size\":51775,\"hash\":\"32038885cb1dad7957291ffebfffcb7f8cd57d20\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?080dc95e770e3130757bf6af69fd0abb99573ae4\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map\",\"size\":56973,\"hash\":\"080dc95e770e3130757bf6af69fd0abb99573ae4\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map\",\"size\":250621,\"hash\":\"da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\"},{\"path\":\"packages/ldk_three.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ldk_three.js?3de95ffc7b7ae7dfd4d0cafcc2f4518cc8884879\",\"sourceMap\":\"packages/ldk_three.js.map\",\"sourceMapUrl\":\"/packages/3de95ffc7b7ae7dfd4d0cafcc2f4518cc8884879.map\",\"size\":4588468,\"hash\":\"3de95ffc7b7ae7dfd4d0cafcc2f4518cc8884879\"},{\"path\":\"packages/mrt_q.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mrt_q.js?b14911b392c0c719b7722942ac5e160801ddf8ff\",\"sourceMap\":\"packages/mrt_q.js.map\",\"sourceMapUrl\":\"/packages/b14911b392c0c719b7722942ac5e160801ddf8ff.map\",\"size\":192789,\"hash\":\"b14911b392c0c719b7722942ac5e160801ddf8ff\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?2a812f08e615736fedd44f1d63f780a64163b6ee\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/2a812f08e615736fedd44f1d63f780a64163b6ee.map\",\"size\":552978,\"hash\":\"2a812f08e615736fedd44f1d63f780a64163b6ee\"},{\"path\":\"packages/url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/url.js?f267b683007ca477629c166b4bd43499e3122351\",\"sourceMap\":\"packages/url.js.map\",\"sourceMapUrl\":\"/packages/f267b683007ca477629c166b4bd43499e3122351.map\",\"size\":6612,\"hash\":\"f267b683007ca477629c166b4bd43499e3122351\"},{\"path\":\"packages/http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/http.js?9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\",\"sourceMap\":\"packages/http.js.map\",\"sourceMapUrl\":\"/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map\",\"size\":37036,\"hash\":\"9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map\",\"size\":6854,\"hash\":\"6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?92751561da596e9009d1c1baacb9aa21064ce18d\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/92751561da596e9009d1c1baacb9aa21064ce18d.map\",\"size\":85564,\"hash\":\"92751561da596e9009d1c1baacb9aa21064ce18d\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?c823646e93561d86e6bcb3cbd2457a8540e519c1\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map\",\"size\":17152,\"hash\":\"c823646e93561d86e6bcb3cbd2457a8540e519c1\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?3c496d2950151d744a8574297b46d2763a123bdf\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/3c496d2950151d744a8574297b46d2763a123bdf.map\",\"size\":42134,\"hash\":\"3c496d2950151d744a8574297b46d2763a123bdf\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?cd9ea128f9bb7cfd71aa9dbbd5b431749da6f0d7\",\"size\":922,\"hash\":\"cd9ea128f9bb7cfd71aa9dbbd5b431749da6f0d7\"},{\"path\":\"app/features/fleetEditor/client/view/template.fleet.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/client/view/template.fleet.js?7f09b36d4a6bd308be6f027306c3b859358d82da\",\"size\":2407,\"hash\":\"7f09b36d4a6bd308be6f027306c3b859358d82da\"},{\"path\":\"app/features/game/client/view/template.game.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/view/template.game.js?3dac80419812e69704f132d814e00a8e13c7a398\",\"size\":322,\"hash\":\"3dac80419812e69704f132d814e00a8e13c7a398\"},{\"path\":\"app/features/hulleditor/client/view/template.hullImageList.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/client/view/template.hullImageList.js?bd7c5e10c45ebfc211ec24f4a3e42baa21c8dd90\",\"size\":621,\"hash\":\"bd7c5e10c45ebfc211ec24f4a3e42baa21c8dd90\"},{\"path\":\"app/features/hulleditor/client/view/template.hulleditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/client/view/template.hulleditor.js?16dcbc79af6d98a211dc086850bed53d66d16eec\",\"size\":4750,\"hash\":\"16dcbc79af6d98a211dc086850bed53d66d16eec\"},{\"path\":\"app/features/moduleeditor/client/view/template.moduleEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/client/view/template.moduleEditor.js?8b3e0711ceb88c4953e2388d6dfbc4dd2a9c6e9b\",\"size\":8853,\"hash\":\"8b3e0711ceb88c4953e2388d6dfbc4dd2a9c6e9b\"},{\"path\":\"app/features/shipdesigneditor/client/view/template.shipDesignArmorMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/template.shipDesignArmorMenu.js?e7736fd883d98556aeb104fa1e178ae95763112b\",\"size\":680,\"hash\":\"e7736fd883d98556aeb104fa1e178ae95763112b\"},{\"path\":\"app/features/shipdesigneditor/client/view/template.shipDesignEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/template.shipDesignEditor.js?9243351c8bf27e47f8c09dcccebd985426e4326e\",\"size\":1261,\"hash\":\"9243351c8bf27e47f8c09dcccebd985426e4326e\"},{\"path\":\"app/features/shipdesigneditor/client/view/template.shipMenuOwned.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/template.shipMenuOwned.js?18b9ba92a4eecb14bf6f0a7574a86fb1348bdfdb\",\"size\":1307,\"hash\":\"18b9ba92a4eecb14bf6f0a7574a86fb1348bdfdb\"},{\"path\":\"app/features/shiphtmlentry/client/view/template.ShipHtmlEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shiphtmlentry/client/view/template.ShipHtmlEntry.js?fd610e1295e79c31fba4a1976f31520e76ff8248\",\"size\":938,\"hash\":\"fd610e1295e79c31fba4a1976f31520e76ff8248\"},{\"path\":\"app/client/template/createShip/template.createShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/createShip/template.createShip.js?ba7bb685a8e063350c89d456d773bcbc346f9df3\",\"size\":900,\"hash\":\"ba7bb685a8e063350c89d456d773bcbc346f9df3\"},{\"path\":\"app/client/template/shipListing/template.shipListEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipListing/template.shipListEntry.js?c79ed1195d64ea8f4315b7a74586d00629d0bf78\",\"size\":624,\"hash\":\"c79ed1195d64ea8f4315b7a74586d00629d0bf78\"},{\"path\":\"app/client/template/shipMenu/template.shipMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipMenu/template.shipMenu.js?ff60866cc171a4fc8a55d0b1a0cf89fd75355a85\",\"size\":1901,\"hash\":\"ff60866cc171a4fc8a55d0b1a0cf89fd75355a85\"},{\"path\":\"app/client/template/shipdisplay/template.shipDisplay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipdisplay/template.shipDisplay.js?a2f159aa7d61986c9d5acc4df2cd5f8e0ef534a2\",\"size\":936,\"hash\":\"a2f159aa7d61986c9d5acc4df2cd5f8e0ef534a2\"},{\"path\":\"app/client/template/topmenu/template.topmenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/topmenu/template.topmenu.js?22d847cc81a83ae24f69f7204e7f855f8fbe9ce1\",\"size\":1330,\"hash\":\"22d847cc81a83ae24f69f7204e7f855f8fbe9ce1\"},{\"path\":\"app/features/actionbar/client/template.actionBar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/client/template.actionBar.js?d6d206a5a10d156a910b03beb23094976d249896\",\"size\":593,\"hash\":\"d6d206a5a10d156a910b03beb23094976d249896\"},{\"path\":\"app/client/template/template.clickCatcher.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/template.clickCatcher.js?325a447535843d92fa076b71f3259e41171f410e\",\"size\":478,\"hash\":\"325a447535843d92fa076b71f3259e41171f410e\"},{\"path\":\"app/client/template/template.page.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/template.page.js?422ad73c1b4c87e8f002ed634ecac0485a11e5a6\",\"size\":260,\"hash\":\"422ad73c1b4c87e8f002ed634ecac0485a11e5a6\"},{\"path\":\"app/client/template/template.smallHullImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/template.smallHullImage.js?71a992e8c85bc42d4b053e27f52ad8f7d9e26234\",\"size\":370,\"hash\":\"71a992e8c85bc42d4b053e27f52ad8f7d9e26234\"},{\"path\":\"app/client/template/template.smallModuleImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/template.smallModuleImage.js?d1379c59be37822fe1a1776bd460d8ef52c275ea\",\"size\":731,\"hash\":\"d1379c59be37822fe1a1776bd460d8ef52c275ea\"},{\"path\":\"app/client/template/template.smallShipDesignImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/template.smallShipDesignImage.js?73063fc7ad8c4667da5bb1c013211d646c437d86\",\"size\":366,\"hash\":\"73063fc7ad8c4667da5bb1c013211d646c437d86\"},{\"path\":\"app/features/inputMode/model/inputaction/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/lib/namespace.js?ef8fae17af5adc92ffa8319c5630faebd3a80c20\",\"size\":146,\"hash\":\"ef8fae17af5adc92ffa8319c5630faebd3a80c20\"},{\"path\":\"app/features/movement/model/action/lib/Action.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/lib/Action.js?8eedf301913386ab66eff24ac401e9b01ba593de\",\"size\":2091,\"hash\":\"8eedf301913386ab66eff24ac401e9b01ba593de\"},{\"path\":\"app/features/particleeffects/model/effects/lib/ParticleEffect.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/effects/lib/ParticleEffect.js?6cd8e98171a61208b5b3d5c63f0757c595f2fb99\",\"size\":1443,\"hash\":\"6cd8e98171a61208b5b3d5c63f0757c595f2fb99\"},{\"path\":\"app/features/particleeffects/model/effects/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/effects/lib/namespace.js?5637026f448bbbc970a5a3789bcd9be78edce1be\",\"size\":144,\"hash\":\"5637026f448bbbc970a5a3789bcd9be78edce1be\"},{\"path\":\"app/features/shipmodule/model/traits/lib/TraitVariable.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/lib/TraitVariable.js?789f723b5b5e14e21d9e01218670d0d6fd19e055\",\"size\":1807,\"hash\":\"789f723b5b5e14e21d9e01218670d0d6fd19e055\"},{\"path\":\"app/features/shipstatus/model/symbols/lib/ShipStatusSymbol.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/lib/ShipStatusSymbol.js?4907522f99f8e42dc4bbdbbb8a3a734ede77183b\",\"size\":4068,\"hash\":\"4907522f99f8e42dc4bbdbbb8a3a734ede77183b\"},{\"path\":\"app/features/weapon/client/animation/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/lib/namespace.js?2405efb02661579a04707d33f2556f4eeb296d76\",\"size\":158,\"hash\":\"2405efb02661579a04707d33f2556f4eeb296d76\"},{\"path\":\"app/features/weapon/model/weaponModule/lib/BaseWeaponModule.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/weaponModule/lib/BaseWeaponModule.js?d63323e037edbc0db02b940f72bf22b4efb996ce\",\"size\":476,\"hash\":\"d63323e037edbc0db02b940f72bf22b4efb996ce\"},{\"path\":\"app/features/weapon/model/weaponModule/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/weaponModule/lib/namespace.js?1585ebd3fefda4073e5c5b0f4c7a662bd8d53717\",\"size\":212,\"hash\":\"1585ebd3fefda4073e5c5b0f4c7a662bd8d53717\"},{\"path\":\"app/client/template/base/lib/BaseTemplate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/base/lib/BaseTemplate.js?793ef56708e608e55404ab55067f42bd0077bada\",\"size\":3142,\"hash\":\"793ef56708e608e55404ab55067f42bd0077bada\"},{\"path\":\"app/features/icon/model/lib/Icon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/lib/Icon.js?98a49cbea503fdeec4d89a8c6cbf5aee68177b99\",\"size\":2466,\"hash\":\"98a49cbea503fdeec4d89a8c6cbf5aee68177b99\"},{\"path\":\"app/features/math/model/lib/Vector3.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/math/model/lib/Vector3.js?14bd1f648b0954c64999443ead29579a080b323a\",\"size\":13325,\"hash\":\"14bd1f648b0954c64999443ead29579a080b323a\"},{\"path\":\"app/features/power/model/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/lib/namespace.js?33a144f334bbda347a3b99ff3ee701863c079d12\",\"size\":134,\"hash\":\"33a144f334bbda347a3b99ff3ee701863c079d12\"},{\"path\":\"app/features/shipdesigneditor/input/lib/ShipEditorInputAction.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/lib/ShipEditorInputAction.js?b1e650977c0354713e8b8dcf34c586f5ec9fdb6e\",\"size\":319,\"hash\":\"b1e650977c0354713e8b8dcf34c586f5ec9fdb6e\"},{\"path\":\"app/features/shipstatus/model/lib/ShipStatusManager.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/lib/ShipStatusManager.js?ab54bccf752bdc74fee07df54b00680cc86f8f96\",\"size\":1608,\"hash\":\"ab54bccf752bdc74fee07df54b00680cc86f8f96\"},{\"path\":\"app/features/sprite/model/lib/Sprite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/lib/Sprite.js?cc9737fb7f26c190818a6aab5d500478a881bf0a\",\"size\":3773,\"hash\":\"cc9737fb7f26c190818a6aab5d500478a881bf0a\"},{\"path\":\"app/features/sprite/model/lib/SpritePhong.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/lib/SpritePhong.js?4e63652d8e4aa58b56ed2dc73941ed3fc33c81da\",\"size\":930,\"hash\":\"4e63652d8e4aa58b56ed2dc73941ed3fc33c81da\"},{\"path\":\"app/features/tooltip/model/lib/TooltipView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/tooltip/model/lib/TooltipView.js?32a8b8fa01d33ceedc79fdb29a44d0c22d80a1b6\",\"size\":952,\"hash\":\"32a8b8fa01d33ceedc79fdb29a44d0c22d80a1b6\"},{\"path\":\"app/features/componentposition/lib/ComponentPositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/componentposition/lib/ComponentPositionService.js?819e21d5ffc9b828eaf077340542d5575b1c8191\",\"size\":2329,\"hash\":\"819e21d5ffc9b828eaf077340542d5575b1c8191\"},{\"path\":\"app/features/damage/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/lib/namespace.js?487eda487a8f6aab08ab87119a05505ecf9fe0da\",\"size\":136,\"hash\":\"487eda487a8f6aab08ab87119a05505ecf9fe0da\"},{\"path\":\"app/features/electronicWarfare/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/lib/namespace.js?c4006df6feb54fbea26e4cc3caf425cb9eea89b5\",\"size\":128,\"hash\":\"c4006df6feb54fbea26e4cc3caf425cb9eea89b5\"},{\"path\":\"app/features/hotkey/lib/Hotkey.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/lib/Hotkey.js?878dc6fa1ab2f3f1800a3ff2e1dd93e5e46e4e6b\",\"size\":293,\"hash\":\"878dc6fa1ab2f3f1800a3ff2e1dd93e5e46e4e6b\"},{\"path\":\"app/features/lib/DIC/DIC.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/lib/DIC/DIC.js?8b49ac6a06e9adbb6d15bf991509d5e2d61249f7\",\"size\":1559,\"hash\":\"8b49ac6a06e9adbb6d15bf991509d5e2d61249f7\"},{\"path\":\"app/features/lib/DIC/Factory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/lib/DIC/Factory.js?52910120bd307b0def131e4ca7875058ebc15caf\",\"size\":932,\"hash\":\"52910120bd307b0def131e4ca7875058ebc15caf\"},{\"path\":\"app/features/math/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/math/lib/namespace.js?a638ff5cb4a310f526fd3fc3c306e75563a3cf14\",\"size\":68,\"hash\":\"a638ff5cb4a310f526fd3fc3c306e75563a3cf14\"},{\"path\":\"app/features/weapon/lib/namespace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/lib/namespace.js?9044d8f7d16d0c8a8b826cbabe0e877882ae33ba\",\"size\":132,\"hash\":\"9044d8f7d16d0c8a8b826cbabe0e877882ae33ba\"},{\"path\":\"app/client/lib/stats.min.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/lib/stats.min.js?3aa29a567f859fbf3c09e8b16decacd66932b2bf\",\"size\":2303,\"hash\":\"3aa29a567f859fbf3c09e8b16decacd66932b2bf\"},{\"path\":\"app/client/lib/three.min.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/lib/three.min.js?4e4bdd53ff99be8f58fd885a150ff252d196031b\",\"size\":411297,\"hash\":\"4e4bdd53ff99be8f58fd885a150ff252d196031b\"},{\"path\":\"app/features/lib/bootstrap.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/lib/bootstrap.js?0277cc2522ad0d84f7b0179610239cfad4024999\",\"size\":36,\"hash\":\"0277cc2522ad0d84f7b0179610239cfad4024999\"},{\"path\":\"app/lib/controller/controller.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/controller/controller.js?523b8f1c73c94b2e7173bf5a7180b3e74e6c36ac\",\"size\":68,\"hash\":\"523b8f1c73c94b2e7173bf5a7180b3e74e6c36ac\"},{\"path\":\"app/lib/math/Vector2.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/math/Vector2.js?b45822ce50ca9b494f978f8c119b5aa1555fcfb5\",\"size\":5053,\"hash\":\"b45822ce50ca9b494f978f8c119b5aa1555fcfb5\"},{\"path\":\"app/lib/math/Vector3.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/math/Vector3.js?7939041e42d266ae91ad5ab29ce9875c45295de4\",\"size\":15495,\"hash\":\"7939041e42d266ae91ad5ab29ce9875c45295de4\"},{\"path\":\"app/lib/model/model.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/model/model.js?528da65dfc7191406ac30f3a5fb4da0d4c95a59d\",\"size\":58,\"hash\":\"528da65dfc7191406ac30f3a5fb4da0d4c95a59d\"},{\"path\":\"app/lib/Arc.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Arc.js?082c396e7113a5f992ce8533dc1704f97ca33d59\",\"size\":1537,\"hash\":\"082c396e7113a5f992ce8533dc1704f97ca33d59\"},{\"path\":\"app/lib/Augment.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Augment.js?c30a8cbc9fe2bcaec35c786c53e8127c8a0c599c\",\"size\":5521,\"hash\":\"c30a8cbc9fe2bcaec35c786c53e8127c8a0c599c\"},{\"path\":\"app/lib/Button.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Button.js?42286436f27d4b7856939e4e9ace6a6c0661c20b\",\"size\":1211,\"hash\":\"42286436f27d4b7856939e4e9ace6a6c0661c20b\"},{\"path\":\"app/lib/CoordinateConverter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/CoordinateConverter.js?f6e56a798b4b4a151a29b7eff122d4148c212b38\",\"size\":1013,\"hash\":\"f6e56a798b4b4a151a29b7eff122d4148c212b38\"},{\"path\":\"app/lib/Curve.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Curve.js?0f32df14f2a908cbb9d69a3a4d840a338cfce02a\",\"size\":1477,\"hash\":\"0f32df14f2a908cbb9d69a3a4d840a338cfce02a\"},{\"path\":\"app/lib/DrawingToCanvas.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/DrawingToCanvas.js?3db15822fc019aabe9b98dd5656771a6a53570cd\",\"size\":10369,\"hash\":\"3db15822fc019aabe9b98dd5656771a6a53570cd\"},{\"path\":\"app/lib/Ellipse.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Ellipse.js?3699e89751b1e4923b2e4356f4e2bd8f98df61cc\",\"size\":810,\"hash\":\"3699e89751b1e4923b2e4356f4e2bd8f98df61cc\"},{\"path\":\"app/lib/ImageLoader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/ImageLoader.js?bc713b75f2c2d52691371583b12de8e741d6cf3b\",\"size\":1497,\"hash\":\"bc713b75f2c2d52691371583b12de8e741d6cf3b\"},{\"path\":\"app/lib/Line.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Line.js?3d8c8795339d67bfdd0655a8619da5f0c4b81322\",\"size\":1243,\"hash\":\"3d8c8795339d67bfdd0655a8619da5f0c4b81322\"},{\"path\":\"app/lib/MathLib.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/MathLib.js?b0756e38cf9dbffb733e2f4be45c30da523c3f3a\",\"size\":4370,\"hash\":\"b0756e38cf9dbffb733e2f4be45c30da523c3f3a\"},{\"path\":\"app/lib/ObjectContainer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/ObjectContainer.js?ca8878ad4a7a05aa40c06ff9a826d3349651a793\",\"size\":617,\"hash\":\"ca8878ad4a7a05aa40c06ff9a826d3349651a793\"},{\"path\":\"app/lib/Particle.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Particle.js?667c4ce70aabf12cde21098644604d9e847cdb65\",\"size\":2933,\"hash\":\"667c4ce70aabf12cde21098644604d9e847cdb65\"},{\"path\":\"app/lib/ParticleEmitter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/ParticleEmitter.js?eaddca41cd3110c65042a812a3f78b922e0dc5e3\",\"size\":4500,\"hash\":\"eaddca41cd3110c65042a812a3f78b922e0dc5e3\"},{\"path\":\"app/lib/Path.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Path.js?8a31d62bc2a98f11f2ef3f72461c9fb866c7bbd1\",\"size\":1015,\"hash\":\"8a31d62bc2a98f11f2ef3f72461c9fb866c7bbd1\"},{\"path\":\"app/lib/Raytrace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Raytrace.js?b129d464008acbc9c28d9167a1f4c251134777ff\",\"size\":1048,\"hash\":\"b129d464008acbc9c28d9167a1f4c251134777ff\"},{\"path\":\"app/lib/ReactiveComponent.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/ReactiveComponent.js?c178c2c7a7cad1480e95ccc64a6932cbffd9108d\",\"size\":1194,\"hash\":\"c178c2c7a7cad1480e95ccc64a6932cbffd9108d\"},{\"path\":\"app/lib/SeedRandom.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/SeedRandom.js?a1dc1fdbbd960572a5eb2f1448dc62754775d4e3\",\"size\":12237,\"hash\":\"a1dc1fdbbd960572a5eb2f1448dc62754775d4e3\"},{\"path\":\"app/lib/Textures.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Textures.js?96c31d2164ed76f410192a9eb2b4944903d3b9f4\",\"size\":591,\"hash\":\"96c31d2164ed76f410192a9eb2b4944903d3b9f4\"},{\"path\":\"app/lib/Tools.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/Tools.js?e12bf72cb9572b3dd179b0486ae93928e2de0d62\",\"size\":1126,\"hash\":\"e12bf72cb9572b3dd179b0486ae93928e2de0d62\"},{\"path\":\"app/lib/VectorUtils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/VectorUtils.js?ce4f02feead62a38aae19dc835a3b90c63493386\",\"size\":2029,\"hash\":\"ce4f02feead62a38aae19dc835a3b90c63493386\"},{\"path\":\"app/lib/requestAnimFrame.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/requestAnimFrame.js?f2ce2c23af9e093941e421cffbc766aca924d928\",\"size\":410,\"hash\":\"f2ce2c23af9e093941e421cffbc766aca924d928\"},{\"path\":\"app/lib/user.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/user.js?ead34814b19903d48dcb4009ccd8c563357470ca\",\"size\":738,\"hash\":\"ead34814b19903d48dcb4009ccd8c563357470ca\"},{\"path\":\"app/features/shipstatus/model/symbols/crew/ShipStatusSymbolCrew.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/crew/ShipStatusSymbolCrew.js?4114f50c5b2d8bec25f9f20624306b8ffc9bcb40\",\"size\":3713,\"hash\":\"4114f50c5b2d8bec25f9f20624306b8ffc9bcb40\"},{\"path\":\"app/features/shipstatus/model/symbols/power/ShipStatusSymbolPower.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/power/ShipStatusSymbolPower.js?fd2cdd4316e457d29256e6683b1bf9764ba27a07\",\"size\":3217,\"hash\":\"fd2cdd4316e457d29256e6683b1bf9764ba27a07\"},{\"path\":\"app/features/shipstatus/model/symbols/scanner/ShipStatusSymbolScanner.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/scanner/ShipStatusSymbolScanner.js?de280f26d1ddde536d52b3fd8314c53c87c2bfbc\",\"size\":1817,\"hash\":\"de280f26d1ddde536d52b3fd8314c53c87c2bfbc\"},{\"path\":\"app/features/shipstatus/model/symbols/sensor/ShipStatusSymbolSensor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/sensor/ShipStatusSymbolSensor.js?2ce323dba20480313a32e3d6ae53a78f7df23472\",\"size\":2405,\"hash\":\"2ce323dba20480313a32e3d6ae53a78f7df23472\"},{\"path\":\"app/features/shipstatus/model/symbols/thrust/ShipStatusSymbolThrust.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/symbols/thrust/ShipStatusSymbolThrust.js?3e32557f1088d24d90a075ea49152cbf1eac3bb6\",\"size\":1819,\"hash\":\"3e32557f1088d24d90a075ea49152cbf1eac3bb6\"},{\"path\":\"app/features/sprite/model/ship/shaders/ShipSpriteShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/shaders/ShipSpriteShader.js?e27c80f5a2d64c929680d7732ead5c4447b009a1\",\"size\":7574,\"hash\":\"e27c80f5a2d64c929680d7732ead5c4447b009a1\"},{\"path\":\"app/features/weapon/client/animation/weaponFire/Projectile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/weaponFire/Projectile.js?93a01a2ce0cf8fd9f45bea564bbbe37a32952081\",\"size\":1871,\"hash\":\"93a01a2ce0cf8fd9f45bea564bbbe37a32952081\"},{\"path\":\"app/features/weapon/model/strategies/arc/WeaponArcStrategy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/strategies/arc/WeaponArcStrategy.js?4b03bb4c508b16c92cf50e770c8453f67b832682\",\"size\":191,\"hash\":\"4b03bb4c508b16c92cf50e770c8453f67b832682\"},{\"path\":\"app/features/weapon/model/strategies/range/FixedRangeStrategy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/strategies/range/FixedRangeStrategy.js?636483326c0b9630b8dc292152a2042d8cc60f0b\",\"size\":385,\"hash\":\"636483326c0b9630b8dc292152a2042d8cc60f0b\"},{\"path\":\"app/features/weapon/model/strategies/range/RangePenaltyStrategy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/strategies/range/RangePenaltyStrategy.js?c9af962e4b3706a950f73cdba8b7e4ca4a107f13\",\"size\":554,\"hash\":\"c9af962e4b3706a950f73cdba8b7e4ca4a107f13\"},{\"path\":\"app/features/weapon/model/strategies/scatter/WeaponScatterStrategy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/strategies/scatter/WeaponScatterStrategy.js?bd4a9e0dc5304e7a7ff495599222826f8cae99b8\",\"size\":248,\"hash\":\"bd4a9e0dc5304e7a7ff495599222826f8cae99b8\"},{\"path\":\"app/features/weapon/model/strategies/target/ShipTargetStrategy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/strategies/target/ShipTargetStrategy.js?85474aa8f1eb9f37d8092d5c9274eca30ee34814\",\"size\":362,\"hash\":\"85474aa8f1eb9f37d8092d5c9274eca30ee34814\"},{\"path\":\"app/features/actionbar/model/inputaction/SelectActionBar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/model/inputaction/SelectActionBar.js?dfb4bd09099ba9cbea1b87699dd8bcbea56ef007\",\"size\":397,\"hash\":\"dfb4bd09099ba9cbea1b87699dd8bcbea56ef007\"},{\"path\":\"app/features/actionbar/model/inputaction/ShowActionBarForSelectedShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/model/inputaction/ShowActionBarForSelectedShip.js?5a6a8ae2b5367a3bc9f08cb10e8adbe4b9874cda\",\"size\":1290,\"hash\":\"5a6a8ae2b5367a3bc9f08cb10e8adbe4b9874cda\"},{\"path\":\"app/features/crew/model/status/CrewStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/crew/model/status/CrewStatus.js?d86b529166da880529c06da8f41a863f31b1c571\",\"size\":1321,\"hash\":\"d86b529166da880529c06da8f41a863f31b1c571\"},{\"path\":\"app/features/cursor/client/model/CustomCursor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/cursor/client/model/CustomCursor.js?521f035e2ccd8f5da8dc4f54d065d72af8f919d3\",\"size\":477,\"hash\":\"521f035e2ccd8f5da8dc4f54d065d72af8f919d3\"},{\"path\":\"app/features/electronicWarfare/client/input/ShowEWMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/client/input/ShowEWMenu.js?118ff36ed1b15de4bbb199d4b08eaccb57509870\",\"size\":1207,\"hash\":\"118ff36ed1b15de4bbb199d4b08eaccb57509870\"},{\"path\":\"app/features/fleetEditor/client/view/fleet.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/client/view/fleet.js?bd023c544e7328c23bc647ece2b4bfb2657b5a78\",\"size\":1423,\"hash\":\"bd023c544e7328c23bc647ece2b4bfb2657b5a78\"},{\"path\":\"app/features/game/client/ui/RadialMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/ui/RadialMenu.js?a177b592200a526d817aa8fdd22adeb28ad45ba4\",\"size\":3311,\"hash\":\"a177b592200a526d817aa8fdd22adeb28ad45ba4\"},{\"path\":\"app/features/game/client/ui/ReplayUI.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/ui/ReplayUI.js?dcdb131e77401502a7d41395cd3c8d6efb914153\",\"size\":786,\"hash\":\"dcdb131e77401502a7d41395cd3c8d6efb914153\"},{\"path\":\"app/features/game/client/ui/TurnUi.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/ui/TurnUi.js?5fa533d02b03dd9f2bdb250ab7f291356410e439\",\"size\":876,\"hash\":\"5fa533d02b03dd9f2bdb250ab7f291356410e439\"},{\"path\":\"app/features/game/client/ui/WaypointMenuButton.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/ui/WaypointMenuButton.js?79d08a1ce290da773dd5c213e35ac30e0047cb5e\",\"size\":943,\"hash\":\"79d08a1ce290da773dd5c213e35ac30e0047cb5e\"},{\"path\":\"app/features/game/client/view/game.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/view/game.js?c3d7a1d4ab0d4b958e39c65df4dacc486344ddcd\",\"size\":377,\"hash\":\"c3d7a1d4ab0d4b958e39c65df4dacc486344ddcd\"},{\"path\":\"app/features/hexagon/model/coordinate/Axial.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexagon/model/coordinate/Axial.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/features/hexagon/model/coordinate/Cube.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexagon/model/coordinate/Cube.js?a469abbbae24f9b7713c79dbb43050836e06d812\",\"size\":4045,\"hash\":\"a469abbbae24f9b7713c79dbb43050836e06d812\"},{\"path\":\"app/features/hexagon/model/coordinate/Offset.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexagon/model/coordinate/Offset.js?ecb6053086e5b93e0c0ad06ee533639d0090db67\",\"size\":2664,\"hash\":\"ecb6053086e5b93e0c0ad06ee533639d0090db67\"},{\"path\":\"app/features/hotkey/model/hotkey/Cancel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/model/hotkey/Cancel.js?ef6bd62cfeb3bfcd2f77bbaa912d5ab5bb910d13\",\"size\":189,\"hash\":\"ef6bd62cfeb3bfcd2f77bbaa912d5ab5bb910d13\"},{\"path\":\"app/features/hotkey/model/hotkey/Left.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/model/hotkey/Left.js?85dc4ca7950eca81406405336584c36e26d1911d\",\"size\":190,\"hash\":\"85dc4ca7950eca81406405336584c36e26d1911d\"},{\"path\":\"app/features/hotkey/model/hotkey/Right.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/model/hotkey/Right.js?08a33e2db787dfa477e1ab25501bb63fcfc5e7da\",\"size\":194,\"hash\":\"08a33e2db787dfa477e1ab25501bb63fcfc5e7da\"},{\"path\":\"app/features/hulleditor/client/view/hullImageList.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/client/view/hullImageList.js?c04a953332ed2294a69676399f7c21d4b2cc8c17\",\"size\":87,\"hash\":\"c04a953332ed2294a69676399f7c21d4b2cc8c17\"},{\"path\":\"app/features/hulleditor/client/view/hulleditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/client/view/hulleditor.js?ed29f38497d5a251ea2eae50f3209806076ebbbe\",\"size\":2302,\"hash\":\"ed29f38497d5a251ea2eae50f3209806076ebbbe\"},{\"path\":\"app/features/icon/model/module/ModuleIcon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/module/ModuleIcon.js?f6bfbcb551e4ba8f5874c3383cff875fcb449736\",\"size\":1462,\"hash\":\"f6bfbcb551e4ba8f5874c3383cff875fcb449736\"},{\"path\":\"app/features/icon/model/module/ModuleIconEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/module/ModuleIconEditor.js?202aeb59a04e8a37ebd56639617105c69c913842\",\"size\":1908,\"hash\":\"202aeb59a04e8a37ebd56639617105c69c913842\"},{\"path\":\"app/features/icon/model/module/ModuleIconPlacing.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/module/ModuleIconPlacing.js?07a6b742b0f583deca41484b954c5891a35e8afd\",\"size\":1502,\"hash\":\"07a6b742b0f583deca41484b954c5891a35e8afd\"},{\"path\":\"app/features/icon/model/ship/ShipIcon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/ship/ShipIcon.js?ab5e1390380e4e07040b1f113a939a23a6549621\",\"size\":6032,\"hash\":\"ab5e1390380e4e07040b1f113a939a23a6549621\"},{\"path\":\"app/features/icon/model/ship/ShipIconEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/ship/ShipIconEditor.js?f61c113e5692e98846462e818ec666f8738efb2f\",\"size\":2675,\"hash\":\"f61c113e5692e98846462e818ec666f8738efb2f\"},{\"path\":\"app/features/icon/model/ship/ShipIconHull.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/ship/ShipIconHull.js?ec603f64c5068a62844d513237796e92a9c96b22\",\"size\":530,\"hash\":\"ec603f64c5068a62844d513237796e92a9c96b22\"},{\"path\":\"app/features/icon/model/ship/ShipIconHullEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/ship/ShipIconHullEditor.js?2a9e2bfe0a0d6d7657811dd59e1063bb41b8906a\",\"size\":842,\"hash\":\"2a9e2bfe0a0d6d7657811dd59e1063bb41b8906a\"},{\"path\":\"app/features/icon/model/ship/SpriteGrid.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/model/ship/SpriteGrid.js?5e68328f7155594f69aba175ebd23414050545ea\",\"size\":637,\"hash\":\"5e68328f7155594f69aba175ebd23414050545ea\"},{\"path\":\"app/features/inputMode/model/inputaction/ActivateTileOnMouseMove.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ActivateTileOnMouseMove.js?62b96c5219d3953ebfe3e7b89a9332450bd9fbe8\",\"size\":631,\"hash\":\"62b96c5219d3953ebfe3e7b89a9332450bd9fbe8\"},{\"path\":\"app/features/inputMode/model/inputaction/DisplayRoutes.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/DisplayRoutes.js?a25178d62a41df0a7833ab3d35b1a5c24c342cae\",\"size\":1084,\"hash\":\"a25178d62a41df0a7833ab3d35b1a5c24c342cae\"},{\"path\":\"app/features/inputMode/model/inputaction/EditorShipHullVisibility.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/EditorShipHullVisibility.js?1e126a6864075a610e0a8adffe158ed2e1092c90\",\"size\":1274,\"hash\":\"1e126a6864075a610e0a8adffe158ed2e1092c90\"},{\"path\":\"app/features/inputMode/model/inputaction/HideHullAtZoom.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/HideHullAtZoom.js?923a22ef802844cf8b481e49f392c0f5c8d5a49f\",\"size\":540,\"hash\":\"923a22ef802844cf8b481e49f392c0f5c8d5a49f\"},{\"path\":\"app/features/inputMode/model/inputaction/HighlightActiveRoute.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/HighlightActiveRoute.js?a858799b32917064036d2d9f25e14db3e155a4bb\",\"size\":1779,\"hash\":\"a858799b32917064036d2d9f25e14db3e155a4bb\"},{\"path\":\"app/features/inputMode/model/inputaction/HullEditorClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/HullEditorClick.js?020cd69ba55942ebed265bf9cc4c3393e3f76746\",\"size\":918,\"hash\":\"020cd69ba55942ebed265bf9cc4c3393e3f76746\"},{\"path\":\"app/features/inputMode/model/inputaction/RemoveInputModeOnCancel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/RemoveInputModeOnCancel.js?63037ea09fe01f8c335df20bf5f0443e96de5ebd\",\"size\":370,\"hash\":\"63037ea09fe01f8c335df20bf5f0443e96de5ebd\"},{\"path\":\"app/features/inputMode/model/inputaction/Replay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/Replay.js?ebfb5d8900f72c592ebadf07d6c7da5a8f157336\",\"size\":797,\"hash\":\"ebfb5d8900f72c592ebadf07d6c7da5a8f157336\"},{\"path\":\"app/features/inputMode/model/inputaction/SelectMovementStepOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/SelectMovementStepOnClick.js?fb37dfc164704344c7f97334652ef1c08b9edb95\",\"size\":3458,\"hash\":\"fb37dfc164704344c7f97334652ef1c08b9edb95\"},{\"path\":\"app/features/inputMode/model/inputaction/SelectShipOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/SelectShipOnClick.js?3e2e3cff7c882b4f677c9a154d53608c0863d645\",\"size\":481,\"hash\":\"3e2e3cff7c882b4f677c9a154d53608c0863d645\"},{\"path\":\"app/features/inputMode/model/inputaction/SelectedShipMarker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/SelectedShipMarker.js?f50a03298a4b61f0294c41a1cf3d35c9a6f82ad6\",\"size\":919,\"hash\":\"f50a03298a4b61f0294c41a1cf3d35c9a6f82ad6\"},{\"path\":\"app/features/inputMode/model/inputaction/ShipSideMarker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShipSideMarker.js?006258ee24d1673f138882890bf8b6504e621e7e\",\"size\":551,\"hash\":\"006258ee24d1673f138882890bf8b6504e621e7e\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowGridOnZoom.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowGridOnZoom.js?f3088d5a8a64986aa78b892c3c32a15651fe1c74\",\"size\":661,\"hash\":\"f3088d5a8a64986aa78b892c3c32a15651fe1c74\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowModuleDetailView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowModuleDetailView.js?16d90523ec65e2634193e625b0990dea12d45d1f\",\"size\":1314,\"hash\":\"16d90523ec65e2634193e625b0990dea12d45d1f\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowModuleDetailViewEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowModuleDetailViewEditor.js?01558810ff4a3a88259f4285be9e3d14f777ad87\",\"size\":1180,\"hash\":\"01558810ff4a3a88259f4285be9e3d14f777ad87\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowMomevemenTooltipOnRouteMouseOver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowMomevemenTooltipOnRouteMouseOver.js?e6a893a2e1e9309cfcd737dc34217661b8f55332\",\"size\":1844,\"hash\":\"e6a893a2e1e9309cfcd737dc34217661b8f55332\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowMovementMenuOnRouteClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowMovementMenuOnRouteClick.js?d2a1aabaf29b5d886e7b0eaa916db6933fda1259\",\"size\":2088,\"hash\":\"d2a1aabaf29b5d886e7b0eaa916db6933fda1259\"},{\"path\":\"app/features/inputMode/model/inputaction/ShowShipStatusView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/ShowShipStatusView.js?21d5724917971390af745f18f702630900cbe542\",\"size\":1921,\"hash\":\"21d5724917971390af745f18f702630900cbe542\"},{\"path\":\"app/features/inputMode/model/inputaction/TurnButtons.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/inputaction/TurnButtons.js?00371002d0fffc09d83f5365ff80ba7f5c4fcb8d\",\"size\":908,\"hash\":\"00371002d0fffc09d83f5365ff80ba7f5c4fcb8d\"},{\"path\":\"app/features/moduleeditor/client/view/moduleEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/client/view/moduleEditor.js?9f083d824ebbf28dac0d60501caba7335a06d9d5\",\"size\":6695,\"hash\":\"9f083d824ebbf28dac0d60501caba7335a06d9d5\"},{\"path\":\"app/features/movement/client/view/MovementButton.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/client/view/MovementButton.js?1781dc99cac3e334a085b4c09a75d572c33e1120\",\"size\":480,\"hash\":\"1781dc99cac3e334a085b4c09a75d572c33e1120\"},{\"path\":\"app/features/movement/client/view/MovementDisplayWaypoint.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/client/view/MovementDisplayWaypoint.js?fcfa7c5d0237436e5f5384b6e7745d707c763e99\",\"size\":1475,\"hash\":\"fcfa7c5d0237436e5f5384b6e7745d707c763e99\"},{\"path\":\"app/features/movement/client/view/MovementRadialMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/client/view/MovementRadialMenu.js?9049169c9852af210f1dcdb2f4b7c9310571b660\",\"size\":6882,\"hash\":\"9049169c9852af210f1dcdb2f4b7c9310571b660\"},{\"path\":\"app/features/movement/client/view/MovementVisualizer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/client/view/MovementVisualizer.js?ac287fd9a5fe973b067362d2d83da6b2d314f3c1\",\"size\":1625,\"hash\":\"ac287fd9a5fe973b067362d2d83da6b2d314f3c1\"},{\"path\":\"app/features/movement/model/action/Move.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/Move.js?f4967473899f65e359e4715cdfcb5febd7573e49\",\"size\":938,\"hash\":\"f4967473899f65e359e4715cdfcb5febd7573e49\"},{\"path\":\"app/features/movement/model/action/Speed.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/Speed.js?a03d23a90fcd19646e85c399359946e405ccd4c8\",\"size\":1473,\"hash\":\"a03d23a90fcd19646e85c399359946e405ccd4c8\"},{\"path\":\"app/features/movement/model/action/SpeedAccelerate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/SpeedAccelerate.js?0aa6f6ab865ccd09bfdd2cd9b311e83d61716c26\",\"size\":436,\"hash\":\"0aa6f6ab865ccd09bfdd2cd9b311e83d61716c26\"},{\"path\":\"app/features/movement/model/action/SpeedDeaccelerate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/SpeedDeaccelerate.js?d585630782ccb7d45061a21d147ea9e30b99bf02\",\"size\":448,\"hash\":\"d585630782ccb7d45061a21d147ea9e30b99bf02\"},{\"path\":\"app/features/movement/model/action/Turn.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/Turn.js?73fc53917778253036d81de46afcfcc56e5d96bc\",\"size\":1949,\"hash\":\"73fc53917778253036d81de46afcfcc56e5d96bc\"},{\"path\":\"app/features/movement/model/action/TurnLeft.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/TurnLeft.js?5ba6f3bb1ce788889dbfaab0389e993110a7d848\",\"size\":412,\"hash\":\"5ba6f3bb1ce788889dbfaab0389e993110a7d848\"},{\"path\":\"app/features/movement/model/action/TurnRight.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/action/TurnRight.js?1b31e5447f2ef6153ea56fda8544c206133c64d8\",\"size\":416,\"hash\":\"1b31e5447f2ef6153ea56fda8544c206133c64d8\"},{\"path\":\"app/features/particleeffects/model/effects/Bolt.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/effects/Bolt.js?a42f32225ed63eb8447f1c2202e940989851c2f0\",\"size\":2375,\"hash\":\"a42f32225ed63eb8447f1c2202e940989851c2f0\"},{\"path\":\"app/features/particleeffects/model/effects/ParticleEffectExplosion.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/effects/ParticleEffectExplosion.js?9a2e8566de0e55f8161570426ce13cf2a1747a99\",\"size\":6238,\"hash\":\"9a2e8566de0e55f8161570426ce13cf2a1747a99\"},{\"path\":\"app/features/particleeffects/model/effects/ParticleEffectTrail.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/effects/ParticleEffectTrail.js?93cee84dba954fbdfeb1bb13d9495980a5d9fb0e\",\"size\":2758,\"hash\":\"93cee84dba954fbdfeb1bb13d9495980a5d9fb0e\"},{\"path\":\"app/features/power/model/status/PowerStatusOffline.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/status/PowerStatusOffline.js?af6eafde635b63b7fc98926243fd8d68ff643f48\",\"size\":135,\"hash\":\"af6eafde635b63b7fc98926243fd8d68ff643f48\"},{\"path\":\"app/features/power/model/status/PowerStatusPowerOutput.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/status/PowerStatusPowerOutput.js?ab8fcb0d08427ec6cd1aea17037c79a4afffee80\",\"size\":186,\"hash\":\"ab8fcb0d08427ec6cd1aea17037c79a4afffee80\"},{\"path\":\"app/features/power/model/status/PowerStatusPowered.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/status/PowerStatusPowered.js?112ece9a50ee31b1c7a0dd370fbf6c52f68e3972\",\"size\":144,\"hash\":\"112ece9a50ee31b1c7a0dd370fbf6c52f68e3972\"},{\"path\":\"app/features/shipdesigneditor/client/view/shipDesignArmorMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/shipDesignArmorMenu.js?592f8d6c583399c55ef9a47b963544eee6274532\",\"size\":527,\"hash\":\"592f8d6c583399c55ef9a47b963544eee6274532\"},{\"path\":\"app/features/shipdesigneditor/client/view/shipDesignEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/shipDesignEditor.js?c97593c505c5456623668eb93ca7f552a022e180\",\"size\":612,\"hash\":\"c97593c505c5456623668eb93ca7f552a022e180\"},{\"path\":\"app/features/shipdesigneditor/client/view/shipMenuOwned.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/view/shipMenuOwned.js?671abfdf7793019dd52d942d4d8cac815f6688bd\",\"size\":1348,\"hash\":\"671abfdf7793019dd52d942d4d8cac815f6688bd\"},{\"path\":\"app/features/shiphtmlentry/client/view/ShipHtmlEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shiphtmlentry/client/view/ShipHtmlEntry.js?3a50e5955cac668a6a8d77178eda67bf1e78be42\",\"size\":489,\"hash\":\"3a50e5955cac668a6a8d77178eda67bf1e78be42\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTrait.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTrait.js?6d277522ac76ebe195067208801d417eb5cf76c3\",\"size\":1657,\"hash\":\"6d277522ac76ebe195067208801d417eb5cf76c3\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitCrewProvider.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitCrewProvider.js?a1e519cf6d781079967aab575fdb990f83c61cfd\",\"size\":670,\"hash\":\"a1e519cf6d781079967aab575fdb990f83c61cfd\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitEnergyConsumer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitEnergyConsumer.js?f54393c24179e069531ccb4d6670af4ab728bc83\",\"size\":681,\"hash\":\"f54393c24179e069531ccb4d6670af4ab728bc83\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitEnergyProducer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitEnergyProducer.js?74a47ec83e1f97bda5529700927903ae84758c75\",\"size\":705,\"hash\":\"74a47ec83e1f97bda5529700927903ae84758c75\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitRequiresCrew.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitRequiresCrew.js?0b9f572dc41d872d15aa451252adccab93e73b16\",\"size\":670,\"hash\":\"0b9f572dc41d872d15aa451252adccab93e73b16\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitScanner.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitScanner.js?03abdc036943b618e1580ae4197281598f0d96d8\",\"size\":668,\"hash\":\"03abdc036943b618e1580ae4197281598f0d96d8\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitSensor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitSensor.js?45d4689db16394bb6aab8b8783e1d404a673b610\",\"size\":1554,\"hash\":\"45d4689db16394bb6aab8b8783e1d404a673b610\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitThrustProducer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitThrustProducer.js?ad845a43e771fb1d48232880631aa49d668a51b0\",\"size\":691,\"hash\":\"ad845a43e771fb1d48232880631aa49d668a51b0\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitThruster.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitThruster.js?fb4ffb1e0830a78d1f015756bbf2b6af2ad14291\",\"size\":2323,\"hash\":\"fb4ffb1e0830a78d1f015756bbf2b6af2ad14291\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitTurret.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitTurret.js?7870fd6102d55c70d2728882c4dcdf27ccd19283\",\"size\":479,\"hash\":\"7870fd6102d55c70d2728882c4dcdf27ccd19283\"},{\"path\":\"app/features/shipmodule/model/traits/ModuleTraitWeapon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/traits/ModuleTraitWeapon.js?d19f84cb4703bf6d34a863e2d8af1eb38fd7d80a\",\"size\":1686,\"hash\":\"d19f84cb4703bf6d34a863e2d8af1eb38fd7d80a\"},{\"path\":\"app/features/sprite/model/module/ModuleSprite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/module/ModuleSprite.js?850e3f2adf1f8fa149f22234709978ad9e725d8b\",\"size\":1684,\"hash\":\"850e3f2adf1f8fa149f22234709978ad9e725d8b\"},{\"path\":\"app/features/sprite/model/ship/ShipSprite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSprite.js?c97ea5d821c1e76bdba321bdbbcf57e87c2ef669\",\"size\":3779,\"hash\":\"c97ea5d821c1e76bdba321bdbbcf57e87c2ef669\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteHull.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteHull.js?a2646477052fa86e67a08aed9ab2280be09febba\",\"size\":1365,\"hash\":\"a2646477052fa86e67a08aed9ab2280be09febba\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteModule.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteModule.js?904186b6270cec6690303d142dc7e2df137ca7e7\",\"size\":1797,\"hash\":\"904186b6270cec6690303d142dc7e2df137ca7e7\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteModules.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteModules.js?182065d565f4f495e6b0e9492034a86eeff36796\",\"size\":1174,\"hash\":\"182065d565f4f495e6b0e9492034a86eeff36796\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteSelected.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteSelected.js?cf0460ffe10c36efc73b55e3b8f54521ef5f19e6\",\"size\":1261,\"hash\":\"cf0460ffe10c36efc73b55e3b8f54521ef5f19e6\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteSide.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteSide.js?cd5d3847f9d8866d894d2b699c5212bcdd76dd3e\",\"size\":1607,\"hash\":\"cd5d3847f9d8866d894d2b699c5212bcdd76dd3e\"},{\"path\":\"app/features/sprite/model/ship/ShipSpriteSilhouette.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sprite/model/ship/ShipSpriteSilhouette.js?d29afe3307fa2ff03045f05d617239c45625e608\",\"size\":1010,\"hash\":\"d29afe3307fa2ff03045f05d617239c45625e608\"},{\"path\":\"app/features/weapon/client/animation/ProjectilePathResolver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/ProjectilePathResolver.js?4ee56e71d0d9af9d59538e05496226ecacf787c4\",\"size\":1825,\"hash\":\"4ee56e71d0d9af9d59538e05496226ecacf787c4\"},{\"path\":\"app/features/weapon/client/animation/ShipWeaponFireAnimator.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/ShipWeaponFireAnimator.js?0b97db5114c3e92b7f677b805ffd6789d6de9d04\",\"size\":1288,\"hash\":\"0b97db5114c3e92b7f677b805ffd6789d6de9d04\"},{\"path\":\"app/features/weapon/client/animation/WeaponFireAnimationFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/WeaponFireAnimationFactory.js?503f1e2b2fbe954ded0f3a4cbd5630a6626a4008\",\"size\":537,\"hash\":\"503f1e2b2fbe954ded0f3a4cbd5630a6626a4008\"},{\"path\":\"app/features/weapon/client/animation/WeaponFireAnimationService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/animation/WeaponFireAnimationService.js?009b0488d2d7a9f1a1c55a087893cd788fb0404a\",\"size\":678,\"hash\":\"009b0488d2d7a9f1a1c55a087893cd788fb0404a\"},{\"path\":\"app/features/weapon/client/inputaction/DisplayFireOrdersOnActionButtons.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/DisplayFireOrdersOnActionButtons.js?c462236f8560117fbe5a380b359c485f08b4fd70\",\"size\":1569,\"hash\":\"c462236f8560117fbe5a380b359c485f08b4fd70\"},{\"path\":\"app/features/weapon/client/inputaction/HighlightSelectedWeapons.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/HighlightSelectedWeapons.js?8e374f42ee3f280fa75f55a8f6c3e2d36e7ad933\",\"size\":1360,\"hash\":\"8e374f42ee3f280fa75f55a8f6c3e2d36e7ad933\"},{\"path\":\"app/features/weapon/client/inputaction/RemoveFireOrderAtWeaponSelect.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/RemoveFireOrderAtWeaponSelect.js?00f0b7bbcc8cf70153f0f705373df5b9fe8debe0\",\"size\":1031,\"hash\":\"00f0b7bbcc8cf70153f0f705373df5b9fe8debe0\"},{\"path\":\"app/features/weapon/client/inputaction/SelectAndDeselectWeapons.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/SelectAndDeselectWeapons.js?ef32209dfa55fec50e6e45fc37259b01f7cdf461\",\"size\":1670,\"hash\":\"ef32209dfa55fec50e6e45fc37259b01f7cdf461\"},{\"path\":\"app/features/weapon/client/inputaction/SelectWeapon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/SelectWeapon.js?105f29f762f00c8fdeb0c4886cd0d02193579eae\",\"size\":794,\"hash\":\"105f29f762f00c8fdeb0c4886cd0d02193579eae\"},{\"path\":\"app/features/weapon/client/inputaction/ShowCurrentFireOrders.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/ShowCurrentFireOrders.js?e7dd92efc809faed098eb026bcfbf1d17f5c03ed\",\"size\":1499,\"hash\":\"e7dd92efc809faed098eb026bcfbf1d17f5c03ed\"},{\"path\":\"app/features/weapon/client/inputaction/ShowWeaponArcsOnWeaponMouseOver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/ShowWeaponArcsOnWeaponMouseOver.js?aeb6ab91f6fe243a6b066c6b36e9d57948f2f096\",\"size\":1706,\"hash\":\"aeb6ab91f6fe243a6b066c6b36e9d57948f2f096\"},{\"path\":\"app/features/weapon/client/inputaction/ShowWeaponTargetingOnMouseOver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/ShowWeaponTargetingOnMouseOver.js?599951f0a7931041ccdcb11a281eee1765b93fca\",\"size\":1838,\"hash\":\"599951f0a7931041ccdcb11a281eee1765b93fca\"},{\"path\":\"app/features/weapon/client/inputaction/TargetShipOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/inputaction/TargetShipOnClick.js?c8a34954ed48ab254b4fe870f1b25a802110611a\",\"size\":1909,\"hash\":\"c8a34954ed48ab254b4fe870f1b25a802110611a\"},{\"path\":\"app/features/weapon/client/view/ArcIndicatorService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/view/ArcIndicatorService.js?6d363a61bf9d747875a4d9c284c594089fc06b83\",\"size\":1162,\"hash\":\"6d363a61bf9d747875a4d9c284c594089fc06b83\"},{\"path\":\"app/features/weapon/model/weaponModule/WeaponModuleFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/weaponModule/WeaponModuleFactory.js?c432c19555403d030f2e0a485735f17e555049db\",\"size\":529,\"hash\":\"c432c19555403d030f2e0a485735f17e555049db\"},{\"path\":\"app/features/weapon/model/weaponModule/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/weaponModule/dic.js?1cda45671a28119e2c7effae264eae8b02515498\",\"size\":529,\"hash\":\"1cda45671a28119e2c7effae264eae8b02515498\"},{\"path\":\"app/client/template/createShip/createShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/createShip/createShip.js?5c10c014c15d87bdcd0e0e1111c9e23365bc2792\",\"size\":453,\"hash\":\"5c10c014c15d87bdcd0e0e1111c9e23365bc2792\"},{\"path\":\"app/client/template/shipListing/shipListEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipListing/shipListEntry.js?0666e3c0c37af1e942fbebcb5dd471fc1bc9348e\",\"size\":262,\"hash\":\"0666e3c0c37af1e942fbebcb5dd471fc1bc9348e\"},{\"path\":\"app/client/template/shipMenu/shipMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipMenu/shipMenu.js?448643d10911099466facc70c7622ca919101870\",\"size\":945,\"hash\":\"448643d10911099466facc70c7622ca919101870\"},{\"path\":\"app/client/template/shipdisplay/shipDisplay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/shipdisplay/shipDisplay.js?a0c0676302611de63cdd5ce5a662d3ce7ba8ca78\",\"size\":1243,\"hash\":\"a0c0676302611de63cdd5ce5a662d3ce7ba8ca78\"},{\"path\":\"app/client/template/topmenu/topmenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/topmenu/topmenu.js?1d3be5ed9435cd06ff12b8b63589a7b9fd1d716b\",\"size\":80,\"hash\":\"1d3be5ed9435cd06ff12b8b63589a7b9fd1d716b\"},{\"path\":\"app/client/three/postprocessing/BloomPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/BloomPass.js?ae9c68f5b97c3f1bdad3c9961b708a614cff1c9c\",\"size\":3424,\"hash\":\"ae9c68f5b97c3f1bdad3c9961b708a614cff1c9c\"},{\"path\":\"app/client/three/postprocessing/DotScreenPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/DotScreenPass.js?7f3a107b08e737b8e4de0c8142eb35cbedcb970d\",\"size\":1327,\"hash\":\"7f3a107b08e737b8e4de0c8142eb35cbedcb970d\"},{\"path\":\"app/client/three/postprocessing/EffectComposer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/EffectComposer.js?6b4111c44f91540139864d41a37d1c5c71251c19\",\"size\":2919,\"hash\":\"6b4111c44f91540139864d41a37d1c5c71251c19\"},{\"path\":\"app/client/three/postprocessing/FilmPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/FilmPass.js?b364fb330db2ba484d8a97ede7908b56d408adaa\",\"size\":1429,\"hash\":\"b364fb330db2ba484d8a97ede7908b56d408adaa\"},{\"path\":\"app/client/three/postprocessing/MaskPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/MaskPass.js?38f4b347bcd29d0e8c56eb2d660ebfba41e925d0\",\"size\":1641,\"hash\":\"38f4b347bcd29d0e8c56eb2d660ebfba41e925d0\"},{\"path\":\"app/client/three/postprocessing/RenderPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/RenderPass.js?9e7b22bbef79475aca7314471cd4b6405b8b3784\",\"size\":1071,\"hash\":\"9e7b22bbef79475aca7314471cd4b6405b8b3784\"},{\"path\":\"app/client/three/postprocessing/SavePass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/SavePass.js?9be0d7ab79c1e716193b7a81776fb9837df27bca\",\"size\":1308,\"hash\":\"9be0d7ab79c1e716193b7a81776fb9837df27bca\"},{\"path\":\"app/client/three/postprocessing/ShaderPass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/ShaderPass.js?f780ccfdc1191fdc76c22082ebd2f6eab43bc319\",\"size\":1026,\"hash\":\"f780ccfdc1191fdc76c22082ebd2f6eab43bc319\"},{\"path\":\"app/client/three/postprocessing/TexturePass.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/postprocessing/TexturePass.js?ebe11bf7673d2a79ba8be8cc790b56435a32010b\",\"size\":921,\"hash\":\"ebe11bf7673d2a79ba8be8cc790b56435a32010b\"},{\"path\":\"app/client/three/shaders/BasicShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BasicShader.js?185c112bb70f479a9e6c6495d62334b44c6d568e\",\"size\":391,\"hash\":\"185c112bb70f479a9e6c6495d62334b44c6d568e\"},{\"path\":\"app/client/three/shaders/BleachBypassShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BleachBypassShader.js?29f7a511f49d3b41715fc6bc8d0d9e039cd37216\",\"size\":1315,\"hash\":\"29f7a511f49d3b41715fc6bc8d0d9e039cd37216\"},{\"path\":\"app/client/three/shaders/BlendShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BlendShader.js?5c6ccccdbf6e8f35d563ac68e9945a45d81bce88\",\"size\":874,\"hash\":\"5c6ccccdbf6e8f35d563ac68e9945a45d81bce88\"},{\"path\":\"app/client/three/shaders/BokehShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BokehShader.js?222d71aa02986b756c6ddea95c40554ecaf7f1b8\",\"size\":5345,\"hash\":\"222d71aa02986b756c6ddea95c40554ecaf7f1b8\"},{\"path\":\"app/client/three/shaders/BokehShader2.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BokehShader2.js?e9c4cfa477b04260bfbab2d0023e315d200b09b6\",\"size\":10704,\"hash\":\"e9c4cfa477b04260bfbab2d0023e315d200b09b6\"},{\"path\":\"app/client/three/shaders/BrightnessContrastShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/BrightnessContrastShader.js?7ad1a6e5f772ed2ace948d294e6b45abb6d13e44\",\"size\":1155,\"hash\":\"7ad1a6e5f772ed2ace948d294e6b45abb6d13e44\"},{\"path\":\"app/client/three/shaders/ColorCorrectionShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/ColorCorrectionShader.js?6c811cf6ab159b68e0ba3f40bc1496904497a1ee\",\"size\":802,\"hash\":\"6c811cf6ab159b68e0ba3f40bc1496904497a1ee\"},{\"path\":\"app/client/three/shaders/ColorifyShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/ColorifyShader.js?5dc764b1264a628c8347a8609d6a78742a38fcb2\",\"size\":766,\"hash\":\"5dc764b1264a628c8347a8609d6a78742a38fcb2\"},{\"path\":\"app/client/three/shaders/ConvolutionShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/ConvolutionShader.js?1a7ed9eaa673a6887bd0b64222738de40caa0e17\",\"size\":1968,\"hash\":\"1a7ed9eaa673a6887bd0b64222738de40caa0e17\"},{\"path\":\"app/client/three/shaders/CopyShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/CopyShader.js?23e2aeb3d612300962dc5a8505914e84fcbfa396\",\"size\":659,\"hash\":\"23e2aeb3d612300962dc5a8505914e84fcbfa396\"},{\"path\":\"app/client/three/shaders/DOFMipMapShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/DOFMipMapShader.js?00022992086d5af57583b7eaa186b9d973dc5ab4\",\"size\":1041,\"hash\":\"00022992086d5af57583b7eaa186b9d973dc5ab4\"},{\"path\":\"app/client/three/shaders/DotScreenShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/DotScreenShader.js?179cc50eb92ce4631a5713d6cc3460fb8d98d66b\",\"size\":1335,\"hash\":\"179cc50eb92ce4631a5713d6cc3460fb8d98d66b\"},{\"path\":\"app/client/three/shaders/EdgeShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/EdgeShader.js?b12f8b98181f787e53951a4f5bc825616c4f301c\",\"size\":3159,\"hash\":\"b12f8b98181f787e53951a4f5bc825616c4f301c\"},{\"path\":\"app/client/three/shaders/EdgeShader2.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/EdgeShader2.js?007147353ebd7ae571c1a158d8fe96423f4ab9f1\",\"size\":1649,\"hash\":\"007147353ebd7ae571c1a158d8fe96423f4ab9f1\"},{\"path\":\"app/client/three/shaders/FXAAShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/FXAAShader.js?12f5544d856166816ed13c829667817c00f8ccf2\",\"size\":3028,\"hash\":\"12f5544d856166816ed13c829667817c00f8ccf2\"},{\"path\":\"app/client/three/shaders/FilmShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/FilmShader.js?3107cd0f2f3420f2d73e14844f4c4db96f75331d\",\"size\":2579,\"hash\":\"3107cd0f2f3420f2d73e14844f4c4db96f75331d\"},{\"path\":\"app/client/three/shaders/FocusShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/FocusShader.js?9935fb222443c6bf0eba0134fd954724cb88c219\",\"size\":2521,\"hash\":\"9935fb222443c6bf0eba0134fd954724cb88c219\"},{\"path\":\"app/client/three/shaders/FresnelShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/FresnelShader.js?5550ad24ceac90ec178c58a8ba4858eceb9758ca\",\"size\":2131,\"hash\":\"5550ad24ceac90ec178c58a8ba4858eceb9758ca\"},{\"path\":\"app/client/three/shaders/HorizontalBlurShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/HorizontalBlurShader.js?131c067c723cc29eb9e368ad6fbe95ef8f6561e2\",\"size\":1654,\"hash\":\"131c067c723cc29eb9e368ad6fbe95ef8f6561e2\"},{\"path\":\"app/client/three/shaders/HorizontalTiltShiftShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/HorizontalTiltShiftShader.js?74680f94da96b2899a1166defaed7a8b896be268\",\"size\":1701,\"hash\":\"74680f94da96b2899a1166defaed7a8b896be268\"},{\"path\":\"app/client/three/shaders/HueSaturationShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/HueSaturationShader.js?8e6d2d150e976eb598e6f3f27aff79a5d40397d1\",\"size\":1611,\"hash\":\"8e6d2d150e976eb598e6f3f27aff79a5d40397d1\"},{\"path\":\"app/client/three/shaders/KaleidoShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/KaleidoShader.js?c29456d31006479f5c136a0b4a5f4e9e0ae2ab22\",\"size\":1136,\"hash\":\"c29456d31006479f5c136a0b4a5f4e9e0ae2ab22\"},{\"path\":\"app/client/three/shaders/LuminosityShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/LuminosityShader.js?7dec0e86f9a7a2b961392ba6dc2dfcec96b41651\",\"size\":716,\"hash\":\"7dec0e86f9a7a2b961392ba6dc2dfcec96b41651\"},{\"path\":\"app/client/three/shaders/MirrorShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/MirrorShader.js?3cad2fb9bfa9ef2359413747c96f7d3b771cb3c5\",\"size\":1032,\"hash\":\"3cad2fb9bfa9ef2359413747c96f7d3b771cb3c5\"},{\"path\":\"app/client/three/shaders/NormalMapShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/NormalMapShader.js?6a840fc50fe88f817319099b390f7bd6a7cc8c52\",\"size\":1093,\"hash\":\"6a840fc50fe88f817319099b390f7bd6a7cc8c52\"},{\"path\":\"app/client/three/shaders/RGBShiftShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/RGBShiftShader.js?69a9b358c7aa64fbe620edeb7cda3f5963ae023a\",\"size\":1134,\"hash\":\"69a9b358c7aa64fbe620edeb7cda3f5963ae023a\"},{\"path\":\"app/client/three/shaders/SSAOShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/SSAOShader.js?73d56597b432a6c02c810eb8568b6e95d0a6d274\",\"size\":6569,\"hash\":\"73d56597b432a6c02c810eb8568b6e95d0a6d274\"},{\"path\":\"app/client/three/shaders/SepiaShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/SepiaShader.js?76d8e97a14ffe649a37a5dcbeba4b06036585b1c\",\"size\":1036,\"hash\":\"76d8e97a14ffe649a37a5dcbeba4b06036585b1c\"},{\"path\":\"app/client/three/shaders/TriangleBlurShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/TriangleBlurShader.js?d49f7b5a4d503fc968ee17915ecb955c11516643\",\"size\":1582,\"hash\":\"d49f7b5a4d503fc968ee17915ecb955c11516643\"},{\"path\":\"app/client/three/shaders/UnpackDepthRGBAShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/UnpackDepthRGBAShader.js?492c90cf6749d5eebcccd3ca36569b04c324b130\",\"size\":1017,\"hash\":\"492c90cf6749d5eebcccd3ca36569b04c324b130\"},{\"path\":\"app/client/three/shaders/VerticalBlurShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/VerticalBlurShader.js?c31e0e232381c4b9a5af82b73bc31ec1485f91b7\",\"size\":1652,\"hash\":\"c31e0e232381c4b9a5af82b73bc31ec1485f91b7\"},{\"path\":\"app/client/three/shaders/VerticalTiltShiftShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/VerticalTiltShiftShader.js?4aa81806e103901e58b393c8b0f037c03889bf21\",\"size\":1699,\"hash\":\"4aa81806e103901e58b393c8b0f037c03889bf21\"},{\"path\":\"app/client/three/shaders/VignetteShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/shaders/VignetteShader.js?c14984125623f0667ce9632376ff4c1966d3db35\",\"size\":1316,\"hash\":\"c14984125623f0667ce9632376ff4c1966d3db35\"},{\"path\":\"app/features/actionbar/model/ActionBar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/model/ActionBar.js?6e8cd8cdef424cfa2721e5e64a950ef5897c8894\",\"size\":2502,\"hash\":\"6e8cd8cdef424cfa2721e5e64a950ef5897c8894\"},{\"path\":\"app/features/actionbar/model/ActionButton.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/model/ActionButton.js?8778431cc181dad986e8a8623e6fe8d7e4e6cb24\",\"size\":808,\"hash\":\"8778431cc181dad986e8a8623e6fe8d7e4e6cb24\"},{\"path\":\"app/features/actionbar/model/ActionButtonWeapon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/model/ActionButtonWeapon.js?ed24d7dd33f9fc7a7784d877201684dac05c9f54\",\"size\":1637,\"hash\":\"ed24d7dd33f9fc7a7784d877201684dac05c9f54\"},{\"path\":\"app/features/armor/model/Armor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/armor/model/Armor.js?545513c4002607a2c6af36d4efde69d657bd81e9\",\"size\":224,\"hash\":\"545513c4002607a2c6af36d4efde69d657bd81e9\"},{\"path\":\"app/features/canvasicon/model/ModuleIconOnCanvas.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/canvasicon/model/ModuleIconOnCanvas.js?d925f6715ca6fba6a0d90d6dade48ca8e2bdad66\",\"size\":1400,\"hash\":\"d925f6715ca6fba6a0d90d6dade48ca8e2bdad66\"},{\"path\":\"app/features/canvasicon/model/ShipDesignIconOnCanvas.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/canvasicon/model/ShipDesignIconOnCanvas.js?15fc63a73a8789593aee4fa2e7b09cc4d45ebcca\",\"size\":846,\"hash\":\"15fc63a73a8789593aee4fa2e7b09cc4d45ebcca\"},{\"path\":\"app/features/componentposition/model/HullLayoutPositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/componentposition/model/HullLayoutPositionService.js?7ace038e964c281d7257206ae3b0e70ac98f412c\",\"size\":616,\"hash\":\"7ace038e964c281d7257206ae3b0e70ac98f412c\"},{\"path\":\"app/features/componentposition/model/ModuleLayoutPositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/componentposition/model/ModuleLayoutPositionService.js?b265e4dccef4717991439253e38953aa48a96888\",\"size\":597,\"hash\":\"b265e4dccef4717991439253e38953aa48a96888\"},{\"path\":\"app/features/componentposition/model/ShipDesignPositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/componentposition/model/ShipDesignPositionService.js?fe6b38c873ef37d2349ffc65aab0ce96ff153e2b\",\"size\":1425,\"hash\":\"fe6b38c873ef37d2349ffc65aab0ce96ff153e2b\"},{\"path\":\"app/features/componentposition/model/ShipPositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/componentposition/model/ShipPositionService.js?81340c2e31b2325f9a6be228cbeeb1420ece8dca\",\"size\":456,\"hash\":\"81340c2e31b2325f9a6be228cbeeb1420ece8dca\"},{\"path\":\"app/features/compositeimage/model/CompositeImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImage.js?4bdca44ecd7989c798ef4e27206368f2b33b660f\",\"size\":7358,\"hash\":\"4bdca44ecd7989c798ef4e27206368f2b33b660f\"},{\"path\":\"app/features/compositeimage/model/CompositeImageModule.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageModule.js?63f21882a9b4c296619818a241e54f93044bfc84\",\"size\":2348,\"hash\":\"63f21882a9b4c296619818a241e54f93044bfc84\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipHull.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipHull.js?d186d9ba59fee8771cb05db5844da4cd9c643934\",\"size\":2122,\"hash\":\"d186d9ba59fee8771cb05db5844da4cd9c643934\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipHullAndModules.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipHullAndModules.js?f4011120ad26eab2d2f766d3392bf1fe974eff3b\",\"size\":1238,\"hash\":\"f4011120ad26eab2d2f766d3392bf1fe974eff3b\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipHullBumpMap.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipHullBumpMap.js?ae56df6a4a214f5cb01e42dc119ef5f65e8a02e2\",\"size\":1268,\"hash\":\"ae56df6a4a214f5cb01e42dc119ef5f65e8a02e2\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipHullNormalMap.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipHullNormalMap.js?ac57885c2830e4004f6c315f32d8d00202d8125d\",\"size\":1403,\"hash\":\"ac57885c2830e4004f6c315f32d8d00202d8125d\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipModules.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipModules.js?49746a0d41d2296398a929f3357541e7c679d1db\",\"size\":839,\"hash\":\"49746a0d41d2296398a929f3357541e7c679d1db\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipModulesNormalMaps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipModulesNormalMaps.js?64a1f3238510b8bbc2e7cc55468aa597bbee26f7\",\"size\":1037,\"hash\":\"64a1f3238510b8bbc2e7cc55468aa597bbee26f7\"},{\"path\":\"app/features/compositeimage/model/CompositeImageShipSilhouette.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/compositeimage/model/CompositeImageShipSilhouette.js?b494236430d2fa9192d9b3b9b87f13221a35842e\",\"size\":1170,\"hash\":\"b494236430d2fa9192d9b3b9b87f13221a35842e\"},{\"path\":\"app/features/coordinateconverter/model/CoordinateConverterViewPort.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/coordinateconverter/model/CoordinateConverterViewPort.js?a57c7503d3c73b97fb577769c6c97d4a84f8c5d0\",\"size\":1914,\"hash\":\"a57c7503d3c73b97fb577769c6c97d4a84f8c5d0\"},{\"path\":\"app/features/crew/model/Crew.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/crew/model/Crew.js?09bc18878a921275d68b38412bd1f73b2253954e\",\"size\":262,\"hash\":\"09bc18878a921275d68b38412bd1f73b2253954e\"},{\"path\":\"app/features/crew/model/CrewManagement.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/crew/model/CrewManagement.js?869ebbcdd534c66863845b7c1652530dc31a84c4\",\"size\":1703,\"hash\":\"869ebbcdd534c66863845b7c1652530dc31a84c4\"},{\"path\":\"app/features/cursor/client/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/cursor/client/dic.js?3a184ad50a2da8b9fbc7d0bc99977f99963dbdac\",\"size\":591,\"hash\":\"3a184ad50a2da8b9fbc7d0bc99977f99963dbdac\"},{\"path\":\"app/features/damage/model/DamageManagement.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/model/DamageManagement.js?822bc39ffb90a02f4367dfbd966d4bf088c0f2e3\",\"size\":4004,\"hash\":\"822bc39ffb90a02f4367dfbd966d4bf088c0f2e3\"},{\"path\":\"app/features/damage/model/DamageTile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/model/DamageTile.js?c24a4787c05969ec7e658247c0cfe2e9ed206047\",\"size\":1843,\"hash\":\"c24a4787c05969ec7e658247c0cfe2e9ed206047\"},{\"path\":\"app/features/damage/model/HitLocationService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/model/HitLocationService.js?0bd6e65fe12578fad8735fd5940f428c5372ac80\",\"size\":5588,\"hash\":\"0bd6e65fe12578fad8735fd5940f428c5372ac80\"},{\"path\":\"app/features/damage/model/ShipDamageStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/model/ShipDamageStatus.js?a1f774b53c0370e1cf3e40d51e0500737ee5c5fe\",\"size\":193,\"hash\":\"a1f774b53c0370e1cf3e40d51e0500737ee5c5fe\"},{\"path\":\"app/features/effects/model/SpriteEffectThrusterGlow.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/effects/model/SpriteEffectThrusterGlow.js?617172b8a9363898d019a88855e534863dd5421a\",\"size\":3363,\"hash\":\"617172b8a9363898d019a88855e534863dd5421a\"},{\"path\":\"app/features/electronicWarfare/client/EWRadialMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/client/EWRadialMenu.js?5519c5f2d7fd791cf8e462a253d4485e1def1027\",\"size\":3937,\"hash\":\"5519c5f2d7fd791cf8e462a253d4485e1def1027\"},{\"path\":\"app/features/electronicWarfare/client/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/client/dic.js?b783243bae51383aea33347867c1f99cd1a1dfb5\",\"size\":702,\"hash\":\"b783243bae51383aea33347867c1f99cd1a1dfb5\"},{\"path\":\"app/features/electronicWarfare/model/EWOrder.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/EWOrder.js?d7f718b1e92e7ad0df579924dd1a0405946a4ae6\",\"size\":1132,\"hash\":\"d7f718b1e92e7ad0df579924dd1a0405946a4ae6\"},{\"path\":\"app/features/electronicWarfare/model/EWService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/EWService.js?eeaaf7fdc7247ad607f703daa4eb2b393efc4dff\",\"size\":599,\"hash\":\"eeaaf7fdc7247ad607f703daa4eb2b393efc4dff\"},{\"path\":\"app/features/electronicWarfare/model/EwTypes.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/EwTypes.js?9b6c9527cdd9bce2537a950239995bc7c630f163\",\"size\":54,\"hash\":\"9b6c9527cdd9bce2537a950239995bc7c630f163\"},{\"path\":\"app/features/electronicWarfare/model/Scanner.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/Scanner.js?671ce07c2d5e7a0298fdda523e358d74d08861f9\",\"size\":229,\"hash\":\"671ce07c2d5e7a0298fdda523e358d74d08861f9\"},{\"path\":\"app/features/electronicWarfare/model/ShipEWUsage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/ShipEWUsage.js?b3e6b032cccf9895fd25c41974ea049459ab12d5\",\"size\":2763,\"hash\":\"b3e6b032cccf9895fd25c41974ea049459ab12d5\"},{\"path\":\"app/features/electronicWarfare/model/ShipEWUsageFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/ShipEWUsageFactory.js?9d7afaf4cc3de2fe9b932ba19c5f4eb55b26f0a1\",\"size\":573,\"hash\":\"9d7afaf4cc3de2fe9b932ba19c5f4eb55b26f0a1\"},{\"path\":\"app/features/electronicWarfare/model/ShipElectronicWarfareStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/model/ShipElectronicWarfareStatus.js?63c563bad451aab95759ad93726f78d1a5ff6f09\",\"size\":490,\"hash\":\"63c563bad451aab95759ad93726f78d1a5ff6f09\"},{\"path\":\"app/features/event/model/Dispatcher.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/event/model/Dispatcher.js?69ee0317b41badd1b23a630d52b14c49589338c4\",\"size\":1721,\"hash\":\"69ee0317b41badd1b23a630d52b14c49589338c4\"},{\"path\":\"app/features/event/model/Event.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/event/model/Event.js?1e1bf419d1cd6bd4ac68350341e093dcf02afe3c\",\"size\":324,\"hash\":\"1e1bf419d1cd6bd4ac68350341e093dcf02afe3c\"},{\"path\":\"app/features/event/model/EventListener.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/event/model/EventListener.js?ad0320ab9f97a2c690c7af66216367056559cd12\",\"size\":389,\"hash\":\"ad0320ab9f97a2c690c7af66216367056559cd12\"},{\"path\":\"app/features/fleetEditor/client/route.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/client/route.js?17eb573d111910abd46343b8f5d4d6e5e6e36ef6\",\"size\":746,\"hash\":\"17eb573d111910abd46343b8f5d4d6e5e6e36ef6\"},{\"path\":\"app/features/fleetEditor/collection/Fleets.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/collection/Fleets.js?4b18f91b012660146b31dd4cc1b200c5d69c817e\",\"size\":298,\"hash\":\"4b18f91b012660146b31dd4cc1b200c5d69c817e\"},{\"path\":\"app/features/fleetEditor/controller/FleetController.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/controller/FleetController.js?4c938b2d2cafad20dfa68a657867b2e64055d9bf\",\"size\":1503,\"hash\":\"4c938b2d2cafad20dfa68a657867b2e64055d9bf\"},{\"path\":\"app/features/fleetEditor/model/Fleet.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/model/Fleet.js?0eb00a18420c9a02ccb6821afad8d24028fdb9f3\",\"size\":949,\"hash\":\"0eb00a18420c9a02ccb6821afad8d24028fdb9f3\"},{\"path\":\"app/features/fleetEditor/model/FleetEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/model/FleetEditor.js?cdd58d9071a6c8636cefc694c1376cdef46bba36\",\"size\":1258,\"hash\":\"cdd58d9071a6c8636cefc694c1376cdef46bba36\"},{\"path\":\"app/features/fleetEditor/model/FleetStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/model/FleetStorage.js?03818d9885b7aa84fc899f8c6a81499d3c52f75a\",\"size\":2206,\"hash\":\"03818d9885b7aa84fc899f8c6a81499d3c52f75a\"},{\"path\":\"app/features/fleetEditor/model/ShipsInFleetDisplay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/model/ShipsInFleetDisplay.js?0bee621e5d2184f548a3cb4d17a920b83c8a4548\",\"size\":1123,\"hash\":\"0bee621e5d2184f548a3cb4d17a920b83c8a4548\"},{\"path\":\"app/features/game/client/route.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/route.js?b51b19f95cd22d90bcd68e9c3a17a5648a2ffae6\",\"size\":757,\"hash\":\"b51b19f95cd22d90bcd68e9c3a17a5648a2ffae6\"},{\"path\":\"app/features/game/client/subscribe.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/client/subscribe.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/features/game/collection/Games.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/collection/Games.js?5e2caf219f7b8138862e4fbd08af1098819411ec\",\"size\":295,\"hash\":\"5e2caf219f7b8138862e4fbd08af1098819411ec\"},{\"path\":\"app/features/game/controller/GameController.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/controller/GameController.js?218b60e0f96b339db02376c9a9b1080977169709\",\"size\":2072,\"hash\":\"218b60e0f96b339db02376c9a9b1080977169709\"},{\"path\":\"app/features/game/model/Game.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/Game.js?6624c9673e03c9455133b2d37ee6fd84f08ee6b8\",\"size\":3222,\"hash\":\"6624c9673e03c9455133b2d37ee6fd84f08ee6b8\"},{\"path\":\"app/features/game/model/GameAnimationLoop.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameAnimationLoop.js?569c5124a2a5e6d5773b2cc728aeaa9e3ff632ac\",\"size\":892,\"hash\":\"569c5124a2a5e6d5773b2cc728aeaa9e3ff632ac\"},{\"path\":\"app/features/game/model/GameClient.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameClient.js?c3a1a9a84089766392876635a1bf5b8e57e86c40\",\"size\":3443,\"hash\":\"c3a1a9a84089766392876635a1bf5b8e57e86c40\"},{\"path\":\"app/features/game/model/GameHtmlContainer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameHtmlContainer.js?d3286bf3b9e62729efeae9d8d58112be0299048b\",\"size\":1521,\"hash\":\"d3286bf3b9e62729efeae9d8d58112be0299048b\"},{\"path\":\"app/features/game/model/GameScene.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameScene.js?3cbc7bf6a692a0f4242f759b6248286adee34f78\",\"size\":3951,\"hash\":\"3cbc7bf6a692a0f4242f759b6248286adee34f78\"},{\"path\":\"app/features/game/model/GameState.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameState.js?93fb7d1e4e73f63d68d82d411e2f0e341d4a0b9c\",\"size\":2762,\"hash\":\"93fb7d1e4e73f63d68d82d411e2f0e341d4a0b9c\"},{\"path\":\"app/features/game/model/GameStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/GameStorage.js?3ef1b45aa187a47e856503a610957edd8d990496\",\"size\":1201,\"hash\":\"3ef1b45aa187a47e856503a610957edd8d990496\"},{\"path\":\"app/features/game/model/Scrolling.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/Scrolling.js?4cb11269ececf2d88978aa74d00079e2d9bf23f4\",\"size\":1354,\"hash\":\"4cb11269ececf2d88978aa74d00079e2d9bf23f4\"},{\"path\":\"app/features/game/model/ShipService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/ShipService.js?aa8cd8e02d5fab9cda0e930ed9218d4883319bb0\",\"size\":2402,\"hash\":\"aa8cd8e02d5fab9cda0e930ed9218d4883319bb0\"},{\"path\":\"app/features/game/model/UiEventManager.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/UiEventManager.js?c0843e0aeaf0d726bd7fbaac1018853dda2b5a72\",\"size\":6303,\"hash\":\"c0843e0aeaf0d726bd7fbaac1018853dda2b5a72\"},{\"path\":\"app/features/game/model/Zooming.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/model/Zooming.js?9ed33201ee21ba121fb65039ffc721e2930de35b\",\"size\":2778,\"hash\":\"9ed33201ee21ba121fb65039ffc721e2930de35b\"},{\"path\":\"app/features/gameaction/model/GameActionManager.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/gameaction/model/GameActionManager.js?33b15ca2b460366b40f5b0083e44d016dc091c1f\",\"size\":2531,\"hash\":\"33b15ca2b460366b40f5b0083e44d016dc091c1f\"},{\"path\":\"app/features/grid/model/Grid.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/Grid.js?78a459ff32152128a99bd1d82d80bbcb34003e43\",\"size\":951,\"hash\":\"78a459ff32152128a99bd1d82d80bbcb34003e43\"},{\"path\":\"app/features/grid/model/GridHullLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/GridHullLayout.js?54d4cdb0240db2a3e1e0a25955eb26175917e28f\",\"size\":669,\"hash\":\"54d4cdb0240db2a3e1e0a25955eb26175917e28f\"},{\"path\":\"app/features/grid/model/GridLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/GridLayout.js?2e22ed486e0b7009cb4e6c84333f06945e7432f5\",\"size\":544,\"hash\":\"2e22ed486e0b7009cb4e6c84333f06945e7432f5\"},{\"path\":\"app/features/grid/model/Tile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/Tile.js?d96bc2c7d9e9f28654393baf42d36563c6af6550\",\"size\":340,\"hash\":\"d96bc2c7d9e9f28654393baf42d36563c6af6550\"},{\"path\":\"app/features/grid/model/TileHull.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/TileHull.js?4c7d20903b647ce06dc9a43c6c32fb54d530e08d\",\"size\":1474,\"hash\":\"4c7d20903b647ce06dc9a43c6c32fb54d530e08d\"},{\"path\":\"app/features/grid/model/TileLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/TileLayout.js?e7b4ee81aa65907ff9bdabc1b2a35b41c256ddcc\",\"size\":1478,\"hash\":\"e7b4ee81aa65907ff9bdabc1b2a35b41c256ddcc\"},{\"path\":\"app/features/grid/model/TileLayoutArmor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/TileLayoutArmor.js?86ec08963b35e77fb98931ba484b8aed04c9a553\",\"size\":1884,\"hash\":\"86ec08963b35e77fb98931ba484b8aed04c9a553\"},{\"path\":\"app/features/grid/model/TileLayoutModules.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/TileLayoutModules.js?1258b5e897116a8be8a71ca0daeabc1995e13dd5\",\"size\":2396,\"hash\":\"1258b5e897116a8be8a71ca0daeabc1995e13dd5\"},{\"path\":\"app/features/grid/model/TilePlacingModule.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/model/TilePlacingModule.js?f397d0338f5e787d140054d6d7ba74abd7c5ad53\",\"size\":1305,\"hash\":\"f397d0338f5e787d140054d6d7ba74abd7c5ad53\"},{\"path\":\"app/features/hexgrid/model/CoordinateResolver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/CoordinateResolver.js?37269b02d3639dfcbab1ac788227992e94613c27\",\"size\":425,\"hash\":\"37269b02d3639dfcbab1ac788227992e94613c27\"},{\"path\":\"app/features/hexgrid/model/GridService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/GridService.js?1acf96a0fe8a00dcb32812a1ac76f13094fe33f9\",\"size\":6829,\"hash\":\"1acf96a0fe8a00dcb32812a1ac76f13094fe33f9\"},{\"path\":\"app/features/hexgrid/model/Hex.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/Hex.js?183cbea8d7e1cba64106708c16ea87d0d1b69d53\",\"size\":2966,\"hash\":\"183cbea8d7e1cba64106708c16ea87d0d1b69d53\"},{\"path\":\"app/features/hexgrid/model/HexGrid.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexGrid.js?95bfb365aaf899196c520ce120269402f537963f\",\"size\":1938,\"hash\":\"95bfb365aaf899196c520ce120269402f537963f\"},{\"path\":\"app/features/hexgrid/model/HexGridRenderer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexGridRenderer.js?1d7da1ae4f31975323e0bdc44159d14190d745b6\",\"size\":1447,\"hash\":\"1d7da1ae4f31975323e0bdc44159d14190d745b6\"},{\"path\":\"app/features/hexgrid/model/HexHighlighter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexHighlighter.js?9651fe262e2b0ce788f5143ca4014e0724476813\",\"size\":7155,\"hash\":\"9651fe262e2b0ce788f5143ca4014e0724476813\"},{\"path\":\"app/features/hexgrid/model/HexLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexLayout.js?2a704f645b3633ef2f09e93888b0aa110b430781\",\"size\":3944,\"hash\":\"2a704f645b3633ef2f09e93888b0aa110b430781\"},{\"path\":\"app/features/hexgrid/model/HexLayoutRenderer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexLayoutRenderer.js?f32ea57b128c60bce7262d946ebbc7f9a7de21d2\",\"size\":1228,\"hash\":\"f32ea57b128c60bce7262d946ebbc7f9a7de21d2\"},{\"path\":\"app/features/hexgrid/model/HexLayoutTextureProvider.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexLayoutTextureProvider.js?b0e2ee20377ae9df49d5f63fcc432783f918d46a\",\"size\":1553,\"hash\":\"b0e2ee20377ae9df49d5f63fcc432783f918d46a\"},{\"path\":\"app/features/hexgrid/model/HexRenderer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/model/HexRenderer.js?cb6e59d47ad5eab236c3071906412f0230329b34\",\"size\":1712,\"hash\":\"cb6e59d47ad5eab236c3071906412f0230329b34\"},{\"path\":\"app/features/hotkey/model/HotkeyFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/model/HotkeyFactory.js?a7efe56863e8a911b81ebecf9515a15227febfca\",\"size\":433,\"hash\":\"a7efe56863e8a911b81ebecf9515a15227febfca\"},{\"path\":\"app/features/hotkey/model/HotkeySet.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hotkey/model/HotkeySet.js?672601504f97e4c290bf588221c7b12fb500421f\",\"size\":285,\"hash\":\"672601504f97e4c290bf588221c7b12fb500421f\"},{\"path\":\"app/features/hulleditor/client/routes.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/client/routes.js?eb04fc03878d62246d3dd8f3e3fae146203ef5e3\",\"size\":782,\"hash\":\"eb04fc03878d62246d3dd8f3e3fae146203ef5e3\"},{\"path\":\"app/features/hulleditor/model/HullEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/model/HullEditor.js?91f70d570f0b4adb9473a301f3623596cddf1c57\",\"size\":1962,\"hash\":\"91f70d570f0b4adb9473a301f3623596cddf1c57\"},{\"path\":\"app/features/hulleditor/model/HullEditorService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/model/HullEditorService.js?73dc2eb226fe905b7d9d4384203193ebee934077\",\"size\":1631,\"hash\":\"73dc2eb226fe905b7d9d4384203193ebee934077\"},{\"path\":\"app/features/hulleditor/model/ReactiveHullLayoutDisplay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/model/ReactiveHullLayoutDisplay.js?15ced4b984b003a4d26c45d7625f1219e51a3cf5\",\"size\":917,\"hash\":\"15ced4b984b003a4d26c45d7625f1219e51a3cf5\"},{\"path\":\"app/features/inputMode/model/ActiveTile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/ActiveTile.js?d3ff05e2a0e691f9209782883f96af3bfbae80f9\",\"size\":475,\"hash\":\"d3ff05e2a0e691f9209782883f96af3bfbae80f9\"},{\"path\":\"app/features/inputMode/model/InputMode.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/InputMode.js?c1ee5559ed72aef839d74552cd73b9449c4c6a45\",\"size\":3112,\"hash\":\"c1ee5559ed72aef839d74552cd73b9449c4c6a45\"},{\"path\":\"app/features/inputMode/model/InputModeSelect.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/InputModeSelect.js?87a36439b9ba85b3909f52fe50914c053aa13176\",\"size\":1413,\"hash\":\"87a36439b9ba85b3909f52fe50914c053aa13176\"},{\"path\":\"app/features/inputMode/model/InputModeWeapon.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/InputModeWeapon.js?f4fdb5a6b8ad166f8326b5d3bf7c164f72ad1c51\",\"size\":4297,\"hash\":\"f4fdb5a6b8ad166f8326b5d3bf7c164f72ad1c51\"},{\"path\":\"app/features/inputMode/model/InputState.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/InputState.js?8307cc415de65277eadcd766c4c636186f5eb9db\",\"size\":699,\"hash\":\"8307cc415de65277eadcd766c4c636186f5eb9db\"},{\"path\":\"app/features/inputMode/model/SelectedShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/model/SelectedShip.js?220a1c69ecfc586e86293a4836f2b7da326d24c8\",\"size\":510,\"hash\":\"220a1c69ecfc586e86293a4836f2b7da326d24c8\"},{\"path\":\"app/features/math/model/Matrix4.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/math/model/Matrix4.js?cf0e2b894b740c6379cade1a155b5b6031180d82\",\"size\":23762,\"hash\":\"cf0e2b894b740c6379cade1a155b5b6031180d82\"},{\"path\":\"app/features/moduleeditor/client/routes.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/client/routes.js?5b6f26bf00c540071070780fff3805d9d35c2bbc\",\"size\":782,\"hash\":\"5b6f26bf00c540071070780fff3805d9d35c2bbc\"},{\"path\":\"app/features/moduleeditor/input/ModuleEditorClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/input/ModuleEditorClick.js?db7af4a7518ccbae111bdc78a72553bd5fe038cc\",\"size\":1305,\"hash\":\"db7af4a7518ccbae111bdc78a72553bd5fe038cc\"},{\"path\":\"app/features/moduleeditor/model/ModuleEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/model/ModuleEditor.js?19cf7a97cfd308f433c6d5c98eef2625b1ea33c0\",\"size\":3442,\"hash\":\"19cf7a97cfd308f433c6d5c98eef2625b1ea33c0\"},{\"path\":\"app/features/moduleeditor/model/ModuleEditorService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/model/ModuleEditorService.js?412b95527f6caa87502fe79575f1180d08b2972f\",\"size\":2518,\"hash\":\"412b95527f6caa87502fe79575f1180d08b2972f\"},{\"path\":\"app/features/moduleeditor/model/ModuleImageChooser.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/model/ModuleImageChooser.js?e776566455197600e61e65842aa12a6764267bb0\",\"size\":2504,\"hash\":\"e776566455197600e61e65842aa12a6764267bb0\"},{\"path\":\"app/features/modulelist/model/ModuleList.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/modulelist/model/ModuleList.js?23fc5a880decc39e30b392e2b04868f4520ff52d\",\"size\":1928,\"hash\":\"23fc5a880decc39e30b392e2b04868f4520ff52d\"},{\"path\":\"app/features/modulelist/model/ReactiveModuleList.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/modulelist/model/ReactiveModuleList.js?f7bc65f4a4337b7df34f4e83eeaf35c0fde1c2ff\",\"size\":833,\"hash\":\"f7bc65f4a4337b7df34f4e83eeaf35c0fde1c2ff\"},{\"path\":\"app/features/movement/client/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/client/dic.js?1c3777057a9fbb866eeeea4d4f53c8384df03936\",\"size\":1263,\"hash\":\"1c3777057a9fbb866eeeea4d4f53c8384df03936\"},{\"path\":\"app/features/movement/model/MovementAbility.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/MovementAbility.js?67ac6bc8d4f6bf3dc923c86c0b2d4620896fa616\",\"size\":1506,\"hash\":\"67ac6bc8d4f6bf3dc923c86c0b2d4620896fa616\"},{\"path\":\"app/features/movement/model/MovingService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/MovingService.js?b2a360fb05980b9892769a936b76a14d488a67cd\",\"size\":5877,\"hash\":\"b2a360fb05980b9892769a936b76a14d488a67cd\"},{\"path\":\"app/features/movement/model/PathRenderer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/PathRenderer.js?fda9b348399cac7a50746759a5ef41ed17cda005\",\"size\":2531,\"hash\":\"fda9b348399cac7a50746759a5ef41ed17cda005\"},{\"path\":\"app/features/movement/model/PathResolver.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/PathResolver.js?cd7a864369675b16d75d8312676fefeb4515e937\",\"size\":5235,\"hash\":\"cd7a864369675b16d75d8312676fefeb4515e937\"},{\"path\":\"app/features/movement/model/Position.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/Position.js?4b4b757b060e373d63471a820efdf9cb7b6a82af\",\"size\":2896,\"hash\":\"4b4b757b060e373d63471a820efdf9cb7b6a82af\"},{\"path\":\"app/features/movement/model/Route.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/Route.js?c66e325e288da3860b37b476e3179be57485fcfe\",\"size\":5061,\"hash\":\"c66e325e288da3860b37b476e3179be57485fcfe\"},{\"path\":\"app/features/movement/model/ShipAnimationDetails.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ShipAnimationDetails.js?83037579f7777b7a9d416f6b069af93dae511341\",\"size\":3733,\"hash\":\"83037579f7777b7a9d416f6b069af93dae511341\"},{\"path\":\"app/features/movement/model/ShipAnimator.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ShipAnimator.js?6eaec7375c0a8619150ed2507cc5818350115d40\",\"size\":1958,\"hash\":\"6eaec7375c0a8619150ed2507cc5818350115d40\"},{\"path\":\"app/features/movement/model/ShipMovementAnimationService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ShipMovementAnimationService.js?714a09019673211f5f3e6b4ccfbadda94e671e40\",\"size\":3363,\"hash\":\"714a09019673211f5f3e6b4ccfbadda94e671e40\"},{\"path\":\"app/features/movement/model/ShipMovementHandler.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ShipMovementHandler.js?de40261d6a7ce88fe23115c06e61c3303e11a965\",\"size\":1731,\"hash\":\"de40261d6a7ce88fe23115c06e61c3303e11a965\"},{\"path\":\"app/features/movement/model/ShipMovementStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ShipMovementStatus.js?04518362513e4ebf5bb674c68c2cf1f162f4bec3\",\"size\":1120,\"hash\":\"04518362513e4ebf5bb674c68c2cf1f162f4bec3\"},{\"path\":\"app/features/movement/model/ThrustCost.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrustCost.js?dc9fbaeb73ddfb0e432146307724121b557b21e6\",\"size\":1191,\"hash\":\"dc9fbaeb73ddfb0e432146307724121b557b21e6\"},{\"path\":\"app/features/movement/model/ThrustManagement.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrustManagement.js?e23f4f0275dc56a146ca29ce9d9f4d9506210bf3\",\"size\":1189,\"hash\":\"e23f4f0275dc56a146ca29ce9d9f4d9506210bf3\"},{\"path\":\"app/features/movement/model/ThrustProducer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrustProducer.js?6113af40a086e62b3abefed0aa1aa75e33b7ed18\",\"size\":242,\"hash\":\"6113af40a086e62b3abefed0aa1aa75e33b7ed18\"},{\"path\":\"app/features/movement/model/ThrustService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrustService.js?f0ece76736550efe625a5883983237699e5a6885\",\"size\":314,\"hash\":\"f0ece76736550efe625a5883983237699e5a6885\"},{\"path\":\"app/features/movement/model/Thruster.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/Thruster.js?268fbc7da167d2f9e00bdd87889c247a3ae7d746\",\"size\":398,\"hash\":\"268fbc7da167d2f9e00bdd87889c247a3ae7d746\"},{\"path\":\"app/features/movement/model/ThrusterInUse.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrusterInUse.js?cba72178adbdaff8b5d26bedc7e2a00a6d4e379f\",\"size\":820,\"hash\":\"cba72178adbdaff8b5d26bedc7e2a00a6d4e379f\"},{\"path\":\"app/features/movement/model/ThrusterUsage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/model/ThrusterUsage.js?c46b8f93d0e3dfeba57c8b00f08e9d5d7be8d008\",\"size\":2130,\"hash\":\"c46b8f93d0e3dfeba57c8b00f08e9d5d7be8d008\"},{\"path\":\"app/features/particlePath/model/ParticlePath.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particlePath/model/ParticlePath.js?5c51fb72897369faa2a41d0b830369d38aca88ca\",\"size\":2096,\"hash\":\"5c51fb72897369faa2a41d0b830369d38aca88ca\"},{\"path\":\"app/features/particlePath/model/ParticlePathEmitter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particlePath/model/ParticlePathEmitter.js?81d1835bc4e6a06c4e5b44008dd6e7e657a3323d\",\"size\":3273,\"hash\":\"81d1835bc4e6a06c4e5b44008dd6e7e657a3323d\"},{\"path\":\"app/features/particleeffects/model/EffectManager.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/EffectManager.js?2e7e43438be13ea8c8e144769d157761232acbe0\",\"size\":2932,\"hash\":\"2e7e43438be13ea8c8e144769d157761232acbe0\"},{\"path\":\"app/features/particleeffects/model/EffectParticle.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/EffectParticle.js?e06c6c16a4870b0f8fb49b89850c30f7cc60580d\",\"size\":4446,\"hash\":\"e06c6c16a4870b0f8fb49b89850c30f7cc60580d\"},{\"path\":\"app/features/particleeffects/model/EffectParticleEmitter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/model/EffectParticleEmitter.js?2214d427b4c875d581c4c617e90f3acc2dcc4301\",\"size\":8088,\"hash\":\"2214d427b4c875d581c4c617e90f3acc2dcc4301\"},{\"path\":\"app/features/position/model/GridPositionComparison.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/position/model/GridPositionComparison.js?b0cad3d02b8c400f28babdf953cd008a06052c67\",\"size\":1780,\"hash\":\"b0cad3d02b8c400f28babdf953cd008a06052c67\"},{\"path\":\"app/features/position/model/PositionService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/position/model/PositionService.js?580e973ceca99fdf788c0112014f6c2baf775b26\",\"size\":2123,\"hash\":\"580e973ceca99fdf788c0112014f6c2baf775b26\"},{\"path\":\"app/features/power/model/EnergyConsumer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/EnergyConsumer.js?d765b231a6903cbf0d600b18516014913128eae0\",\"size\":208,\"hash\":\"d765b231a6903cbf0d600b18516014913128eae0\"},{\"path\":\"app/features/power/model/EnergyProducer.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/EnergyProducer.js?bc7a4875a6a94a415b4648304690d8c70a8be74a\",\"size\":224,\"hash\":\"bc7a4875a6a94a415b4648304690d8c70a8be74a\"},{\"path\":\"app/features/power/model/PowerService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/PowerService.js?524f7c540b95f7d3783695d988334239a807b808\",\"size\":74,\"hash\":\"524f7c540b95f7d3783695d988334239a807b808\"},{\"path\":\"app/features/power/model/ShipPowerStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/model/ShipPowerStatus.js?f81f3f5091e26e16f61b858a58810fd95fed40c0\",\"size\":2272,\"hash\":\"f81f3f5091e26e16f61b858a58810fd95fed40c0\"},{\"path\":\"app/features/raytrace/model/DirectionalRaytrace.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/raytrace/model/DirectionalRaytrace.js?bba0cad76982b951cb9a2e9927a4037c530e6bd4\",\"size\":1388,\"hash\":\"bba0cad76982b951cb9a2e9927a4037c530e6bd4\"},{\"path\":\"app/features/sensor/model/SensorManagement.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/sensor/model/SensorManagement.js?3cbaa62147a359b984b175a6646a23b4d23c78e3\",\"size\":951,\"hash\":\"3cbaa62147a359b984b175a6646a23b4d23c78e3\"},{\"path\":\"app/features/ship/client/subscribe.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/client/subscribe.js?37a15f319b786912834a85c0518e33e2ac6f3db5\",\"size\":52,\"hash\":\"37a15f319b786912834a85c0518e33e2ac6f3db5\"},{\"path\":\"app/features/ship/collection/HullImageDocument.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/collection/HullImageDocument.js?5ba77f7e9faee18f6983d1676c316576e2c60d22\",\"size\":526,\"hash\":\"5ba77f7e9faee18f6983d1676c316576e2c60d22\"},{\"path\":\"app/features/ship/collection/HullLayoutDocument.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/collection/HullLayoutDocument.js?004d634e2e5bea2c9a2f96b60e02834ebeb4bdbd\",\"size\":338,\"hash\":\"004d634e2e5bea2c9a2f96b60e02834ebeb4bdbd\"},{\"path\":\"app/features/ship/collection/HullPatternImageDocument.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/collection/HullPatternImageDocument.js?c84bf535c3ca04ec16868e0460f4025510aff201\",\"size\":499,\"hash\":\"c84bf535c3ca04ec16868e0460f4025510aff201\"},{\"path\":\"app/features/ship/collection/ShipDesigns.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/collection/ShipDesigns.js?314cda037d539b47c9771cb80f334d3c049ae725\",\"size\":314,\"hash\":\"314cda037d539b47c9771cb80f334d3c049ae725\"},{\"path\":\"app/features/ship/model/HullLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/HullLayout.js?55be4f4cc337895d0216b0312562062cc6d760ea\",\"size\":2034,\"hash\":\"55be4f4cc337895d0216b0312562062cc6d760ea\"},{\"path\":\"app/features/ship/model/HullLayoutRepository.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/HullLayoutRepository.js?d201160d1d489cdca499ac1fcb4ea758a6235c40\",\"size\":639,\"hash\":\"d201160d1d489cdca499ac1fcb4ea758a6235c40\"},{\"path\":\"app/features/ship/model/Ship.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/Ship.js?c4cd4e5920fc14cdedebdbaa5070dc673892c2c3\",\"size\":4362,\"hash\":\"c4cd4e5920fc14cdedebdbaa5070dc673892c2c3\"},{\"path\":\"app/features/ship/model/ShipDesign.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/ShipDesign.js?dbc9cabf84e8837c0f63483bf5f2d5b31bdf834e\",\"size\":3362,\"hash\":\"dbc9cabf84e8837c0f63483bf5f2d5b31bdf834e\"},{\"path\":\"app/features/ship/model/ShipDesignInGame.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/ShipDesignInGame.js?a6bb09b23b8b565e40ca874c73bd26265f0765f8\",\"size\":311,\"hash\":\"a6bb09b23b8b565e40ca874c73bd26265f0765f8\"},{\"path\":\"app/features/ship/model/ShipDesignStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/ShipDesignStorage.js?9818ffea3739f97f0a5197398e93c1c9a2b8aa03\",\"size\":1949,\"hash\":\"9818ffea3739f97f0a5197398e93c1c9a2b8aa03\"},{\"path\":\"app/features/ship/model/ShipStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/model/ShipStorage.js?325552ddaf930ce55345b1b412e6af480702087b\",\"size\":2399,\"hash\":\"325552ddaf930ce55345b1b412e6af480702087b\"},{\"path\":\"app/features/shipdesigneditor/client/route.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/client/route.js?82a29e0941c48a2df70158017bd88343fdb0f9fe\",\"size\":541,\"hash\":\"82a29e0941c48a2df70158017bd88343fdb0f9fe\"},{\"path\":\"app/features/shipdesigneditor/input/PlaceArmorOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/PlaceArmorOnClick.js?221b910486345512ea99f142adb927f542491933\",\"size\":1779,\"hash\":\"221b910486345512ea99f142adb927f542491933\"},{\"path\":\"app/features/shipdesigneditor/input/PlaceModuleOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/PlaceModuleOnClick.js?e348e6c3b6ede6934be3567336369819329c6c03\",\"size\":1020,\"hash\":\"e348e6c3b6ede6934be3567336369819329c6c03\"},{\"path\":\"app/features/shipdesigneditor/input/RemoveModuleOnClick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/RemoveModuleOnClick.js?8ee75d3fdbb310426602bf994c9392b688d859bc\",\"size\":788,\"hash\":\"8ee75d3fdbb310426602bf994c9392b688d859bc\"},{\"path\":\"app/features/shipdesigneditor/input/ShowArmorMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/ShowArmorMenu.js?e7956fe37b5ef012c663bbed7d7376130dbbb586\",\"size\":358,\"hash\":\"e7956fe37b5ef012c663bbed7d7376130dbbb586\"},{\"path\":\"app/features/shipdesigneditor/input/ShowGridOnShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/ShowGridOnShip.js?aab4b2633f06873215f23546861798e72894dcf6\",\"size\":858,\"hash\":\"aab4b2633f06873215f23546861798e72894dcf6\"},{\"path\":\"app/features/shipdesigneditor/input/ShowSelectedModuleIconInEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/ShowSelectedModuleIconInEditor.js?c36738c121dabda45210ac9a66c1517e01fa92bc\",\"size\":4533,\"hash\":\"c36738c121dabda45210ac9a66c1517e01fa92bc\"},{\"path\":\"app/features/shipdesigneditor/input/ShowShipStatusViewEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/input/ShowShipStatusViewEditor.js?3b30dbc6446fc87b9281914e519b67e425339a3a\",\"size\":1332,\"hash\":\"3b30dbc6446fc87b9281914e519b67e425339a3a\"},{\"path\":\"app/features/shipdesigneditor/model/EditorShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/model/EditorShip.js?5be475715d8d592fe0e45a5a033c7db472be8e30\",\"size\":2099,\"hash\":\"5be475715d8d592fe0e45a5a033c7db472be8e30\"},{\"path\":\"app/features/shipdesigneditor/model/SelectedModuleDisplay.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/model/SelectedModuleDisplay.js?9f7b38b4b5f401718b23f743da6b35fb77263ad1\",\"size\":827,\"hash\":\"9f7b38b4b5f401718b23f743da6b35fb77263ad1\"},{\"path\":\"app/features/shipdesigneditor/model/ShipApperanceMenu.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/model/ShipApperanceMenu.js?4fd24f981cca868e2c55d7a4b025fe5932588913\",\"size\":1669,\"hash\":\"4fd24f981cca868e2c55d7a4b025fe5932588913\"},{\"path\":\"app/features/shipdesigneditor/model/ShipDesignEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/model/ShipDesignEditor.js?27c42eb284fa43c6ae6f52b8feffb055e7edcd98\",\"size\":5578,\"hash\":\"27c42eb284fa43c6ae6f52b8feffb055e7edcd98\"},{\"path\":\"app/features/shipdesigneditor/model/ShipDesignEditorService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/model/ShipDesignEditorService.js?40ec9eebea29df7301a8c0469a581fad9ab0295a\",\"size\":3467,\"hash\":\"40ec9eebea29df7301a8c0469a581fad9ab0295a\"},{\"path\":\"app/features/shipeditor/model/ShipEditor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipeditor/model/ShipEditor.js?f54c6602c31d5a85399542558c57c7cdabfd7787\",\"size\":3158,\"hash\":\"f54c6602c31d5a85399542558c57c7cdabfd7787\"},{\"path\":\"app/features/shiphtmlentry/model/ShipHtmlEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shiphtmlentry/model/ShipHtmlEntry.js?7bf37eeb0e2a2ff0fae80afe811c9aded401470c\",\"size\":2097,\"hash\":\"7bf37eeb0e2a2ff0fae80afe811c9aded401470c\"},{\"path\":\"app/features/shipmodule/collection/ModuleLayoutCollection.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/collection/ModuleLayoutCollection.js?c8a129a826fbbd0adef52851d1afb6a9a8104023\",\"size\":269,\"hash\":\"c8a129a826fbbd0adef52851d1afb6a9a8104023\"},{\"path\":\"app/features/shipmodule/model/Module.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/Module.js?b80e8fe6c49dfa0c189e7b4c1111209ce02ed13f\",\"size\":1592,\"hash\":\"b80e8fe6c49dfa0c189e7b4c1111209ce02ed13f\"},{\"path\":\"app/features/shipmodule/model/ModuleFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleFactory.js?2247cc497bc52211a841381f603384fbf496714c\",\"size\":247,\"hash\":\"2247cc497bc52211a841381f603384fbf496714c\"},{\"path\":\"app/features/shipmodule/model/ModuleImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleImage.js?cb9e3e35e7e27bd866b30016ec409bdbc5a37737\",\"size\":3104,\"hash\":\"cb9e3e35e7e27bd866b30016ec409bdbc5a37737\"},{\"path\":\"app/features/shipmodule/model/ModuleImageStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleImageStorage.js?aeca66d04fc6a1bf5a572b984dc44e6806c78a5e\",\"size\":1188,\"hash\":\"aeca66d04fc6a1bf5a572b984dc44e6806c78a5e\"},{\"path\":\"app/features/shipmodule/model/ModuleLayout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleLayout.js?bbdc084edab98823b70e1dc698d13ea422559b4e\",\"size\":6394,\"hash\":\"bbdc084edab98823b70e1dc698d13ea422559b4e\"},{\"path\":\"app/features/shipmodule/model/ModuleLayoutOnShip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleLayoutOnShip.js?b0eb3f7222dabbd20d9b48b4a799eb68e17fcdda\",\"size\":493,\"hash\":\"b0eb3f7222dabbd20d9b48b4a799eb68e17fcdda\"},{\"path\":\"app/features/shipmodule/model/ModuleLayoutRepository.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/model/ModuleLayoutRepository.js?c15d5a0d7b23438b34edf6ea8358ae08836b5aae\",\"size\":867,\"hash\":\"c15d5a0d7b23438b34edf6ea8358ae08836b5aae\"},{\"path\":\"app/features/shipstatus/model/ShipStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/ShipStatus.js?337dfaabf0a65a11e09dc8c3b0b1302dd2e7324e\",\"size\":2380,\"hash\":\"337dfaabf0a65a11e09dc8c3b0b1302dd2e7324e\"},{\"path\":\"app/features/shipstatus/model/ShipStatusSymbolService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/ShipStatusSymbolService.js?5aeadf9067ce3aa4599ea1998d34078db6a6c893\",\"size\":862,\"hash\":\"5aeadf9067ce3aa4599ea1998d34078db6a6c893\"},{\"path\":\"app/features/shipstatus/model/ShipStatusView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/model/ShipStatusView.js?99bfd9ac0011278ae692c04442711707eb206e74\",\"size\":6587,\"hash\":\"99bfd9ac0011278ae692c04442711707eb206e74\"},{\"path\":\"app/features/terrain/collection/Terrain.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/collection/Terrain.js?7f6fd647dd0d4616ed2a9007f8685aaf78c3a5f3\",\"size\":301,\"hash\":\"7f6fd647dd0d4616ed2a9007f8685aaf78c3a5f3\"},{\"path\":\"app/features/terrain/model/Asteroid.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/Asteroid.js?6c8ba390b89302013d98f32851f79239eab54e23\",\"size\":577,\"hash\":\"6c8ba390b89302013d98f32851f79239eab54e23\"},{\"path\":\"app/features/terrain/model/AsteroidBelt.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/AsteroidBelt.js?c798a6aaa0ab42b924c74ccaddfae6148653f9d9\",\"size\":5424,\"hash\":\"c798a6aaa0ab42b924c74ccaddfae6148653f9d9\"},{\"path\":\"app/features/terrain/model/AsteroidBeltFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/AsteroidBeltFactory.js?7c2a3cfbe7cc2dc8f99423ac45a5a4e0b3b0b701\",\"size\":2063,\"hash\":\"7c2a3cfbe7cc2dc8f99423ac45a5a4e0b3b0b701\"},{\"path\":\"app/features/terrain/model/AsteroidParticle.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/AsteroidParticle.js?ac540a836dd1098b7027fcbc06828b7978c66c4a\",\"size\":1026,\"hash\":\"ac540a836dd1098b7027fcbc06828b7978c66c4a\"},{\"path\":\"app/features/terrain/model/AsteroidParticleEmitter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/AsteroidParticleEmitter.js?b1045c7cdcf1f5444c86957a9111dbba0ef6a1ba\",\"size\":4088,\"hash\":\"b1045c7cdcf1f5444c86957a9111dbba0ef6a1ba\"},{\"path\":\"app/features/terrain/model/GameTerrain.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/GameTerrain.js?b38d7f9aaabd8f5b7b37550face2af04b4b297b7\",\"size\":1731,\"hash\":\"b38d7f9aaabd8f5b7b37550face2af04b4b297b7\"},{\"path\":\"app/features/terrain/model/Star.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/Star.js?93906f3a6cb910516e75a4c1c30b345ccc848b4e\",\"size\":1210,\"hash\":\"93906f3a6cb910516e75a4c1c30b345ccc848b4e\"},{\"path\":\"app/features/terrain/model/StarFieldFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/model/StarFieldFactory.js?f45c39febd250be12f88ebeedf4e1f930fc736ac\",\"size\":4585,\"hash\":\"f45c39febd250be12f88ebeedf4e1f930fc736ac\"},{\"path\":\"app/features/testDrive/model/GameTestdrive.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/testDrive/model/GameTestdrive.js?68dbc02f873841bc4c4660f19f2e95546d4baae8\",\"size\":1081,\"hash\":\"68dbc02f873841bc4c4660f19f2e95546d4baae8\"},{\"path\":\"app/features/timeline/controller/TimelineController.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/controller/TimelineController.js?12386e0cac5d0ca7e7696d372abaab3f68d7920a\",\"size\":772,\"hash\":\"12386e0cac5d0ca7e7696d372abaab3f68d7920a\"},{\"path\":\"app/features/timeline/model/Time.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/model/Time.js?9cfe4b7336b5473ba2ff57e8a35b2d04e04a20bb\",\"size\":82,\"hash\":\"9cfe4b7336b5473ba2ff57e8a35b2d04e04a20bb\"},{\"path\":\"app/features/timeline/model/Timeline.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/model/Timeline.js?c27939abf8df4611f6b61c7f200e489d7a89715a\",\"size\":2232,\"hash\":\"c27939abf8df4611f6b61c7f200e489d7a89715a\"},{\"path\":\"app/features/timeline/model/TimelineEntry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/model/TimelineEntry.js?d538267365770e7d04398e7a009b64d798461317\",\"size\":2298,\"hash\":\"d538267365770e7d04398e7a009b64d798461317\"},{\"path\":\"app/features/timeline/model/TimelineFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/model/TimelineFactory.js?72d4ee6b8286b7fef99e957b9276e2f37ce941e9\",\"size\":2901,\"hash\":\"72d4ee6b8286b7fef99e957b9276e2f37ce941e9\"},{\"path\":\"app/features/timeline/model/TimelineStorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/model/TimelineStorage.js?c1039f8eaa9dbf77f26ea385c18ebc2981ca84b4\",\"size\":2011,\"hash\":\"c1039f8eaa9dbf77f26ea385c18ebc2981ca84b4\"},{\"path\":\"app/features/tooltip/client/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/tooltip/client/dic.js?4424ae763e3a79d6b0849ce4a8735f65617be325\",\"size\":475,\"hash\":\"4424ae763e3a79d6b0849ce4a8735f65617be325\"},{\"path\":\"app/features/tooltip/model/ModuleDetailView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/tooltip/model/ModuleDetailView.js?b49dc68dc4ff92b77232d221260fe2dc672e9235\",\"size\":1588,\"hash\":\"b49dc68dc4ff92b77232d221260fe2dc672e9235\"},{\"path\":\"app/features/tooltip/model/MovementTooltip.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/tooltip/model/MovementTooltip.js?77cf9cd6cf2bf4a4e2c6dbc3fda7402a6324a813\",\"size\":1610,\"hash\":\"77cf9cd6cf2bf4a4e2c6dbc3fda7402a6324a813\"},{\"path\":\"app/features/tooltip/model/ShipTooltipView.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/tooltip/model/ShipTooltipView.js?90d3ffc97a623934ca4cb1f5f5ae27facc4d7a0a\",\"size\":1216,\"hash\":\"90d3ffc97a623934ca4cb1f5f5ae27facc4d7a0a\"},{\"path\":\"app/features/uicomponentviewservice/model/UIComponentViewService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/uicomponentviewservice/model/UIComponentViewService.js?1f029aa8de235ddc6de36875f44acf908b1b697a\",\"size\":1640,\"hash\":\"1f029aa8de235ddc6de36875f44acf908b1b697a\"},{\"path\":\"app/features/weapon/client/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/client/dic.js?1852f1d7d2061cc67602866e6293d281eac479f2\",\"size\":4013,\"hash\":\"1852f1d7d2061cc67602866e6293d281eac479f2\"},{\"path\":\"app/features/weapon/model/FireOrder.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/FireOrder.js?d4b1eae8ff3834f4c86feb183c3450cbbd7307c9\",\"size\":1325,\"hash\":\"d4b1eae8ff3834f4c86feb183c3450cbbd7307c9\"},{\"path\":\"app/features/weapon/model/ShipWeaponStatus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/ShipWeaponStatus.js?27be0a815352a2394bd0dd9cef85563169508514\",\"size\":1967,\"hash\":\"27be0a815352a2394bd0dd9cef85563169508514\"},{\"path\":\"app/features/weapon/model/WeaponArc.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponArc.js?6b40202dbcf532e480b2e53ff7bbc3e4c08cca50\",\"size\":600,\"hash\":\"6b40202dbcf532e480b2e53ff7bbc3e4c08cca50\"},{\"path\":\"app/features/weapon/model/WeaponArcService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponArcService.js?9697adc32a5d2f67c9272783e9ea6c1e950fc52d\",\"size\":2991,\"hash\":\"9697adc32a5d2f67c9272783e9ea6c1e950fc52d\"},{\"path\":\"app/features/weapon/model/WeaponFire.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponFire.js?42d5e1d445004b74e131b06ab67e675b84e7d378\",\"size\":1714,\"hash\":\"42d5e1d445004b74e131b06ab67e675b84e7d378\"},{\"path\":\"app/features/weapon/model/WeaponFireFactory.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponFireFactory.js?f83e10830c384616c4f82d9f16f2b817e3830de0\",\"size\":879,\"hash\":\"f83e10830c384616c4f82d9f16f2b817e3830de0\"},{\"path\":\"app/features/weapon/model/WeaponIndicatorService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponIndicatorService.js?9758993876f567b4f35644ecbf82e17fa60efbdd\",\"size\":3553,\"hash\":\"9758993876f567b4f35644ecbf82e17fa60efbdd\"},{\"path\":\"app/features/weapon/model/WeaponManagement.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponManagement.js?707321722893b0a01e3032a16361410468767cb5\",\"size\":2496,\"hash\":\"707321722893b0a01e3032a16361410468767cb5\"},{\"path\":\"app/features/weapon/model/WeaponService.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/model/WeaponService.js?517b6f88eea9c46e0cd6c3fdd42ed94f03a4a665\",\"size\":1130,\"hash\":\"517b6f88eea9c46e0cd6c3fdd42ed94f03a4a665\"},{\"path\":\"app/client/helpers/router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/router.js?e2639df0c498ddd0bc28ba6ac57cd319c73edaef\",\"size\":301,\"hash\":\"e2639df0c498ddd0bc28ba6ac57cd319c73edaef\"},{\"path\":\"app/client/helpers/spectrum.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/spectrum.js?85fa3d158403bd92f785b1555afe300b59dfb906\",\"size\":66986,\"hash\":\"85fa3d158403bd92f785b1555afe300b59dfb906\"},{\"path\":\"app/client/template/clickCatcher.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/clickCatcher.js?90b2037fe5fb7d212770e5d6bb9735bd2dffe686\",\"size\":849,\"hash\":\"90b2037fe5fb7d212770e5d6bb9735bd2dffe686\"},{\"path\":\"app/client/template/smallHullImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/smallHullImage.js?9675c1c0b6e6b78fc5d5898b48ff14756c6d037c\",\"size\":879,\"hash\":\"9675c1c0b6e6b78fc5d5898b48ff14756c6d037c\"},{\"path\":\"app/client/template/smallModuleImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/smallModuleImage.js?55daed1d32e2aa6b4ed2b266d69912483b009783\",\"size\":906,\"hash\":\"55daed1d32e2aa6b4ed2b266d69912483b009783\"},{\"path\":\"app/client/template/smallShipDesignImage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/template/smallShipDesignImage.js?cc34fbe4595d7c8544953bd33e5f3ad6e5da1342\",\"size\":251,\"hash\":\"cc34fbe4595d7c8544953bd33e5f3ad6e5da1342\"},{\"path\":\"app/client/three/FTLEffectShader.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/three/FTLEffectShader.js?a9ce2d3890b61a748976929109a1a869c3b87ac3\",\"size\":1709,\"hash\":\"a9ce2d3890b61a748976929109a1a869c3b87ac3\"},{\"path\":\"app/features/actionbar/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/actionbar/dic.js?9107ff4532a9815d34843fc49effa0b2e532962a\",\"size\":1035,\"hash\":\"9107ff4532a9815d34843fc49effa0b2e532962a\"},{\"path\":\"app/features/armor/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/armor/dic.js?d8fe58814726dffe5965b2b9613c64d22b573c8e\",\"size\":753,\"hash\":\"d8fe58814726dffe5965b2b9613c64d22b573c8e\"},{\"path\":\"app/features/coordinateconverter/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/coordinateconverter/dic.js?726854f5082a33f005d100038d01d2f3af29ed24\",\"size\":194,\"hash\":\"726854f5082a33f005d100038d01d2f3af29ed24\"},{\"path\":\"app/features/damage/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/damage/dic.js?67d0b3de0cca4ccced810930cddafdfefd204a30\",\"size\":169,\"hash\":\"67d0b3de0cca4ccced810930cddafdfefd204a30\"},{\"path\":\"app/features/electronicWarfare/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/electronicWarfare/dic.js?56ca8aafe3370d7acc3d08549a0f42ed471ccf24\",\"size\":330,\"hash\":\"56ca8aafe3370d7acc3d08549a0f42ed471ccf24\"},{\"path\":\"app/features/event/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/event/dic.js?14724833bf2b0ffdeb8cc3020e2f627b03b024c2\",\"size\":136,\"hash\":\"14724833bf2b0ffdeb8cc3020e2f627b03b024c2\"},{\"path\":\"app/features/fleetEditor/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/dic.js?fe78dd77c5c20b75cf03af5f182fb659d2597538\",\"size\":281,\"hash\":\"fe78dd77c5c20b75cf03af5f182fb659d2597538\"},{\"path\":\"app/features/fleetEditor/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/fleetEditor/methods.js?77ccc40818c46fbd42270e9e3edf813cc3eca010\",\"size\":63,\"hash\":\"77ccc40818c46fbd42270e9e3edf813cc3eca010\"},{\"path\":\"app/features/game/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/dic.js?e054aa54f8a9d4863d388e9d294b5a3f1918e9c4\",\"size\":3719,\"hash\":\"e054aa54f8a9d4863d388e9d294b5a3f1918e9c4\"},{\"path\":\"app/features/game/functions.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/functions.js?a65c5204f415622022783c4a308daeca568ff930\",\"size\":302,\"hash\":\"a65c5204f415622022783c4a308daeca568ff930\"},{\"path\":\"app/features/game/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/game/methods.js?91479dc66d033a918c792fb63c9acac9af1a2f16\",\"size\":62,\"hash\":\"91479dc66d033a918c792fb63c9acac9af1a2f16\"},{\"path\":\"app/features/gameaction/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/gameaction/dic.js?93f5355bd90ec551e1b887e662ff8317ac1619c5\",\"size\":367,\"hash\":\"93f5355bd90ec551e1b887e662ff8317ac1619c5\"},{\"path\":\"app/features/grid/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/grid/dic.js?677f0444d4d155d3a53d1ebdd130cfb598864ae4\",\"size\":217,\"hash\":\"677f0444d4d155d3a53d1ebdd130cfb598864ae4\"},{\"path\":\"app/features/hexgrid/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hexgrid/dic.js?3a2c2e6e81cef5b13bef2338cc1557a8a95aece2\",\"size\":1823,\"hash\":\"3a2c2e6e81cef5b13bef2338cc1557a8a95aece2\"},{\"path\":\"app/features/hulleditor/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/dic.js?103f945f8d582a4bd31facf6fe3a56f35138e09f\",\"size\":956,\"hash\":\"103f945f8d582a4bd31facf6fe3a56f35138e09f\"},{\"path\":\"app/features/hulleditor/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/hulleditor/methods.js?f7b5434b538b1bb5bee14269649c77347a621c6f\",\"size\":2348,\"hash\":\"f7b5434b538b1bb5bee14269649c77347a621c6f\"},{\"path\":\"app/features/icon/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/icon/dic.js?c35e451c9bb7dbbbe570c6f312e0bbe5e1cd15a9\",\"size\":1444,\"hash\":\"c35e451c9bb7dbbbe570c6f312e0bbe5e1cd15a9\"},{\"path\":\"app/features/inputMode/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/inputMode/dic.js?d4a91e1b9e214a43a89dea8a12111913f81f8102\",\"size\":9996,\"hash\":\"d4a91e1b9e214a43a89dea8a12111913f81f8102\"},{\"path\":\"app/features/moduleeditor/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/dic.js?37f613cfe476d9b918fb63e72a088c03d246c048\",\"size\":1872,\"hash\":\"37f613cfe476d9b918fb63e72a088c03d246c048\"},{\"path\":\"app/features/moduleeditor/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/moduleeditor/methods.js?00000b5b030c95cf2e76934581b76de3cf266ef6\",\"size\":3025,\"hash\":\"00000b5b030c95cf2e76934581b76de3cf266ef6\"},{\"path\":\"app/features/modulelist/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/modulelist/dic.js?650cdffbcc98514314be32cd49294a058deef08b\",\"size\":452,\"hash\":\"650cdffbcc98514314be32cd49294a058deef08b\"},{\"path\":\"app/features/movement/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/movement/dic.js?02d475f1e9f4b0dbdbeee2ce1bca2ec781efb1de\",\"size\":1341,\"hash\":\"02d475f1e9f4b0dbdbeee2ce1bca2ec781efb1de\"},{\"path\":\"app/features/particleeffects/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/particleeffects/dic.js?153652ec4a1cc3d30ab1ee6ca04c26e71791ecb9\",\"size\":634,\"hash\":\"153652ec4a1cc3d30ab1ee6ca04c26e71791ecb9\"},{\"path\":\"app/features/position/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/position/dic.js?8c69dfaf94bcb9a7146a36b343214cb837e255dd\",\"size\":465,\"hash\":\"8c69dfaf94bcb9a7146a36b343214cb837e255dd\"},{\"path\":\"app/features/power/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/power/dic.js?9c3154d8f1e413d2c9f986057814ff14ce37b94b\",\"size\":139,\"hash\":\"9c3154d8f1e413d2c9f986057814ff14ce37b94b\"},{\"path\":\"app/features/ship/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/ship/dic.js?6130f6a212f7088878961ac259487a0960e5e772\",\"size\":604,\"hash\":\"6130f6a212f7088878961ac259487a0960e5e772\"},{\"path\":\"app/features/shipdesigneditor/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/dic.js?a697468d811ff9a028b7dfd8b6f789f08150bb8e\",\"size\":6262,\"hash\":\"a697468d811ff9a028b7dfd8b6f789f08150bb8e\"},{\"path\":\"app/features/shipdesigneditor/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdesigneditor/methods.js?d8248be8df5d8fdfbd8440b4d4b373fd60b42fc0\",\"size\":3936,\"hash\":\"d8248be8df5d8fdfbd8440b4d4b373fd60b42fc0\"},{\"path\":\"app/features/shipdisplay/Display.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipdisplay/Display.js?6557d00c0647c5c7416088e0d00b5714b90eb9f3\",\"size\":1860,\"hash\":\"6557d00c0647c5c7416088e0d00b5714b90eb9f3\"},{\"path\":\"app/features/shipmodule/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipmodule/dic.js?7a54fe53d027e4f53a7bf225e74f4950f547481c\",\"size\":428,\"hash\":\"7a54fe53d027e4f53a7bf225e74f4950f547481c\"},{\"path\":\"app/features/shipstatus/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/shipstatus/dic.js?0d239dc406759ddc0ee68dc299abd8b2f46e30d6\",\"size\":504,\"hash\":\"0d239dc406759ddc0ee68dc299abd8b2f46e30d6\"},{\"path\":\"app/features/terrain/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/terrain/dic.js?d31082bfddd3c21e6491327486a23a5db5755492\",\"size\":250,\"hash\":\"d31082bfddd3c21e6491327486a23a5db5755492\"},{\"path\":\"app/features/testDrive/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/testDrive/dic.js?b6f7da785e5c3500d9ae37813fbdfda72309a415\",\"size\":397,\"hash\":\"b6f7da785e5c3500d9ae37813fbdfda72309a415\"},{\"path\":\"app/features/testDrive/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/testDrive/methods.js?aaa10ba9a616c8ae01ea5b5e76ce9b5a375372aa\",\"size\":908,\"hash\":\"aaa10ba9a616c8ae01ea5b5e76ce9b5a375372aa\"},{\"path\":\"app/features/timeline/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/dic.js?6784930071e204dadb45900445ed6bb78e27a140\",\"size\":470,\"hash\":\"6784930071e204dadb45900445ed6bb78e27a140\"},{\"path\":\"app/features/timeline/methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/timeline/methods.js?8f855bb783365323ff6def261b5d6a1897ca8c86\",\"size\":66,\"hash\":\"8f855bb783365323ff6def261b5d6a1897ca8c86\"},{\"path\":\"app/features/uicomponentviewservice/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/uicomponentviewservice/dic.js?2696b27b39c607bd43a1815467753a701f4d2f50\",\"size\":217,\"hash\":\"2696b27b39c607bd43a1815467753a701f4d2f50\"},{\"path\":\"app/features/weapon/dic.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/features/weapon/dic.js?542f387fdb40d2ad20b6c74ad10bc790af558ffb\",\"size\":975,\"hash\":\"542f387fdb40d2ad20b6c74ad10bc790af558ffb\"},{\"path\":\"435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css\",\"sourceMap\":\"435475968ac8d143c47ce0b4e42e3461cfb9d1e4.css.map\",\"sourceMapUrl\":\"/435475968ac8d143c47ce0b4e42e3461cfb9d1e4.map\",\"size\":150172,\"hash\":\"435475968ac8d143c47ce0b4e42e3461cfb9d1e4\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot\",\"size\":14079,\"hash\":\"d53dff38dfb5c414015dfb31d30a473c95b50904\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf\",\"size\":29512,\"hash\":\"c427041d38cd6597ae7e758028ab72756849ec26\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff\",\"size\":16448,\"hash\":\"c707207e52ffe555a36880e9873d146c226e3533\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg\",\"size\":63157,\"hash\":\"796e58aedfcfe8a3b0829bc0594f739936a9d7d0\"},{\"path\":\"packages/velocity_html-reporter/lib/spinner.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/spinner.gif\",\"size\":1849,\"hash\":\"dcabdd743fd3e9d7bd5647abeb86e66a3e6f9597\"},{\"path\":\"app/._.DS_Store\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/._.DS_Store\",\"size\":120,\"hash\":\"11050c2745c99ec8dacff161c2a0a22ffacb8b47\"},{\"path\":\"app/raster.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/raster.jpg\",\"size\":324,\"hash\":\"cf4b1fb0442f4afa583d37af04da65cf0e2f99a6\"},{\"path\":\"app/background/bluespace3.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/background/bluespace3.jpg\",\"size\":1169621,\"hash\":\"a5c045a77d7fd7afd6bb1fde072e075db5243980\"},{\"path\":\"app/effect/effectTextures1024.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/effect/effectTextures1024.png\",\"size\":4202198,\"hash\":\"682b2e5c1bd2861e80e5699323de4887d0f570c5\"},{\"path\":\"app/effect/explosion128.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/effect/explosion128.png\",\"size\":65877,\"hash\":\"f75f5acc365f723beee184d30089e2d0281b6e15\"},{\"path\":\"app/effect/explosion512.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/effect/explosion512.png\",\"size\":1050891,\"hash\":\"b0421d4b6f5a6b0b47a621739352a8491ea22f13\"},{\"path\":\"app/effect/thrusterglow.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/effect/thrusterglow.png\",\"size\":3718,\"hash\":\"c00c484680dfbbea8d99e1eaddd0b960692e7a5d\"},{\"path\":\"app/effect/thrusterglow2.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/effect/thrusterglow2.png\",\"size\":3839,\"hash\":\"34185762393d2a082fa7ff41b43e9191fa7d2764\"},{\"path\":\"app/misc/arrow.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/arrow.gif\",\"size\":133,\"hash\":\"5892f610351e3157722b82caa86460fdff52edf6\"},{\"path\":\"app/misc/create_shipdesign.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/create_shipdesign.png\",\"size\":5679,\"hash\":\"3e7ef94376784e94052170549233e7f8451ee309\"},{\"path\":\"app/misc/damageBrushes-normal.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/damageBrushes-normal.png\",\"size\":262987,\"hash\":\"69a8306c320152ee1784cfe3249235962c44bbdf\"},{\"path\":\"app/misc/damageBrushes.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/damageBrushes.png\",\"size\":262987,\"hash\":\"4893b0d6444e92ed1a4e2b4c0732938ad750d053\"},{\"path\":\"app/misc/fireOrder.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/fireOrder.png\",\"size\":3255,\"hash\":\"0a9906cb170b6a025478cd1fe9b1aa0417f6fc69\"},{\"path\":\"app/misc/grid.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/grid.png\",\"size\":3616,\"hash\":\"3ce8d948ef4e4336aefc0e86760e0345f47ab93b\"},{\"path\":\"app/misc/hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/hull.png\",\"size\":4178,\"hash\":\"381b221f3c2cf52afb2cd9606568ee282c589b4d\"},{\"path\":\"app/misc/hullgrid.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/hullgrid.png\",\"size\":3137,\"hash\":\"9d9e8e16e2db0f1ba61a87482142f750f060018d\"},{\"path\":\"app/misc/target.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/target.gif\",\"size\":143,\"hash\":\"a33571338afc30a55f369671eef5129c15e06db6\"},{\"path\":\"app/misc/x.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/x.gif\",\"size\":135,\"hash\":\"42201d7c11a859de9ca957486782706067cbe242\"},{\"path\":\"app/misc/x.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/misc/x.png\",\"size\":3586,\"hash\":\"c50f3a8c6b53292fb5f8ab0c820dc38688f5cf33\"},{\"path\":\"app/module/armorheavy-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/armorheavy-outside.png\",\"size\":3808,\"hash\":\"42147f1f2aba7baa5082065dc4069ecfb216cd7a\"},{\"path\":\"app/module/armorlight-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/armorlight-outside.png\",\"size\":4011,\"hash\":\"d6985d4d840d860b6ebcfc281fb451e1e13f279b\"},{\"path\":\"app/module/armormedium-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/armormedium-outside.png\",\"size\":3864,\"hash\":\"64965c057f6f70040f387eca7f7907f5793a7a0c\"},{\"path\":\"app/module/crew2x3-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew2x3-hull.png\",\"size\":3567,\"hash\":\"f8e681fc75dd0b40d5158ead4d85ffd98c3d7ab2\"},{\"path\":\"app/module/crew2x3-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew2x3-inside.png\",\"size\":9207,\"hash\":\"a7da066d5bcca126a315b8f58d830945e58e457c\"},{\"path\":\"app/module/crew2x3-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew2x3-outside.png\",\"size\":9116,\"hash\":\"bdb7bff9b7939196425b728b014978d143324926\"},{\"path\":\"app/module/crew3x2-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew3x2-hull.png\",\"size\":4086,\"hash\":\"126abc6e2263d0dcb8a977f14f9d09017281f00d\"},{\"path\":\"app/module/crew3x2-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew3x2-inside.png\",\"size\":10178,\"hash\":\"27483e138fc369cd0952db19976d8ffba3475b9c\"},{\"path\":\"app/module/crew3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/crew3x2-outside.png\",\"size\":9115,\"hash\":\"93316b7d87cd877e9f0f938f2df67533e3d63bf8\"},{\"path\":\"app/module/engine2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/engine2-outside.png\",\"size\":21464,\"hash\":\"12f36a2eff701dc5d7dee221f6db93d0d4d9d2b6\"},{\"path\":\"app/module/engine3x4-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/engine3x4-outside.png\",\"size\":22308,\"hash\":\"c9a4d4327502279d747f235720d7b1a612a99906\"},{\"path\":\"app/module/engine8x4-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/engine8x4-inside.png\",\"size\":42793,\"hash\":\"232ff0be6bc8eaf44734ef3b5bbf7d102557d366\"},{\"path\":\"app/module/engine8x4-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/engine8x4-outside.png\",\"size\":42793,\"hash\":\"232ff0be6bc8eaf44734ef3b5bbf7d102557d366\"},{\"path\":\"app/module/lightturret-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/lightturret-hull.png\",\"size\":8302,\"hash\":\"dc5ab1e5a656bd04e97dde617d441f1f3b8777fa\"},{\"path\":\"app/module/lightturret-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/lightturret-outside.png\",\"size\":11462,\"hash\":\"6e7c2cb665fdea35b1d6e1e060a578d932025b46\"},{\"path\":\"app/module/lightturret-over.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/lightturret-over.png\",\"size\":6823,\"hash\":\"66aaec4a6ec4e32a68795da21dc22d8d2d986671\"},{\"path\":\"app/module/railgunmkI-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/railgunmkI-hull.png\",\"size\":12641,\"hash\":\"7fd73b3e336f95c521d90f142cc5221fc380f50e\"},{\"path\":\"app/module/railgunmkI-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/railgunmkI-outside.png\",\"size\":17319,\"hash\":\"4e6658aa6118eb010364d0ebc1a6337923b30fef\"},{\"path\":\"app/module/railgunmkI-over.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/railgunmkI-over.png\",\"size\":12869,\"hash\":\"b678d7bb2b650750c3195ae870616197ac9974dc\"},{\"path\":\"app/module/reactor1-bump.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/reactor1-bump.png\",\"size\":10624,\"hash\":\"405a739f7cd0ca967fc185b40ee6d29f365e6f08\"},{\"path\":\"app/module/reactor1-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/reactor1-inside.png\",\"size\":27872,\"hash\":\"af653359b499503e4355204c2a4ec24384a6ca2d\"},{\"path\":\"app/module/reactor1-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/reactor1-outside.png\",\"size\":28298,\"hash\":\"7786bbfec4c2246c14e6aca443e3783b25550c92\"},{\"path\":\"app/module/reactor1-outsidebump.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/reactor1-outsidebump.png\",\"size\":10723,\"hash\":\"14856dde2ed16fc17a9dc807bb11ad1416ff6248\"},{\"path\":\"app/module/retro1-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/retro1-outside.png\",\"size\":19436,\"hash\":\"f35d3bb440f4f44bece1f62ee9c5b2f3c45e8d12\"},{\"path\":\"app/module/scanner2x2-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x2-inside.png\",\"size\":7722,\"hash\":\"b2716e956676d73c2b84f48f54e1973a8b97b51c\"},{\"path\":\"app/module/scanner2x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x2-outside.png\",\"size\":8076,\"hash\":\"ec081be8224787cbf53e346e42153d4ff7f777d9\"},{\"path\":\"app/module/scanner2x3-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x3-inside.png\",\"size\":9677,\"hash\":\"b1beabdb0b508d5b7cfce9522f1feaeda3d8ddbf\"},{\"path\":\"app/module/scanner2x3-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x3-outside.png\",\"size\":10260,\"hash\":\"33be32fbd52d8d71bc748ed9ea8a251cc5173ba8\"},{\"path\":\"app/module/scanner2x4-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x4-inside.png\",\"size\":11778,\"hash\":\"2830b6d16ab342b4f1ed6cef328b16307b8a6e62\"},{\"path\":\"app/module/scanner2x4-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner2x4-outside.png\",\"size\":11209,\"hash\":\"d10cfc598d75d9a2e6f55da57413fefdbfdb4694\"},{\"path\":\"app/module/scanner3x2-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner3x2-inside.png\",\"size\":9706,\"hash\":\"d3c719b88f3e9ed3084e542d3a3509d060c054a6\"},{\"path\":\"app/module/scanner3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner3x2-outside.png\",\"size\":10230,\"hash\":\"07146e4cdde693112e88d012d492ddaf06837fa8\"},{\"path\":\"app/module/scanner4x2-inside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner4x2-inside.png\",\"size\":11301,\"hash\":\"5efcc036359c5c1b40bdda0306a3f70daa7b2af3\"},{\"path\":\"app/module/scanner4x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/scanner4x2-outside.png\",\"size\":11192,\"hash\":\"480280dc225a7bafa892691e712224f47d353489\"},{\"path\":\"app/module/thruster3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/thruster3x2-outside.png\",\"size\":14393,\"hash\":\"4fe515416cfb52d58d16b619de250dfac434e9b7\"},{\"path\":\"app/module/thruster5x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/thruster5x2-outside.png\",\"size\":16687,\"hash\":\"05fe72d7e9fad4636384842488bc2082bf5ead99\"},{\"path\":\"app/module/thrusters1-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/thrusters1-hull.png\",\"size\":3527,\"hash\":\"0057cb9ac885a1c2f7e30af473846f5d01fbd93a\"},{\"path\":\"app/module/thrusters1-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/thrusters1-outside.png\",\"size\":6647,\"hash\":\"bcb924f8182ab11bc8462fce1dc9b4db2a395a16\"},{\"path\":\"app/psd/effectTextures.xcf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/psd/effectTextures.xcf\",\"size\":54422,\"hash\":\"c5e661284ef559fc7c8e40071ac74400a366c309\"},{\"path\":\"app/psd/jasper.psd\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/psd/jasper.psd\",\"size\":1439766,\"hash\":\"14e6cc4d3c863992cdd2bf5fa02527bb83c9c6cd\"},{\"path\":\"app/psd/modules.psd\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/psd/modules.psd\",\"size\":874126,\"hash\":\"e254dc255776c71f9f7068ffd321b49b4b2b0718\"},{\"path\":\"app/psd/reactor1.psd\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/psd/reactor1.psd\",\"size\":354921,\"hash\":\"117c712c6d189c2f098ff95a300fce6f96f4e017\"},{\"path\":\"app/ship/aurora-base.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/aurora-base.png\",\"size\":20359,\"hash\":\"4242d334c728a052ebaa798018c729e493861b7c\"},{\"path\":\"app/ship/aurora-bump.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/aurora-bump.png\",\"size\":256770,\"hash\":\"74036bbedee3ec283073c71a10cd8359f46be8fa\"},{\"path\":\"app/ship/aurora-details.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/aurora-details.png\",\"size\":722378,\"hash\":\"683a2ffc890d51595a403e149acd56ed93742fae\"},{\"path\":\"app/ship/aurora-shadow.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/aurora-shadow.png\",\"size\":301219,\"hash\":\"26c31cd14787dcc7b11d772bd3b319a7becfd951\"},{\"path\":\"app/ship/hullpatterntest.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/hullpatterntest.png\",\"size\":52717,\"hash\":\"8a10acce388a8475206aa859569f7df46d6df3de\"},{\"path\":\"app/ship/jasper1-base.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/jasper1-base.png\",\"size\":7749,\"hash\":\"f52ddbc1c4a650676da24511db9c801a6c3c7288\"},{\"path\":\"app/ship/jasper1-bump.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/jasper1-bump.png\",\"size\":134012,\"hash\":\"878c367920973a1bfdbf3be22fd2dafaf02e178f\"},{\"path\":\"app/ship/jasper1-details.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/jasper1-details.png\",\"size\":1417210,\"hash\":\"06e9d151a9f1b8cd88b1a6dc16aba9069fea57d8\"},{\"path\":\"app/ship/jasper1-normal.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/jasper1-normal.png\",\"size\":1417210,\"hash\":\"b22480c8c16efef574c923d17d728ed181a90a1d\"},{\"path\":\"app/ship/jasper1-shadow.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/jasper1-shadow.png\",\"size\":177050,\"hash\":\"8a96247b51adf0d1eacb0ecc99f98196efd3732c\"},{\"path\":\"app/ship/morningstar-base.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/morningstar-base.png\",\"size\":11357,\"hash\":\"0289f5176b6cf23e4508ce92c0b47d9d5ba44ba0\"},{\"path\":\"app/ship/morningstar-bump.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/morningstar-bump.png\",\"size\":52446,\"hash\":\"49a20558a6362704cf7fcdf79b13bed2283bf5e7\"},{\"path\":\"app/ship/morningstar-details.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/morningstar-details.png\",\"size\":203884,\"hash\":\"3532c15736d0c3acf4ec959d29232709a7b53b60\"},{\"path\":\"app/ship/morningstar-shadow.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/ship/morningstar-shadow.png\",\"size\":85273,\"hash\":\"d96f8569e385d9c5fd1a06ff52dc3858b4b2dc67\"},{\"path\":\"app/terrain/._.DS_Store\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/._.DS_Store\",\"size\":120,\"hash\":\"11050c2745c99ec8dacff161c2a0a22ffacb8b47\"},{\"path\":\"app/terrain/._hex.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/._hex.png\",\"size\":180,\"hash\":\"74655da9934f0d7e4b153d6b0d62cdb6692de8a7\"},{\"path\":\"app/terrain/asteroid_256.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/asteroid_256.png\",\"size\":84191,\"hash\":\"0a6fc1c5a9e7185ac0c94e1f49b807ca79b5f5e7\"},{\"path\":\"app/terrain/asteroid_4096.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/asteroid_4096.png\",\"size\":18168444,\"hash\":\"2007a9a5de9289493d3366203a7cc8f2e9e47e2a\"},{\"path\":\"app/terrain/asteroid_512.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/asteroid_512.png\",\"size\":275484,\"hash\":\"8f4831b71357c79a2982bc3108f87d5d82752a38\"},{\"path\":\"app/terrain/asteroid_base_512.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/asteroid_base_512.png\",\"size\":28642,\"hash\":\"bf36bf0f4173ff86c7f42d38d61bb78825940b53\"},{\"path\":\"app/terrain/hex.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/hex.png\",\"size\":38230,\"hash\":\"5fe91645784ca868feb3c03bbe63f3c9c3c1cafa\"},{\"path\":\"app/terrain/planet1.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/planet1.png\",\"size\":1059314,\"hash\":\"73c3fb547779a7027f0c9c484ec5d68afc61e024\"},{\"path\":\"app/terrain/star1.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/terrain/star1.png\",\"size\":3307,\"hash\":\"591dc8301eba6fbbb6efac7644c7c39f4efd5f3e\"},{\"path\":\"app/module/bump/crew3x2-hull.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/crew3x2-hull.png\",\"size\":25000,\"hash\":\"4d3c19d033bc640ad162c9e68723b559c4dd5596\"},{\"path\":\"app/module/bump/crew3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/crew3x2-outside.png\",\"size\":25000,\"hash\":\"e827cda580d795ee6f8035629f9d91dadae518fe\"},{\"path\":\"app/module/bump/lightturret-over.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/lightturret-over.png\",\"size\":2527,\"hash\":\"2f58d8b45f3cf6561b0267605bf2dff4e119067a\"},{\"path\":\"app/module/bump/reactor1-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/reactor1-outside.png\",\"size\":61125,\"hash\":\"69eec0d179ce9a3885cd99e98977934a98e21166\"},{\"path\":\"app/module/bump/scanner3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/scanner3x2-outside.png\",\"size\":25000,\"hash\":\"ea3f99a3f90cb0cac120973f344bcf7a01d2c4b1\"},{\"path\":\"app/module/bump/thruster3x2-outside.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/bump/thruster3x2-outside.png\",\"size\":25000,\"hash\":\"13c65b7728cab0ca081490dfaf9b2a309111374f\"},{\"path\":\"app/module/ui/CnC.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/CnC.png\",\"size\":2996,\"hash\":\"4df6e38f37dc5e90459dbd66f13e27336f733b09\"},{\"path\":\"app/module/ui/advancedAssaultLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/advancedAssaultLaser.png\",\"size\":3205,\"hash\":\"81e16c2e205053b1ca4522d37de252361154049d\"},{\"path\":\"app/module/ui/antimatterConverter.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/antimatterConverter.png\",\"size\":6946,\"hash\":\"bb100929e5a31cd38271a3e41d944311b79ed89c\"},{\"path\":\"app/module/ui/assaultLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/assaultLaser.png\",\"size\":3178,\"hash\":\"3b37f2facf32d105c340476055adca05ef81d4d5\"},{\"path\":\"app/module/ui/ballisticTorpedo.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/ballisticTorpedo.png\",\"size\":3153,\"hash\":\"6fddd3db2b0c374f8f77c57c643594d2beaae60d\"},{\"path\":\"app/module/ui/battleLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/battleLaser.png\",\"size\":3291,\"hash\":\"10cbb55cadd3425dccbd8eb7ee216bc51359a71c\"},{\"path\":\"app/module/ui/burstBeam.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/burstBeam.png\",\"size\":2893,\"hash\":\"a9f25f1c139b1a792cd0fce782db2ac24d31ee42\"},{\"path\":\"app/module/ui/cargoBay.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/cargoBay.png\",\"size\":2871,\"hash\":\"94822db1fac30bb5e9701113985d3ca68435a580\"},{\"path\":\"app/module/ui/catapult.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/catapult.png\",\"size\":2974,\"hash\":\"1bbfe26716f788caeae4df9d90ac9a82ec17b141\"},{\"path\":\"app/module/ui/electroPulseGun.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/electroPulseGun.png\",\"size\":3058,\"hash\":\"72c1281c568df7bd80a03212dd970432432217f4\"},{\"path\":\"app/module/ui/elintArray.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/elintArray.png\",\"size\":3044,\"hash\":\"54fee0912c8b4f54b269a1b9e3405aa88a71a7a6\"},{\"path\":\"app/module/ui/energyMine.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/energyMine.png\",\"size\":3222,\"hash\":\"aff0a1fea9d10aeddaf407b0d909bf8bd7f0bcc5\"},{\"path\":\"app/module/ui/engine.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/engine.png\",\"size\":3387,\"hash\":\"ae01780a9e5dde4c3177bfe3141db3335528b22f\"},{\"path\":\"app/module/ui/fusionCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/fusionCannon.png\",\"size\":3074,\"hash\":\"17c825281ffc8c04f372309cc1a666201795b1a9\"},{\"path\":\"app/module/ui/gatlingPulseCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/gatlingPulseCannon.png\",\"size\":2868,\"hash\":\"5ee725a08420d206b6218e2374f1d1cd2fb9936b\"},{\"path\":\"app/module/ui/graviticBolt.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/graviticBolt.png\",\"size\":3283,\"hash\":\"d3729e4483fb970d54be866bb1836ac34f388e55\"},{\"path\":\"app/module/ui/graviticCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/graviticCannon.png\",\"size\":3129,\"hash\":\"c75f8d83332575ea1e1a04c6162ab9aa1f7c43a5\"},{\"path\":\"app/module/ui/graviticCutter.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/graviticCutter.png\",\"size\":3159,\"hash\":\"ec4c25ce728fb7efa32d16999d837721589f7f3e\"},{\"path\":\"app/module/ui/graviticLance.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/graviticLance.png\",\"size\":3248,\"hash\":\"bbff0520c921e834543a218a19be545334cacaa7\"},{\"path\":\"app/module/ui/gravitonBeam.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/gravitonBeam.png\",\"size\":3166,\"hash\":\"0f040a39651512be535a4709f90dc6b93f2daf7a\"},{\"path\":\"app/module/ui/gravitonBeamDuo.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/gravitonBeamDuo.png\",\"size\":3040,\"hash\":\"cdf2d5954bc7f678420c3998efe97b07cca32f7f\"},{\"path\":\"app/module/ui/gravitonPulsar.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/gravitonPulsar.png\",\"size\":1210,\"hash\":\"68c6e439c7f019280b3d3b54561c004d65393420\"},{\"path\":\"app/module/ui/guardianArray.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/guardianArray.png\",\"size\":2864,\"hash\":\"bb9f3401025998cfc906bbc83c500ec7ee6ed772\"},{\"path\":\"app/module/ui/hangar.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/hangar.png\",\"size\":2960,\"hash\":\"1fa31f47208d25f62280c7f95b547cb184759cf7\"},{\"path\":\"app/module/ui/heavyArray.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/heavyArray.png\",\"size\":2881,\"hash\":\"c7707cbbdcf9f66e0ff51483092375d8a225bceb\"},{\"path\":\"app/module/ui/heavyBolter.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/heavyBolter.png\",\"size\":3061,\"hash\":\"1beb974b70f3f98a8ca50e99b45a73cd6dea53db\"},{\"path\":\"app/module/ui/heavyLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/heavyLaser.png\",\"size\":3218,\"hash\":\"b524e7aad1095ee9a23afa620661898d03844ad0\"},{\"path\":\"app/module/ui/heavyPlasma.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/heavyPlasma.png\",\"size\":3086,\"hash\":\"41982370a33a388b4c0662533617e34f5eecd39f\"},{\"path\":\"app/module/ui/heavyPulse.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/heavyPulse.png\",\"size\":3153,\"hash\":\"8fe296e79fa72b8b2572954fbf7cacf7661fd539\"},{\"path\":\"app/module/ui/hvyParticleCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/hvyParticleCannon.png\",\"size\":2900,\"hash\":\"e8094a4310c61708eaa1b881879e0e08fcfdb8e3\"},{\"path\":\"app/module/ui/improvedIonCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/improvedIonCannon.png\",\"size\":3408,\"hash\":\"aaeced1ddb8b4f3523404afe3f6c9e4b3373936f\"},{\"path\":\"app/module/ui/interceptor.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/interceptor.png\",\"size\":2859,\"hash\":\"40b89f7a5ae7860d5cd351f2417c881108aaed0d\"},{\"path\":\"app/module/ui/ionBolt.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/ionBolt.png\",\"size\":3460,\"hash\":\"e11c230ffeb1b83f4736c1a9b599365db07e172a\"},{\"path\":\"app/module/ui/ionCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/ionCannon.png\",\"size\":3442,\"hash\":\"31e197d8c5d7a4b658df7a8156f26be8f4259b0b\"},{\"path\":\"app/module/ui/ionTorpedo.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/ionTorpedo.png\",\"size\":3228,\"hash\":\"f45f216fa5bf008d38773ca2726cedf3514261a8\"},{\"path\":\"app/module/ui/jammer.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/jammer.png\",\"size\":3152,\"hash\":\"df9c7d4c79ce484a48763d177bf17575c79bdd5c\"},{\"path\":\"app/module/ui/jumpEngine.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/jumpEngine.png\",\"size\":3467,\"hash\":\"a239bf634a373af51de7a86490fb009ad164a09b\"},{\"path\":\"app/module/ui/lightGraviticBolt.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightGraviticBolt.png\",\"size\":3221,\"hash\":\"35b0ebb61039d90ce5c6d469af89ba8386b7326c\"},{\"path\":\"app/module/ui/lightGravitonBeam.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightGravitonBeam.png\",\"size\":3175,\"hash\":\"a42d64962d152a560d3a7e922aebb88b8e2cb2db\"},{\"path\":\"app/module/ui/lightLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightLaser.png\",\"size\":3037,\"hash\":\"e76fed4952c64e16810a1c8d7def249bc52ef6b1\"},{\"path\":\"app/module/ui/lightParticleBeam.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightParticleBeam.png\",\"size\":2896,\"hash\":\"b13bfc56c594a7abded6cc3246a2674ae585471d\"},{\"path\":\"app/module/ui/lightParticleBlaster.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightParticleBlaster.png\",\"size\":2947,\"hash\":\"bc916dfd75cf7c03887e1c3a933ba546523a0fb4\"},{\"path\":\"app/module/ui/lightParticleCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightParticleCannon.png\",\"size\":2888,\"hash\":\"3be04ed08889f49b54c44d1e0e9e3088ace54cb3\"},{\"path\":\"app/module/ui/lightPlasma.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightPlasma.png\",\"size\":411,\"hash\":\"c17f3de6149b7f2c9fde658178de502c02b0a4cb\"},{\"path\":\"app/module/ui/lightPulse.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightPulse.png\",\"size\":3124,\"hash\":\"9433e908acb6f9e1106ac74b648370c47c1368d4\"},{\"path\":\"app/module/ui/lightfusionCannon2.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightfusionCannon2.png\",\"size\":3025,\"hash\":\"474566af7759769a86b44107d34e98eb2c05e776\"},{\"path\":\"app/module/ui/lightfusionCannon3.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/lightfusionCannon3.png\",\"size\":3092,\"hash\":\"f5069e29fabc138f7f914271af00f564eb703895\"},{\"path\":\"app/module/ui/magGun.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/magGun.png\",\"size\":3283,\"hash\":\"6117550a324af2c2dbbc10b95acce14109ddc0d7\"},{\"path\":\"app/module/ui/matterCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/matterCannon.png\",\"size\":3427,\"hash\":\"c52e1d2b1bc23c024a122595229aab6590860ce9\"},{\"path\":\"app/module/ui/mediumLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/mediumLaser.png\",\"size\":3138,\"hash\":\"d94f783ce22853ca6eb2ed45b5a0ed0ef082b9c7\"},{\"path\":\"app/module/ui/mediumPlasma.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/mediumPlasma.png\",\"size\":2996,\"hash\":\"e069df53439be13bd2b95a03bcf61e22c0882d8a\"},{\"path\":\"app/module/ui/mediumPulse.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/mediumPulse.png\",\"size\":3149,\"hash\":\"54c5751cc0a0924a6453f5b60c41e7a127a79d6c\"},{\"path\":\"app/module/ui/missile1.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/missile1.png\",\"size\":2952,\"hash\":\"b1f36a416a386457d146c6d7789dd9d945c4a209\"},{\"path\":\"app/module/ui/missile2.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/missile2.png\",\"size\":2972,\"hash\":\"710bf80591b0ce3fa3ec5979d1bf64872ec66358\"},{\"path\":\"app/module/ui/molecularDisruptor.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/molecularDisruptor.png\",\"size\":6946,\"hash\":\"5cfcf7a03e75f78213594012370730e5355072f1\"},{\"path\":\"app/module/ui/neutronLaser.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/neutronLaser.png\",\"size\":3199,\"hash\":\"5cbc6e87fa9d0676ae5c8e64e1630fda445a34d5\"},{\"path\":\"app/module/ui/pairedParticleGun.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/pairedParticleGun.png\",\"size\":2877,\"hash\":\"ad97cd070554b75756d578ed1c84aec7ff965f37\"},{\"path\":\"app/module/ui/pairedParticleGun3.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/pairedParticleGun3.png\",\"size\":3146,\"hash\":\"c030f2130333762ef4f2d2e289105dfe14dc48f5\"},{\"path\":\"app/module/ui/particleBlaster.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/particleBlaster.png\",\"size\":2944,\"hash\":\"014ff5e99610a61b05f87ccda1f19409bfd023aa\"},{\"path\":\"app/module/ui/particleCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/particleCannon.png\",\"size\":6946,\"hash\":\"44107888a748dc74dbf5c70ee5e22caf0d59de0d\"},{\"path\":\"app/module/ui/particleCutter.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/particleCutter.png\",\"size\":3313,\"hash\":\"bfb8ba343fa4a62a8e401d5f97b764bc08a9074a\"},{\"path\":\"app/module/ui/particleRepeater.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/particleRepeater.png\",\"size\":2952,\"hash\":\"e67ddaff93a7ccd01889d1a030c768afff7aa68d\"},{\"path\":\"app/module/ui/plasmaAccelerator.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/plasmaAccelerator.png\",\"size\":2974,\"hash\":\"5ac83b5466bb3c50f78a94cbbc3b47591dd0771a\"},{\"path\":\"app/module/ui/plasmaStream.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/plasmaStream.png\",\"size\":3046,\"hash\":\"7d10524644bc87d497920ed539a7d2d01d80a5cf\"},{\"path\":\"app/module/ui/quadPulsar.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/quadPulsar.png\",\"size\":3183,\"hash\":\"cd3515a1475b60c5cd88dc6e3c01c87654e90973\"},{\"path\":\"app/module/ui/reactor.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/reactor.png\",\"size\":2999,\"hash\":\"1a40591fc1d52146d1469ca4886309ec24c3aa8d\"},{\"path\":\"app/module/ui/repeaterGun.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/repeaterGun.png\",\"size\":2957,\"hash\":\"f8d9d7cae21271cbced61dba51e84597f4cca32b\"},{\"path\":\"app/module/ui/scanner.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/scanner.png\",\"size\":3043,\"hash\":\"6224a36e166951c3cc6701a4801c443a8c698918\"},{\"path\":\"app/module/ui/scatterPulsar.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/scatterPulsar.png\",\"size\":3150,\"hash\":\"1de583b8333b9c385f9049cadc390b0be46957b3\"},{\"path\":\"app/module/ui/shield.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/shield.png\",\"size\":3284,\"hash\":\"85c9255f7587cdc3cc9a21e34bcc95f11071830c\"},{\"path\":\"app/module/ui/shieldGenerator.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/shieldGenerator.png\",\"size\":3571,\"hash\":\"839acd449fd350039b6f3906798ff3be36693be3\"},{\"path\":\"app/module/ui/shockCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/shockCannon.png\",\"size\":3048,\"hash\":\"0ab3f96aeb31293a8eacafdda028cbbd3f3f020f\"},{\"path\":\"app/module/ui/solarCannon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/solarCannon.png\",\"size\":3219,\"hash\":\"1a09ddfb6087850ad27f57f7d2ad5d46888d8e02\"},{\"path\":\"app/module/ui/stdParticleBeam.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/stdParticleBeam.png\",\"size\":2867,\"hash\":\"26c046256519891fd77004f88d2bcdb9dc6fceaf\"},{\"path\":\"app/module/ui/stealth.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/stealth.png\",\"size\":3288,\"hash\":\"4d3abc81581d1f1f314c6c85e200c7f00887da0f\"},{\"path\":\"app/module/ui/thruster.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster.png\",\"size\":2979,\"hash\":\"32aa3a169ca83d8f5a01b0046fa4a5ee6f393574\"},{\"path\":\"app/module/ui/thruster1.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster1.png\",\"size\":2979,\"hash\":\"32aa3a169ca83d8f5a01b0046fa4a5ee6f393574\"},{\"path\":\"app/module/ui/thruster2.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster2.png\",\"size\":2994,\"hash\":\"84ea680b02adb903e9e0a8730773145a66f1c51c\"},{\"path\":\"app/module/ui/thruster3.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster3.png\",\"size\":2979,\"hash\":\"2b62efbaa209e9598e42f011a86d9dda46527cd2\"},{\"path\":\"app/module/ui/thruster4.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster4.png\",\"size\":2984,\"hash\":\"4839066c4a619d818ba7cb18d40667898608b2f2\"},{\"path\":\"app/module/ui/thruster_small_1.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster_small_1.png\",\"size\":2959,\"hash\":\"2c177721935a09de139b6fa1abcc3dd666034eb2\"},{\"path\":\"app/module/ui/thruster_small_2.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster_small_2.png\",\"size\":2972,\"hash\":\"c4929c7ede76edc7480b29b13dba85c151ca13a8\"},{\"path\":\"app/module/ui/thruster_small_3.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster_small_3.png\",\"size\":2969,\"hash\":\"4d6eb552ee8eaf0f2d0cad0923a1a4532db2dd67\"},{\"path\":\"app/module/ui/thruster_small_4.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/thruster_small_4.png\",\"size\":2970,\"hash\":\"3b892def965ebbc5389777595be966cd115543c1\"},{\"path\":\"app/module/ui/twinArray.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/module/ui/twinArray.png\",\"size\":2875,\"hash\":\"124e54d13df1a49f8dd98cda33250a1aad9dff84\"}],\"version\":\"a91d27a2f506f8a1daae516eee9f60ce03595c01\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            }
          }
        },
        "inlineScriptsAllowed": {
          "type": "function"
        },
        "setInlineScriptsAllowed": {
          "type": "function"
        },
        "setBundledJsCssPrefix": {
          "type": "function"
        },
        "addStaticJs": {
          "type": "function"
        },
        "getBoilerplate": {
          "type": "function"
        },
        "additionalStaticJs": {
          "type": "object"
        },
        "validPid": {
          "type": "function"
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "follower-livedata": {
    "Follower": {
      "type": "object",
      "members": {
        "connect": {
          "type": "function"
        }
      }
    }
  },
  "application-configuration": {
    "AppConfig": {
      "type": "object",
      "members": {
        "findGalaxy": {
          "type": "function"
        },
        "getAppConfig": {
          "type": "function"
        },
        "getStarForThisJob": {
          "type": "function"
        },
        "configurePackage": {
          "type": "function"
        },
        "configureService": {
          "type": "function"
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "config": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "members": {
            "numericError": {
              "type": "constant",
              "value": 145546287
            }
          }
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "gen_salt_sync": {
          "type": "function"
        },
        "genSaltSync": {
          "type": "function"
        },
        "gen_salt": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "encrypt_sync": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "encrypt": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compare_sync": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "get_rounds": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "standard-app-packages": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 29
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 31
            },
            "args": {
              "type": "function",
              "refID": 33
            },
            "extend": {
              "type": "function",
              "refID": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 38
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 40
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 44
                },
                "create": {
                  "type": "function",
                  "refID": 46
                },
                "destroy": {
                  "type": "function",
                  "refID": 48
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 50
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 52
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 54
                },
                "insert": {
                  "type": "function",
                  "refID": 56
                },
                "getController": {
                  "type": "function",
                  "refID": 58
                },
                "setController": {
                  "type": "function",
                  "refID": 60
                },
                "hasController": {
                  "type": "function",
                  "refID": 62
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 64,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 29
            },
            "getInclusionArguments": {
              "ref": 31
            },
            "args": {
              "ref": 33
            },
            "extend": {
              "ref": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 64
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 38
                },
                "defaultTemplate": {
                  "ref": 40
                },
                "data": {
                  "ref": 44
                },
                "create": {
                  "ref": 46
                },
                "destroy": {
                  "ref": 48
                },
                "onViewCreated": {
                  "ref": 50
                },
                "onViewReady": {
                  "ref": 52
                },
                "onViewDestroyed": {
                  "ref": 54
                },
                "insert": {
                  "ref": 56
                },
                "getController": {
                  "ref": 58
                },
                "setController": {
                  "ref": 60
                },
                "hasController": {
                  "ref": 62
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:router": {
    "RouteController": {
      "type": "function",
      "refID": 0,
      "members": {
        "extend": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "action": {
              "type": "function"
            },
            "lookupProperty": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            }
          }
        }
      }
    },
    "Route": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "compile": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "normalizePath": {
              "type": "function"
            },
            "test": {
              "type": "function"
            },
            "exec": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "findController": {
              "type": "function"
            },
            "newController": {
              "type": "function"
            },
            "getController": {
              "type": "function"
            }
          }
        }
      }
    },
    "Router": {
      "type": "object",
      "members": {
        "options": {
          "type": "object"
        },
        "routes": {
          "type": "array"
        },
        "onRun": {
          "type": "function"
        },
        "onData": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 23,
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "LEGACY_HOOK_TYPES": {
              "type": "object",
              "members": {
                "load": {
                  "type": "constant",
                  "value": "onRun"
                },
                "before": {
                  "type": "constant",
                  "value": "onBeforeAction"
                },
                "after": {
                  "type": "constant",
                  "value": "onAfterAction"
                },
                "unload": {
                  "type": "constant",
                  "value": "onStop"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 23
                },
                "start": {
                  "type": "function",
                  "refID": 27
                },
                "onRequest": {
                  "type": "function",
                  "refID": 29
                },
                "run": {
                  "type": "function",
                  "refID": 31
                },
                "stop": {
                  "type": "function",
                  "refID": 33
                },
                "onUnhandled": {
                  "type": "function",
                  "refID": 35
                },
                "onRouteNotFound": {
                  "type": "function",
                  "refID": 37
                },
                "configure": {
                  "type": "function",
                  "refID": 39
                },
                "convertTemplateName": {
                  "type": "function",
                  "refID": 41
                },
                "convertRouteControllerName": {
                  "type": "function",
                  "refID": 43
                },
                "setNameConverter": {
                  "type": "function",
                  "refID": 45
                },
                "addHook": {
                  "type": "function",
                  "refID": 47
                },
                "getHooks": {
                  "type": "function",
                  "refID": 49
                },
                "map": {
                  "type": "function",
                  "refID": 51
                },
                "route": {
                  "type": "function",
                  "refID": 53
                },
                "path": {
                  "type": "function",
                  "refID": 55
                },
                "url": {
                  "type": "function",
                  "refID": 57
                },
                "match": {
                  "type": "function",
                  "refID": 59
                },
                "dispatch": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "start": {
          "ref": 27
        },
        "onRequest": {
          "ref": 29
        },
        "run": {
          "ref": 31
        },
        "stop": {
          "ref": 33
        },
        "onUnhandled": {
          "ref": 35
        },
        "onRouteNotFound": {
          "ref": 37
        },
        "configure": {
          "ref": 39
        },
        "convertTemplateName": {
          "ref": 41
        },
        "convertRouteControllerName": {
          "ref": 43
        },
        "setNameConverter": {
          "ref": 45
        },
        "addHook": {
          "ref": 47
        },
        "getHooks": {
          "ref": 49
        },
        "map": {
          "ref": 51
        },
        "route": {
          "ref": 53
        },
        "path": {
          "ref": 55
        },
        "url": {
          "ref": 57
        },
        "match": {
          "ref": 59
        },
        "dispatch": {
          "ref": 61
        }
      }
    },
    "Utils": {
      "type": "object",
      "members": {
        "assert": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "notifyDeprecated": {
          "type": "function"
        },
        "withDeprecatedNotice": {
          "type": "function"
        },
        "resolveValue": {
          "type": "function"
        },
        "hasOwnProperty": {
          "type": "function"
        },
        "inherits": {
          "type": "function"
        },
        "toArray": {
          "type": "function"
        },
        "typeOf": {
          "type": "function"
        },
        "extend": {
          "type": "function"
        },
        "create": {
          "type": "function"
        },
        "capitalize": {
          "type": "function"
        },
        "upperCamelCase": {
          "type": "function"
        },
        "camelCase": {
          "type": "function"
        },
        "pick": {
          "type": "function"
        },
        "StringConverters": {
          "type": "object",
          "members": {
            "none": {
              "type": "function"
            },
            "upperCamelCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            }
          }
        },
        "rewriteLegacyHooks": {
          "type": "function"
        }
      }
    },
    "IronRouter": {
      "type": "function",
      "refID": 0,
      "members": {
        "HOOK_TYPES": {
          "type": "array"
        },
        "LEGACY_HOOK_TYPES": {
          "type": "object",
          "members": {
            "load": {
              "type": "constant",
              "value": "onRun"
            },
            "before": {
              "type": "constant",
              "value": "onBeforeAction"
            },
            "after": {
              "type": "constant",
              "value": "onAfterAction"
            },
            "unload": {
              "type": "constant",
              "value": "onStop"
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "start": {
              "type": "function"
            },
            "onRequest": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "onUnhandled": {
              "type": "function"
            },
            "onRouteNotFound": {
              "type": "function"
            },
            "configure": {
              "type": "function"
            },
            "convertTemplateName": {
              "type": "function"
            },
            "convertRouteControllerName": {
              "type": "function"
            },
            "setNameConverter": {
              "type": "function"
            },
            "addHook": {
              "type": "function"
            },
            "getHooks": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "route": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "match": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ldk:three": {},
  "mrt:q": {
    "Q": {
      "type": "function",
      "refID": 0,
      "members": {
        "resolve": {
          "ref": 0
        },
        "nextTick": {
          "type": "function"
        },
        "defer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "makeNodeResolver": {
                  "type": "function"
                }
              }
            }
          }
        },
        "promise": {
          "type": "function"
        },
        "passByCopy": {
          "type": "function"
        },
        "join": {
          "type": "function"
        },
        "race": {
          "type": "function"
        },
        "makePromise": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "passByCopy": {
                  "type": "function"
                },
                "join": {
                  "type": "function"
                },
                "race": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                },
                "then": {
                  "type": "function"
                },
                "thenResolve": {
                  "type": "function"
                },
                "thenReject": {
                  "type": "function"
                },
                "isPending": {
                  "type": "function"
                },
                "isFulfilled": {
                  "type": "function"
                },
                "isRejected": {
                  "type": "function"
                },
                "spread": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "delete": {
                  "type": "function",
                  "refID": 45
                },
                "del": {
                  "ref": 45
                },
                "post": {
                  "type": "function",
                  "refID": 47
                },
                "mapply": {
                  "ref": 47
                },
                "invoke": {
                  "type": "function",
                  "refID": 49
                },
                "mcall": {
                  "ref": 49
                },
                "send": {
                  "ref": 49
                },
                "fapply": {
                  "type": "function"
                },
                "fcall": {
                  "type": "function"
                },
                "fbind": {
                  "type": "function"
                },
                "keys": {
                  "type": "function"
                },
                "all": {
                  "type": "function"
                },
                "allResolved": {
                  "type": "function"
                },
                "allSettled": {
                  "type": "function"
                },
                "catch": {
                  "type": "function",
                  "refID": 65
                },
                "fail": {
                  "ref": 65
                },
                "progress": {
                  "type": "function"
                },
                "finally": {
                  "type": "function",
                  "refID": 69
                },
                "fin": {
                  "ref": 69
                },
                "done": {
                  "type": "function"
                },
                "timeout": {
                  "type": "function"
                },
                "delay": {
                  "type": "function"
                },
                "nfapply": {
                  "type": "function"
                },
                "nfcall": {
                  "type": "function"
                },
                "denodeify": {
                  "type": "function",
                  "refID": 81
                },
                "nfbind": {
                  "ref": 81
                },
                "nbind": {
                  "type": "function"
                },
                "npost": {
                  "type": "function",
                  "refID": 85
                },
                "nmapply": {
                  "ref": 85
                },
                "ninvoke": {
                  "type": "function",
                  "refID": 87
                },
                "nmcall": {
                  "ref": 87
                },
                "nsend": {
                  "ref": 87
                },
                "nodeify": {
                  "type": "function"
                }
              }
            }
          }
        },
        "when": {
          "type": "function"
        },
        "thenResolve": {
          "type": "function"
        },
        "thenReject": {
          "type": "function"
        },
        "nearer": {
          "type": "function"
        },
        "isPromise": {
          "type": "function"
        },
        "isPromiseAlike": {
          "type": "function"
        },
        "isPending": {
          "type": "function"
        },
        "isFulfilled": {
          "type": "function"
        },
        "isRejected": {
          "type": "function"
        },
        "resetUnhandledRejections": {
          "type": "function"
        },
        "getUnhandledReasons": {
          "type": "function"
        },
        "stopUnhandledRejectionTracking": {
          "type": "function"
        },
        "reject": {
          "type": "function"
        },
        "fulfill": {
          "type": "function"
        },
        "master": {
          "type": "function"
        },
        "spread": {
          "type": "function"
        },
        "async": {
          "type": "function"
        },
        "spawn": {
          "type": "function"
        },
        "return": {
          "type": "function"
        },
        "promised": {
          "type": "function"
        },
        "dispatch": {
          "type": "function"
        },
        "get": {
          "type": "function"
        },
        "set": {
          "type": "function"
        },
        "delete": {
          "type": "function",
          "refID": 137
        },
        "del": {
          "ref": 137
        },
        "post": {
          "type": "function",
          "refID": 139
        },
        "mapply": {
          "ref": 139
        },
        "invoke": {
          "type": "function",
          "refID": 141
        },
        "mcall": {
          "ref": 141
        },
        "send": {
          "ref": 141
        },
        "fapply": {
          "type": "function"
        },
        "fcall": {
          "type": "function",
          "refID": 145
        },
        "try": {
          "ref": 145
        },
        "fbind": {
          "type": "function"
        },
        "keys": {
          "type": "function"
        },
        "all": {
          "type": "function"
        },
        "allResolved": {
          "type": "function"
        },
        "allSettled": {
          "type": "function"
        },
        "catch": {
          "type": "function",
          "refID": 157
        },
        "fail": {
          "ref": 157
        },
        "progress": {
          "type": "function"
        },
        "finally": {
          "type": "function",
          "refID": 161
        },
        "fin": {
          "ref": 161
        },
        "done": {
          "type": "function"
        },
        "timeout": {
          "type": "function"
        },
        "delay": {
          "type": "function"
        },
        "nfapply": {
          "type": "function"
        },
        "nfcall": {
          "type": "function"
        },
        "denodeify": {
          "type": "function",
          "refID": 173
        },
        "nfbind": {
          "ref": 173
        },
        "nbind": {
          "type": "function"
        },
        "npost": {
          "type": "function",
          "refID": 177
        },
        "nmapply": {
          "ref": 177
        },
        "ninvoke": {
          "type": "function",
          "refID": 179
        },
        "nmcall": {
          "ref": 179
        },
        "nsend": {
          "ref": 179
        },
        "nodeify": {
          "type": "function"
        }
      }
    }
  },
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "getMirrorPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "addPreProcessor": {
          "type": "function"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "parseXmlFiles": {
          "type": "function"
        },
        "FileCopier": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "start": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    }
  },
  "alanning:package-stubber": {
    "PackageStubber": {
      "type": "object",
      "members": {
        "functionReplacementStr": {
          "type": "constant",
          "value": "function emptyFn () {}"
        },
        "validate": {
          "type": "object",
          "members": {
            "stubPackages": {
              "type": "function"
            },
            "deepCopyReplaceFn": {
              "type": "function"
            }
          }
        },
        "stubPackages": {
          "type": "function"
        },
        "listTestPackages": {
          "type": "function"
        },
        "listPackages": {
          "type": "function"
        },
        "listPackageExports": {
          "type": "function"
        },
        "deepCopyReplaceFn": {
          "type": "function"
        },
        "shouldIgnorePackage": {
          "type": "function"
        },
        "replaceFnPlaceholders": {
          "type": "function"
        },
        "stubGenerators": {
          "type": "object",
          "members": {
            "function": {
              "type": "function"
            },
            "object": {
              "type": "function"
            },
            "string": {
              "type": "function"
            },
            "number": {
              "type": "function"
            },
            "undefined": {
              "type": "function"
            }
          }
        },
        "generateStubJsCode": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {},
  "velocity:html-reporter": {},
  "reload": {},
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "null",
          "value": null
        },
        "autoupdateVersionRefreshable": {
          "type": "null",
          "value": null
        },
        "autoupdateVersionCordova": {
          "type": "null",
          "value": null
        },
        "appId": {
          "type": "constant",
          "value": "3by6eh7pejx4srwipv"
        }
      }
    }
  },
  "meteor-platform": {},
  "session": {},
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  }
}
var globalContext = (typeof global !== 'undefined') ? global : window
var originalContext = []

/*
originalContext = [
  {
    context: window,
    propertyName: 'Meteor',
    value: {}
  }
]
*/

function _saveOriginal(context, propertyName) {
  originalContext.push({
    context: context,
    propertyName: propertyName,
    value: context[propertyName]
  })
}

function _restoreOriginal(original) {
  original.context[original.propertyName] = original.value
}

function restoreOriginals() {
  originalContext.forEach(_restoreOriginal)
  originalContext = []
}

function loadMocks() {
  for (var packageName in packageMetadata) {
    for (var packageExportName in packageMetadata[packageName]) {
      _saveOriginal(globalContext, packageExportName)
      var packageExport = packageMetadata[packageName][packageExportName]
      globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
    }
  }
}

beforeEach(loadMocks)
afterEach(restoreOriginals)
