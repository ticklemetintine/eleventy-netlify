var app = app || {};

if (! app.data) {
    app.data = {};
}

app.data.credit_data = [
    {
        denomination: "SGD",
        colour: "#b7025e",  //red
        symbol: d3.symbolCircle,
        chartdata: [
            // { year: 2020, issue_size: 1.00, coupon: 3.2650 },
            { year: 2023, issue_size: 0.50, coupon: 2.7000 },
            { year: 2025, issue_size: 0.50, coupon: 3.7850 },
            { year: 2029, issue_size: 0.30, coupon: 4.0000 },
            { year: 2035, issue_size: 0.50, coupon: 4.0475 },
            { year: 2039, issue_size: 0.30, coupon: 4.2000 },
            { year: 2050, issue_size: 1.00, coupon: 4.2000 }
        ]
    },
    {
        denomination: "USD",
        colour: "#a286ac",  //purple
        symbol: "square-diamond",
        chartdata: [
            // { year: 2019, issue_size: 2.03, coupon: 4.3000 },
            { year: 2023, issue_size: 1.61, coupon: 2.3750 },
            { year: 2028, issue_size: 1.82, coupon: 3.6250 },
            { year: 2030, issue_size: 1.01, coupon: 1.0000 },
            { year: 2039, issue_size: 0.67, coupon: 5.3750 },
            { year: 2042, issue_size: 0.67, coupon: 3.3750 },
            { year: 2051, issue_size: 1.34, coupon: 2.2500 },
            { year: 2070, issue_size: 1.34, coupon: 2.5000 }
        ]
    },
    {
        denomination: "GBP",
        colour: "#90ba1e",  //green
        symbol: d3.symbolTriangle,
        chartdata: [
            { year: 2022, issue_size: 0.37, issue_size_displayed: 0.3, coupon: 4.6250 },
            { year: 2040, issue_size: 0.93, coupon: 5.1250 }
        ]
    },
    {
        denomination: "EUR",
        colour: "#2dafe6",  //blue
        symbol: d3.symbolSquare,
        chartdata: [
            { year: 2022, issue_size: 0.95, issue_size_displayed: 0.9, coupon: 0.5000 },
            { year: 2028, issue_size: 0.79, coupon: 1.5000 },
            { year: 2031, issue_size: 0.79, coupon: 0.5000 },
            { year: 2049, issue_size: 0.79, coupon: 1.2500 }
        ]
    }
];

if (! app.lang) {
    app.lang = {};
}

app.lang.en = {
    issueSize: function(d) {
        var issue_size = d.issue_size_displayed ? d.issue_size_displayed : d.issue_size;
        return "Year: " + d.year + "<br/>Issue size: " + app.main.issueSizeFormatter(issue_size);
    },
    coupon: function(d) {
        return "Year: " + d.year + "<br/>Coupon: " + app.main.couponFormatter(d.coupon / 100);
    }
};

app.lang.zh = {
    "Notional Issue Size (S$b)": "?????????????????????10????????????",
    "Coupon (%)": "?????????%???",
    "Year of Maturity": "????????????",
    "USD Bond": "????????????",
    "SGD Bond": "????????????",
    "GBP Bond": "????????????",
    "EUR Bond": "????????????",
    "Exchange rates as at 31 March 2021.": "???2021???3???31?????????????????????",
    issueSize: function(d) {
        var issue_size = d.issue_size_displayed ? d.issue_size_displayed : d.issue_size;
        return "???: " + d.year + "<br/>??????????????????: " + app.main.issueSizeFormatter(issue_size);
    },
    coupon: function(d) {
        return "???: " + d.year + "<br/>??????: " + app.main.couponFormatter(d.coupon / 100);
    }
};
