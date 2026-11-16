const hallShots = [
  {
    "name": "Axial hall",
    "id": "view_01_shot08",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 568.8888931274414,
        "fy": 568.8888931274414,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          0.0,
          1.800001859664917,
          44.20000076293945
        ],
        "quaternion": [
          0.01965157687664032,
          0.0,
          0.0,
          0.9998068809509277
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_01_shot08-blender.png",
      "Atlas": "assets/view_01_shot08-atlas.jpg",
      "Concept": "assets/view_01_shot08-concept.png"
    }
  },
  {
    "name": "Reverse view",
    "id": "view_02_reverse",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 640.0,
        "fy": 640.0,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          0.0,
          1.800000786781311,
          18.5
        ],
        "quaternion": [
          7.551268765837449e-08,
          0.999934732913971,
          -0.011426378972828388,
          8.624387315414594e-10
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_02_reverse-blender.png",
      "Atlas": "assets/view_02_reverse-atlas.jpg"
    }
  },
  {
    "name": "Left oblique",
    "id": "view_03_left_oblique",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 711.1111450195312,
        "fy": 711.1111450195312,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          -4.800000190734863,
          1.8000013828277588,
          32.5
        ],
        "quaternion": [
          0.0420919768512249,
          -0.25224265456199646,
          0.010983321815729141,
          0.9666857123374939
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_03_left_oblique-blender.png",
      "Atlas": "assets/view_03_left_oblique-atlas.jpg"
    }
  },
  {
    "name": "Right oblique",
    "id": "view_04_right_oblique",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 711.1111450195312,
        "fy": 711.1111450195312,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          4.800000190734863,
          1.8000013828277588,
          32.5
        ],
        "quaternion": [
          0.0420919768512249,
          0.25224265456199646,
          -0.010983321815729141,
          0.9666857123374939
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_04_right_oblique-blender.png",
      "Atlas": "assets/view_04_right_oblique-atlas.jpg"
    }
  },
  {
    "name": "Timber detail",
    "id": "view_05_close_timber",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 853.3333587646484,
        "fy": 853.3333587646484,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          -1.7999999523162842,
          1.8500012159347534,
          27.5
        ],
        "quaternion": [
          0.3261888325214386,
          -0.0758737325668335,
          0.026276113465428352,
          0.9418883323669434
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_05_close_timber-blender.png",
      "Atlas": "assets/view_05_close_timber-atlas.jpg"
    }
  },
  {
    "name": "Court threshold",
    "id": "view_06_court_transition",
    "camera": {
      "intrinsics": {
        "width": 1280,
        "height": 720,
        "fx": 675.5555725097656,
        "fy": 675.5555725097656,
        "cx": 640.0,
        "cy": 360.0
      },
      "extrinsics": {
        "position": [
          0.0,
          1.750001311302185,
          29.5
        ],
        "quaternion": [
          0.04672137647867203,
          0.0,
          0.0,
          0.9989079833030701
        ],
        "coordinateSystem": "rub"
      }
    },
    "images": {
      "Blender": "assets/view_06_court_transition-blender.png",
      "Atlas": "assets/view_06_court_transition-atlas.jpg"
    }
  }
];
const filmShots = [
  {
    "name": "Shot 01 \u2014 Macro & Establishing",
    "camera": {
      "extrinsics": {
        "position": [
          3.44,
          69.71,
          195.14
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_01_concept.png",
      "Blender": "comparisons/images/blender/shot_01_blender.png",
      "Atlas": "comparisons/images/atlas/shot_01_atlas.jpg"
    }
  },
  {
    "name": "Shot 02 \u2014 Site Plan & Overhead",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          310.29,
          30.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_02_concept.png",
      "Blender": "comparisons/images/blender/shot_02_blender.png",
      "Atlas": "comparisons/images/atlas/shot_02_atlas.jpg"
    }
  },
  {
    "name": "Shot 03 \u2014 Northwest Aerial",
    "camera": {
      "extrinsics": {
        "position": [
          -75.0,
          58.0,
          -80.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_03_concept.png",
      "Blender": "comparisons/images/blender/shot_03_blender.png",
      "Atlas": "comparisons/images/atlas/shot_03_atlas.jpg"
    }
  },
  {
    "name": "Shot 04 \u2014 Forecourt & Pond",
    "camera": {
      "extrinsics": {
        "position": [
          -0.0,
          11.0,
          99.2
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_04_concept.png",
      "Blender": "comparisons/images/blender/shot_04_blender.png",
      "Atlas": "comparisons/images/atlas/shot_04_atlas.jpg"
    }
  },
  {
    "name": "Shot 05 \u2014 Forecourt Pavement",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          1.75,
          52.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_05_concept.png",
      "Blender": "comparisons/images/blender/shot_05_blender.png",
      "Atlas": "comparisons/images/atlas/shot_05_atlas.jpg"
    }
  },
  {
    "name": "Shot 06 \u2014 South Entrance Gate",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          2.0,
          65.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_06_concept.png",
      "Blender": "comparisons/images/blender/shot_06_blender.png",
      "Atlas": "comparisons/images/atlas/shot_06_atlas.jpg"
    }
  },
  {
    "name": "Shot 07 \u2014 Entrance Recess & Threshold",
    "camera": {
      "extrinsics": {
        "position": [
          -0.0,
          1.6,
          46.3
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_07_concept.png",
      "Blender": "comparisons/images/blender/shot_07_blender.png",
      "Atlas": "comparisons/images/atlas/shot_07_atlas.jpg"
    }
  },
  {
    "name": "Shot 08 \u2014 Lower to Middle Colonnade",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          1.8,
          44.2
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_08_concept.png",
      "Blender": "comparisons/images/blender/shot_08_blender.png",
      "Atlas": "comparisons/images/atlas/shot_08_atlas.jpg"
    }
  },
  {
    "name": "Shot 09 \u2014 Middle Ancestral Hall",
    "camera": {
      "extrinsics": {
        "position": [
          -10.5,
          1.7,
          33.3
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_09_concept.png",
      "Blender": "comparisons/images/blender/shot_09_blender.png",
      "Atlas": "comparisons/images/atlas/shot_09_atlas.jpg"
    }
  },
  {
    "name": "Shot 10 \u2014 Upper Axial Interior",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          1.65,
          10.5
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_10_concept.png",
      "Blender": "comparisons/images/blender/shot_10_blender.png",
      "Atlas": "comparisons/images/atlas/shot_10_atlas.jpg"
    }
  },
  {
    "name": "Shot 11 \u2014 Upper Threshold to Rear Court",
    "camera": {
      "extrinsics": {
        "position": [
          0.0,
          1.72,
          5.6
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_11_concept.png",
      "Blender": "comparisons/images/blender/shot_11_blender.png",
      "Atlas": "comparisons/images/atlas/shot_11_atlas.jpg"
    }
  },
  {
    "name": "Shot 12 \u2014 Rear Courtyard Oblique",
    "camera": {
      "extrinsics": {
        "position": [
          4.0,
          1.75,
          -17.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_12_concept.png",
      "Blender": "comparisons/images/blender/shot_12_blender.png",
      "Atlas": "comparisons/images/atlas/shot_12_atlas.jpg"
    }
  },
  {
    "name": "Shot 13 \u2014 Ground Arc Covered Passage",
    "camera": {
      "extrinsics": {
        "position": [
          -27.25,
          1.6,
          -1.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_13_concept.png",
      "Blender": "comparisons/images/blender/shot_13_blender.png",
      "Atlas": "comparisons/images/atlas/shot_13_atlas.jpg"
    }
  },
  {
    "name": "Shot 14 \u2014 Upper Curved Timber Gallery",
    "camera": {
      "extrinsics": {
        "position": [
          22.69,
          4.65,
          -13.25
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_14_concept.png",
      "Blender": "comparisons/images/blender/shot_14_blender.png",
      "Atlas": "comparisons/images/atlas/shot_14_atlas.jpg"
    }
  },
  {
    "name": "Shot 15 \u2014 Side-Wing Stair Landing",
    "camera": {
      "extrinsics": {
        "position": [
          34.2,
          1.65,
          13.6
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_15_concept.png",
      "Blender": "comparisons/images/blender/shot_15_blender.png",
      "Atlas": "comparisons/images/atlas/shot_15_atlas.jpg"
    }
  },
  {
    "name": "Shot 16 \u2014 Side-Wing Alley & Passage",
    "camera": {
      "extrinsics": {
        "position": [
          36.0,
          1.65,
          28.0
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_16_concept.png",
      "Blender": "comparisons/images/blender/shot_16_blender.png",
      "Atlas": "comparisons/images/atlas/shot_16_atlas.jpg"
    }
  },
  {
    "name": "Shot 17 \u2014 Zhang Family Dining Room",
    "camera": {
      "extrinsics": {
        "position": [
          28.71,
          1.42,
          17.38
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_17_concept.png",
      "Blender": "comparisons/images/blender/shot_17_blender.png",
      "Atlas": "comparisons/images/atlas/shot_17_atlas.jpg"
    }
  },
  {
    "name": "Shot 18 \u2014 Domestic Kitchen & Hearth",
    "camera": {
      "extrinsics": {
        "position": [
          29.06,
          1.42,
          20.79
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_18_concept.png",
      "Blender": "comparisons/images/blender/shot_18_blender.png",
      "Atlas": "comparisons/images/atlas/shot_18_atlas.jpg"
    }
  },
  {
    "name": "Shot 19 \u2014 Upper Residential Bedroom",
    "camera": {
      "extrinsics": {
        "position": [
          28.91,
          4.34,
          18.52
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_19_concept.png",
      "Blender": "comparisons/images/blender/shot_19_blender.png",
      "Atlas": "comparisons/images/atlas/shot_19_atlas.jpg"
    }
  },
  {
    "name": "Shot 20 \u2014 Domestic Doorway & Passage",
    "camera": {
      "extrinsics": {
        "position": [
          31.54,
          1.32,
          14.47
        ]
      }
    },
    "images": {
      "Concept": "comparisons/images/concepts/shot_20_concept.png",
      "Blender": "comparisons/images/blender/shot_20_blender.png",
      "Atlas": "comparisons/images/atlas/shot_20_atlas.jpg"
    }
  }
];
let shots=filmShots;