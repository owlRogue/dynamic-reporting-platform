// let KPI;
let currentCondition;
let currentOperator;
let currentTarget;
let currentValueParams;
let currentTitle;

var settings = [
  (conditions = {
    default: ["1", "2", "3", "4", "5"],
    bool: ["pass", "fail"],
    custom: []
  }),
  (operators = {
    op1: [">=", "<", ">"],
    op2: ["<=", ">", "<"],
    custom: []
  }),
  (target = {
    high: ["exceptional", "effective", "achieves", "NI", "unacceptable"],
    low: ["unacceptable", "NI", "achieves", "effective", "exceptional"],
    bool: ["pass", "fail"]
  })
];

var setup = [
  (metric1 = {
    metric: "metric 1",
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [90, 80, 70, 60],
    className: "metric-1"
  }),
  (metric2 = {
    metric: "metric 2",
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [9, 9, 8, 7],
    className: "metric-2"
  }),

  (metric3 = {
    metric: "metric 3",
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [8.8, 7.3, 6.8, 5.0],
    className: "metric-3"
  }),

  (metric4 = {
    metric: "metric 4",
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [40, 30, 20, 17],
    className: "metric-4"
  }),

  (metric5 = {
    metric: "metric 5",
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [600, 720, 840, 1050],
    className: "metric-5"
  }),

  (metric6 = {
    metric: "metric 6",
    condition: conditions["bool"],
    operator: operators["op1"],
    target: "bool",
    valueParams: [99.0],
    className: "metric-6"
  })
];

// ERROR CHECK FEATURE: logs file loaded to console
logFile();

// module.exports = {settings, setup};