const sampleJSON = {
  "type": "box",
  "name": "entry point",
  "next": [{
    "type": "circle",
    "name": "review",
    "next": [{
      "type": "box",
      "name": "favourable",
      "probability": 0.7,
      "next": [{
        "type": "circle",
        "name": "accept",
        "next": [{
          "type": "value",
          "name": "success",
          "value": 750,
          "probability": 0.75
        }, {
          "type": "value",
          "name": "failure",
          "value": -250,
          "probability": 0.25
        }]
      }, {
        "name": "reject",
        "type": "value",
        "value": 0
      }]
    }, {
      "type": "box",
      "name": "unfavourable",
      "probability": 0.3,
      "next": [{
        "type": "circle",
        "name": "accept",
        "next": [{
          "type": "value",
          "name": "success",
          "value": 750,
          "probability": 0.417
        }, {
          "type": "value",
          "name": "failure",
          "value": -250,
          "probability": 0.583
        }]
      }, {
        "name": "reject",
        "type": "value",
        "value": 0
      }]
    }]
  }, {
    "type": "box",
    "name": "don't review",
    "next": [{
      "type": "value",
      "name": "reject",
      "value": 0
    }, {
      "type": "circle",
      "name": "accept",
      "next": [{
        "type": "value",
        "name": "success",
        "value": 750,
        "probability": 0.65
      }, {
        "type": "value",
        "name": "failure",
        "value": -250,
        "probability": 0.35
      }]
    }]
  }]
};

const sampleSimple =
`b decide
  c review
    b favourable p0.7
      c accept
        v success v750 p0.75
        v failure v-250 p0.25
      v reject v0
    b unfavourable p0.3
      c accept
        v success v750 p0.417
        v failure v-250 p0.583
      v reject v0
  b don't_review
    c accept
      v success v750 p0.65
      v failure v-250 p0.35
    v reject v0
`;
