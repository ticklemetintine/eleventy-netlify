/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, location */

/** @module blacksunplc/sitemaps */
(function () {
    "use strict";

    var arrays = blacksunplc.arrays; // import * as arrays from "module:blacksunplc/arrays"
    var objects = blacksunplc.objects; // import * as objects from "module:blacksunplc/objects"

    var exports = {};

    /**
     * @return {boolean}
     * @throws {!Error} If the current `location.pathname` is unsafe.
     */
    exports.isZh = function () {
        var path = location.pathname;
        if (!path || (/^([\w\-]+\/)*[\w\-.\/]+$/).test(path)) {
            return (path.indexOf("/zh/") !== -1);
        }
        throw new Error("Unsafe location.pathname");
    };

    /**
     * @return {boolean}
     * @throws {!Error} If the current `location.pathname` is unsafe.
     */
    exports.isFr = function () {
        var path = location.pathname;
        if (!path || (/^([\w\-]+\/)*[\w\-.\/]+$/).test(path)) {
            return (path.indexOf("/fr/") !== -1);
        }
        throw new Error("Unsafe location.pathname");
    };

    /**
     * @return {boolean}
     * @throws {!Error} If the current `location.pathname` is unsafe.
     */
    exports.isDe = function () {
        var path = location.pathname;
        if (!path || (/^([\w\-]+\/)*[\w\-.\/]+$/).test(path)) {
            return (path.indexOf("/de/") !== -1);
        }
        throw new Error("Unsafe location.pathname");
    };

    /**
     * @return {boolean}
     * @throws {!Error} If the current `location.pathname` is unsafe.
     */
    exports.isSg = function () {
        var host = location.hostname;
        if (!host || (/^([\w\-]+\/)*[\w\-.\/]+$/).test(host)) {
            return (host.indexOf(".com.sg") !== -1 || host === "localhost" || host === "temasek-uat.blacksunplc.com" || host === "temasek-pwa-uat.blacksunplc.com");
        }
        throw new Error("Unsafe location.pathname");
    };

    /**
     * @type {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     */
    var english = [
        {
            "sectionName": "Overview",
            "href": "/overview/",
            "sectionPages": [
                {
                    "pageName": "From Our Chairman",
                    "href": "/overview/from-our-chairman.html"
                },
                {
                    "pageName": "The Temasek Charter",
                    "href": "/overview/the-temasek-charter.html"
                },
                {
                    "pageName": "Performance Overview",
                    "href": "/overview/performance-overview.html"
                },
                {
                    "pageName": "Portfolio Highlights",
                    "href": "/overview/portfolio-highlights.html"
                },
                {
                    "pageName": "Our Financials and Portfolio",
                    "href": "/overview/our-financials-and-portfolio.html"
                },
                {
                    "pageName": "Towards a Net Zero World",
                    "href": "/overview/towards-a-net-zero-world.html"
                },
                {
                    "pageName": "<em>OneTemasek</em>: Our People",
                    "href": "/overview/onetemasek-our-people.html"
                },
                {
                    "pageName": "Uplifting Lives and Communities",
                    "href": "/overview/uplifting-lives-and-communities.html"
                },
                {
                    "pageName": "Temasek Portfolio at Inception",
                    "href": "/overview/temasek-portfolio-at-inception.html"
                }
            ]
        },
        {
            "sectionName": "Pathways To Sustainability",
            "href": "/pathways-to-sustainability/",
            "sectionPages": [
                {
                    "pageName": "Towards a Sustainable Future",
                    "href": "/pathways-to-sustainability/towards-a-sustainable-future.html"
                },
                {
                    "pageName": "Putting a Price on Carbon",
                    "href": "/pathways-to-sustainability/putting-a-price-on-carbon.html"
                },
                {
                    "pageName": "Investing for Impact and Returns",
                    "href": "/pathways-to-sustainability/investing-for-impact-and-returns.html"
                },
                {
                    "pageName": "Measuring and Tracking Portfolio Emissions",
                    "href": "/pathways-to-sustainability/measuring-and-tracking-portfolio-emissions.html"
                },
                {
                    "pageName": "Enabling a Sustainable Company",
                    "href": "/pathways-to-sustainability/enabling-a-sustainable-company.html"
                },
                {
                    "pageName": "Collaborating for Progress",
                    "href": "/pathways-to-sustainability/collaborating-for-progress.html"
                },
                {
                    "pageName": "Producing Sustainable Animal Feed",
                    "href": "/pathways-to-sustainability/producing-sustainable-animal-feed.html"
                },
                {
                    "pageName": "Building Green Ports",
                    "href": "/pathways-to-sustainability/building-green-ports.html"
                }
            ]
        },
        {
            "sectionName": "Investor",
            "href": "/investor/",
            "sectionPages": [
                {
                    "pageName": "How We Invest",
                    "href": "/investor/how-we-invest.html"
                },
                {
                    "pageName": "How We Grew",
                    "href": "/investor/how-we-grew.html"
                },
                {
                    "pageName": "Total Shareholder Return",
                    "href": "/investor/total-shareholder-return.html"
                },
                {
                    "pageName": "Investment Update",
                    "href": "/investor/investment-update.html"
                },
                {
                    "pageName": "How We Manage Risks",
                    "href": "/investor/how-we-manage-risks.html"
                },
                {
                    "pageName": "12-month Returns Simulation",
                    "href": "/investor/12-month-returns-simulation.html"
                },
                {
                    "pageName": "20-year Returns Outlook",
                    "href": "/investor/20-year-returns-outlook.html"
                }
            ]
        },
        {
            "sectionName": "Institution",
            "href": "/institution/",
            "sectionPages": [
                {
                    "pageName": "A Forward Looking Institution",
                    "href": "/institution/a-forward-looking-institution.html"
                },
                {
                    "pageName": "Financial Discipline",
                    "href": "/institution/financial-discipline.html"
                },
                {
                    "pageName": "Public Markers",
                    "href": "/institution/public-markers.html"
                },
                {
                    "pageName": "Credit Quality",
                    "href": "/institution/credit-quality.html"
                },
                {
                    "pageName": "Temasek Bonds",
                    "href": "/institution/temasek-bonds.html"
                },
                {
                    "pageName": "Wealth Added",
                    "href": "/institution/wealth-added.html"
                },
                {
                    "pageName": "Instilling Ownership",
                    "href": "/institution/instilling-ownership.html"
                },
                {
                    "pageName": "Our MERITT Values",
                    "href": "/institution/our-meritt-values.html"
                },
                {
                    "pageName": "Our <em>OneTemasek</em> Team",
                    "href": "/institution/our-onetemasek-team.html"
                },
                {
                    "pageName": "Our Temasek Heartbeat",
                    "href": "/institution/our-temasek-heartbeat.html"
                },
                {
                    "pageName": "Board of Directors",
                    "href": "/institution/board-of-directors.html"
                },
                {
                    "pageName": "Senior Management",
                    "href": "/institution/senior-management.html"
                }
            ]
        },
        {
            "sectionName": "Steward",
            "href": "/steward/",
            "sectionPages": [
                {
                    "pageName": "A Trusted Steward",
                    "href": "/steward/a-trusted-steward.html"
                },
                {
                    "pageName": "Enabling a Better World",
                    "href": "/steward/enabling-a-better-world.html"
                },
                {
                    "pageName": "Making a Difference",
                    "href": "/steward/making-a-difference.html"
                },
                {
                    "pageName": "Touching Lives",
                    "href": "/steward/touching-lives.html"
                },
                {
                    "pageName": "Rising Above COVID-19",
                    "href": "/steward/rising-above-covid-19.html"
                },
                {
                    "pageName": "Fostering Stewardship and Governance",
                    "href": "/steward/fostering-stewardship-and-governance.html"
                },
                {
                    "pageName": "Sharing Perspectives",
                    "href": "/steward/sharing-perspectives.html"
                }
            ]
        },
        {
            "sectionName": "Our Stories",
            "href": "/our-stories/",
            "sectionPages": [
                {
                    "category": "investor",
                    "pages": [
                        {
                            "pageName": "China's Gen Z: ???Next Normal??? Consumers",
                            "href": "/our-stories/chinas-gen-z-next-normal-consumers.html",
                            "image": "/images/menu/our-stories/thumb-2.jpg"
                        },
                        {
                            "pageName": "The Race Against the Clock to Net Zero",
                            "href": "/our-stories/the-race-against-the-clock-to-net-zero.html",
                            "image": "/images/menu/our-stories/thumb-1.jpg"
                        }
                    ]
                }, {
                    "category": "institution",
                    "pages": [
                        {
                            "pageName": "Paying it Forward by Mentoring",
                            "href": "/our-stories/paying-it-forward-by-mentoring.html",
                            "image": "/images/menu/our-stories/thumb-3.jpg"
                        }
                    ]
                }, {
                    "category": "steward",
                    "pages": [
                        {
                            "pageName": "Swabs and Scrubs: A COVID-19 Response",
                            "href": "/our-stories/swabs-and-scrubs-a-covid-19-response.html",
                            "image": "/images/menu/our-stories/thumb-4.jpg"
                        },
                        {
                            "pageName": "Racing Against COVID-19 to Save Lives",
                            "href": "/our-stories/racing-against-covid-19-to-save-lives.html",
                            "image": "/images/menu/our-stories/thumb-5.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName": "Our Major Investments",
            "href": "/our-major-investments/",
            "sectionPages": [
                {
                    "pageName": "Financial Services",
                    "href": "/our-major-investments/financial-services.html"
                },
                {
                    "pageName": "Telecommunications, Media & Technology",
                    "href": "/our-major-investments/telecommunications-media-and-technology.html"
                },
                {
                    "pageName": "Transportation & Industrials",
                    "href": "/our-major-investments/transportation-and-industrials.html"
                },
                {
                    "pageName": "Consumer & Real Estate",
                    "href": "/our-major-investments/consumer-and-real-estate.html"
                },
                {
                    "pageName": "Life Sciences & Agri-Food",
                    "href": "/our-major-investments/life-sciences-and-agri-food.html"
                }
            ]
        },
        {
            "sectionName": "Group Financials",
            "href": "/group-financials/",
            "sectionPages": [
                {
                    "pageName": "Adopting International Accounting Standards",
                    "href": "/group-financials/adopting-international-accounting-standards.html"
                },
                {
                    "pageName": "Group Financial Summary",
                    "href": "/group-financials/group-financial-summary.html"
                }, {
                    "pageName": "Statement by Auditors",
                    "href": "/group-financials/statement-by-auditors.html"
                },
                {
                    "pageName": "Statement by Directors",
                    "href": "/group-financials/statement-by-directors.html"
                },
                {
                    "pageName": "Group Income Statements",
                    "href": "/group-financials/group-income-statements.html"
                },
                {
                    "pageName": "Group Balance Sheets",
                    "href": "/group-financials/group-balance-sheets.html"
                },
                {
                    "pageName": "Group Cash Flow Statements",
                    "href": "/group-financials/group-cash-flow-statements.html"
                },
                {
                    "pageName": "Group Statements of Changes in Equity",
                    "href": "/group-financials/group-statements-of-changes-in-equity.html"
                }
            ]
        },
        {
            "sectionName": "Media Centre",
            "href": "/media-centre/",
            "sectionPages": [
                {
                    "pageName": "Chart Centre",
                    "href": "/media-centre/chart-centre.html"
                },
                {
                    "pageName": "Videos",
                    "href": "/media-centre/videos.html"
                },
                {
                    "pageName": "Downloads",
                    "href": "/media-centre/downloads.html"
                }
            ]
        }
    ];

    /**
     * @type {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     */
    var chinese = [
        {
            "sectionName": "??????",
            "href": "/zh/overview/",
            "sectionPages": [
                {"pageName": "???????????????",
                    "href": "/zh/overview/from-our-chairman.html"},
                {"pageName": "???????????????",
                    "href": "/zh/overview/the-temasek-charter.html"},
                {"pageName": "????????????",
                    "href": "/zh/overview/performance-overview.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/overview/portfolio-highlights.html"},
                {"pageName": "????????????????????????????????????",
                    "href": "/zh/overview/our-financials-and-portfolio.html"},
                {"pageName": "??????????????????????????????",
                    "href": "/zh/overview/towards-a-net-zero-world.html"},
                {"pageName": "????????????????????????????????????",
                    "href": "/zh/overview/onetemasek-our-people.html"},
                {"pageName": "?????????????????????",
                    "href": "/zh/overview/uplifting-lives-and-communities.html"},
                {"pageName": "?????????????????????????????????",
                    "href": "/zh/overview/temasek-portfolio-at-inception.html"}
            ]
        },
        {
            "sectionName": "???????????????????????????",
            "href": "/zh/pathways-to-sustainability/",
            "sectionPages": [
                {"pageName": "????????????????????????",
                    "href": "/zh/pathways-to-sustainability/towards-a-sustainable-future.html"},
                {"pageName": "????????????",
                    "href": "/zh/pathways-to-sustainability/putting-a-price-on-carbon.html"},
                {"pageName": "?????????????????????????????????",
                    "href": "/zh/pathways-to-sustainability/investing-for-impact-and-returns.html"},
                {"pageName": "????????????????????????????????????",
                    "href": "/zh/pathways-to-sustainability/measuring-and-tracking-portfolio-emissions.html"},
                {"pageName": "????????????????????????",
                    "href": "/zh/pathways-to-sustainability/enabling-a-sustainable-company.html"},
                {"pageName": "????????????",
                    "href": "/zh/pathways-to-sustainability/collaborating-for-progress.html"},
                {"pageName": " ???????????????????????????",
                    "href": "/zh/pathways-to-sustainability/producing-sustainable-animal-feed.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/pathways-to-sustainability/building-green-ports.html"}
            ]
        },
        {
            "sectionName": "?????????",
            "href": "/zh/investor/",
            "sectionPages": [
                {"pageName": "?????????????????????",
                    "href": "/zh/investor/how-we-invest.html"},
                {"pageName": "????????????",
                    "href": "/zh/investor/how-we-grew.html"},
                {"pageName": "???????????????",
                    "href": "/zh/investor/total-shareholder-return.html"},
                {"pageName": "????????????",
                    "href": "/zh/investor/investment-update.html"},
                {"pageName": "????????????",
                    "href": "/zh/investor/how-we-manage-risks.html"},
                {"pageName": "??????12??????????????????????????????",
                    "href": "/zh/investor/12-month-returns-simulation.html"},
                {"pageName": "20??????????????????????????????",
                    "href": "/zh/investor/20-year-returns-outlook.html"}
            ]
        },
        {
            "sectionName": "??????",
            "href": "/zh/institution/",
            "sectionPages": [
                {"pageName": "?????????????????????",
                    "href": "/zh/institution/a-forward-looking-institution.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/institution/financial-discipline.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/institution/public-markers.html"},
                {"pageName": "????????????",
                    "href": "/zh/institution/credit-quality.html"},
                {"pageName": "???????????????",
                    "href": "/zh/institution/temasek-bonds.html"},
                {"pageName": "????????????",
                    "href": "/zh/institution/wealth-added.html"},
                {"pageName": "????????????",
                    "href": "/zh/institution/instilling-ownership.html"},
                {"pageName": "?????????MERITT?????????",
                    "href": "/zh/institution/our-meritt-values.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/institution/our-onetemasek-team.html"},
                {"pageName": "???????????????",
                    "href": "/zh/institution/our-temasek-heartbeat.html"},
                {"pageName": "?????????",
                    "href": "/zh/institution/board-of-directors.html"},
                {"pageName": "???????????????",
                    "href": "/zh/institution/senior-management.html"}
            ]
        },
        {
            "sectionName": "???????????????",
            "href": "/zh/steward/",
            "sectionPages": [
                {"pageName": "??????????????????????????????",
                    "href": "/zh/steward/a-trusted-steward.html"},
                {"pageName": "?????????????????????",
                    "href": "/zh/steward/enabling-a-better-world.html"},
                {"pageName": "????????????",
                    "href": "/zh/steward/making-a-difference.html"},
                {"pageName": "????????????",
                    "href": "/zh/steward/touching-lives.html"},
                {"pageName": "????????????????????????",
                    "href": "/zh/steward/rising-above-covid-19.html"},
                {"pageName": "???????????????????????????",
                    "href": "/zh/steward/fostering-stewardship-and-governance.html"},
                {"pageName": "????????????",
                    "href": "/zh/steward/sharing-perspectives.html"}
            ]
        },
        {
            "sectionName": "???????????????",
            "href": "/our-stories/",
            "sectionPages": [
                {
                    "category": "investor",
                    "pages": [
                        {
                            "pageName": "??????Z?????????????????????????????????",
                            "href": "/zh/our-stories/chinas-gen-z-next-normal-consumers.html",
                            "image": "/images/menu/our-stories/thumb-2.jpg"
                        },
                        {
                            "pageName": "???????????????????????????????????????",
                            "href": "/zh/our-stories/the-race-against-the-clock-to-net-zero.html",
                            "image": "/images/menu/our-stories/thumb-1.jpg"
                        }
                    ]
                }, {
                    "category": "institution",
                    "pages": [
                        {
                            "pageName": "???????????????????????????",
                            "href": "/zh/our-stories/paying-it-forward-by-mentoring.html",
                            "image": "/images/menu/our-stories/thumb-3.jpg"
                        }
                    ]
                }, {
                    "category": "steward",
                    "pages": [
                        {
                            "pageName": "??????????????????????????????????????????",
                            "href": "/zh/our-stories/swabs-and-scrubs-a-covid-19-response.html",
                            "image": "/images/menu/our-stories/thumb-4.jpg"
                        },
                        {
                            "pageName": "???????????????????????????",
                            "href": "/zh/our-stories/racing-against-covid-19-to-save-lives.html",
                            "image": "/images/menu/our-stories/thumb-5.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName": "?????????????????????",
            "href": "/zh/our-major-investments/",
            "sectionPages": [
                {"pageName": "????????????",
                    "href": "/zh/our-major-investments/financial-services.html"},
                {"pageName": "????????????????????????",
                    "href": "/zh/our-major-investments/telecommunications-media-and-technology.html"},
                {"pageName": "???????????????",
                    "href": "/zh/our-major-investments/transportation-and-industrials.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/our-major-investments/consumer-and-real-estate.html"},
                {"pageName": "???????????????????????????",
                    "href": "/zh/our-major-investments/life-sciences-and-agri-food.html"}
            ]
        },
        {
            "sectionName": "????????????",
            "href": "/zh/group-financials/",
            "sectionPages": [
                {"pageName": "????????????????????????",
                    "href": "/zh/group-financials/adopting-international-accounting-standards.html"},
                {"pageName": "??????????????????",
                    "href": "/zh/group-financials/group-financial-summary.html"},
                {"pageName": "???????????????",
                    "href": "/zh/group-financials/statement-by-auditors.html"},
                {"pageName": "????????????",
                    "href": "/zh/group-financials/statement-by-directors.html"},
                {"pageName": "???????????????",
                    "href": "/zh/group-financials/group-income-statements.html"},
                {"pageName": "?????????????????????",
                    "href": "/zh/group-financials/group-balance-sheets.html"},
                {"pageName": "?????????????????????",
                    "href": "/zh/group-financials/group-cash-flow-statements.html"},
                {"pageName": "???????????????????????????",
                    "href": "/zh/group-financials/group-statements-of-changes-in-equity.html"}
            ]
        },
        {
            "sectionName": "????????????",
            "href": "/zh/media-centre/",
            "sectionPages": [
                {"pageName": "????????????",
                    "href": "/zh/media-centre/chart-centre.html"},
                {"pageName": "??????",
                    "href": "/zh/media-centre/videos.html"},
                {"pageName": "??????",
                    "href": "/zh/media-centre/downloads.html"}
            ]
        }
    ];

    /**
     * @type {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     */
    var fr = [
        {
            "sectionName": "De notre Pr??sident",
            "href": "#chairman",
            "sectionPages": []
        }, {
            "sectionName": "Construire un portefeuille r??silient et tourn?? vers l???avenir",
            "href": "#building",
            "sectionPages": []
        }, {
            "sectionName": "Cr??er de la valeur durable sur le long terme",
            "href": "#delivering",
            "sectionPages": []
        }, {
            "sectionName": "Grandir au rythme d'un monde en transformation",
            "href": "#growing",
            "sectionPages": []
        }, {
            "sectionName": "Un Investisseur G??n??rationnel avec une pr??sence mondiale",
            "href": "#generational",
            "sectionPages": []
        }, {
            "sectionName": "Un Portefeuille Diversifi?? pour un rendement ?? long terme",
            "href": "#diverse",
            "sectionPages": []
        }, {
            "sectionName": "Une Institution G??n??rationnelle, solide, et disciplin??e",
            "href": "#robust",
            "sectionPages": []
        }, {
            "sectionName": "Investisseur, Institution, Gestionnaire",
            "href": "#investor-institution-steward",
            "sectionPages": []
        }
    ];

    /**
     * @type {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     */
    var de = [
        {
            "sectionName": "Von Unserem Chairman",
            "href": "#chairman",
            "sectionPages": []
        }, {
            "sectionName": "Aufbau eines stabilen, langfristig ausgerichteten Portfolios",
            "href": "#building",
            "sectionPages": []
        }, {
            "sectionName": "Nachhaltige Wertsch??pfung mit langfristiger Perspektive",
            "href": "#delivering",
            "sectionPages": []
        }, {
            "sectionName": "Im Einklang mit einer sich wandelnden Welt wachsen",
            "href": "#growing",
            "sectionPages": []
        }, {
            "sectionName": "Generationen??bergreifender investor mit globaler Ausrichtung",
            "href": "#generational",
            "sectionPages": []
        }, {
            "sectionName": "Ein breit diversifiziertes Portfolio f??r nachhaltige Renditen",
            "href": "#diverse",
            "sectionPages": []
        }, {
            "sectionName": "Eine robuste und disziplinierte Institution ??ber Generationen",
            "href": "#robust",
            "sectionPages": []
        }, {
            "sectionName": "Investor, Institution, Partner",
            "href": "#investor-institution-steward",
            "sectionPages": []
        }
    ];

    /**
     * Gets the sitemap sections for the current page's language.
     * @return {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     * @throws {!Error} If the current `location.pathname` is unsafe.
     */
    exports.getLangSections = function () {
        if (exports.isSg()) {
            if (exports.isZh()) {
                return chinese;
            } else if (exports.isFr()) {
                return fr;
            } else if (exports.isDe()) {
                return de;
            }
            return english;

        }
        arrays.forEach(chinese, function(section) {
            section.href = section.href.replace("/zh", "");
            arrays.forEach(section.sectionPages, function(page) {
                if (page.href) {
                    page.href = page.href.replace("/zh", "");
                }
            });
        });
        return chinese;

    };

    blacksunplc.sitemaps = objects.freeze(exports);

}());
