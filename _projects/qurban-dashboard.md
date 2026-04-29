---
layout: project
title: "Qurban Fundraising Performance & Donor Analysis"
excerpt: "Developed a comprehensive Power BI tracking system for annual Qurban fundraising, analyzing revenue targets, product segments, and long-term donor retention from 2020 to 2026."
date: 2026-03-19
tags:
  - Power BI
  - Internship
thumbnail: /assets/images/projects/qurban-thumb.png
---

## Overview

The annual Qurban campaign is a critical fundraising period requiring precise tracking of revenue and donor engagement. This project provides a full-scale monitoring dashboard to evaluate collection progress (Penghimpunan) against organizational targets. The core analysis focuses on 2025 campaign performance while incorporating forward-looking 2026 metrics and a historical donor tracking matrix spanning 2020 to 2026.

---

## Data Architecture and Custom Sorting

Rather than building an isolated dataset, this dashboard integrates directly into the organization's existing enterprise data model. I expanded the schema by appending specialized tables dedicated to Qurban collection and target tracking.

![Power BI complex data model](/portfolio/assets/images/projects/qurban-model.png)
_The expanded relational data model integrating new Qurban tracking tables into the existing organizational schema._

A specific technical challenge emerged when designing the collection matrix visuals. Power BI defaults to alphabetical or value-based sorting, which disrupted the required reporting hierarchy for the table headers. I resolved this limitation by injecting invisible UNICHAR characters into the header DAX measures. This technique successfully forced a custom structural sort without displaying arbitrary numbers or letters in the final presentation.

---

## Campaign Performance and Segment Analysis

![Matrix table showing 2025 collection against targets](/portfolio/assets/images/projects/qurban-fund-2025.png)
_The primary collection matrix tracking 2025 revenue (PHP) and shares against 2024 actuals and 2025 targets, supplemented by segment breakdowns._

The main collection matrix tracks 2025 revenue and animal shares across major segments. Categories such as INGO and CRM drive significant portions of the funding. Supplementary pie charts provide a granular breakdown of the miscellaneous segments to ensure all revenue streams are accurately attributed.

![Horizontal stacked bars showing percentage of PHP by branch](/portfolio/assets/images/projects/qurban-segment-2025.png)
_Geographic and departmental performance monitored via horizontal stacked bar charts._

Regional performance is visualized through proportion-based horizontal bars. This setup confirms the percentage of contributions across various national branches, allowing management to quickly identify leading regions and areas requiring additional marketing support.

---

## Product Trends and Transaction Volume

![Bar charts comparing Capaian PHP and Share by Product Type](/portfolio/assets/images/projects/qurban-produk-2025.png)
_Revenue and share breakdown by specific product offerings, comparing 2024 actuals, 2025 actuals, and 2025 targets._

Analyzing the product types reveals clear donor preferences. Custom Sapi and Early Bird offerings consistently generate the highest revenue and share volumes.

![Transaction comparisons by year and month](/portfolio/assets/images/projects/qurban-waktu-2025.png)
_Transaction volume comparisons highlighting seasonal spikes and donor type distributions between 2024 and 2025._

The transaction comparison modules validate overall volume stability between 2024 and 2025. The monthly breakdown charts capture the steep trajectory of incoming donations as the Qurban holiday approaches, which is vital for operational and procurement planning.

---

## Year-over-Year Growth Tracking

The dashboard features dedicated modules for real-time Year-over-Year (YoY) growth tracking across different campaign phases.

![YoY growth cards showing 2025 metrics](/portfolio/assets/images/projects/qurban-slicer-2025.png)
_Growth tracking view for 2025 displaying strong positive trends in transactions and revenue._

![YoY growth cards showing 2026 metrics](/portfolio/assets/images/projects/qurban-slicer-2026.png)
_Forward-looking tracking view configured for early 2026, monitoring initial pacing metrics._

By isolating specific months and dates, the fundraising team can compare identical campaign days across different years. The 2025 view captures high-growth peak periods, while a separate view is already configured to monitor early 2026 transactions, providing immediate pacing metrics for the upcoming season.

---

## Long-Term Donor History

![Table showing donor contributions from 2020 to 2026](/portfolio/assets/images/projects/qurban-table-donor.png)
_Summary matrix tracking individual donor consistency and total contributions over a seven-year span._

To understand donor loyalty, a comprehensive summary matrix tracks individual contributions from 2020 through 2026. This longitudinal view is essential for identifying highly loyal recurring donors and flagging high-value contributors who may have lapsed, enabling targeted retention efforts.

---

## Strategic Implications

The integration of product performance metrics and long-term donor tracking provides clear strategic value. The fundraising team can leverage the historical donor matrix to initiate targeted early-bird campaigns tailored to high-value institutional clients. Furthermore, the real-time YoY pacing metrics empower regional managers to adjust their digital marketing and outreach strategies weeks before the actual Qurban deadline.

---

## Tools & Skills Demonstrated

`Power BI` · `DAX` · `Data Modeling` · `Power Query` · `Custom Hierarchy Sorting`
