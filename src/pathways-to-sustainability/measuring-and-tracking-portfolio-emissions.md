---
permalink: /pathways-to-sustainability/measuring-and-tracking-portfolio-emissions.html
layout: layouts/pathways-to-sustainability/measuring-and-tracking-portfolio-emissions.njk
title: Measuring and Tracking Portfolio Emissions
intro_text: >-
  Last year, we committed to reducing the net carbon emissions
    attributable to our portfolio to half the 2010 levels by <span class="tooltip
    tooltipstered" data-title="The target has been established in reference to the
    latest scientific assessments (AR5) published by the Intergovernmental Panel
    on Climate Change (IPCC).">2030</span>. We also signalled our ambitions for
    net zero carbon emissions by <span class="tooltip tooltipstered"
    data-title="Due to differences in the calendar year and our financial year,
    calendar year emissions data and targets are reported in the subsequent
    financial year.">2050</span>.
before_chart: >-
  This journey is not without challenges. Not least is the inherent limitations
  of data availability, timeliness and consistency. The latest datasets for some
  portfolio companies date back to pre-COVID times. This challenge is even more
  pronounced as we look back to 2010, and as we look ahead to estimate the size
  of our ambition by 2030.


  Nonetheless, we will initiate the annual <span class="tooltip" title="PricewaterhouseCoopers LLP, an independent third party, has undertaken a limited assurance engagement on the selected portfolio emission metrics for financial years ended 31 March 2021, 31 March 2020 and 31 March 2011. Their assurance report can be found <a href='/independent-practitioners-report.html'>here</a>." data-title="PricewaterhouseCoopers LLP, an independent third party, has undertaken a limited assurance engagement on the selected portfolio emission metrics for financial years ended 31 March 2021, 31 March 2020 and 31 March 2011. Their assurance report can be found <a href='/independent-practitioners-report.html'>here</a>.">reporting</span> of the carbon emissions of our equities portfolio. In September 2020, Temasek became a supporter of the recommendations of the <a href="https://www.fsb-tcfd.org/" target="_blank" rel="noopener noreferrer">Task Force on Climate-related Financial Disclosures</a>, as part of our journey.


  On the basis of more refined company-level data and sub industry-level proxies, we have updated our estimates of the carbon emission attributable to our portfolio in the financial year ended 31 March 2011, as shown in the chart below.
