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
            return (host.indexOf(".com.sg") !== -1 || host === "localhost");
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
                            "pageName": "China's Gen Z: ‘Next Normal’ Consumers",
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
            "sectionName": "概览",
            "href": "/zh/overview/",
            "sectionPages": [
                {"pageName": "董事长报告",
                    "href": "/zh/overview/from-our-chairman.html"},
                {"pageName": "淡马锡宪章",
                    "href": "/zh/overview/the-temasek-charter.html"},
                {"pageName": "业绩概览",
                    "href": "/zh/overview/performance-overview.html"},
                {"pageName": "投资组合摘要",
                    "href": "/zh/overview/portfolio-highlights.html"},
                {"pageName": "淡马锡财务概要和投资组合",
                    "href": "/zh/overview/our-financials-and-portfolio.html"},
                {"pageName": "迈向净零碳排放的世界",
                    "href": "/zh/overview/towards-a-net-zero-world.html"},
                {"pageName": "淡马锡大家庭：我们的员工",
                    "href": "/zh/overview/onetemasek-our-people.html"},
                {"pageName": "帮扶生命和社群",
                    "href": "/zh/overview/uplifting-lives-and-communities.html"},
                {"pageName": "淡马锡成立时的投资组合",
                    "href": "/zh/overview/temasek-portfolio-at-inception.html"}
            ]
        },
        {
            "sectionName": "通向可持续发展之路",
            "href": "/zh/pathways-to-sustainability/",
            "sectionPages": [
                {"pageName": "塑造可持续的未来",
                    "href": "/zh/pathways-to-sustainability/towards-a-sustainable-future.html"},
                {"pageName": "制定碳价",
                    "href": "/zh/pathways-to-sustainability/putting-a-price-on-carbon.html"},
                {"pageName": "投资以实现影响力与回报",
                    "href": "/zh/pathways-to-sustainability/investing-for-impact-and-returns.html"},
                {"pageName": "测量和追踪投资组合排放量",
                    "href": "/zh/pathways-to-sustainability/measuring-and-tracking-portfolio-emissions.html"},
                {"pageName": "构建可持续的机构",
                    "href": "/zh/pathways-to-sustainability/enabling-a-sustainable-company.html"},
                {"pageName": "共谋发展",
                    "href": "/zh/pathways-to-sustainability/collaborating-for-progress.html"},
                {"pageName": " 生产可持续动物饲料",
                    "href": "/zh/pathways-to-sustainability/producing-sustainable-animal-feed.html"},
                {"pageName": "打造绿色港口",
                    "href": "/zh/pathways-to-sustainability/building-green-ports.html"}
            ]
        },
        {
            "sectionName": "投资者",
            "href": "/zh/investor/",
            "sectionPages": [
                {"pageName": "投资理念与策略",
                    "href": "/zh/investor/how-we-invest.html"},
                {"pageName": "成长历程",
                    "href": "/zh/investor/how-we-grew.html"},
                {"pageName": "股东总回报",
                    "href": "/zh/investor/total-shareholder-return.html"},
                {"pageName": "投资动态",
                    "href": "/zh/investor/investment-update.html"},
                {"pageName": "管理风险",
                    "href": "/zh/investor/how-we-manage-risks.html"},
                {"pageName": "未来12个月投资组合回报模拟",
                    "href": "/zh/investor/12-month-returns-simulation.html"},
                {"pageName": "20年期投资组合回报展望",
                    "href": "/zh/investor/20-year-returns-outlook.html"}
            ]
        },
        {
            "sectionName": "机构",
            "href": "/zh/institution/",
            "sectionPages": [
                {"pageName": "着眼未来的机构",
                    "href": "/zh/institution/a-forward-looking-institution.html"},
                {"pageName": "财务自律原则",
                    "href": "/zh/institution/financial-discipline.html"},
                {"pageName": "公开衡量指标",
                    "href": "/zh/institution/public-markers.html"},
                {"pageName": "信用质量",
                    "href": "/zh/institution/credit-quality.html"},
                {"pageName": "淡马锡债券",
                    "href": "/zh/institution/temasek-bonds.html"},
                {"pageName": "财富增值",
                    "href": "/zh/institution/wealth-added.html"},
                {"pageName": "共享共担",
                    "href": "/zh/institution/instilling-ownership.html"},
                {"pageName": "我们的MERITT价值观",
                    "href": "/zh/institution/our-meritt-values.html"},
                {"pageName": "淡马锡大家庭",
                    "href": "/zh/institution/our-onetemasek-team.html"},
                {"pageName": "淡马锡脉动",
                    "href": "/zh/institution/our-temasek-heartbeat.html"},
                {"pageName": "董事会",
                    "href": "/zh/institution/board-of-directors.html"},
                {"pageName": "高级管理层",
                    "href": "/zh/institution/senior-management.html"}
            ]
        },
        {
            "sectionName": "资产管护者",
            "href": "/zh/steward/",
            "sectionPages": [
                {"pageName": "备受信赖的资产管护者",
                    "href": "/zh/steward/a-trusted-steward.html"},
                {"pageName": "美好世界的承诺",
                    "href": "/zh/steward/enabling-a-better-world.html"},
                {"pageName": "造福社会",
                    "href": "/zh/steward/making-a-difference.html"},
                {"pageName": "温暖心灵",
                    "href": "/zh/steward/touching-lives.html"},
                {"pageName": "同心协力共克疫情",
                    "href": "/zh/steward/rising-above-covid-19.html"},
                {"pageName": "强化资产管护和治理",
                    "href": "/zh/steward/fostering-stewardship-and-governance.html"},
                {"pageName": "集思广益",
                    "href": "/zh/steward/sharing-perspectives.html"}
            ]
        },
        {
            "sectionName": "我们的故事",
            "href": "/our-stories/",
            "sectionPages": [
                {
                    "category": "investor",
                    "pages": [
                        {
                            "pageName": "中国Z世代：“新常态”消费者",
                            "href": "/zh/our-stories/chinas-gen-z-next-normal-consumers.html",
                            "image": "/images/menu/our-stories/thumb-2.jpg"
                        },
                        {
                            "pageName": "与时间赛跑，实现净零碳排放",
                            "href": "/zh/our-stories/the-race-against-the-clock-to-net-zero.html",
                            "image": "/images/menu/our-stories/thumb-1.jpg"
                        }
                    ]
                }, {
                    "category": "institution",
                    "pages": [
                        {
                            "pageName": "分享智慧，继往开来",
                            "href": "/zh/our-stories/paying-it-forward-by-mentoring.html",
                            "image": "/images/menu/our-stories/thumb-3.jpg"
                        }
                    ]
                }, {
                    "category": "steward",
                    "pages": [
                        {
                            "pageName": "拭子检测：迅速应对，抗击疫情",
                            "href": "/zh/our-stories/swabs-and-scrubs-a-covid-19-response.html",
                            "image": "/images/menu/our-stories/thumb-4.jpg"
                        },
                        {
                            "pageName": "争分夺秒，挽救生命",
                            "href": "/zh/our-stories/racing-against-covid-19-to-save-lives.html",
                            "image": "/images/menu/our-stories/thumb-5.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName": "我们的主要投资",
            "href": "/zh/our-major-investments/",
            "sectionPages": [
                {"pageName": "金融服务",
                    "href": "/zh/our-major-investments/financial-services.html"},
                {"pageName": "电信、媒体与科技",
                    "href": "/zh/our-major-investments/telecommunications-media-and-technology.html"},
                {"pageName": "交通与工业",
                    "href": "/zh/our-major-investments/transportation-and-industrials.html"},
                {"pageName": "消费与房地产",
                    "href": "/zh/our-major-investments/consumer-and-real-estate.html"},
                {"pageName": "生命科学与农业食品",
                    "href": "/zh/our-major-investments/life-sciences-and-agri-food.html"}
            ]
        },
        {
            "sectionName": "集团财务",
            "href": "/zh/group-financials/",
            "sectionPages": [
                {"pageName": "采用国际会计准则",
                    "href": "/zh/group-financials/adopting-international-accounting-standards.html"},
                {"pageName": "集团财务概要",
                    "href": "/zh/group-financials/group-financial-summary.html"},
                {"pageName": "审计师声明",
                    "href": "/zh/group-financials/statement-by-auditors.html"},
                {"pageName": "董事声明",
                    "href": "/zh/group-financials/statement-by-directors.html"},
                {"pageName": "集团损益表",
                    "href": "/zh/group-financials/group-income-statements.html"},
                {"pageName": "集团资产负债表",
                    "href": "/zh/group-financials/group-balance-sheets.html"},
                {"pageName": "集团现金流量表",
                    "href": "/zh/group-financials/group-cash-flow-statements.html"},
                {"pageName": "集团股东权益变动表",
                    "href": "/zh/group-financials/group-statements-of-changes-in-equity.html"}
            ]
        },
        {
            "sectionName": "媒体中心",
            "href": "/zh/media-centre/",
            "sectionPages": [
                {"pageName": "图表中心",
                    "href": "/zh/media-centre/chart-centre.html"},
                {"pageName": "视频",
                    "href": "/zh/media-centre/videos.html"},
                {"pageName": "下载",
                    "href": "/zh/media-centre/downloads.html"}
            ]
        }
    ];

    /**
     * @type {!Array<{sectionName: string, href: string, sectionPages: !Array<{pageName: string, href: string}>}>}
     */
    var fr = [
        {
            "sectionName": "De notre Président",
            "href": "#chairman",
            "sectionPages": []
        }, {
            "sectionName": "Construire un portefeuille résilient et tourné vers l’avenir",
            "href": "#building",
            "sectionPages": []
        }, {
            "sectionName": "Créer de la valeur durable sur le long terme",
            "href": "#delivering",
            "sectionPages": []
        }, {
            "sectionName": "Grandir au rythme d'un monde en transformation",
            "href": "#growing",
            "sectionPages": []
        }, {
            "sectionName": "Un Investisseur Générationnel avec une présence mondiale",
            "href": "#generational",
            "sectionPages": []
        }, {
            "sectionName": "Un Portefeuille Diversifié pour un rendement à long terme",
            "href": "#diverse",
            "sectionPages": []
        }, {
            "sectionName": "Une Institution Générationnelle, solide, et disciplinée",
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
            "sectionName": "Nachhaltige Wertschöpfung mit langfristiger Perspektive",
            "href": "#delivering",
            "sectionPages": []
        }, {
            "sectionName": "Im Einklang mit einer sich wandelnden Welt wachsen",
            "href": "#growing",
            "sectionPages": []
        }, {
            "sectionName": "Generationenübergreifender investor mit globaler Ausrichtung",
            "href": "#generational",
            "sectionPages": []
        }, {
            "sectionName": "Ein breit diversifiziertes Portfolio für nachhaltige Renditen",
            "href": "#diverse",
            "sectionPages": []
        }, {
            "sectionName": "Eine robuste und disziplinierte Institution über Generationen",
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
