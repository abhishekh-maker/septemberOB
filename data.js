// Presales Outbound — September 2026. Note: this cycle's audit form uses 6 parameters
// (Opening, Probing, Sales Closure, Soft Skills, Closing, Follow Up) and a single CQ Score
// column per audit — no separate Call Handling / Process Handling split like July.
const AGENTS = {
  "burhanp": {
    "name": "Burhan_P",
    "initials": "BP",
    "color": "#0891b2",
    "cq": 86,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 9,
    "params": {
      "open": 3,
      "prob": 2,
      "sales": 1,
      "ss": 3,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "open",
        "label": "Opening",
        "text": "Name confirmation"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "open",
        "label": "Opening",
        "text": "Acknowledge occasion (Wishing)"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "open",
        "label": "Opening",
        "text": "Name confirmation, Acknowledge Event (Intervention) Intent (Outbound)"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 93,
        "comment": "Opening: Name confirmation | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Digigold/safegold",
        "score": 75,
        "comment": "Opening: Acknowledge occasion (Wishing) | Sales Closure: Giving Complete and Correct Solution | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Xclusive Points Query",
        "score": 75,
        "comment": "Opening: Name confirmation, Acknowledge Event (Intervention) Intent (Outbound) | Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "SKU related query",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "SKU related query",
        "score": 85,
        "comment": "Probing: One view Probing"
      }
    ],
    "paramCaseMap": {
      "open": [
        0,
        1,
        2
      ],
      "prob": [
        2,
        4
      ],
      "sales": [
        1
      ],
      "ss": [
        0,
        1,
        2
      ],
      "callclose": [],
      "fu": []
    }
  },
  "deepalig": {
    "name": "Deepali_G",
    "initials": "DG",
    "color": "#16a34a",
    "cq": 87,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 4,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 2,
      "ss": 1,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "Wants to place order",
        "score": 70,
        "comment": "Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "query": "TAH Request",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "SKU related query",
        "score": 85,
        "comment": "Sales Closure: Giving Complete and Correct Solution"
      },
      {
        "query": "General Query",
        "score": 80,
        "comment": "Probing: One view Probing | Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        4
      ],
      "sales": [
        1,
        3
      ],
      "ss": [
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "divyak": {
    "name": "Divya_K",
    "initials": "DK",
    "color": "#7c3aed",
    "cq": 81,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 8,
    "params": {
      "open": 1,
      "prob": 3,
      "sales": 1,
      "ss": 3,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "open",
        "label": "Opening",
        "text": "No written remark logged for this audit — flagged on: Opening."
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Jewellery Recommendation/ Offer Alternatives, Giving Complete and Correct Solution"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 98,
        "comment": "No written remark logged for this audit — flagged on: Opening."
      },
      {
        "query": "PoP - Redemption",
        "score": 80,
        "comment": "Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "PoP - Redemption",
        "score": 45,
        "comment": "Probing: One view Probing | Sales Closure: Jewellery Recommendation/ Offer Alternatives, Giving Complete and Correct Solution | Soft Skills: #REF!"
      },
      {
        "query": "SKU related query",
        "score": 85,
        "comment": "Probing: One view Probing"
      }
    ],
    "paramCaseMap": {
      "open": [
        0
      ],
      "prob": [
        1,
        3,
        4
      ],
      "sales": [
        3
      ],
      "ss": [
        1,
        2,
        3
      ],
      "callclose": [],
      "fu": []
    }
  },
  "dorothya": {
    "name": "Dorothy_A",
    "initials": "DA",
    "color": "#ea580c",
    "cq": 97,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 2,
    "params": {
      "open": 0,
      "prob": 0,
      "sales": 0,
      "ss": 2,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "No written remark logged for this audit — flagged on: Soft Skills."
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Interruption, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary"
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 95,
        "comment": "No written remark logged for this audit — flagged on: Soft Skills."
      },
      {
        "query": "PoP - Redemption",
        "score": 90,
        "comment": "Soft Skills: Interruption, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary"
      },
      {
        "query": "SKU related query",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "PoP - Redemption",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "PoP - Redemption",
        "score": 100,
        "comment": "Good work!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [],
      "sales": [],
      "ss": [
        0,
        1
      ],
      "callclose": [],
      "fu": []
    }
  },
  "jyotsnab": {
    "name": "Jyotsna_B",
    "initials": "JB",
    "color": "#0d9488",
    "cq": 82,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 9,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 2,
      "ss": 5,
      "callclose": 1,
      "fu": 0
    },
    "aois": [
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Failed to portray empathy when necessary"
      },
      {
        "cat": "callclose",
        "label": "Closing",
        "text": "Further Assistance, Did the interaction ended well?"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 70,
        "comment": "Sales Closure: Giving Complete and Correct Solution | Soft Skills: Failed to portray empathy when necessary | Closing: Further Assistance, Did the interaction ended well?"
      },
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "PoP - Redemption",
        "score": 75,
        "comment": "Sales Closure: Giving Complete and Correct Solution | Soft Skills: #REF!"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 80,
        "comment": "Probing: One view Probing | Soft Skills: #REF!"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        3
      ],
      "sales": [
        0,
        2
      ],
      "ss": [
        0,
        1,
        2,
        3,
        4
      ],
      "callclose": [
        0
      ],
      "fu": []
    }
  },
  "nikhilb": {
    "name": "Nikhil_B",
    "initials": "NB",
    "color": "#dc2626",
    "cq": 92,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 3,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 1,
      "ss": 1,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "Jewellery Selection",
        "score": 85,
        "comment": "Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "Jewellery Selection",
        "score": 85,
        "comment": "Probing: One view Probing"
      },
      {
        "query": "Wants to place order",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        3
      ],
      "sales": [
        1
      ],
      "ss": [
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "niveditam": {
    "name": "Nivedita_M",
    "initials": "NM",
    "color": "#c8a846",
    "cq": 94,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 4,
    "params": {
      "open": 0,
      "prob": 0,
      "sales": 1,
      "ss": 3,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Jewellery Recommendation/ Offer Alternatives"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "SKU related query",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "SKU related query",
        "score": 80,
        "comment": "Sales Closure: Jewellery Recommendation/ Offer Alternatives | Soft Skills: #REF!"
      },
      {
        "query": "SKU related query",
        "score": 100,
        "comment": "Good work!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [],
      "sales": [
        3
      ],
      "ss": [
        1,
        2,
        3
      ],
      "callclose": [],
      "fu": []
    }
  },
  "parvathiv": {
    "name": "Parvathi_V",
    "initials": "PV",
    "color": "#2563eb",
    "cq": 86,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 6,
    "params": {
      "open": 0,
      "prob": 2,
      "sales": 2,
      "ss": 2,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Jewellery Recommendation/ Offer Alternatives"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 80,
        "comment": "Sales Closure: Jewellery Recommendation/ Offer Alternatives | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 70,
        "comment": "Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "query": "General Query",
        "score": 95,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "Jewellery Selection",
        "score": 85,
        "comment": "Probing: One view Probing"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        1,
        4
      ],
      "sales": [
        0,
        1
      ],
      "ss": [
        0,
        2
      ],
      "callclose": [],
      "fu": []
    }
  },
  "pavithraj": {
    "name": "Pavithra_J",
    "initials": "PJ",
    "color": "#db2777",
    "cq": 88,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 5,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 0,
      "ss": 3,
      "callclose": 0,
      "fu": 1
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "fu",
        "label": "Follow Up",
        "text": "Follow up done as per guidelines & commitment"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 80,
        "comment": "Follow Up: Follow up done as per guidelines & commitment"
      },
      {
        "query": "Jewellery Selection",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "Jewellery Selection",
        "score": 85,
        "comment": "Probing: One view Probing"
      },
      {
        "query": "General Query",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        3
      ],
      "sales": [],
      "ss": [
        0,
        2,
        4
      ],
      "callclose": [],
      "fu": [
        1
      ]
    }
  },
  "rahulm": {
    "name": "Rahul_M",
    "initials": "RM",
    "color": "#65a30d",
    "cq": 81,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 9,
    "params": {
      "open": 0,
      "prob": 3,
      "sales": 1,
      "ss": 5,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Life Time Exchange/buyback",
        "score": 60,
        "comment": "Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Sales Closure: Giving Complete and Correct Solution | Soft Skills: Personalization - taking Cx name atleast 3 times max 4, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 80,
        "comment": "Probing: One view Probing | Soft Skills: #REF!"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "General Query",
        "score": 80,
        "comment": "Probing: One view Probing | Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        1,
        2,
        4
      ],
      "sales": [
        1
      ],
      "ss": [
        0,
        1,
        2,
        3,
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "rahulyadavp": {
    "name": "Rahulyadav_P",
    "initials": "RP",
    "color": "#4f46e5",
    "cq": 95,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 4,
    "params": {
      "open": 0,
      "prob": 0,
      "sales": 0,
      "ss": 4,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "PoP - Redemption",
        "score": 95,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "PoP - Redemption",
        "score": 95,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "General Query",
        "score": 90,
        "comment": "Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [],
      "sales": [],
      "ss": [
        0,
        2,
        3,
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "simonb": {
    "name": "Simon_B",
    "initials": "SB",
    "color": "#059669",
    "cq": 92,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 4,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 1,
      "ss": 2,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Jewellery Recommendation/ Offer Alternatives"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "PoP - Redemption",
        "score": 85,
        "comment": "Probing: One view Probing"
      },
      {
        "query": "PoP - Redemption",
        "score": 85,
        "comment": "Sales Closure: Jewellery Recommendation/ Offer Alternatives"
      },
      {
        "query": "PoP - Redemption",
        "score": 95,
        "comment": "Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        2
      ],
      "sales": [
        3
      ],
      "ss": [
        0,
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "velkumarn": {
    "name": "Velkumar_N",
    "initials": "VN",
    "color": "#d97706",
    "cq": 91,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 4,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 1,
      "ss": 2,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace)"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Giving Complete and Correct Solution"
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 90,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace)"
      },
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "SKU related query",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "PoP - Redemption",
        "score": 85,
        "comment": "Probing: One view Probing"
      },
      {
        "query": "PoP - Redemption",
        "score": 85,
        "comment": "Sales Closure: Giving Complete and Correct Solution"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        3
      ],
      "sales": [
        4
      ],
      "ss": [
        0,
        2
      ],
      "callclose": [],
      "fu": []
    }
  },
  "vinaykumark": {
    "name": "Vinaykumar_K",
    "initials": "VK",
    "color": "#be185d",
    "cq": 93,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 6,
    "params": {
      "open": 1,
      "prob": 0,
      "sales": 0,
      "ss": 4,
      "callclose": 1,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Tone of the JC (Pitch and pace)"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "open",
        "label": "Opening",
        "text": "Customer wellbeing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "callclose",
        "label": "Closing",
        "text": "Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace)"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 100,
        "comment": "Good work!"
      },
      {
        "query": "SKU related query",
        "score": 90,
        "comment": "Soft Skills: Tone of the JC (Pitch and pace)"
      },
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 93,
        "comment": "Opening: Customer wellbeing | Soft Skills: #REF!"
      },
      {
        "query": "Wants to know Offers/Discounts",
        "score": 88,
        "comment": "Soft Skills: #REF! | Closing: Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace)"
      }
    ],
    "paramCaseMap": {
      "open": [
        3
      ],
      "prob": [],
      "sales": [],
      "ss": [
        1,
        2,
        3,
        4
      ],
      "callclose": [
        4
      ],
      "fu": []
    }
  },
  "vineshs": {
    "name": "Vinesh_S",
    "initials": "VS",
    "color": "#0284c7",
    "cq": 79,
    "audits": 5,
    "ncf": 0,
    "totalErrors": 9,
    "params": {
      "open": 0,
      "prob": 1,
      "sales": 3,
      "ss": 5,
      "callclose": 0,
      "fu": 0
    },
    "aois": [
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Jewellery Recommendation/ Offer Alternatives"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      }
    ],
    "cases": [
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 65,
        "comment": "Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "PoP - Redemption",
        "score": 80,
        "comment": "Sales Closure: Jewellery Recommendation/ Offer Alternatives | Soft Skills: #REF!"
      },
      {
        "query": "PoP - Redemption",
        "score": 95,
        "comment": "Soft Skills: #REF!"
      },
      {
        "query": "General Query",
        "score": 60,
        "comment": "Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant | Soft Skills: #REF!"
      }
    ],
    "paramCaseMap": {
      "open": [],
      "prob": [
        1
      ],
      "sales": [
        1,
        2,
        4
      ],
      "ss": [
        0,
        1,
        2,
        3,
        4
      ],
      "callclose": [],
      "fu": []
    }
  },
  "yaseens": {
    "name": "Yaseen_S",
    "initials": "YS",
    "color": "#9333ea",
    "cq": 86,
    "audits": 7,
    "ncf": 0,
    "totalErrors": 14,
    "params": {
      "open": 2,
      "prob": 2,
      "sales": 2,
      "ss": 6,
      "callclose": 2,
      "fu": 0
    },
    "aois": [
      {
        "cat": "open",
        "label": "Opening",
        "text": "Name confirmation"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "One view Probing"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "open",
        "label": "Opening",
        "text": "Acknowledge Event (Intervention) Intent (Outbound)"
      },
      {
        "cat": "prob",
        "label": "Probing",
        "text": "Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment')"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "callclose",
        "label": "Closing",
        "text": "Tone of the JC (Pitch and pace)"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "sales",
        "label": "Sales Closure",
        "text": "Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant"
      },
      {
        "cat": "ss",
        "label": "Soft Skills",
        "text": "#REF!"
      },
      {
        "cat": "callclose",
        "label": "Closing",
        "text": "No written remark logged for this audit — flagged on: Closing."
      }
    ],
    "cases": [
      {
        "query": "SKU related query",
        "score": 93,
        "comment": "Opening: Name confirmation | Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "Jewellery Selection",
        "score": 95,
        "comment": "Soft Skills: Personalization - taking Cx name atleast 3 times max 4"
      },
      {
        "query": "SKU related query",
        "score": 80,
        "comment": "Probing: One view Probing | Soft Skills: #REF!"
      },
      {
        "query": "SKU related query",
        "score": 75,
        "comment": "Opening: Acknowledge Event (Intervention) Intent (Outbound) | Probing: Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' & 'Payment') | Soft Skills: #REF! | Closing: Tone of the JC (Pitch and pace)"
      },
      {
        "query": "Jewellery Selection",
        "score": 80,
        "comment": "Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant | Soft Skills: #REF!"
      },
      {
        "query": "Jewellery Selection",
        "score": 80,
        "comment": "Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant | Soft Skills: #REF!"
      },
      {
        "query": "Jewellery Selection",
        "score": 98,
        "comment": "No written remark logged for this audit — flagged on: Closing."
      }
    ],
    "paramCaseMap": {
      "open": [
        0,
        3
      ],
      "prob": [
        2,
        3
      ],
      "sales": [
        4,
        5
      ],
      "ss": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "callclose": [
        3,
        6
      ],
      "fu": []
    }
  }
};

const PARAM_LABELS = {"open": "Opening", "prob": "Probing", "sales": "Sales Closure", "ss": "Soft Skills", "callclose": "Closing", "fu": "Follow Up"};
const PARAM_COLORS = {"open": "#0891b2", "prob": "#0d9488", "sales": "#dc2626", "ss": "#ea580c", "callclose": "#16a34a", "fu": "#c8a846"};
const PARAM_ORDER = ["open", "prob", "sales", "ss", "callclose", "fu"];
const ACTIVE_PARAMS = PARAM_ORDER.filter(p => Object.values(AGENTS).some(a => (a.params[p] || 0) > 0));