date_text: (for year ending 31 March)
chart_title: Towards Net Zero
code:
  code: >-
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 970 285"
                                    id="pathway_towards_net_zero_chart">
                                    <defs>
                                        <style>
                                            .svg-chart .cls-1 {
                                                fill: #2f1a0b;
                                            }

                                            .svg-chart .cls-2 {
                                                stroke: #929390;
                                                fill: #D2E0EC;
                                            }

                                            .svg-chart .cls-3 {
                                                fill: #fff;
                                            }

                                            .svg-chart .cls-4 {
                                                fill: #00a829;
                                            }

                                            .svg-chart .cls-5 {
                                                fill: #5491B9;
                                            }

                                            .svg-chart .cls-6 {
                                                fill: #ff7000;
                                            }

                                            .svg-chart .cls-7 {
                                                fill: #614388;
                                            }

                                            .svg-chart .footnote {
                                                fill: transparent;
                                                cursor: help;
                                            }

                                            .svg-chart .bar-1,
                                            .bar-2,
                                            .bar-3,
                                            .bar-4,
                                            .bar-5 {
                                                transform-box: fill-box;
                                                transform-origin: bottom;
                                                transform: scaleY(0);
                                            }

                                            .svg-chart .bottom-bar {
                                                transform-box: fill-box;
                                                transform-origin: top;
                                                transform: scaleY(0);
                                            }


                                            .svg-chart .y-2011,
                                            .svg-chart .y-2020,
                                            .svg-chart .y-2021,
                                            .svg-chart .text-22,
                                            .svg-chart .text-30-1,
                                            .svg-chart .text-30-2,
                                            .svg-chart .target-2030,
                                            .svg-chart .target-2050,
                                            .svg-chart .net-11-million,
                                            .svg-chart .net-zero,
                                            .svg-chart .y-2031,
                                            .svg-chart .y-2051 {
                                                opacity: 0;
                                            }

                                            .svg-chart .net-11-million,
                                            .svg-chart .net-zero {
                                                opacity: 0;
                                                transform: translateY(33%);
                                                transform-box: fill-box;
                                            }

                                            .svg-chart .net-11-million-line path {
                                                opacity: 0;
                                                transform-box: fill-box;
                                                transform-origin: center;
                                            }

                                            .svg-chart .net-11-million-line rect {
                                                transform-box: fill-box;
                                                transform-origin: bottom;
                                                transform: scaleY(0);
                                            }

                                            .svg-chart .net-zero-line path {
                                                opacity: 0;
                                                transform-box: fill-box;
                                                transform-origin: center;
                                            }

                                            .svg-chart .net-zero-line rect {
                                                transform-box: fill-box;
                                                transform-origin: bottom;
                                                transform: scaleY(0);
                                            }

                                            @keyframes chart-fade-in {
                                                from {
                                                    opacity: 0;
                                                    transform: translateX(-2%);
                                                }

                                                to {
                                                    opacity: 1;
                                                    transform: translateY(0%);
                                                }
                                            }

                                            @keyframes bar-anim {
                                                from {
                                                    transform: scaleY(0);
                                                }

                                                to {
                                                    transform: scaleY(1);
                                                }
                                            }

                                            @keyframes line-anim {
                                                from {
                                                    transform: scaleX(0);
                                                }

                                                to {
                                                    transform: scaleX(1);
                                                }
                                            }

                                            @keyframes text-fade-in {
                                                from {
                                                    opacity: 0;
                                                }

                                                to {
                                                    opacity: 1;
                                                }
                                            }

                                            @keyframes net-text-anim {
                                                0% {
                                                    opacity: 0;
                                                    transform: translateY(33%);
                                                }

                                                50% {
                                                    opacity: 1;
                                                }

                                                100% {
                                                    transform: translateY(0%);
                                                    opacity: 1;
                                                }
                                            }

                                            @keyframes net-dot-anim {
                                                from {
                                                    opacity: 0;
                                                    transform: scale(5);
                                                }

                                                to {
                                                    opacity: 1;
                                                    transform: scale(1);
                                                }
                                            }

                                            @keyframes net-line-anim {
                                                from {
                                                    transform: scaleY(0);
                                                }

                                                to {
                                                    transform: scaleY(1);
                                                }
                                            }

                                            .svg-chart.animated {
                                                animation: chart-fade-in .4s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                                animation-timing-function: ease-out;
                                            }

                                            .svg-chart.animated .bar-1 {
                                                animation: bar-anim .5s;
                                                animation-delay: .3s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .bar-2 {
                                                animation: bar-anim .5s;
                                                animation-delay: .5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .bar-3 {
                                                animation: bar-anim .5s;
                                                animation-delay: .6s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .bar-4 {
                                                animation: bar-anim .5s;
                                                animation-delay: 1.1s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .bar-5 {
                                                animation: bar-anim .5s;
                                                animation-delay: 1.5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart #lineChartClipping rect {
                                                transform-box: fill-box;
                                                transform-origin: left;
                                                transform: scaleX(0);
                                            }

                                            .svg-chart.animated #lineChartClipping rect {
                                                animation: line-anim 3s;
                                                animation-delay: .4s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }



                                            .svg-chart.animated .y-2011,
                                            .svg-chart.animated .text-22 {
                                                animation: text-fade-in .3s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                                animation-delay: .75s;
                                            }

                                            .svg-chart.animated .y-2020,
                                            .svg-chart.animated .text-30-1 {
                                                animation: text-fade-in .3s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                                animation-delay: .85s;
                                            }

                                            .svg-chart.animated .y-2021,
                                            .svg-chart.animated .text-30-2 {
                                                animation: text-fade-in .3s;
                                                animation-delay: .95s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .y-2031,
                                            .svg-chart.animated .target-2030 {
                                                animation: text-fade-in .3s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                                animation-delay: 1.05s;
                                            }

                                            .svg-chart.animated .y-2051,
                                            .svg-chart.animated .target-2050 {
                                                animation: text-fade-in .3s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                                animation-delay: 1.15s;
                                            }

                                            .svg-chart.animated .net-11-million {
                                                animation: net-text-anim;
                                                animation-delay: 1.6s;
                                                animation-duration: .6s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .net-zero {
                                                animation: net-text-anim;
                                                animation-delay: 1.9s;
                                                animation-duration: .6s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .net-11-million-line path {
                                                animation: net-dot-anim;
                                                animation-delay: 1.15s;
                                                animation-duration: .5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .net-zero-line path {
                                                animation: net-dot-anim;
                                                animation-delay: 1.6s;
                                                animation-duration: .5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .net-11-million-line rect {
                                                animation: net-line-anim;
                                                animation-delay: 1.15s;
                                                animation-duration: .5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }

                                            .svg-chart.animated .net-zero-line rect {
                                                animation: net-line-anim;
                                                animation-delay: 1.6s;
                                                animation-duration: .5s;
                                                animation-fill-mode: forwards;
                                                animation-iteration-count: 1;
                                            }
                                        </style>

                                    </defs>
                                    <g class="svg-chart">
                                        <g>
                                            <clipPath id="lineChartClipping">
                                                <rect x="0" y="0" width="1298.26" height="333.18" />
                                            </clipPath>
                                        </g>
                                        <g id="Axis_Lines" data-name="Axis Lines">
                                            <rect class="cls-1" x="57.93" y="261.15" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="236.42" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="186.98" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="162.25" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="137.53" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="112.8" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="88.08" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="63.36" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.93" y="38.63" width="5.43" height="0.47" />
                                            <rect class="cls-1" x="57.7" y="38.6" width="0.47" height="223.06" />
                                            <rect class="cls-1" x="57.82" y="211.66" width="909.26" height="0.47" />
                                        </g>
                                        <g id="Bars">
                                            <rect class="cls-2 bar-5" x="495.3" y="112.7" width="34.3" height="99" />
                                            <rect class="cls-2 bar-5" x="859.1" y="186.8" width="34.3" height="24.9" />
                                            <polygon class="cls-4 bar-4 bottom-bar"
                                                points="529.56 256.93 495.27 256.93 495.28 212.12 496.23 212.12 496.23 255.98 528.61 255.98 528.61 212.12 529.56 212.12 529.56 256.93" />
                                            <rect class="cls-5 bar-1" x="131.89" y="101.18" width="33.35" height="110.76" />
                                            <rect class="cls-5 bar-2" x="253.17" y="64.59" width="33.35" height="147.35" />
                                            <rect class="cls-5 bar-3" x="313.81" y="61.13" width="33.35" height="150.81" />
                                            <polygon class="cls-4 bar-5 bottom-bar"
                                                points="893.37 237.13 859.08 237.13 859.08 212.17 860.02 212.17 860.02 236.18 892.42 236.18 892.42 211.93 893.37 211.93 893.37 237.13" />
                                        </g>
                                        <g id="Line">
                                            <path clip-path="url(#lineChartClipping)" class="cls-6"
                                                d="M876.5,213.3L876.5,213.3c-0.6,0-64.5-1.9-92.5-13c-2.9-1.2-6.3-2.6-9.9-4.2c-12.7-5.5-28.4-12.3-41.1-12.8
                                                c-7.1-0.2-13.1,2.7-18.9,5.5s-12,5.8-19.2,5.5c-11.8-0.5-19-5.2-26.7-10.2c-3.2-2-6.4-4.2-10.1-6.1c-13.1-6.8-21.9-10.2-30.8-8.8
                                                c-7.3,1.2-14.2,4.2-21.6,7.3c-11.9,5.1-24.2,10.3-38,7.4c-11.1-2.3-38.3-13.4-55.6-25.6c-6.2-4.4-12.2-8.7-18-12.9
                                                c-12.2-8.9-22.8-16.6-27.4-18.3c-9.6-3.7-14-0.4-18.2,2.8c-3.2,2.4-6.5,4.9-11.7,3.5c-7.1-1.9-14.2-11.1-21.1-20
                                                c-5.3-6.9-10.4-13.3-14.8-15.8c-6.4-3.5-10.7-0.7-15.3,2.2s-9.3,5.8-15.8,2.4c-8.3-4.4-30.9-29.4-37.6-36.9c-1-1.1-2.2-2.1-3.4-3
                                                c-5.3-3.4-13.9-5.1-25.6-4.9c-0.4,0-0.8,0-0.9,0h-0.4c-7,0.3-11.7,2.4-16.2,4.3s-9,3.9-15.6,4.2c-9.9,0.5-14.1-2.8-17.9-5.7
                                                c-3.4-2.6-6.3-4.8-12.9-4.4c-7.3,0.5-13.4,7.1-19.3,13.5c-5.2,5.7-10.7,11.5-17,13.1c-7.7,1.9-13-1.6-17.7-4.6
                                                c-3.6-2.3-6.6-4.3-10.2-3.7c-6.9,1.1-10.8,6.7-16.1,14.4c-3,4.4-6.2,8.6-9.6,12.7c-0.2,0.5-0.8,0.8-1.3,0.5
                                                c-0.5-0.2-0.8-0.8-0.5-1.3c0.1-0.2,0.2-0.4,0.4-0.5c3.4-4,6.5-8.2,9.5-12.5c5.4-7.8,9.7-14,17.4-15.2c4.3-0.7,7.8,1.6,11.5,4
                                                c4.6,3,9.3,6,16.2,4.4c5.8-1.4,10.8-6.8,16.1-12.5c6.1-6.6,12.5-13.5,20.5-14.1c7.3-0.5,10.8,2.2,14.1,4.8
                                                c3.7,2.8,7.5,5.7,16.6,5.3c6.2-0.3,10.5-2.1,14.9-4.1c4.7-2,9.6-4.2,16.9-4.5h0.5c0.2,0,0.5,0,0.9,0c12.1-0.2,21.1,1.5,26.6,5.2
                                                c1.4,1,2.7,2.1,3.8,3.4c6.7,7.5,29,32.2,37,36.5c5.5,2.9,9.4,0.5,13.9-2.3c4.6-2.9,9.9-6.2,17.2-2.2c4.8,2.6,9.9,9.2,15.4,16.3
                                                c6.7,8.7,13.7,17.6,20.1,19.4c4.3,1.2,7-0.9,10.1-3.2c4.4-3.3,9.5-7.1,20-3.1c4.9,1.8,15,9.2,27.9,18.6
                                                c5.8,4.2,11.8,8.5,17.9,12.9c17.1,12,44,23,54.9,25.3c13.2,2.8,25.2-2.4,36.9-7.3c7.1-3,14.5-6.2,22-7.4c9.5-1.6,18.6,1.9,32,8.9
                                                c3.8,2,7.1,4.1,10.3,6.2c7.7,5.1,14.4,9.4,25.7,9.9c6.8,0.3,12.4-2.4,18.3-5.3s12.2-6,19.8-5.7c13,0.5,29,7.4,41.8,12.9
                                                c3.5,1.5,6.9,3,9.8,4.1c27.8,10.9,97,13.1,97.6,13.1c0.5,0.2,0.8,0.7,0.6,1.3c-0.1,0.3-0.3,0.5-0.6,0.6L876.5,213.3z" />
                                        </g>
                                        <g id="Y-Axis_Labels" data-name="Y-Axis Labels">
                                            <path class="cls-1" d="M32.2,264v-1h3.22v1Z" />
                                            <path class="cls-1"
                                                d="M40.67,267H39.53v-6.64c0-.38,0-.68,0-.91s0-.47,0-.72q-.21.21-.39.36c-.12.1-.27.22-.43.37l-1,.82-.62-.78,2.57-2h1Z" />
                                            <path class="cls-1"
                                                d="M50.51,262.26a9.14,9.14,0,0,1-.32,2.63,3.35,3.35,0,0,1-1,1.68,2.77,2.77,0,0,1-1.83.58A2.58,2.58,0,0,1,45,265.86a7.14,7.14,0,0,1-.76-3.6,9.53,9.53,0,0,1,.31-2.63,3.21,3.21,0,0,1,1-1.67,2.7,2.7,0,0,1,1.82-.58,2.61,2.61,0,0,1,2.38,1.28A7,7,0,0,1,50.51,262.26Zm-5.13,0a7.32,7.32,0,0,0,.45,2.93,1.68,1.68,0,0,0,3,0,9.5,9.5,0,0,0,0-5.84,1.56,1.56,0,0,0-1.52-1,1.54,1.54,0,0,0-1.52,1A7.24,7.24,0,0,0,45.38,262.26Z" />
                                            <path class="cls-1" d="M39.81,239.25v-1H43v1Z" />
                                            <path class="cls-1"
                                                d="M47.22,236.47a3.54,3.54,0,0,1,2.32.73,2.55,2.55,0,0,1,.87,2.06,3,3,0,0,1-.94,2.32,3.75,3.75,0,0,1-2.61.85,6.77,6.77,0,0,1-1.39-.13,3.62,3.62,0,0,1-1.07-.39v-1.1a4,4,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.64,2.64,0,0,0,1.69-.5,2.13,2.13,0,0,0,.08-3,2.74,2.74,0,0,0-1.81-.49,6.9,6.9,0,0,0-.85.06c-.32,0-.58.09-.77.14l-.59-.38L45,232.8h4.76v1.06H46l-.23,2.76.61-.1A7.39,7.39,0,0,1,47.22,236.47Z" />
                                            <path class="cls-1"
                                                d="M50.51,212.81a9.14,9.14,0,0,1-.32,2.63,3.35,3.35,0,0,1-1,1.68,2.77,2.77,0,0,1-1.83.59,2.59,2.59,0,0,1-2.38-1.3,7.14,7.14,0,0,1-.76-3.6,9.53,9.53,0,0,1,.31-2.63,3.21,3.21,0,0,1,1-1.67,2.7,2.7,0,0,1,1.82-.58,2.61,2.61,0,0,1,2.38,1.28A7,7,0,0,1,50.51,212.81Zm-5.13,0a7.32,7.32,0,0,0,.45,2.93,1.68,1.68,0,0,0,3,0,9.5,9.5,0,0,0,0-5.84,1.56,1.56,0,0,0-1.52-1,1.54,1.54,0,0,0-1.52,1A7.24,7.24,0,0,0,45.38,212.81Z" />
                                            <path class="cls-1"
                                                d="M47.22,187a3.54,3.54,0,0,1,2.32.73,2.56,2.56,0,0,1,.87,2.07,3,3,0,0,1-.94,2.32,3.79,3.79,0,0,1-2.61.84,6.77,6.77,0,0,1-1.39-.13,3.62,3.62,0,0,1-1.07-.39v-1.1a4,4,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.64,2.64,0,0,0,1.69-.5,2.13,2.13,0,0,0,.08-3,2.74,2.74,0,0,0-1.81-.49,6.9,6.9,0,0,0-.85.06c-.32.05-.58.09-.77.14l-.59-.38.36-4.48h4.76v1.07H46l-.23,2.75.61-.09A5.61,5.61,0,0,1,47.22,187Z" />
                                            <path class="cls-1"
                                                d="M40.67,168.12H39.53v-6.63c0-.38,0-.69,0-.92s0-.47,0-.72q-.21.21-.39.36c-.12.1-.27.22-.43.37l-1,.83-.62-.79,2.57-2h1Z" />
                                            <path class="cls-1"
                                                d="M50.51,163.36a9.26,9.26,0,0,1-.32,2.64,3.36,3.36,0,0,1-1,1.67,2.77,2.77,0,0,1-1.83.59A2.59,2.59,0,0,1,45,167a7.11,7.11,0,0,1-.76-3.6,9.58,9.58,0,0,1,.31-2.63,3.21,3.21,0,0,1,1-1.67,2.7,2.7,0,0,1,1.82-.58,2.61,2.61,0,0,1,2.38,1.28A7,7,0,0,1,50.51,163.36Zm-5.13,0a7.29,7.29,0,0,0,.45,2.93,1.68,1.68,0,0,0,3,0,9.5,9.5,0,0,0,0-5.84,1.56,1.56,0,0,0-1.52-1,1.54,1.54,0,0,0-1.52,1A7.24,7.24,0,0,0,45.38,163.36Z" />
                                            <path class="cls-1"
                                                d="M40.67,143.4H39.53v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a3.82,3.82,0,0,1-.39.35l-.43.38-1,.82-.62-.78,2.57-2h1Z" />
                                            <path class="cls-1"
                                                d="M47.22,137.57a3.54,3.54,0,0,1,2.32.73,2.56,2.56,0,0,1,.87,2.07,3,3,0,0,1-.94,2.32,3.79,3.79,0,0,1-2.61.84,6.77,6.77,0,0,1-1.39-.13A3.62,3.62,0,0,1,44.4,143v-1.1a4,4,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.69,2.69,0,0,0,1.69-.49,1.82,1.82,0,0,0,.65-1.55,1.8,1.8,0,0,0-.57-1.43,2.68,2.68,0,0,0-1.81-.5,6.9,6.9,0,0,0-.85.06c-.32,0-.58.09-.77.14l-.59-.38L45,133.9h4.76V135H46l-.23,2.75.61-.09A5.61,5.61,0,0,1,47.22,137.57Z" />
                                            <path class="cls-1"
                                                d="M42.87,118.67H36.59v-1l2.49-2.51c.47-.48.87-.91,1.2-1.28a4.64,4.64,0,0,0,.75-1.09,2.68,2.68,0,0,0,.25-1.18,1.48,1.48,0,0,0-.46-1.19,1.79,1.79,0,0,0-1.21-.41,2.93,2.93,0,0,0-1.23.24,5.29,5.29,0,0,0-1.06.67l-.63-.79a5.94,5.94,0,0,1,1.29-.79,3.86,3.86,0,0,1,1.63-.33,3.1,3.1,0,0,1,2.1.68,2.35,2.35,0,0,1,.77,1.85,3.18,3.18,0,0,1-.31,1.4,5.62,5.62,0,0,1-.85,1.29c-.36.42-.79.87-1.27,1.34l-2,2v0h4.81Z" />
                                            <path class="cls-1"
                                                d="M50.51,113.91a9.26,9.26,0,0,1-.32,2.64,3.36,3.36,0,0,1-1,1.67,2.77,2.77,0,0,1-1.83.59,2.59,2.59,0,0,1-2.38-1.3,7.09,7.09,0,0,1-.76-3.6,9.58,9.58,0,0,1,.31-2.63,3.25,3.25,0,0,1,1-1.67,2.7,2.7,0,0,1,1.82-.58,2.61,2.61,0,0,1,2.38,1.28A7,7,0,0,1,50.51,113.91Zm-5.13,0a7.29,7.29,0,0,0,.45,2.93,1.54,1.54,0,0,0,1.52,1,1.56,1.56,0,0,0,1.52-1,9.5,9.5,0,0,0,0-5.84,1.56,1.56,0,0,0-1.52-1,1.54,1.54,0,0,0-1.52,1A7.24,7.24,0,0,0,45.38,113.91Z" />
                                            <path class="cls-1"
                                                d="M42.87,94H36.59V93l2.49-2.52c.47-.47.87-.9,1.2-1.27A5.08,5.08,0,0,0,41,88.1a2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.78,1.78,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78A5.57,5.57,0,0,1,38,84.65a3.86,3.86,0,0,1,1.63-.33,3.1,3.1,0,0,1,2.1.68,2.35,2.35,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.22,5.22,0,0,1-.85,1.29c-.36.43-.79.88-1.27,1.35l-2,2v0h4.81Z" />
                                            <path class="cls-1"
                                                d="M47.22,88.12a3.54,3.54,0,0,1,2.32.73,2.56,2.56,0,0,1,.87,2.07,3,3,0,0,1-.94,2.32,3.79,3.79,0,0,1-2.61.84A6.77,6.77,0,0,1,45.47,94a3.62,3.62,0,0,1-1.07-.39v-1.1a4,4,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.69,2.69,0,0,0,1.69-.49A1.82,1.82,0,0,0,49.21,91a1.8,1.8,0,0,0-.57-1.43,2.68,2.68,0,0,0-1.81-.5,6.9,6.9,0,0,0-.85.06c-.32,0-.58.09-.77.14l-.59-.38L45,84.45h4.76v1.07H46l-.23,2.75.61-.09A5.61,5.61,0,0,1,47.22,88.12Z" />
                                            <path class="cls-1"
                                                d="M42.51,62A2.09,2.09,0,0,1,42,63.47a2.64,2.64,0,0,1-1.43.75v.06a2.7,2.7,0,0,1,1.69.71,2.1,2.1,0,0,1,.57,1.53A2.8,2.8,0,0,1,42.41,68a2.48,2.48,0,0,1-1.19,1,5,5,0,0,1-2.06.36,7.58,7.58,0,0,1-1.39-.12,4.48,4.48,0,0,1-1.22-.4V67.75a5.49,5.49,0,0,0,1.29.46,5.68,5.68,0,0,0,1.33.16,2.72,2.72,0,0,0,1.84-.5,1.72,1.72,0,0,0,.57-1.37,1.38,1.38,0,0,0-.7-1.29,4.08,4.08,0,0,0-2-.39H38v-1h.93a2.78,2.78,0,0,0,1.78-.49,1.6,1.6,0,0,0,.6-1.3A1.3,1.3,0,0,0,40.84,61a2,2,0,0,0-1.26-.38,3.32,3.32,0,0,0-1.32.23,6.52,6.52,0,0,0-1.07.57l-.59-.8a4.69,4.69,0,0,1,1.26-.69,4.57,4.57,0,0,1,1.71-.3,3.19,3.19,0,0,1,2.21.67A2.17,2.17,0,0,1,42.51,62Z" />
                                            <path class="cls-1"
                                                d="M50.51,64.46a9.26,9.26,0,0,1-.32,2.64,3.36,3.36,0,0,1-1,1.67,2.77,2.77,0,0,1-1.83.59A2.59,2.59,0,0,1,45,68.06a7.09,7.09,0,0,1-.76-3.6,9.58,9.58,0,0,1,.31-2.63,3.25,3.25,0,0,1,1-1.67,2.7,2.7,0,0,1,1.82-.58,2.6,2.6,0,0,1,2.38,1.29A6.91,6.91,0,0,1,50.51,64.46Zm-5.13,0a7.29,7.29,0,0,0,.45,2.93,1.54,1.54,0,0,0,1.52,1,1.57,1.57,0,0,0,1.52-1,7.14,7.14,0,0,0,.46-2.94,7,7,0,0,0-.46-2.91,1.56,1.56,0,0,0-1.52-1,1.54,1.54,0,0,0-1.52,1A7.24,7.24,0,0,0,45.38,64.46Z" />
                                            <path class="cls-1"
                                                d="M42.51,37.22A2.13,2.13,0,0,1,42,38.75a2.78,2.78,0,0,1-1.43.75v0a2.7,2.7,0,0,1,1.69.72,2.1,2.1,0,0,1,.57,1.53,2.8,2.8,0,0,1-.39,1.48,2.52,2.52,0,0,1-1.19,1,5,5,0,0,1-2.06.36,8.61,8.61,0,0,1-1.39-.11,4.5,4.5,0,0,1-1.22-.41V43a5.51,5.51,0,0,0,1.29.47,6.26,6.26,0,0,0,1.33.16,2.77,2.77,0,0,0,1.84-.5,1.73,1.73,0,0,0,.57-1.38,1.37,1.37,0,0,0-.7-1.28,4.08,4.08,0,0,0-2-.39H38v-1h.93a2.78,2.78,0,0,0,1.78-.49,1.62,1.62,0,0,0,.6-1.31,1.32,1.32,0,0,0-.47-1.07,2,2,0,0,0-1.26-.38,3.5,3.5,0,0,0-1.32.23,6.52,6.52,0,0,0-1.07.57l-.59-.8a5.32,5.32,0,0,1,1.26-.69,4.79,4.79,0,0,1,1.71-.29,3.19,3.19,0,0,1,2.21.66A2.19,2.19,0,0,1,42.51,37.22Z" />
                                            <path class="cls-1"
                                                d="M47.22,38.67a3.49,3.49,0,0,1,2.32.74,2.53,2.53,0,0,1,.87,2.06,3,3,0,0,1-.94,2.32,3.79,3.79,0,0,1-2.61.84,6.77,6.77,0,0,1-1.39-.13,3.62,3.62,0,0,1-1.07-.39V43a4,4,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.69,2.69,0,0,0,1.69-.49,1.82,1.82,0,0,0,.65-1.55,1.8,1.8,0,0,0-.57-1.43,2.68,2.68,0,0,0-1.81-.5,6.9,6.9,0,0,0-.85.06c-.32.05-.58.09-.77.14l-.59-.38L45,35h4.76v1.07H46l-.23,2.75.61-.09A5.61,5.61,0,0,1,47.22,38.67Z" />
                                            <path class="cls-1"
                                                d="M4.63,256.47a3.44,3.44,0,0,0,1.17,2.75,4.75,4.75,0,0,0,3.2,1,5.06,5.06,0,0,0,3.21-.93,3.39,3.39,0,0,0,1.17-2.81,7.15,7.15,0,0,0-.12-1.33c-.08-.43-.18-.85-.3-1.27h1.18a6.9,6.9,0,0,1,.34,1.26,9.77,9.77,0,0,1,.1,1.54,5.15,5.15,0,0,1-.68,2.77,4.24,4.24,0,0,1-2,1.66,7.3,7.3,0,0,1-3,.56,6.68,6.68,0,0,1-2.9-.6,4.5,4.5,0,0,1-2-1.78,5.36,5.36,0,0,1-.7-2.84,6.55,6.55,0,0,1,.64-3l1.15.55a8.35,8.35,0,0,0-.41,1.11A4.79,4.79,0,0,0,4.63,256.47Z" />
                                            <path class="cls-1"
                                                d="M6.15,248.26a3.19,3.19,0,0,1,.65-2.2,2.69,2.69,0,0,1,2.08-.72h5.55v1l-1.15.26v.06a3.75,3.75,0,0,1,1,1.13,3.31,3.31,0,0,1,.32,1.61,2.85,2.85,0,0,1-.58,1.84,2.2,2.2,0,0,1-1.83.73,2.15,2.15,0,0,1-1.88-1A5.56,5.56,0,0,1,9.57,248l-.05-1.38H9a1.88,1.88,0,0,0-1.42.44,1.82,1.82,0,0,0-.39,1.25,3.74,3.74,0,0,0,.19,1.21,7.59,7.59,0,0,0,.43,1.08l-1,.41a5.7,5.7,0,0,1-.5-1.26A5.87,5.87,0,0,1,6.15,248.26Zm4.3-1.6.05,1.21A4.08,4.08,0,0,0,11,250a1.4,1.4,0,0,0,1.2.58,1.19,1.19,0,0,0,1-.41,1.74,1.74,0,0,0,.31-1.07,2.6,2.6,0,0,0-.57-1.71,2.11,2.11,0,0,0-1.75-.7Z" />
                                            <path class="cls-1"
                                                d="M6.13,238.82a4.42,4.42,0,0,1,0-.49,3.35,3.35,0,0,1,.06-.47l1.24.17a2.66,2.66,0,0,0-.08.44,3.61,3.61,0,0,0,0,.44,2.13,2.13,0,0,0,.34,1.17,2.48,2.48,0,0,0,1,.88,3.11,3.11,0,0,0,1.43.32h4.35v1.34H6.28v-1.09l1.49-.15v-.07a3.81,3.81,0,0,1-1.15-1A2.31,2.31,0,0,1,6.13,238.82Z" />
                                            <path class="cls-1"
                                                d="M2.88,234.66H5.69c.35,0,.67,0,1,0s.53,0,.7,0v-.07a3,3,0,0,1-.86-1,3.48,3.48,0,0,1,.7-4,4.73,4.73,0,0,1,3.16-.92,4.68,4.68,0,0,1,3.16.93,3.44,3.44,0,0,1,.71,4,3.14,3.14,0,0,1-.83,1v.1l1,.28v1H2.88Zm4.38-2.3a2,2,0,0,0,.74,1.8,4.26,4.26,0,0,0,2.31.5h.06a4.43,4.43,0,0,0,2.31-.5,2,2,0,0,0,.79-1.83,1.82,1.82,0,0,0-.8-1.63,4.18,4.18,0,0,0-2.33-.54C8.29,230.16,7.26,230.89,7.26,232.36Z" />
                                            <path class="cls-1"
                                                d="M10.34,219.26a4.41,4.41,0,0,1,3.13,1,3.57,3.57,0,0,1,1.11,2.77,3.71,3.71,0,0,1-.49,1.92,3.44,3.44,0,0,1-1.44,1.33,5,5,0,0,1-2.31.49,4.44,4.44,0,0,1-3.11-1A3.61,3.61,0,0,1,6.13,223a3.79,3.79,0,0,1,.5-1.94,3.35,3.35,0,0,1,1.43-1.33A4.93,4.93,0,0,1,10.34,219.26Zm0,6.16a4.1,4.1,0,0,0,2.29-.57,2.38,2.38,0,0,0,0-3.63,3.94,3.94,0,0,0-2.29-.58,3.82,3.82,0,0,0-2.26.58A2.07,2.07,0,0,0,7.26,223a2,2,0,0,0,.82,1.81A3.89,3.89,0,0,0,10.34,225.42Z" />
                                            <path class="cls-1"
                                                d="M6.13,213a3.06,3.06,0,0,1,.72-2.21,3,3,0,0,1,2.28-.74h5.3v1.32H9.22c-1.31,0-2,.61-2,1.82A2.08,2.08,0,0,0,8,215.06a3.81,3.81,0,0,0,2.19.52h4.22v1.34H6.28v-1.08l1.11-.2v-.07a2.49,2.49,0,0,1-.95-1.1A3.69,3.69,0,0,1,6.13,213Z" />
                                            <path class="cls-1"
                                                d="M14.43,197.33v6.06H3.58v-6.06h1.2V202H8.17V197.6H9.35V202h3.88v-4.69Z" />
                                            <path class="cls-1"
                                                d="M6.13,186.09A2.7,2.7,0,0,1,6.85,184a3.17,3.17,0,0,1,2.28-.69h5.3v1.32H9.19c-1.29,0-1.93.56-1.93,1.66a2,2,0,0,0,.68,1.7,3.3,3.3,0,0,0,2,.51h4.5v1.32H9.19c-1.29,0-1.93.55-1.93,1.67a1.83,1.83,0,0,0,.76,1.7,4.1,4.1,0,0,0,2.19.47h4.22V195H6.28V194l1.11-.2v-.07a2.48,2.48,0,0,1-.95-1,3.23,3.23,0,0,1-.31-1.37,2.43,2.43,0,0,1,1.37-2.5v-.07a2.56,2.56,0,0,1-1-1.11A3.38,3.38,0,0,1,6.13,186.09Z" />
                                            <path class="cls-1"
                                                d="M3.23,180a.84.84,0,0,1,.2-.54.86.86,0,0,1,.65-.23.86.86,0,0,1,.65.23.84.84,0,0,1,.2.54.82.82,0,0,1-.2.56.82.82,0,0,1-.65.23.82.82,0,0,1-.65-.23A.82.82,0,0,1,3.23,180Zm3.05-.65h8.15v1.34H6.28Z" />
                                            <path class="cls-1"
                                                d="M12.18,171.2a2,2,0,0,1,1.8.88,4.16,4.16,0,0,1,.6,2.37,7,7,0,0,1-.13,1.47,4.41,4.41,0,0,1-.38,1.08H12.85a7.57,7.57,0,0,0,.45-1.17,4.81,4.81,0,0,0,.2-1.41,2.54,2.54,0,0,0-.32-1.47,1,1,0,0,0-.88-.46.87.87,0,0,0-.54.17,1.64,1.64,0,0,0-.49.6,10.07,10.07,0,0,0-.55,1.24,12.75,12.75,0,0,1-.6,1.35,2.53,2.53,0,0,1-.74.86,1.76,1.76,0,0,1-1.09.31,1.79,1.79,0,0,1-1.59-.84A3.91,3.91,0,0,1,6.13,174a6.17,6.17,0,0,1,.15-1.39,8.58,8.58,0,0,1,.4-1.21l1.06.46a9.77,9.77,0,0,0-.36,1.08,4.43,4.43,0,0,0-.15,1.15,2.52,2.52,0,0,0,.26,1.26.86.86,0,0,0,1.3.23,2.08,2.08,0,0,0,.46-.66c.15-.31.32-.72.52-1.24a10.49,10.49,0,0,1,.59-1.32,2.32,2.32,0,0,1,.74-.83A1.83,1.83,0,0,1,12.18,171.2Z" />
                                            <path class="cls-1"
                                                d="M12.18,163.57a2,2,0,0,1,1.8.88,4.16,4.16,0,0,1,.6,2.37,7,7,0,0,1-.13,1.47,4.41,4.41,0,0,1-.38,1.08H12.85a7.57,7.57,0,0,0,.45-1.17,4.85,4.85,0,0,0,.2-1.41,2.6,2.6,0,0,0-.32-1.48,1,1,0,0,0-.88-.45.87.87,0,0,0-.54.17,1.64,1.64,0,0,0-.49.6,10.82,10.82,0,0,0-.55,1.24,12.75,12.75,0,0,1-.6,1.35,2.53,2.53,0,0,1-.74.86,1.76,1.76,0,0,1-1.09.31,1.78,1.78,0,0,1-1.59-.85,3.85,3.85,0,0,1-.57-2.21,6.17,6.17,0,0,1,.15-1.39,8.58,8.58,0,0,1,.4-1.21l1.06.46a9.12,9.12,0,0,0-.36,1.08,4.43,4.43,0,0,0-.15,1.15,2.52,2.52,0,0,0,.26,1.26.86.86,0,0,0,1.3.23,2.08,2.08,0,0,0,.46-.66c.15-.31.32-.72.52-1.24a10.49,10.49,0,0,1,.59-1.32,2.32,2.32,0,0,1,.74-.83A1.83,1.83,0,0,1,12.18,163.57Z" />
                                            <path class="cls-1"
                                                d="M3.23,160.75a.84.84,0,0,1,.2-.54.86.86,0,0,1,.65-.23.86.86,0,0,1,.65.23.87.87,0,0,1,0,1.11.85.85,0,0,1-.65.22.85.85,0,0,1-.65-.22A.84.84,0,0,1,3.23,160.75Zm3.05-.65h8.15v1.34H6.28Z" />
                                            <path class="cls-1"
                                                d="M10.34,150.22a4.41,4.41,0,0,1,3.13,1A3.59,3.59,0,0,1,14.58,154a3.71,3.71,0,0,1-.49,1.92,3.38,3.38,0,0,1-1.44,1.33,5,5,0,0,1-2.31.49,4.44,4.44,0,0,1-3.11-1A3.59,3.59,0,0,1,6.13,154a3.82,3.82,0,0,1,.5-1.95,3.35,3.35,0,0,1,1.43-1.33A4.93,4.93,0,0,1,10.34,150.22Zm0,6.16a4,4,0,0,0,2.29-.57,2.38,2.38,0,0,0,0-3.63,4,4,0,0,0-2.29-.58,3.89,3.89,0,0,0-2.26.58A2.09,2.09,0,0,0,7.26,154a2,2,0,0,0,.82,1.8A3.89,3.89,0,0,0,10.34,156.38Z" />
                                            <path class="cls-1"
                                                d="M6.13,144a3,3,0,0,1,.72-2.2A3,3,0,0,1,9.13,141h5.3v1.32H9.22c-1.31,0-2,.61-2,1.83A2.1,2.1,0,0,0,8,146a3.9,3.9,0,0,0,2.19.51h4.22v1.34H6.28V146.8l1.11-.2v-.07a2.49,2.49,0,0,1-.95-1.1A3.65,3.65,0,0,1,6.13,144Z" />
                                            <path class="cls-1"
                                                d="M12.18,133a2,2,0,0,1,1.8.88,4.16,4.16,0,0,1,.6,2.37,7,7,0,0,1-.13,1.47,4.65,4.65,0,0,1-.38,1.09H12.85a8.15,8.15,0,0,0,.45-1.18,4.81,4.81,0,0,0,.2-1.41,2.54,2.54,0,0,0-.32-1.47,1,1,0,0,0-.88-.46.94.94,0,0,0-.54.17,1.64,1.64,0,0,0-.49.6,10.82,10.82,0,0,0-.55,1.24,11.9,11.9,0,0,1-.6,1.35,2.57,2.57,0,0,1-.74.87,1.83,1.83,0,0,1-1.09.3A1.79,1.79,0,0,1,6.7,138a3.87,3.87,0,0,1-.57-2.21,6.11,6.11,0,0,1,.15-1.39,7.8,7.8,0,0,1,.4-1.21l1.06.45a9.77,9.77,0,0,0-.36,1.08,4.5,4.5,0,0,0-.15,1.16,2.5,2.5,0,0,0,.26,1.25.81.81,0,0,0,.72.43.85.85,0,0,0,.58-.19,2.2,2.2,0,0,0,.46-.66c.15-.31.32-.73.52-1.24a10.05,10.05,0,0,1,.59-1.33,2.32,2.32,0,0,1,.74-.83A1.91,1.91,0,0,1,12.18,133Z" />
                                            <path class="cls-1"
                                                d="M10.27,127.73a11.9,11.9,0,0,1-3.58-.54,9,9,0,0,1-3.11-1.7v-1.26a10.41,10.41,0,0,0,3.15,1.6,11.65,11.65,0,0,0,3.52.54,11.32,11.32,0,0,0,3.46-.54,10.92,10.92,0,0,0,3.12-1.58v1.24a8.56,8.56,0,0,1-3,1.7A11.57,11.57,0,0,1,10.27,127.73Z" />
                                            <path class="cls-1"
                                                d="M6.13,113.79a2.74,2.74,0,0,1,.72-2.07A3.17,3.17,0,0,1,9.13,111h5.3v1.32H9.19c-1.29,0-1.93.55-1.93,1.66a2,2,0,0,0,.68,1.69,3.3,3.3,0,0,0,2,.51h4.5v1.32H9.19c-1.29,0-1.93.56-1.93,1.67A1.84,1.84,0,0,0,8,120.92a4.19,4.19,0,0,0,2.19.47h4.22v1.34H6.28v-1.08l1.11-.2v-.08a2.4,2.4,0,0,1-.95-1A3.24,3.24,0,0,1,6.13,119a2.4,2.4,0,0,1,1.37-2.49v-.08a2.45,2.45,0,0,1-1-1.11A3.3,3.3,0,0,1,6.13,113.79Z" />
                                            <path class="cls-1"
                                                d="M3.23,107.65a.8.8,0,0,1,.2-.54.82.82,0,0,1,.65-.24.82.82,0,0,1,.65.24.8.8,0,0,1,.2.54.83.83,0,0,1-.2.56.86.86,0,0,1-.65.23.86.86,0,0,1-.65-.23A.83.83,0,0,1,3.23,107.65ZM6.28,107h8.15v1.34H6.28Z" />
                                            <path class="cls-1" d="M14.43,102.89v1.34H2.88v-1.34Z" />
                                            <path class="cls-1" d="M14.43,98.8v1.34H2.88V98.8Z" />
                                            <path class="cls-1"
                                                d="M3.23,95.35a.84.84,0,0,1,.2-.54.82.82,0,0,1,.65-.23.82.82,0,0,1,.65.23.86.86,0,0,1,0,1.1.86.86,0,0,1-.65.23.86.86,0,0,1-.65-.23A.83.83,0,0,1,3.23,95.35Zm3.05-.65h8.15V96H6.28Z" />
                                            <path class="cls-1"
                                                d="M10.34,84.82a4.45,4.45,0,0,1,3.13,1,3.61,3.61,0,0,1,1.11,2.78,3.71,3.71,0,0,1-.49,1.92,3.44,3.44,0,0,1-1.44,1.33,5.09,5.09,0,0,1-2.31.49,4.44,4.44,0,0,1-3.11-1,3.61,3.61,0,0,1-1.1-2.78,3.76,3.76,0,0,1,.5-1.94A3.29,3.29,0,0,1,8.06,85.3,4.93,4.93,0,0,1,10.34,84.82Zm0,6.15a4,4,0,0,0,2.29-.57,2.37,2.37,0,0,0,0-3.62,3.94,3.94,0,0,0-2.29-.58,3.82,3.82,0,0,0-2.26.58,2.06,2.06,0,0,0-.82,1.82,2,2,0,0,0,.82,1.81A3.9,3.9,0,0,0,10.34,91Z" />
                                            <path class="cls-1"
                                                d="M6.13,78.55a3.05,3.05,0,0,1,.72-2.2,3,3,0,0,1,2.28-.74h5.3v1.32H9.22c-1.31,0-2,.61-2,1.82A2.09,2.09,0,0,0,8,80.62a3.81,3.81,0,0,0,2.19.52h4.22v1.34H6.28V81.4l1.11-.2v-.08A2.41,2.41,0,0,1,6.44,80,3.74,3.74,0,0,1,6.13,78.55Z" />
                                            <path class="cls-1"
                                                d="M13.49,66.41a4.44,4.44,0,0,0-.05-.62,2.36,2.36,0,0,0-.12-.52h1a2.37,2.37,0,0,1,.18.61,5.06,5.06,0,0,1,.06.76,3.06,3.06,0,0,1-.22,1.18,1.77,1.77,0,0,1-.76.87,3,3,0,0,1-1.54.33H7.32v1.16H6.68L6.15,69l-1.73-.53v-.79H6.28V65.33h1v2.36H12a1.49,1.49,0,0,0,1.1-.36A1.24,1.24,0,0,0,13.49,66.41Z" />
                                            <path class="cls-1"
                                                d="M4.63,58.37A3.44,3.44,0,0,0,5.8,61.12a4.75,4.75,0,0,0,3.2,1,5.06,5.06,0,0,0,3.21-.93,3.38,3.38,0,0,0,1.17-2.81,7.15,7.15,0,0,0-.12-1.33,12.85,12.85,0,0,0-.3-1.26h1.18A6.59,6.59,0,0,1,14.48,57a9.77,9.77,0,0,1,.1,1.54,5.15,5.15,0,0,1-.68,2.77A4.24,4.24,0,0,1,12,63a7.3,7.3,0,0,1-3,.56,6.68,6.68,0,0,1-2.9-.6,4.54,4.54,0,0,1-2-1.77,5.43,5.43,0,0,1-.7-2.85,6.55,6.55,0,0,1,.64-3l1.15.55A8.35,8.35,0,0,0,4.81,57,4.79,4.79,0,0,0,4.63,58.37Z" />
                                            <path class="cls-1"
                                                d="M9,44.05a7,7,0,0,1,2.94.57,4.3,4.3,0,0,1,2,1.69,5,5,0,0,1,.7,2.74,5.18,5.18,0,0,1-.7,2.81,4.21,4.21,0,0,1-2,1.66A7.26,7.26,0,0,1,9,54.07a7.16,7.16,0,0,1-2.91-.55,4.28,4.28,0,0,1-1.95-1.66A5.22,5.22,0,0,1,3.41,49,5.09,5.09,0,0,1,4.1,46.3a4.34,4.34,0,0,1,2-1.68A7,7,0,0,1,9,44.05Zm0,8.57a5.41,5.41,0,0,0,3.23-.86,3.13,3.13,0,0,0,1.18-2.71,3.12,3.12,0,0,0-1.18-2.7A5.41,5.41,0,0,0,9,45.5a5.3,5.3,0,0,0-3.21.85A3.09,3.09,0,0,0,4.61,49a3.17,3.17,0,0,0,1.17,2.72A5.3,5.3,0,0,0,9,52.62Z" />
                                            <path class="cls-1"
                                                d="M19.49,37.93v4.18h-.64l-1.68-1.65c-.32-.32-.6-.58-.85-.8a3.13,3.13,0,0,0-.73-.51,1.78,1.78,0,0,0-.78-.16,1,1,0,0,0-.8.31,1.16,1.16,0,0,0-.27.8,2,2,0,0,0,.16.82,4.14,4.14,0,0,0,.45.71l-.53.41a4,4,0,0,1-.53-.85,2.72,2.72,0,0,1-.21-1.09,2.07,2.07,0,0,1,.45-1.4,1.56,1.56,0,0,1,1.23-.51,2.25,2.25,0,0,1,.93.2,4,4,0,0,1,.86.57c.28.24.58.53.9.85l1.3,1.32h0v-3.2Z" />
                                            <path class="cls-1"
                                                d="M6.13,33a3.38,3.38,0,0,1,.46-1.79,2.94,2.94,0,0,1,1.28-1.16,4.4,4.4,0,0,1,1.94-.4h.81v5.57a3.06,3.06,0,0,0,2.1-.7,2.47,2.47,0,0,0,.72-1.9,5.72,5.72,0,0,0-.14-1.37A8.64,8.64,0,0,0,12.88,30h1.17a6.28,6.28,0,0,1,.4,1.23,6.84,6.84,0,0,1,.13,1.45,4.22,4.22,0,0,1-.47,2,3.25,3.25,0,0,1-1.4,1.37,4.79,4.79,0,0,1-2.29.5,5.39,5.39,0,0,1-2.3-.45,3.33,3.33,0,0,1-2-3.16Zm1.1,0a1.92,1.92,0,0,0,.61,1.51,2.89,2.89,0,0,0,1.71.66V31.05a2.88,2.88,0,0,0-1.68.49A1.71,1.71,0,0,0,7.23,33Z" />
                                            <path class="cls-1" d="M10.3,20.2c1.2,0,2.4,0.2,3.5,0.5c1.1,0.4,2.1,0.9,3,1.7v1.2c-0.9-0.7-2-1.2-3.1-1.6s-2.3-0.5-3.5-0.5
                                                S7.8,21.7,6.7,22s-2.2,0.9-3.2,1.6v-1.3c0.9-0.8,2-1.3,3.1-1.7C7.8,20.3,9.1,20.2,10.3,20.2z"/>
                                            <path class="cls-1" d="M9.4,25.9v0.8h-5H3.9L4.1,27c0.1,0.1,0.2,0.2,0.2,0.3L4.9,28l-0.5,0.4L3,26.5v-0.6H9.4z"/>
                                        </g>
                                        <g id="X-Axis_Labels" data-name="X-Axis Labels">
                                            <g class="y-2051">
                                                <path class="cls-1"
                                                    d="M867.84,280.51h-6.28v-1l2.49-2.52c.47-.48.87-.9,1.2-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.26-1.19,1.5,1.5,0,0,0-.47-1.19,1.77,1.77,0,0,0-1.21-.4,2.85,2.85,0,0,0-1.22.24,5.75,5.75,0,0,0-1.07.66l-.62-.78a5.66,5.66,0,0,1,1.28-.8,4.05,4.05,0,0,1,1.63-.32,3,3,0,0,1,2.1.68,2.3,2.3,0,0,1,.77,1.85,3.28,3.28,0,0,1-.3,1.39,5.86,5.86,0,0,1-.85,1.29c-.37.43-.79.88-1.28,1.35l-2,1.95v.05h4.8Z" />
                                                <path class="cls-1"
                                                    d="M875.71,275.75a9.18,9.18,0,0,1-.32,2.63,3.35,3.35,0,0,1-1,1.68,2.77,2.77,0,0,1-1.83.58,2.56,2.56,0,0,1-2.38-1.3,7.07,7.07,0,0,1-.76-3.59,9.66,9.66,0,0,1,.31-2.64,3.29,3.29,0,0,1,1-1.67,2.75,2.75,0,0,1,1.82-.57,2.6,2.6,0,0,1,2.38,1.28A6.92,6.92,0,0,1,875.71,275.75Zm-5.13,0a7.44,7.44,0,0,0,.44,2.92,1.69,1.69,0,0,0,3.05,0,9.53,9.53,0,0,0,0-5.85,1.68,1.68,0,0,0-3.05,0A7.48,7.48,0,0,0,870.58,275.75Z" />
                                                <path class="cls-1"
                                                    d="M880.41,274.68a3.54,3.54,0,0,1,2.32.73,2.56,2.56,0,0,1,.87,2.07,3,3,0,0,1-.94,2.32,3.76,3.76,0,0,1-2.61.84,6.6,6.6,0,0,1-1.38-.13,3.59,3.59,0,0,1-1.08-.39V279a4.13,4.13,0,0,0,1.16.46,5.58,5.58,0,0,0,1.31.16,2.67,2.67,0,0,0,1.7-.5,1.82,1.82,0,0,0,.64-1.55,1.77,1.77,0,0,0-.57-1.42,2.66,2.66,0,0,0-1.81-.5,6.9,6.9,0,0,0-.85.06c-.32,0-.58.09-.77.14l-.59-.38.36-4.48h4.76v1.07h-3.76l-.23,2.75.62-.09A5.48,5.48,0,0,1,880.41,274.68Z" />
                                                <path class="cls-1"
                                                    d="M888.67,280.51h-1.15v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a5.24,5.24,0,0,1-.4.35l-.43.38-1,.82-.61-.78,2.57-2h1Z" />
                                            </g>
                                            <g class="y-2031">
                                                <path class="cls-1"
                                                    d="M503.8,280.51h-6.27v-1L500,277c.47-.48.88-.9,1.21-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.78,1.78,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a5.73,5.73,0,0,1,1.29-.8,4,4,0,0,1,1.63-.32,3.05,3.05,0,0,1,2.1.68,2.33,2.33,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.52,5.52,0,0,1-.85,1.29c-.36.43-.79.88-1.27,1.35l-2,1.95v.05h4.8Z" />
                                                <path class="cls-1"
                                                    d="M511.68,275.75a9.55,9.55,0,0,1-.32,2.63,3.29,3.29,0,0,1-1,1.68,2.73,2.73,0,0,1-1.83.58,2.55,2.55,0,0,1-2.37-1.3,7.07,7.07,0,0,1-.77-3.59,9.63,9.63,0,0,1,.32-2.64,3.35,3.35,0,0,1,1-1.67,2.77,2.77,0,0,1,1.82-.57,2.58,2.58,0,0,1,2.38,1.28A6.82,6.82,0,0,1,511.68,275.75Zm-5.14,0a7.23,7.23,0,0,0,.45,2.92,1.55,1.55,0,0,0,1.52,1,1.58,1.58,0,0,0,1.53-1,9.53,9.53,0,0,0,0-5.85,1.59,1.59,0,0,0-1.53-1,1.56,1.56,0,0,0-1.52,1A7.27,7.27,0,0,0,506.54,275.75Z" />
                                                <path class="cls-1"
                                                    d="M519.18,273.23a2.13,2.13,0,0,1-.54,1.53,2.78,2.78,0,0,1-1.43.75v.05a2.76,2.76,0,0,1,1.7.72,2.13,2.13,0,0,1,.56,1.53,2.82,2.82,0,0,1-.38,1.47,2.58,2.58,0,0,1-1.19,1,5.12,5.12,0,0,1-2.07.36,8.61,8.61,0,0,1-1.39-.11,4.5,4.5,0,0,1-1.22-.41V279a5.51,5.51,0,0,0,1.29.47,6.34,6.34,0,0,0,1.33.16,2.75,2.75,0,0,0,1.84-.5,1.73,1.73,0,0,0,.57-1.38,1.35,1.35,0,0,0-.7-1.28,4.08,4.08,0,0,0-2-.39h-.92v-1h.93a2.84,2.84,0,0,0,1.78-.49,1.62,1.62,0,0,0,.6-1.31,1.3,1.3,0,0,0-.46-1.07,2,2,0,0,0-1.27-.38,3.41,3.41,0,0,0-1.31.23,6.22,6.22,0,0,0-1.08.57l-.59-.8a5.32,5.32,0,0,1,1.26-.69,4.79,4.79,0,0,1,1.71-.29,3.19,3.19,0,0,1,2.21.66A2.19,2.19,0,0,1,519.18,273.23Z" />
                                                <path class="cls-1"
                                                    d="M525,280.51h-1.14v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a3.82,3.82,0,0,1-.39.35l-.43.38-1,.82-.61-.78,2.56-2h1Z" />
                                            </g>
                                            <g class="y-2021">
                                                <path class="cls-1"
                                                    d="M322,280.51h-6.27v-1l2.48-2.52c.47-.48.87-.9,1.21-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.8,1.8,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a5.52,5.52,0,0,1,1.29-.8,4,4,0,0,1,1.63-.32,3.05,3.05,0,0,1,2.1.68,2.33,2.33,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.52,5.52,0,0,1-.85,1.29,17.24,17.24,0,0,1-1.28,1.35l-2,1.95v.05H322Z" />
                                                <path class="cls-1"
                                                    d="M329.83,275.75a9.55,9.55,0,0,1-.32,2.63,3.36,3.36,0,0,1-1,1.68,2.75,2.75,0,0,1-1.83.58,2.55,2.55,0,0,1-2.37-1.3,7.07,7.07,0,0,1-.77-3.59,9.63,9.63,0,0,1,.32-2.64,3.28,3.28,0,0,1,1-1.67,2.77,2.77,0,0,1,1.82-.57,2.58,2.58,0,0,1,2.38,1.28A6.82,6.82,0,0,1,329.83,275.75Zm-5.14,0a7.23,7.23,0,0,0,.45,2.92,1.68,1.68,0,0,0,3,0,9.53,9.53,0,0,0,0-5.85,1.68,1.68,0,0,0-3,0A7.27,7.27,0,0,0,324.69,275.75Z" />
                                                <path class="cls-1"
                                                    d="M337.55,280.51h-6.27v-1l2.48-2.52c.47-.48.87-.9,1.21-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.78,1.78,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a5.73,5.73,0,0,1,1.29-.8,4,4,0,0,1,1.63-.32,3.05,3.05,0,0,1,2.1.68,2.33,2.33,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.22,5.22,0,0,1-.85,1.29,17.24,17.24,0,0,1-1.28,1.35l-2,1.95v.05h4.8Z" />
                                                <path class="cls-1"
                                                    d="M343,280.51h-1.15v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a5.24,5.24,0,0,1-.4.35l-.43.38-1,.82-.61-.78,2.57-2h1Z" />
                                            </g>
                                            <g class="y-2020">
                                                <path class="cls-1"
                                                    d="M261.23,280.51H255v-1l2.49-2.52c.46-.48.87-.9,1.2-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.78,1.78,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a5.73,5.73,0,0,1,1.29-.8,4,4,0,0,1,1.63-.32,3.05,3.05,0,0,1,2.1.68,2.33,2.33,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.22,5.22,0,0,1-.85,1.29c-.36.43-.79.88-1.27,1.35l-2,1.95v.05h4.81Z" />
                                                <path class="cls-1"
                                                    d="M269.1,275.75a9.55,9.55,0,0,1-.32,2.63,3.29,3.29,0,0,1-1,1.68,2.73,2.73,0,0,1-1.83.58,2.55,2.55,0,0,1-2.37-1.3,7.07,7.07,0,0,1-.77-3.59,9.63,9.63,0,0,1,.32-2.64,3.35,3.35,0,0,1,1-1.67,2.77,2.77,0,0,1,1.82-.57,2.58,2.58,0,0,1,2.38,1.28A6.82,6.82,0,0,1,269.1,275.75Zm-5.13,0a7.26,7.26,0,0,0,.44,2.92,1.55,1.55,0,0,0,1.52,1,1.58,1.58,0,0,0,1.53-1,9.53,9.53,0,0,0,0-5.85,1.59,1.59,0,0,0-1.53-1,1.57,1.57,0,0,0-1.52,1A7.29,7.29,0,0,0,264,275.75Z" />
                                                <path class="cls-1"
                                                    d="M276.83,280.51h-6.28v-1L273,277c.47-.48.87-.9,1.2-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.25-1.19,1.5,1.5,0,0,0-.46-1.19,1.78,1.78,0,0,0-1.21-.4,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a6,6,0,0,1,1.29-.8,4,4,0,0,1,1.63-.32,3.05,3.05,0,0,1,2.1.68,2.33,2.33,0,0,1,.77,1.85,3.14,3.14,0,0,1-.31,1.39,5.22,5.22,0,0,1-.85,1.29c-.36.43-.79.88-1.27,1.35l-2,1.95v.05h4.81Z" />
                                                <path class="cls-1"
                                                    d="M284.7,275.75a9.55,9.55,0,0,1-.32,2.63,3.29,3.29,0,0,1-1,1.68,2.73,2.73,0,0,1-1.83.58,2.55,2.55,0,0,1-2.37-1.3,7.07,7.07,0,0,1-.76-3.59,9.66,9.66,0,0,1,.31-2.64,3.35,3.35,0,0,1,1-1.67,2.77,2.77,0,0,1,1.82-.57,2.61,2.61,0,0,1,2.39,1.28A6.92,6.92,0,0,1,284.7,275.75Zm-5.13,0a7.26,7.26,0,0,0,.44,2.92,1.55,1.55,0,0,0,1.52,1,1.58,1.58,0,0,0,1.53-1,9.53,9.53,0,0,0,0-5.85,1.59,1.59,0,0,0-1.53-1,1.57,1.57,0,0,0-1.52,1A7.29,7.29,0,0,0,279.57,275.75Z" />
                                            </g>
                                            <g class="y-2011">
                                                <path class="cls-1"
                                                    d="M140.49,280.51h-6.28v-1L136.7,277c.47-.48.87-.9,1.2-1.27a5.08,5.08,0,0,0,.75-1.09,2.73,2.73,0,0,0,.26-1.19,1.5,1.5,0,0,0-.47-1.19,1.77,1.77,0,0,0-1.21-.4,2.85,2.85,0,0,0-1.22.24,5.75,5.75,0,0,0-1.07.66l-.62-.78a5.66,5.66,0,0,1,1.28-.8,4.05,4.05,0,0,1,1.63-.32,3,3,0,0,1,2.1.68,2.3,2.3,0,0,1,.77,1.85,3.28,3.28,0,0,1-.3,1.39,5.86,5.86,0,0,1-.85,1.29c-.37.43-.79.88-1.28,1.35l-2,1.95v.05h4.8Z" />
                                                <path class="cls-1"
                                                    d="M148.36,275.75a9.18,9.18,0,0,1-.32,2.63,3.29,3.29,0,0,1-1,1.68,2.72,2.72,0,0,1-1.82.58,2.56,2.56,0,0,1-2.38-1.3,7.07,7.07,0,0,1-.76-3.59,9.66,9.66,0,0,1,.31-2.64,3.35,3.35,0,0,1,1-1.67,2.78,2.78,0,0,1,1.83-.57,2.6,2.6,0,0,1,2.38,1.28A6.92,6.92,0,0,1,148.36,275.75Zm-5.13,0a7.44,7.44,0,0,0,.44,2.92,1.69,1.69,0,0,0,3.05,0,9.53,9.53,0,0,0,0-5.85,1.68,1.68,0,0,0-3.05,0A7.48,7.48,0,0,0,143.23,275.75Z" />
                                                <path class="cls-1"
                                                    d="M153.81,280.51h-1.14v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a3.82,3.82,0,0,1-.39.35l-.43.38-1,.82-.61-.78,2.56-2h1Z" />
                                                <path class="cls-1"
                                                    d="M160.65,280.51h-1.14v-6.64c0-.38,0-.69,0-.92s0-.47,0-.71a3.82,3.82,0,0,1-.39.35l-.43.38-1,.82-.61-.78,2.57-2h1Z" />
                                            </g>
                                        </g>
                                        <g id="Hollow_Bar_Labels" data-name="Hollow Bar Labels">
                                            <g class="target-2050">
                                                <path class="cls-1"
                                                    d="M789.6,12H783v-1.4l2.4-2.4c0.5-0.5,0.9-0.9,1.2-1.2c0.2-0.3,0.5-0.6,0.6-0.9c0.1-0.3,0.2-0.6,0.2-0.9
                                                    c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-0.4,0-0.7,0.1-1.1,0.2c-0.4,0.2-0.8,0.4-1.1,0.7L783,3.7
                                                    c0.3-0.2,0.6-0.5,0.9-0.7c0.3-0.2,0.7-0.4,1.1-0.5c0.5-0.1,1-0.2,1.5-0.2c0.6,0,1.1,0.1,1.6,0.3c0.4,0.2,0.8,0.5,1,0.9
                                                    c0.3,0.4,0.4,0.8,0.4,1.3c0,0.5-0.1,1-0.3,1.4c-0.2,0.5-0.5,0.9-0.9,1.3c-0.4,0.4-0.9,0.9-1.4,1.4l-1.2,1.1v0.1h4.1L789.6,12z" />
                                                <path class="cls-1" d="M797.7,7.2c0,0.9-0.1,1.8-0.3,2.6c-0.2,0.7-0.5,1.2-1.1,1.7c-0.6,0.4-1.2,0.6-1.9,0.6c-1,0.1-2-0.4-2.5-1.3
                                                    c-0.6-1.1-0.9-2.3-0.8-3.6c0-0.9,0.1-1.8,0.3-2.6c0.2-0.7,0.5-1.3,1-1.7c0.6-0.4,1.2-0.6,1.9-0.6c1-0.1,2,0.4,2.5,1.3
                                                    C797.5,4.7,797.8,6,797.7,7.2z M793.1,7.2c0,0.8,0.1,1.6,0.3,2.4c0.1,0.5,0.5,0.8,1,0.8c0.5,0,0.9-0.3,1-0.8
                                                    c0.2-0.8,0.3-1.6,0.3-2.4c0-0.8-0.1-1.6-0.3-2.4c-0.1-0.5-0.5-0.8-1-0.8c-0.5,0-0.9,0.4-1,0.8C793.1,5.6,793.1,6.4,793.1,7.2
                                                    L793.1,7.2z" />
                                                <path class="cls-1" d="M802.8,5.9c0.5,0,1.1,0.1,1.5,0.3c0.4,0.2,0.8,0.6,1.1,1c0.3,0.5,0.4,1,0.4,1.6c0,0.9-0.3,1.8-1,2.4
                                                    c-0.8,0.6-1.8,1-2.8,0.9c-0.5,0-0.9,0-1.4-0.1c-0.4-0.1-0.8-0.2-1.2-0.4V9.9c0.4,0.2,0.8,0.3,1.2,0.4c0.4,0.1,0.9,0.2,1.3,0.2
                                                    c0.5,0,1-0.1,1.4-0.4c0.3-0.3,0.5-0.7,0.5-1.1c0-1-0.6-1.4-1.9-1.4c-0.3,0-0.5,0-0.8,0.1l-0.7,0.1l-0.8-0.4l0.4-4.8h5.2v1.7h-3.4
                                                    l-0.2,1.9L802,6C802.3,6,802.5,5.9,802.8,5.9z" />
                                                <path class="cls-1"
                                                    d="M814,7.2c0,0.9-0.1,1.8-0.3,2.6c-0.2,0.7-0.5,1.2-1.1,1.7c-0.6,0.4-1.2,0.6-1.9,0.6c-1,0.1-2-0.4-2.5-1.3
                                                    c-0.6-1.1-0.9-2.3-0.8-3.6c0-0.9,0.1-1.8,0.3-2.6c0.1-0.7,0.5-1.2,1-1.7c0.6-0.4,1.2-0.6,1.9-0.6c1-0.1,2,0.4,2.5,1.3
                                                    C813.8,4.7,814.1,6,814,7.2z M809.4,7.2c0,0.8,0.1,1.6,0.3,2.4c0.1,0.5,0.5,0.8,1,0.8c0.5,0,0.9-0.3,1-0.8
                                                    c0.2-0.8,0.4-1.6,0.4-2.4c0-0.8-0.1-1.6-0.3-2.4c-0.1-0.5-0.5-0.8-1-0.8c-0.5,0-0.9,0.4-1,0.8C809.5,5.6,809.4,6.4,809.4,7.2z" />
                                                <path class="cls-1"
                                                    d="M825,12l-0.7-2.3h-3.5l-0.7,2.3H818l3.4-9.5h2.5l3.3,9.5H825z M823.8,8l-0.7-2.2c0-0.2-0.1-0.3-0.2-0.6
                                                    l-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c0,0.2-0.1,0.4-0.2,0.7c-0.1,0.3-0.1,0.5-0.2,0.7L822,5.8L821.3,8H823.8z" />
                                                <path class="cls-1"
                                                    d="M837.2,4.6c0.7,0,1.4,0.2,1.9,0.6c0.5,0.6,0.7,1.3,0.6,2V12h-2V7.8c0-1-0.4-1.6-1.1-1.6
                                                    c-0.4,0-0.9,0.2-1.1,0.6c-0.2,0.5-0.4,1.1-0.3,1.6V12h-2V7.8c0-1-0.4-1.6-1.1-1.6c-0.5,0-0.9,0.2-1.1,0.6
                                                    c-0.2,0.6-0.3,1.2-0.3,1.8V12h-2V4.7h1.5l0.3,0.9h0.1c0.2-0.4,0.5-0.6,0.9-0.8c0.4-0.2,0.8-0.3,1.2-0.2c0.5,0,0.9,0.1,1.3,0.3
                                                    c0.4,0.2,0.7,0.4,0.8,0.8h0.2c0.2-0.4,0.5-0.6,0.9-0.8C836.3,4.7,836.7,4.6,837.2,4.6z" />
                                                <path class="cls-1" d="M843.9,1.9v2.4c0,0.3,0,0.5,0,0.8c0,0.3,0,0.5,0,0.6h0.1c0.2-0.3,0.5-0.6,0.8-0.8c0.4-0.2,0.8-0.3,1.3-0.3
                                                    c0.8,0,1.5,0.4,2,1c0.6,0.8,0.8,1.8,0.8,2.8c0.1,1-0.2,2-0.8,2.8c-0.5,0.6-1.2,1-2,0.9c-0.4,0-0.9-0.1-1.2-0.3
                                                    c-0.3-0.2-0.5-0.4-0.8-0.6h-0.1l-0.3,0.8H842V1.9H843.9z M845.3,6.2c-0.4,0-0.8,0.1-1.1,0.5c-0.2,0.4-0.4,0.9-0.3,1.4v0.2
                                                    c0,0.6,0.1,1.1,0.3,1.6c0.2,0.4,0.7,0.6,1.1,0.6c0.4,0,0.8-0.2,1-0.6c0.3-0.5,0.4-1.1,0.4-1.6c0-0.6-0.1-1.1-0.4-1.6
                                                    C846.1,6.4,845.7,6.2,845.3,6.2z" />
                                                <path class="cls-1"
                                                    d="M851.6,1.9c0.3,0,0.5,0.1,0.8,0.2c0.2,0.2,0.4,0.5,0.3,0.8c0,0.3-0.1,0.6-0.3,0.8c-0.5,0.3-1.1,0.3-1.5,0
                                                    c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8C851,1.9,851.3,1.9,851.6,1.9z M852.6,4.7V12h-2V4.7H852.6z" />
                                                <path class="cls-1"
                                                    d="M857.9,10.5c0.2,0,0.4,0,0.6-0.1c0.2,0,0.4-0.1,0.6-0.2v1.5c-0.3,0.1-0.5,0.2-0.8,0.2
                                                    c-0.3,0.1-0.7,0.1-1,0.1c-0.4,0-0.8-0.1-1.2-0.2c-0.3-0.1-0.6-0.4-0.8-0.7c-0.2-0.5-0.3-1-0.3-1.5V6.2h-0.9V5.4l1.1-0.7l0.6-1.5
                                                    h1.2v1.5h2v1.5h-2v3.5c0,0.2,0.1,0.5,0.2,0.6C857.4,10.5,857.7,10.6,857.9,10.5z" />
                                                <path class="cls-1" d="M861.9,1.9c0.3,0,0.5,0.1,0.8,0.2c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.1-0.5,0.2-0.8,0.2
                                                    c-0.3,0-0.5-0.1-0.8-0.2c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8C861.3,1.9,861.6,1.9,861.9,1.9z M862.9,4.7V12h-2V4.7
                                                    H862.9z" />
                                                <path class="cls-1" d="M871.7,8.4c0.1,1-0.3,2-1,2.8c-0.7,0.7-1.6,1-2.6,1c-0.6,0-1.3-0.1-1.8-0.4c-0.5-0.3-1-0.7-1.2-1.3
                                                    c-0.3-0.6-0.5-1.3-0.5-2.1c-0.1-1,0.3-2,0.9-2.8c0.7-0.7,1.6-1,2.6-1c0.6,0,1.3,0.1,1.8,0.4c0.5,0.3,1,0.7,1.2,1.3
                                                    C871.6,6.9,871.7,7.6,871.7,8.4z M866.7,8.4c0,0.6,0.1,1.1,0.3,1.6c0.3,0.4,0.7,0.6,1.2,0.6c0.5,0,0.9-0.2,1.1-0.6
                                                    c0.3-0.5,0.4-1.1,0.3-1.6c0-0.6-0.1-1.1-0.3-1.6c-0.5-0.6-1.5-0.7-2.1-0.2c-0.1,0.1-0.1,0.1-0.2,0.2
                                                    C866.8,7.2,866.7,7.8,866.7,8.4L866.7,8.4z" />
                                                <path class="cls-1" d="M877.7,4.6c0.7,0,1.3,0.2,1.9,0.6c0.5,0.5,0.8,1.3,0.7,2V12h-2V7.8c0-0.4-0.1-0.8-0.3-1.2
                                                    c-0.2-0.3-0.5-0.4-0.9-0.4c-0.5-0.1-1,0.2-1.2,0.6c-0.2,0.6-0.4,1.2-0.3,1.8V12h-2V4.7h1.5l0.3,0.9h0.1c0.2-0.4,0.6-0.7,1-0.8
                                                    C876.9,4.7,877.3,4.6,877.7,4.6z" />
                                                <path class="cls-1"
                                                    d="M882.2,5.7c0-0.3,0.1-0.6,0.3-0.9c0.5-0.3,1.1-0.3,1.6,0c0.2,0.2,0.4,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.8
                                                    c-0.5,0.3-1.1,0.3-1.6,0C882.3,6.3,882.2,6,882.2,5.7z M882.2,11.1c0-0.3,0.1-0.6,0.3-0.9c0.5-0.3,1.1-0.3,1.6,0
                                                    c0.2,0.2,0.4,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9c-0.5,0.3-1.1,0.3-1.6,0C882.3,11.7,882.2,11.4,882.2,11.1z" />
                                            </g>
                                            <g class="net-zero">
                                                <path class="cls-6" d="M775.1,27.2h-1.4l-5.1-7.9h0c0,0.3,0,0.7,0.1,1.1s0,0.9,0,1.4v5.3h-1.1v-9.5h1.4l5.1,7.9l0,0
                                                    c0-0.1,0-0.4,0-0.6s0-0.6,0-0.9s0-0.6,0-0.9v-5.4h1.1L775.1,27.2z" />
                                                <path class="cls-6" d="M780.3,19.9c0.6,0,1.1,0.1,1.6,0.4c0.4,0.3,0.8,0.7,1,1.1c0.2,0.5,0.4,1.1,0.3,1.7v0.7h-4.9
                                                    c0,0.7,0.2,1.3,0.6,1.9c0.4,0.4,1,0.7,1.7,0.6c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.7-0.2,1.1-0.4v1c-0.3,0.2-0.7,0.3-1.1,0.4
                                                    c-0.4,0.1-0.8,0.1-1.3,0.1c-0.6,0-1.2-0.1-1.8-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.6-0.5-1.3-0.4-2c0-0.7,0.1-1.4,0.4-2
                                                    c0.2-0.5,0.6-1,1.1-1.3C779.1,20.1,779.7,19.9,780.3,19.9z M780.3,20.9c-0.5,0-1,0.2-1.3,0.5c-0.3,0.4-0.5,0.9-0.6,1.5h3.7
                                                    c0-0.5-0.1-1-0.4-1.5C781.3,21.1,780.8,20.9,780.3,20.9L780.3,20.9z" />
                                                <path class="cls-6" d="M787.5,26.4c0.2,0,0.4,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1v0.9c-0.2,0.1-0.4,0.1-0.5,0.2c-0.2,0-0.4,0.1-0.7,0.1
                                                    c-0.3,0-0.7-0.1-1-0.2c-0.3-0.1-0.6-0.4-0.8-0.7c-0.2-0.4-0.3-0.9-0.3-1.3V21h-1v-0.6l1-0.5l0.5-1.5h0.7v1.6h2.1V21h-2.1v4.1
                                                    c0,0.4,0.1,0.7,0.3,1C786.9,26.3,787.2,26.4,787.5,26.4z" />
                                                <path class="cls-6"
                                                    d="M798.8,27.2h-6.6v-0.9l5-7.5h-4.8v-1.1h6.3v0.9l-5,7.5h5.1L798.8,27.2z" />
                                                <path class="cls-6" d="M803.2,19.9c0.6,0,1.1,0.1,1.6,0.4c0.4,0.3,0.8,0.7,1,1.1c0.2,0.5,0.4,1.1,0.3,1.7v0.7h-4.9
                                                    c0,0.7,0.2,1.3,0.6,1.9c0.4,0.4,1,0.7,1.7,0.6c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.7-0.2,1.1-0.4v1c-0.3,0.2-0.7,0.3-1.1,0.4
                                                    c-0.4,0.1-0.8,0.1-1.3,0.1c-0.6,0-1.2-0.1-1.8-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.6-0.5-1.3-0.4-2c0-0.7,0.1-1.4,0.4-2
                                                    C800.9,20.6,802,19.9,803.2,19.9L803.2,19.9z M803.2,20.9c-0.5,0-1,0.2-1.3,0.5c-0.4,0.4-0.6,0.9-0.6,1.5h3.6
                                                    c0-0.5-0.1-1-0.4-1.5C804.2,21.1,803.7,20.9,803.2,20.9L803.2,20.9z" />
                                                <path class="cls-6" d="M811.3,19.9h0.4c0.1,0,0.3,0,0.4,0.1l-0.1,1.1l-0.4-0.1c-0.1,0-0.3,0-0.4,0c-0.4,0-0.7,0.1-1,0.3
                                                    c-0.3,0.2-0.6,0.5-0.8,0.8c-0.2,0.4-0.3,0.8-0.3,1.3v3.8H808v-7.2h1l0.1,1.3h0c0.2-0.4,0.5-0.7,0.9-1
                                                    C810.4,20.1,810.8,19.9,811.3,19.9z" />
                                                <path class="cls-6" d="M819.6,23.6c0.1,1-0.3,2-0.9,2.7c-0.6,0.7-1.5,1-2.4,1c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.3
                                                    c-0.3-0.6-0.5-1.3-0.4-2c-0.1-1,0.3-2,0.9-2.7c0.6-0.7,1.5-1,2.4-1c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.7,1.2,1.2
                                                    C819.5,22.2,819.7,22.9,819.6,23.6z M814.2,23.6c0,0.7,0.1,1.4,0.5,2c0.7,0.9,2,1,2.9,0.3c0.1-0.1,0.2-0.2,0.3-0.3
                                                    c0.4-0.6,0.5-1.3,0.5-2c0-0.7-0.1-1.4-0.5-2c-0.4-0.5-1-0.8-1.6-0.7c-0.6-0.1-1.2,0.2-1.6,0.7C814.4,22.2,814.2,22.9,814.2,23.6z
                                                    " />
                                                <path class="cls-6"
                                                    d="M829.9,27.2h-5.3v-9.5h5.3v1h-4.1v3h3.9v1h-3.9v3.4h4.1V27.2z" />
                                                <path class="cls-6" d="M839.5,19.9c0.7-0.1,1.3,0.2,1.8,0.6c0.5,0.6,0.7,1.3,0.6,2v4.6h-1.2v-4.6c0-1.1-0.5-1.7-1.5-1.7
                                                    c-0.6-0.1-1.1,0.2-1.5,0.6c-0.3,0.5-0.5,1.1-0.4,1.8v3.9h-1.2v-4.6c0-1.1-0.5-1.7-1.5-1.7c-0.6-0.1-1.1,0.2-1.5,0.7
                                                    c-0.3,0.6-0.5,1.3-0.4,1.9v3.7h-1.2v-7.1h1l0.2,1h0.1c0.2-0.4,0.5-0.7,0.9-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.9-0.1,1.8,0.4,2.2,1.2
                                                    h0.1c0.2-0.4,0.6-0.7,1-0.9C838.6,20,839.1,19.9,839.5,19.9z" />
                                                <path class="cls-6" d="M844.7,17.4c0.2,0,0.3,0.1,0.5,0.2c0.2,0.1,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.3,0.2-0.5,0.2
                                                    c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.4-0.2-0.6c-0.1-0.4,0.2-0.7,0.6-0.7C844.6,17.4,844.7,17.4,844.7,17.4z M845.3,20.1v7.1
                                                    h-1.2v-7.1H845.3z" />
                                                <path class="cls-6"
                                                    d="M852.2,25.2c0,0.6-0.3,1.2-0.8,1.6c-0.6,0.4-1.3,0.6-2.1,0.5c-0.4,0-0.9,0-1.3-0.1c-0.3-0.1-0.7-0.2-1-0.3
                                                    v-1.1c0.3,0.2,0.7,0.3,1,0.4c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0,0.9-0.1,1.3-0.3c0.3-0.2,0.4-0.5,0.4-0.8c0-0.2,0-0.3-0.1-0.5
                                                    c-0.1-0.2-0.3-0.3-0.5-0.4c-0.3-0.2-0.7-0.3-1-0.4c-0.4-0.2-0.8-0.3-1.2-0.5c-0.3-0.2-0.6-0.4-0.8-0.6c-0.5-0.8-0.3-1.8,0.5-2.4
                                                    c0.6-0.3,1.3-0.5,1.9-0.5c0.4,0,0.8,0,1.2,0.1c0.4,0.1,0.7,0.2,1.1,0.4l-0.4,0.9c-0.3-0.1-0.6-0.2-0.9-0.3
                                                    c-0.3-0.1-0.7-0.1-1-0.1c-0.4,0-0.8,0.1-1.1,0.2c-0.2,0.1-0.4,0.4-0.4,0.6c0,0.2,0.1,0.4,0.2,0.5c0.2,0.2,0.4,0.3,0.6,0.4
                                                    c0.3,0.1,0.6,0.3,1.1,0.5c0.4,0.1,0.8,0.3,1.2,0.5c0.3,0.2,0.5,0.4,0.7,0.6C852.1,24.6,852.2,24.9,852.2,25.2z" />
                                                <path class="cls-6"
                                                    d="M858.7,25.2c0,0.6-0.3,1.2-0.8,1.6c-0.6,0.4-1.3,0.6-2.1,0.5c-0.4,0-0.9,0-1.3-0.1c-0.3-0.1-0.7-0.2-1-0.3
                                                    v-1.1c0.3,0.2,0.7,0.3,1,0.4c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0,0.9-0.1,1.3-0.3c0.3-0.2,0.4-0.5,0.4-0.8c0-0.2-0.1-0.3-0.2-0.5
                                                    c-0.1-0.2-0.3-0.3-0.5-0.4c-0.3-0.2-0.7-0.3-1.1-0.5c-0.4-0.2-0.8-0.3-1.2-0.5c-0.3-0.2-0.6-0.4-0.8-0.6c-0.2-0.3-0.3-0.6-0.3-1
                                                    c0-0.6,0.3-1.1,0.7-1.4c0.6-0.3,1.3-0.5,1.9-0.5c0.4,0,0.8,0,1.2,0.1c0.4,0.1,0.7,0.2,1.1,0.4l-0.4,0.9c-0.3-0.1-0.7-0.2-1-0.3
                                                    c-0.3-0.1-0.7-0.1-1-0.1c-0.4,0-0.8,0.1-1.1,0.2c-0.4,0.2-0.5,0.7-0.3,1.1c0,0,0,0.1,0.1,0.1c0.2,0.2,0.4,0.3,0.6,0.4
                                                    c0.3,0.1,0.6,0.3,1.1,0.5c0.4,0.1,0.8,0.3,1.2,0.5c0.3,0.2,0.5,0.4,0.7,0.6C858.5,24.5,858.7,24.9,858.7,25.2z" />
                                                <path class="cls-6" d="M860.9,17.4c0.4,0,0.7,0.3,0.7,0.6c0,0,0,0.1,0,0.1c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.3,0.2-0.5,0.2
                                                    c-0.4,0-0.7-0.2-0.7-0.6c0,0,0-0.1,0-0.1c0-0.2,0.1-0.4,0.2-0.6C860.6,17.4,860.8,17.4,860.9,17.4z M861.5,20.1v7.1h-1.2v-7.1
                                                    H861.5z" />
                                                <path class="cls-6" d="M870,23.6c0.1,1-0.3,2-0.9,2.7c-0.6,0.7-1.5,1-2.4,1c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.3
                                                    c-0.3-0.6-0.5-1.3-0.4-2c-0.1-1,0.3-2,0.9-2.7c0.6-0.7,1.5-1,2.4-1c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.7,1.2,1.2
                                                    C869.9,22.2,870,22.9,870,23.6z M864.6,23.6c0,0.7,0.1,1.4,0.5,2c0.7,0.9,2,1,2.9,0.3c0.1-0.1,0.2-0.2,0.3-0.3
                                                    c0.4-0.6,0.5-1.3,0.5-2c0-0.7-0.1-1.4-0.5-2c-0.4-0.5-1-0.8-1.6-0.7c-0.6-0.1-1.2,0.2-1.6,0.7C864.7,22.2,864.5,22.9,864.6,23.6
                                                    L864.6,23.6z" />
                                                <path class="cls-6" d="M875.2,19.9c0.7-0.1,1.4,0.2,1.9,0.6c0.5,0.5,0.7,1.3,0.7,2v4.6h-1.2v-4.6c0-1.1-0.5-1.7-1.6-1.7
                                                    c-0.6-0.1-1.2,0.2-1.6,0.7c-0.3,0.6-0.5,1.3-0.4,1.9v3.7h-1.2v-7.1h0.9l0.2,1h0.1c0.2-0.4,0.6-0.7,1-0.8
                                                    C874.4,20,874.8,19.9,875.2,19.9z" />
                                                <path class="cls-6" d="M884.7,25.2c0,0.6-0.3,1.2-0.8,1.6c-0.6,0.4-1.3,0.6-2.1,0.5c-0.4,0-0.9,0-1.3-0.1c-0.3-0.1-0.7-0.2-1-0.3
                                                    v-1.1c0.3,0.2,0.7,0.3,1,0.4c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0,0.9-0.1,1.3-0.3c0.3-0.2,0.4-0.5,0.4-0.8c0-0.2-0.1-0.3-0.2-0.5
                                                    c-0.1-0.2-0.3-0.3-0.5-0.4c-0.3-0.2-0.7-0.3-1.1-0.5c-0.4-0.2-0.8-0.3-1.2-0.5c-0.3-0.2-0.6-0.4-0.8-0.6
                                                    c-0.5-0.8-0.3-1.8,0.5-2.4c0.6-0.3,1.3-0.5,1.9-0.5c0.4,0,0.8,0,1.2,0.1c0.4,0.1,0.7,0.2,1.1,0.4l-0.4,0.9
                                                    c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1c-0.4,0-0.8,0.1-1.1,0.2c-0.2,0.1-0.4,0.4-0.4,0.6c0,0.2,0.1,0.4,0.2,0.5
                                                    c0.2,0.2,0.4,0.3,0.6,0.4c0.3,0.1,0.6,0.3,1.1,0.5c0.4,0.1,0.8,0.3,1.2,0.5c0.3,0.2,0.5,0.4,0.7,0.6
                                                    C884.6,24.6,884.7,24.9,884.7,25.2z" />
                                            </g>
                                            <g class="target-2030">
                                                <path class="cls-1"
                                                    d="M440.3,12h-6.6v-1.4l2.4-2.4c0.5-0.5,0.9-0.9,1.2-1.2c0.2-0.3,0.5-0.6,0.6-0.9c0.1-0.3,0.2-0.6,0.2-0.9
                                                    c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-0.4,0-0.7,0.1-1.1,0.2c-0.4,0.2-0.8,0.4-1.1,0.7l-1.1-1.3
                                                    c0.3-0.2,0.6-0.5,0.9-0.7c0.3-0.2,0.7-0.4,1.1-0.5c0.5-0.1,1-0.2,1.5-0.2c0.6,0,1.1,0.1,1.6,0.3c0.4,0.2,0.8,0.5,1,0.9
                                                    c0.2,0.4,0.4,0.8,0.4,1.3c0,0.5-0.1,1-0.3,1.4c-0.2,0.5-0.5,0.9-0.9,1.3c-0.4,0.4-0.9,0.9-1.4,1.4l-1.2,1.1v0.1h4.1L440.3,12z" />
                                                <path class="cls-1" d="M448.4,7.2c0,0.9-0.1,1.8-0.3,2.6c-0.2,0.7-0.5,1.2-1.1,1.7c-0.6,0.4-1.2,0.6-1.9,0.6c-1,0.1-2-0.4-2.5-1.3
                                                    c-0.6-1.1-0.9-2.3-0.8-3.6c0-0.9,0.1-1.8,0.3-2.6c0.2-0.7,0.5-1.2,1-1.7c0.6-0.4,1.2-0.6,1.9-0.6c1-0.1,2,0.4,2.5,1.3
                                                    C448.2,4.7,448.5,6,448.4,7.2z M443.8,7.2c0,0.8,0.1,1.6,0.3,2.4c0.1,0.6,0.7,0.9,1.3,0.8c0.4-0.1,0.7-0.4,0.8-0.8
                                                    c0.2-0.8,0.3-1.6,0.3-2.4c0-0.8-0.1-1.7-0.3-2.5c-0.1-0.6-0.7-0.9-1.3-0.8c-0.4,0.1-0.7,0.4-0.8,0.8
                                                    C443.9,5.6,443.8,6.4,443.8,7.2z" />
                                                <path class="cls-1"
                                                    d="M456.2,4.6c0,0.6-0.2,1.2-0.6,1.6c-0.4,0.4-0.9,0.7-1.5,0.8v0c0.6,0,1.2,0.3,1.7,0.7
                                                    c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.6,2.1-1.6,2.5c-0.7,0.3-1.4,0.4-2.2,0.4c-0.9,0-1.9-0.2-2.7-0.5V9.9c0.4,0.2,0.8,0.4,1.3,0.5
                                                    c0.4,0.1,0.8,0.2,1.2,0.2c0.5,0.1,1.1-0.1,1.5-0.4c0.3-0.3,0.5-0.7,0.4-1.1c0-0.2-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.4-0.7-0.4
                                                    c-0.5-0.1-0.9-0.2-1.4-0.1h-0.7V6.3h0.7c0.4,0,0.9,0,1.3-0.2c0.3-0.1,0.5-0.2,0.6-0.4c0.1-0.2,0.2-0.4,0.2-0.7
                                                    c0-0.3-0.1-0.6-0.3-0.8c-0.3-0.2-0.6-0.3-1-0.3c-0.4,0-0.8,0.1-1.2,0.2c-0.3,0.1-0.6,0.3-0.8,0.4l-0.9-1.4
                                                    c0.4-0.3,0.8-0.5,1.3-0.7c0.6-0.2,1.2-0.3,1.8-0.3c0.8,0,1.6,0.2,2.3,0.6C455.9,3.3,456.2,4,456.2,4.6z" />
                                                <path class="cls-1" d="M464.7,7.2c0,0.9-0.1,1.8-0.3,2.6c-0.2,0.7-0.5,1.2-1.1,1.7c-0.6,0.4-1.2,0.6-1.9,0.6c-1,0.1-2-0.4-2.5-1.3
                                                    c-0.6-1.1-0.9-2.3-0.8-3.6c0-0.9,0.1-1.8,0.3-2.6c0.2-0.7,0.5-1.2,1-1.7c0.6-0.4,1.2-0.6,1.9-0.6c1-0.1,2,0.4,2.5,1.3
                                                    C464.5,4.7,464.8,6,464.7,7.2z M460,7.2c0,0.8,0.1,1.6,0.3,2.4c0.1,0.6,0.7,0.9,1.3,0.8c0.4-0.1,0.7-0.4,0.8-0.8
                                                    c0.2-0.8,0.3-1.6,0.3-2.4c0-0.8-0.1-1.7-0.3-2.5c-0.1-0.6-0.7-0.9-1.3-0.8c-0.4,0.1-0.7,0.4-0.8,0.8C460.1,5.6,460,6.4,460,7.2
                                                    L460,7.2z" />
                                                <path class="cls-1" d="M473.5,12h-2V4.2h-2.6V2.5h7.2v1.7h-2.6L473.5,12z" />
                                                <path class="cls-1"
                                                    d="M479.8,4.6c0.8-0.1,1.6,0.2,2.2,0.6c0.5,0.5,0.8,1.2,0.8,1.9V12h-1.4l-0.4-1l0,0c-0.3,0.4-0.6,0.6-1,0.9
                                                    c-0.4,0.2-0.9,0.3-1.4,0.3c-0.6,0-1.2-0.2-1.6-0.6c-0.5-0.5-0.7-1.1-0.6-1.7c0-0.7,0.3-1.3,0.8-1.7c0.7-0.4,1.6-0.6,2.4-0.6h1.3
                                                    V7.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.7,0.1-1,0.2c-0.3,0.1-0.7,0.2-1,0.4L477,5.2
                                                    c0.4-0.2,0.8-0.4,1.3-0.5C478.8,4.6,479.3,4.6,479.8,4.6z M480.8,8.6H480c-0.5,0-0.9,0.1-1.3,0.4c-0.3,0.2-0.4,0.5-0.4,0.8
                                                    c0,0.2,0.1,0.5,0.3,0.6c0.2,0.1,0.5,0.2,0.7,0.2c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.5-0.7,0.4-1.1L480.8,8.6z" />
                                                <path class="cls-1" d="M489.1,4.6h0.4c0.1,0,0.2,0,0.3,0l-0.1,1.9h-0.3c-0.1,0-0.2,0-0.3,0c-0.3,0-0.7,0.1-1,0.2
                                                    c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.3-0.3,0.7-0.3,1.1V12h-2V4.7h1.5l0.3,1.3h0.1c0.2-0.4,0.5-0.7,0.9-1
                                                    C488.2,4.7,488.6,4.6,489.1,4.6z" />
                                                <path class="cls-1"
                                                    d="M493.7,4.6c0.8,0,1.6,0.4,2.1,1.1h0l0.2-0.9h1.7V12c0.1,0.9-0.3,1.7-0.9,2.4c-0.8,0.6-1.7,0.9-2.7,0.8
                                                    c-0.5,0-1,0-1.4-0.1c-0.4-0.1-0.9-0.2-1.3-0.3v-1.6c0.9,0.4,1.9,0.6,2.8,0.6c1,0,1.5-0.5,1.5-1.6v-0.1c0-0.1,0-0.3,0-0.5
                                                    s0-0.3,0-0.4h-0.1c-0.2,0.4-0.5,0.6-0.9,0.8c-0.4,0.2-0.8,0.3-1.2,0.3c-0.8,0-1.5-0.3-2-1c-0.5-0.8-0.8-1.8-0.7-2.8
                                                    c-0.1-1,0.2-2,0.8-2.8C492.1,4.9,492.9,4.5,493.7,4.6z M494.3,6.2c-0.9,0-1.4,0.7-1.4,2.2s0.5,2.2,1.4,2.2c0.4,0,0.8-0.1,1.1-0.4
                                                    c0.3-0.4,0.4-1,0.4-1.5V8.4c0-0.6-0.1-1.2-0.4-1.7C495.2,6.4,494.8,6.2,494.3,6.2z" />
                                                <path class="cls-1" d="M503,4.6c0.9,0,1.7,0.3,2.4,0.9c0.6,0.7,0.9,1.5,0.9,2.4v1h-4.7c0,0.5,0.2,1,0.5,1.3
                                                    c0.4,0.3,0.8,0.5,1.3,0.5c0.4,0,0.9,0,1.3-0.1c0.4-0.1,0.8-0.2,1.2-0.4v1.5c-0.4,0.2-0.7,0.3-1.1,0.4c-0.5,0.1-0.9,0.1-1.4,0.1
                                                    c-0.7,0-1.3-0.1-1.9-0.4c-0.6-0.3-1-0.7-1.3-1.2c-0.3-0.6-0.5-1.4-0.5-2.1c0-0.7,0.1-1.5,0.4-2.1c0.3-0.5,0.7-1,1.2-1.3
                                                    C501.8,4.7,502.4,4.6,503,4.6z M503,6c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2h2.8c0-0.4-0.1-0.8-0.4-1.1
                                                    C503.7,6.1,503.4,6,503,6z" />
                                                <path class="cls-1"
                                                    d="M511.3,10.5c0.2,0,0.4,0,0.6-0.1c0.2,0,0.4-0.1,0.6-0.2v1.5c-0.3,0.1-0.5,0.2-0.8,0.2
                                                    c-0.3,0.1-0.7,0.1-1,0.1c-0.4,0-0.8-0.1-1.2-0.2c-0.3-0.1-0.6-0.4-0.8-0.7c-0.2-0.5-0.3-1-0.3-1.5V6.2h-1V5.4l1.1-0.7l0.6-1.5
                                                    h1.3v1.5h2v1.5h-2v3.5c0,0.2,0.1,0.5,0.2,0.6C510.8,10.5,511.1,10.5,511.3,10.5z" />
                                                <path class="cls-1"
                                                    d="M517.8,7.6h-3.9V6.8l1.4-1.4c0.3-0.3,0.5-0.5,0.7-0.7c0.1-0.2,0.3-0.3,0.4-0.5c0.1-0.2,0.1-0.3,0.1-0.5
                                                    c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.4,0.3-0.6,0.4l-0.6-0.8
                                                    c0.2-0.1,0.3-0.3,0.5-0.4c0.2-0.1,0.4-0.2,0.6-0.3c0.3-0.1,0.6-0.1,0.8-0.1c0.3,0,0.6,0.1,0.9,0.2c0.2,0.1,0.5,0.3,0.6,0.5
                                                    c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.3-0.3,0.5-0.5,0.8c-0.2,0.2-0.5,0.5-0.8,0.8l-0.7,0.7l0,0h2.4V7.6z" />
                                                <path class="cls-1"
                                                    d="M519.5,5.7c0-0.3,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.2,0.8-0.2c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.4,0.5,0.3,0.9
                                                    c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3C519.6,6.3,519.5,6,519.5,5.7z M519.5,11.1
                                                    c0-0.3,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.2,0.8-0.2c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.4,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9
                                                    c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3C519.6,11.7,519.5,11.4,519.5,11.1z" />
                                            </g>
                                            <g class="net-11-million">
                                                <path class="cls-6" d="M425.7,27.2h-1.1v-6.6c0-0.4,0-0.7,0-0.9s0-0.5,0-0.7c-0.1,0.1-0.3,0.3-0.4,0.4l-0.4,0.4l-1,0.8l-0.6-0.8
                                                    l2.6-2h1L425.7,27.2z" />
                                                <path class="cls-6" d="M432.5,27.2h-1.1v-6.6c0-0.4,0-0.7,0-0.9s0-0.5,0-0.7c-0.1,0.1-0.3,0.3-0.4,0.4l-0.4,0.4l-1,0.8l-0.6-0.8
                                                    l2.6-2h1L432.5,27.2z" />
                                                <path class="cls-6" d="M447.8,19.9c0.7-0.1,1.3,0.2,1.8,0.6c0.5,0.6,0.7,1.3,0.6,2v4.6h-1.1v-4.6c0-1.1-0.5-1.7-1.5-1.7
                                                    c-0.6-0.1-1.1,0.2-1.5,0.6c-0.3,0.5-0.5,1.1-0.4,1.7v3.9h-1.2v-4.6c0-1.1-0.5-1.7-1.5-1.7c-0.6-0.1-1.1,0.2-1.5,0.7
                                                    c-0.3,0.6-0.5,1.3-0.4,1.9v3.7H440v-7.1h1l0.2,1h0.1c0.2-0.4,0.5-0.7,0.9-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.9-0.1,1.8,0.4,2.2,1.2
                                                    h0.1c0.2-0.4,0.6-0.7,1-0.9C447,20.1,447.4,19.9,447.8,19.9z" />
                                                <path class="cls-6" d="M453.2,17.4c0.2,0,0.3,0.1,0.5,0.2c0.2,0.1,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.3,0.2-0.5,0.2
                                                    c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6C452.9,17.4,453.1,17.4,453.2,17.4z M453.8,20.1v7.1
                                                    h-1.2v-7.1H453.8z" />
                                                <path class="cls-6" d="M457.5,27.2h-1.2V17.1h1.2V27.2z" />
                                                <path class="cls-6" d="M461.1,27.2h-1.2V17.1h1.2V27.2z" />
                                                <path class="cls-6" d="M464.2,17.4c0.2,0,0.3,0.1,0.5,0.2c0.1,0.2,0.2,0.4,0.2,0.6c0,0.4-0.2,0.7-0.6,0.7c0,0-0.1,0-0.1,0
                                                    c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6C463.8,17.4,464,17.4,464.2,17.4z M464.8,20.1v7.1h-1.2
                                                    v-7.1H464.8z" />
                                                <path class="cls-6"
                                                    d="M473.5,23.6c0.1,1-0.3,2-0.9,2.7c-0.6,0.7-1.5,1-2.4,1c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.3
                                                    c-0.3-0.6-0.5-1.3-0.4-2c-0.1-1,0.3-2,0.9-2.7c0.6-0.7,1.5-1,2.4-1c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.7,1.2,1.2
                                                    C473.3,22.2,473.5,22.9,473.5,23.6z M468.1,23.6c0,0.7,0.1,1.4,0.5,2c0.7,0.9,2,1,2.9,0.3c0.1-0.1,0.2-0.2,0.3-0.3
                                                    c0.4-0.6,0.5-1.3,0.5-2c0-0.7-0.1-1.4-0.5-2c-0.4-0.5-1-0.8-1.6-0.7c-0.6-0.1-1.2,0.2-1.6,0.7C468.2,22.2,468,22.9,468.1,23.6z" />
                                                <path class="cls-6" d="M479,19.9c0.7-0.1,1.4,0.2,1.9,0.6c0.5,0.5,0.7,1.3,0.6,2v4.6h-1.1v-4.6c0-1.1-0.5-1.7-1.6-1.7
                                                    c-0.6-0.1-1.2,0.2-1.6,0.7c-0.3,0.6-0.5,1.2-0.5,1.9v3.7h-1.2v-7.1h1l0.2,1h0.1c0.2-0.4,0.6-0.7,1-0.8
                                                    C478.1,20,478.6,19.9,479,19.9z" />
                                                <path class="cls-6" d="M489.6,26.4c0.2,0,0.4,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1v0.9c-0.2,0.1-0.4,0.1-0.5,0.1c-0.2,0-0.4,0.1-0.7,0.1
                                                    c-0.3,0-0.7-0.1-1-0.2c-0.3-0.1-0.6-0.4-0.8-0.7c-0.2-0.4-0.3-0.9-0.3-1.3V21h-1v-0.6l1-0.5l0.5-1.5h0.7v1.6h2.1V21h-2.1v4.1
                                                    c0,0.4,0.1,0.7,0.3,1C489.1,26.3,489.4,26.4,489.6,26.4z" />
                                                <path class="cls-6"
                                                    d="M496.7,18.6c-0.9-0.1-1.8,0.3-2.4,1c-0.6,0.8-0.9,1.8-0.9,2.8c-0.1,1,0.2,2,0.8,2.8c0.6,0.7,1.5,1.1,2.5,1
                                                    c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.7-0.2,1.1-0.3v1c-0.4,0.1-0.7,0.2-1.1,0.3c-0.4,0.1-0.9,0.1-1.4,0.1c-0.9,0-1.7-0.2-2.4-0.6
                                                    c-0.6-0.4-1.2-1-1.5-1.7c-0.3-0.8-0.5-1.7-0.5-2.6c0-0.9,0.2-1.7,0.5-2.5c0.3-0.7,0.9-1.3,1.5-1.7c0.8-0.4,1.6-0.6,2.5-0.6
                                                    c0.9,0,1.8,0.2,2.6,0.5l-0.5,1c-0.3-0.1-0.7-0.3-1-0.4C497.5,18.6,497.1,18.6,496.7,18.6z" />
                                                <path class="cls-6"
                                                    d="M509.3,22.4c0,0.9-0.2,1.8-0.5,2.6c-0.3,0.7-0.8,1.3-1.5,1.7c-0.7,0.4-1.6,0.6-2.4,0.6
                                                    c-0.9,0-1.7-0.2-2.5-0.6c-0.7-0.4-1.2-1-1.5-1.7c-0.3-0.8-0.5-1.7-0.5-2.6c0-0.9,0.1-1.7,0.5-2.5c0.3-0.7,0.8-1.3,1.5-1.7
                                                    c0.7-0.4,1.6-0.6,2.5-0.6c0.8,0,1.7,0.2,2.4,0.6c0.7,0.4,1.2,1,1.5,1.7C509.2,20.7,509.4,21.5,509.3,22.4z M501.8,22.4
                                                    c-0.1,1,0.2,2,0.8,2.8c0.6,0.7,1.5,1.1,2.4,1c0.9,0.1,1.8-0.3,2.4-1c0.5-0.8,0.8-1.8,0.8-2.8c0.1-1-0.2-2-0.7-2.8
                                                    c-0.6-0.7-1.5-1.1-2.4-1c-0.9-0.1-1.8,0.3-2.4,1C502,20.5,501.8,21.4,501.8,22.4z" />
                                                <path class="cls-6"
                                                    d="M514.8,31.6h-3.7v-0.6l1.5-1.5l0.7-0.7c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.1-0.7
                                                    c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.2c-0.2,0-0.5,0-0.7,0.1c-0.2,0.1-0.4,0.2-0.6,0.4l-0.4-0.5
                                                    c0.2-0.2,0.5-0.3,0.8-0.5c0.3-0.1,0.6-0.2,1-0.2c0.4,0,0.9,0.1,1.2,0.4c0.3,0.3,0.5,0.7,0.4,1.1c0,0.3-0.1,0.6-0.2,0.8
                                                    c-0.1,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.5,0.5-0.7,0.8L512,31l0,0h2.8L514.8,31.6z" />
                                                <path class="cls-6" d="M519.1,19.9c0.6,0,1.1,0.1,1.6,0.4c0.4,0.3,0.8,0.7,1,1.1c0.2,0.5,0.4,1.1,0.3,1.7v0.7h-4.9
                                                    c0,0.7,0.2,1.3,0.6,1.9c0.4,0.4,1,0.7,1.7,0.6c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.7-0.2,1.1-0.4v1c-0.3,0.2-0.7,0.3-1.1,0.4
                                                    c-0.4,0.1-0.8,0.1-1.3,0.1c-0.6,0-1.2-0.1-1.8-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.6-0.5-1.3-0.4-2c0-0.7,0.1-1.4,0.4-2
                                                    c0.2-0.5,0.6-1,1.1-1.3C517.9,20.1,518.5,19.9,519.1,19.9z M519.1,20.9c-0.5,0-1,0.2-1.3,0.5c-0.3,0.4-0.5,0.9-0.6,1.5h3.6
                                                    c0-0.5-0.1-1-0.4-1.5C520.1,21.1,519.6,20.9,519.1,20.9L519.1,20.9z" />
                                            </g>
                                        </g>
                                        <g id="Solid_Bar_Labels" data-name="Solid Bar Labels">
                                            <g class="text-30-1">
                                                <path class="cls-5"
                                                    d="M268.62,51a2.13,2.13,0,0,1-.54,1.53,2.78,2.78,0,0,1-1.43.75v.05a2.76,2.76,0,0,1,1.7.72,2.13,2.13,0,0,1,.56,1.53,2.8,2.8,0,0,1-.39,1.48,2.52,2.52,0,0,1-1.19,1,5,5,0,0,1-2.06.36,8.61,8.61,0,0,1-1.39-.11,4.5,4.5,0,0,1-1.22-.41V56.78a5.51,5.51,0,0,0,1.29.47,6.26,6.26,0,0,0,1.33.16,2.77,2.77,0,0,0,1.84-.5,1.73,1.73,0,0,0,.57-1.38,1.37,1.37,0,0,0-.7-1.28,4.08,4.08,0,0,0-2-.39h-.92v-1H265a2.84,2.84,0,0,0,1.78-.49,1.62,1.62,0,0,0,.6-1.31A1.31,1.31,0,0,0,267,50a2,2,0,0,0-1.27-.38,3.41,3.41,0,0,0-1.31.23,6.22,6.22,0,0,0-1.08.57l-.59-.8a5.32,5.32,0,0,1,1.26-.69,4.79,4.79,0,0,1,1.71-.29,3.19,3.19,0,0,1,2.21.66A2.19,2.19,0,0,1,268.62,51Z" />
                                                <path class="cls-5"
                                                    d="M277.09,53.5a9.55,9.55,0,0,1-.32,2.63,3.29,3.29,0,0,1-1,1.68,2.73,2.73,0,0,1-1.83.58,2.56,2.56,0,0,1-2.37-1.29,7.14,7.14,0,0,1-.76-3.6,9.66,9.66,0,0,1,.31-2.64,3.35,3.35,0,0,1,1-1.67,2.77,2.77,0,0,1,1.82-.57,2.61,2.61,0,0,1,2.39,1.28A7,7,0,0,1,277.09,53.5Zm-5.13,0a7.26,7.26,0,0,0,.44,2.92,1.55,1.55,0,0,0,1.52,1,1.58,1.58,0,0,0,1.53-1,7.23,7.23,0,0,0,.46-2.93,7.24,7.24,0,0,0-.46-2.92,1.59,1.59,0,0,0-1.53-1,1.57,1.57,0,0,0-1.52,1A7.29,7.29,0,0,0,272,53.5Z" />
                                            </g>
                                            <g class="text-30-2">
                                                <path class="cls-5"
                                                    d="M329.23,47.5a2.09,2.09,0,0,1-.54,1.52,2.64,2.64,0,0,1-1.43.75v.06a2.7,2.7,0,0,1,1.69.71,2.1,2.1,0,0,1,.57,1.53,2.8,2.8,0,0,1-.39,1.48,2.48,2.48,0,0,1-1.19,1,5.06,5.06,0,0,1-2.07.36,7.54,7.54,0,0,1-1.38-.12,4.48,4.48,0,0,1-1.22-.4V53.3a5.49,5.49,0,0,0,1.29.46,5.68,5.68,0,0,0,1.33.16,2.72,2.72,0,0,0,1.84-.5,1.72,1.72,0,0,0,.56-1.37,1.37,1.37,0,0,0-.69-1.29,4.09,4.09,0,0,0-2-.39h-.91v-1h.93a2.73,2.73,0,0,0,1.77-.49,1.58,1.58,0,0,0,.61-1.3,1.3,1.3,0,0,0-.47-1.07,2,2,0,0,0-1.26-.38,3.51,3.51,0,0,0-1.32.22,7.46,7.46,0,0,0-1.07.58l-.59-.8a4.69,4.69,0,0,1,1.26-.69,4.57,4.57,0,0,1,1.71-.3,3.19,3.19,0,0,1,2.21.67A2.21,2.21,0,0,1,329.23,47.5Z" />
                                                <path class="cls-5"
                                                    d="M337.7,50a9.63,9.63,0,0,1-.32,2.64,3.3,3.3,0,0,1-1,1.67,2.74,2.74,0,0,1-1.83.59,2.57,2.57,0,0,1-2.37-1.3,7.08,7.08,0,0,1-.77-3.6,9.55,9.55,0,0,1,.32-2.63,3.24,3.24,0,0,1,1-1.67,2.72,2.72,0,0,1,1.82-.58,2.59,2.59,0,0,1,2.38,1.29A6.8,6.8,0,0,1,337.7,50Zm-5.14,0a7.29,7.29,0,0,0,.45,2.93,1.55,1.55,0,0,0,1.52,1,1.58,1.58,0,0,0,1.53-1,7.34,7.34,0,0,0,.45-2.94,7.24,7.24,0,0,0-.45-2.91,1.58,1.58,0,0,0-1.53-1,1.55,1.55,0,0,0-1.52,1A7.24,7.24,0,0,0,332.56,50Z" />
                                            </g>
                                            <g class="text-22">
                                                <path class="cls-5"
                                                    d="M138.38,94.94H132.1V94l2.49-2.51c.47-.48.87-.91,1.2-1.28a4.85,4.85,0,0,0,.75-1.09,2.72,2.72,0,0,0,.26-1.18,1.49,1.49,0,0,0-.47-1.19,1.72,1.72,0,0,0-1.21-.41,2.85,2.85,0,0,0-1.22.24,5.75,5.75,0,0,0-1.07.66l-.62-.78a5.64,5.64,0,0,1,1.28-.79,3.89,3.89,0,0,1,1.63-.33,3.07,3.07,0,0,1,2.1.68,2.35,2.35,0,0,1,.77,1.85,3.32,3.32,0,0,1-.3,1.4,6,6,0,0,1-.86,1.29c-.36.42-.78.87-1.27,1.34l-2,1.95v.06h4.8Z" />
                                                <path class="cls-5"
                                                    d="M146.46,94.94h-6.27V94l2.48-2.51c.47-.48.87-.91,1.21-1.28a4.85,4.85,0,0,0,.75-1.09,2.71,2.71,0,0,0,.25-1.18,1.48,1.48,0,0,0-.46-1.19,1.74,1.74,0,0,0-1.21-.41,2.93,2.93,0,0,0-1.23.24,5.7,5.7,0,0,0-1.06.66l-.63-.78a5.71,5.71,0,0,1,1.29-.79,3.86,3.86,0,0,1,1.63-.33,3.1,3.1,0,0,1,2.1.68,2.35,2.35,0,0,1,.77,1.85,3.18,3.18,0,0,1-.31,1.4,5.62,5.62,0,0,1-.85,1.29c-.36.42-.79.87-1.28,1.34l-2,1.95v.06h4.8Z" />
                                            </g>
                                        </g>
                                        <g id="Indicator_Lines" data-name="Indicator Lines">
                                            <g class="net-zero-line">
                                                <rect class="cls-1" x="885" y="33.7" width="0.5" height="178.5" />
                                                <path class="cls-7" d="M885.2,204c0,0-6.3,12-6.3,12h12.6L885.2,204" />
                                            </g>
                                            <g class="net-11-million-line">
                                                <rect class="cls-1" x="522.3" y="33.7" width="0.5" height="124.2" />
                                                <path class="cls-7" d="M522.5,154.5c0,0-6.3,12-6.3,12h12.6L522.5,154.5" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
chart_mobile: /images/uploads/pathway_towards_net_zero.svg
chart_notes: "1. tCO&lt;sub&gt;2&lt;&sol;sub&gt;e refers to tonnes of carbon
  dioxide equivalent, a standard unit used in greenhouse gas emissions
  accounting and reporting.<br/>

  \                            2. The 2010 baseline (as reflected in FY2011)
  has been revised to 22 million tCO<sub>2</sub>e as more refined company-level
  data sets and sub industry-level proxies have become available. Our 2030
  target (to be reported on in FY2031) is 11 million tCO<sub>2</sub>e,
  reflecting half of our 2010 baseline.

  \                            "
chart_legend:
  - chart_icon: /images/uploads/legend-dot-blue.svg
    legend: Historical <span class="tooltip" title="Our total portfolio emissions
      refer to the absolute greenhouse gas emissions (Scope 1 and Scope 2)
      associated with our equities portfolio, excluding private equity funds."
      data-title="Our total portfolio emissions refer to the absolute greenhouse
      gas emissions (Scope 1 and Scope 2) associated with our equities
      portfolio, excluding private equity funds.">Total Portfolio Emissions
  - chart_icon: /images/uploads/legend-dot-grey.svg
    legend: <span class="tooltip" title="Our total portfolio emissions refer to the
      absolute greenhouse gas emissions (Scope 1 and Scope 2) associated with
      our equities portfolio, excluding private equity funds." data-title="Our
      total portfolio emissions refer to the absolute greenhouse gas emissions
      (Scope 1 and Scope 2) associated with our equities portfolio, excluding
      private equity funds.">Total Portfolio Emissions</span> (Illustrative)
  - chart_icon: /images/uploads/legend-dot-green.svg
    legend: <span class="tooltip" title="Negative emissions can comprise
      compensation (i.e. carbon avoidance) and neutralisation (i.e. carbon
      removals) acquired through investments and carbon credits."
      data-title="Negative emissions can comprise compensation (i.e. carbon
      avoidance) and neutralisation (i.e. carbon removals) acquired through
      investments and carbon credits.">Negative Emissions</span> (Illustrative)
  - chart_icon: /images/uploads/legend-line-orange.svg
    legend: <img
      src="/web/images/pathway/transitioning-to-a-climate-positive-world/legend-line-orange.svg"
      alt="line-orange" class="line">Pathway for Net Portfolio Emissions
      (Illustrative)
    chart_icon_class: line-orange
  - chart_icon: /images/uploads/legend-triangle-purple.svg
    legend: Calendar year emissions data and targets are reported in the subsequent
      financial year
    chart_icon_class: triangle
after_chart: Our estimated <span class="tooltip" title="This metric is also
  known as Total Carbon Emissions (tCO<sub>2</sub>e) within the TCFD
  Supplemental Guidance for the Financial Sector. It reflects the absolute GHG
  emissions (Scope 1 and Scope 2) associated with our portfolio, expressed in
  tCO<sub>2</sub>e." data-title="This metric is also known as Total Carbon
  Emissions (tCO<sub>2</sub>e) within the TCFD Supplemental Guidance for the
  Financial Sector. It reflects the absolute GHG emissions (Scope 1 and Scope 2)
  associated with our portfolio, expressed in tCO<sub>2</sub>e.">Total Portfolio
  Emissions</span> have remained largely flat over the <span class="tooltip"
  title="Due to the time lag in reported emissions data, the impact of COVID-19
  on some of our portfolio companies' emissions is not yet reflected."
  data-title="Due to the time lag in reported emissions data, the impact of
  COVID-19 on some of our portfolio companies' emissions is not yet
  reflected.">year</span>.
discover_more:
  - title: "Investing for Impact and Returns "
    link: /pathways-to-sustainability/investing-for-impact-and-returns.html
    thumbnail: /images/uploads/dm-investing-for-impact.jpg
  - link: /pathways-to-sustainability/enabling-a-sustainable-company.html
    title: " Enabling a Sustainable Company"
    thumbnail: /images/uploads/dm-enabling-a-sustainable-company.jpg
  - title: "Collaborating for Progress "
    link: /pathways-to-sustainability/collaborating-for-progress.html
    thumbnail: /images/uploads/dm-collaborating-for-progress.jpg
---
