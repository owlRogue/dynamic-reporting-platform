var conditionalFormatting = () => {

    console.log('metric-1'.condition);
    console.log(settings);
    console.log(conditions);
    // console.log('.formatted');
    let status;
    let cellNum;
    let exceptional
    let effective;
    let achieves;
    let NI;


    $('.metric-1').each(function () {
        const cellText = this.innerHTML;
        exceptional = 82.00;
        effective = 80.00;
        achieves = 78.00;
        NI = 76.00;
        const noComma = cellText.replace(/\,/g, '');
        cellNum = parseFloat(noComma);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum <= exceptional) {
            status = 'exceptional';
        } else if (cellNum > exceptional && cellNum <= effective) {
            status = 'effective';
        } else if (cellNum > effective && cellNum <= achieves) {
            status = 'achieves';
        } else if (cellNum > achieves && cellNum <= NI) {
            status = 'NI';
        } else if (cellNum > NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-2').each(function () {
        const cellText = this.innerHTML;
        exceptional = 9.9;
        effective = 9.7;
        achieves = 9.5;
        NI = 9.2;
        cellNum = parseFloat(cellText);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum >= exceptional) {
            status = 'exceptional';
        } else if (cellNum < exceptional && cellNum >= effective) {
            status = 'effective';
        } else if (cellNum < effective && cellNum >= achieves) {
            status = 'achieves';
        } else if (cellNum < achieves && cellNum >= NI) {
            status = 'NI';
        } else if (cellNum < NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-3').each(function () {
        const cellText = this.innerHTML;
        exceptional = .06;
        effective = .07;
        achieves = .08;
        NI = .09;
        cellNum = parseFloat(cellText);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum >= exceptional) {
            status = 'exceptional';
        }
        if (cellNum < exceptional && cellNum >= effective) {
            status = 'effective';
        }
        if (cellNum < effective && cellNum >= achieves) {
            status = 'achieves';
        }
        if (cellNum < achieves && cellNum >= NI) {
            status = 'NI';
        }
        if (cellNum < NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
        
        
        
    });
    var formattedMetric = $('.indextitle.formatted');
    console.log(formattedMetric);

};

// // Conditional formatting class setting:
// var formattedMetric$ = $(formattedMetric);
    // console.log(formattedMetric$);
// const KPI = [];
// var KPIs = [];
// settings;
// // console.log(settings);
// let setting$ = $(settings);
// // console.log(setting$);
// setup;
// // console.log(setup);
// let setup$ = $(setup);
// // console.log(setup$);

// function formatAssignment() {
//     for (i = 0; i < formattedMetric.length; i++) {
//         var class1 = $(formattedMetric).attr('hyph');
//         console.log(class1);
//         const cellText = this.innerHTML;

// //         KPI;
// //         // $(td)

// //         $('tbody td').each(function (i) {
// //             if (($('tbody td').hasClass(classNames[i])) &&
// //                 (classNames.includes(className))) {
// //                 KPI = className.parent()
// //                 console.log(KPI);
// //                 console.log(className.parent());
// //                 console.log("KPI: " + KPI);
// //             } else {}
// //         });
//     }
// };
// formatAssignment ();


function conditionAssignment() {
    for (i = 0; i < setup.length; i++) {
        let KPIs = setup[i];
        // console.log(KPIs);
        KPIMetric = KPIs.metric;
        KPICondition = KPIs.condition;
        KPIOperator = KPIs.operator;
        KPITarget = KPIs.target;
        KPIValueParams = KPIs.valueParams;
        KPITitle = KPIs.className;
        // console.log(KPIs);
        console.log(KPIMetric);
        console.log(KPICondition);
        console.log(KPIOperator);
        console.log(KPITarget);
        console.log(KPIValueParams);
        console.log(KPITitle);

        // console.log(hyph.includes(KPITitle));
        // console.log(formattedMetric.hyph);
    }
}; // LOOPING PROPERLY

conditionAssignment();

// // Sets condition logic:
// const cellText = this.innerHTML;

// function testingCondition() {
//     // let formattedCell = new Array($('.formatted'))
//     // console.log('formattedCell$: ' + formattedCell$)
//     // console.log(formattedCell);
// // };
// // testingCondition();


// $('.metric-2').each(function () {
//     const cellText = $(this).text();
//     console.log("cellText: " + cellText);
//     const noComma = cellText.replace(/\,/g, '');
//     cellNum = parseFloat(noComma);
//     console.log(cellNum);
// if (cellNum + KPIOperator[0] + KPIValueParams[0]) {
//     condition = high[0];
//     console.log(condition);
// } else if (cellText + operator[op1][0] + valueParams[0]) {
//     condition = high[1];
// } else if (cellText + op1[0] + valueParams[2]) {
//     condition = high[2];
// } else if (cellText + op1[0] + valueParams[3]) {
//     condition = high[3];
// } else if (cellText + op1[0] + valueParams[4]) {
//     condition = high[4];
// } else {
//     condition = "nada"
// };
// });
// };
// testingCondition();






