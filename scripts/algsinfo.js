var selCases = [];

var algsGroups = {
    "CPLL" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15],
    "EPLL" : [16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26],
    "1x3 Line" : [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    "2x2 Block" : [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
};

var algsInfo = {
    1: {
        "name": "A1+",
        "a": "(R' BR' R BR) (R' F' R BR') (R' BR F R)",
        "a2": "F' R' F R U' R' F' R2 U R' U' R' F R",
    },
    2: {
        "name": "A1-",
        "a": "(R' F' BR' R) (BR R' F R) (BR' R' BR R)",
        "a2": "R' F' R U R U' R2' F R U R' F' R F",
    },
    3: {
        "name": "A2+",
        "a": "BR' (R' U L U') (R' U L' U') R2 BR",
        "a2": "",
    },
    4: {
        "name": "A2-",
        "a": "BR' R2' (U L U' R) (U L' U' R) BR",
        "a2": "",
    },
    5: {
        "name": "E1",
        "a": "R' U' R' D' R U' R' D R U R' D' R U R' D R2",
        "a2": "R U R' U R' U' R F' R U R' U' R' F R2 U' R2' U R",
    },
    6: {
        "name": "E2",
        "a": "R2 U R' y (R U' R' U)3 y' R U' R2'",
        "a2": "",
    },
    7: {
        "name": "E3",
        "a": "L' R U R' (U R U' R')2 U R U2' R' L",
        "a2": "",
    },
    8: {
        "name": "K1+",
        "a": "",
        "a2": "",
    },
    9: {
        "name": "K1-",
        "a": "",
        "a2": "",
    },
    10: {
        "name": "K2+",
        "a": "",
        "a2": "",
    },
    11: {
        "name": "K2-",
        "a": "",
        "a2": "",
    },
    12: {
        "name": "H1+",
        "a": "",
        "a2": "",
    },
    13: {
        "name": "H1-",
        "a": "",
        "a2": "",
    },
    14: {
        "name": "H2+",
        "a": "",
        "a2": "",
    },
    15: {
        "name": "H2-",
        "a": "",
        "a2": "",
    },
    16: {
        "name": "Q1+",
        "a": "",
        "a2": "",
    },
    17: {
      "name": "Q1-",
      "a": "",
      "a2": "",
    },
    18: {
      "name": "Q2+",
      "a": "",
      "a2": "",
    },
    19: {
      "name": "Q2-",
      "a": "",
      "a2": "",
    },
    20: {
      "name": "U1+",
      "a": "",
      "a2": "",
    },
    21: {
      "name": "U1-",
      "a": "",
      "a2": "",
    },
    22: {
      "name": "U2+",
      "a": "",
      "a2": "",
    },
    23: {
      "name": "U2-",
      "a": "",
      "a2": "",
    },
    24: {
      "name": "Z1",
      "a": "",
      "a2": "",
    },
    25: {
      "name": "Z2",
      "a": "",
      "a2": "",
    },
    26: {
      "name": "Z3",
      "a": "",
      "a2": "",
    },
    27: {
      "name": "D+",
      "a": "",
      "a2": "",
    },
    28: {
      "name": "D-",
      "a": "",
      "a2": "",
    },
    29: {
      "name": "F1+",
      "a": "",
      "a2": "",
    },
    30: {
      "name": "F1-",
      "a": "",
      "a2": "",
    },
    31: {
      "name": "F2+",
      "a": "",
      "a2": "",
    },
    32: {
      "name": "F2-",
      "a": "",
      "a2": "",
    },
    33: {
      "name": "F3+",
      "a": "",
      "a2": "",
    },
    34: {
      "name": "F3-",
      "a": "",
      "a2": "",
    },
    35: {
      "name": "F4+",
      "a": "",
      "a2": "",
    },
    36: {
      "name": "F4-",
      "a": "",
      "a2": "",
    },
    37: {
      "name": "F5+",
      "a": "",
      "a2": "",
    },
    38: {
      "name": "F5-",
      "a": "",
      "a2": "",
    },
    39: {
      "name": "J1+",
      "a": "",
      "a2": "",
    },
    40: {
      "name": "J1-",
      "a": "",
      "a2": "",
    },
    41: {
      "name": "J2+",
      "a": "",
      "a2": "",
    },
    42: {
      "name": "J2-",
      "a": "",
      "a2": "",
    },
    43: {
      "name": "J3+",
      "a": "",
      "a2": "",
    },
    44: {
      "name": "J3-",
      "a": "",
      "a2": "",
    },
    45: {
      "name": "M",
      "a": "",
      "a2": "",
    },
    46: {
      "name": "V1+",
      "a": "",
      "a2": "",
    },
    47: {
      "name": "V1-",
      "a": "",
      "a2": "",
    },
    48: {
      "name": "V2+",
      "a": "",
      "a2": "",
    },
    49: {
      "name": "V2-",
      "a": "",
      "a2": "",
    },
    50: {
      "name": "V3+",
      "a": "",
      "a2": "",
    },
    51: {
      "name": "V3-",
      "a": "",
      "a2": "",
    },
    52: {
      "name": "V4+",
      "a": "",
      "a2": "",
    },
    53: {
      "name": "V4-",
      "a": "",
      "a2": "",
    },
    54: {
      "name": "W",
      "a": "",
      "a2": "",
    },
    55: {
      "name": "Y1+",
      "a": "",
      "a2": "",
    },
    56: {
      "name": "Y1-",
      "a": "",
      "a2": "",
    },
    57: {
      "name": "Y2+",
      "a": "",
      "a2": "",
    },
    58: {
      "name": "Y2-",
      "a": "",
      "a2": "",
    },
    59: {
      "name": "Y3+",
      "a": "",
      "a2": "",
    },
    60: {
      "name": "Y3-",
      "a": "",
      "a2": "",
    }
};
