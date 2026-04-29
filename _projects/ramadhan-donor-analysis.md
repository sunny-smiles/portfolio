---
layout: project
title: "Ramadhan Donor Segmentation & Retention Analysis"
excerpt: "Developed a Power BI dashboard during a data analyst internship to evaluate donor behavior, tracking retention, churn, and acquisition patterns across Ramadhan cycles in 2025 and 2026."
date: 2026-03-12
tags:
  - Power BI
  - Internship
thumbnail: /assets/images/projects/ramadhan-donor-thumb.png
---

## Background

Ramadhan represents the peak donation period for Indonesian charitable organizations. While these seasonal donors form a critical segment, understanding their long-term loyalty is vital for sustainable fundraising.

During my internship, I developed a donor segmentation dashboard to evaluate year-over-year retention and identify migration patterns between different donation windows. The analysis tracks 4,081 donors in 2025 and 2,329 donors in 2026 across three distinct periods: Before Ramadhan (_Sebelum_), During Ramadhan (_Saat_), and After Ramadhan (_Setelah_).

## Data Architecture

This project utilized an existing organizational star schema that mapped the entire donation and program management ecosystem. The primary technical challenge involved navigating over 30 interrelated tables to identify the correct fields for segmentation without disrupting the established architecture.

![Power BI data model showing star schema for donation transactions](/portfolio/assets/images/projects/ramadhan-model.png)
_The organizational star schema. The custom RamadhanDate table acts as a bridge to classify transaction dates into specific timing windows._

---

## Core Metrics Defined

Four primary Key Performance Indicators (KPIs) were established using custom DAX measures to track donor migration accurately.

| Metric                       | Definition                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------- |
| **% Loyal Saat Ramadhan**    | Donors who gave during Ramadhan in both 2025 and 2026.                          |
| **% Loyal Sebelum Ramadhan** | Donors who gave before Ramadhan in both years.                                  |
| **% Pindah Saat ke Sebelum** | Donors who gave during Ramadhan in 2025 but shifted to before Ramadhan in 2026. |
| **% Pindah Sebelum ke Saat** | Donors who gave before Ramadhan in 2025 but shifted to during Ramadhan in 2026. |

---

## Dashboard Overview

![Accrual-basis table and fundraising breakdown campaign](/portfolio/assets/images/projects/ramadhan-table.png)
_Accrual-basis table and fundraising breakdown for the campaign._

---

## Key Analytical Findings

### 1. Significant Volume Decline

Total donor participation dropped by 43%, falling from 4,081 in 2025 to 2,329 in 2026. This headline metric represents the primary strategic challenge for the fundraising team.

### 2. Low Retention Rates

Only 11.88% of donors who gave during Ramadhan 2025 repeated their contribution during the same window in 2026. Conversely, the "Before Ramadhan" segment demonstrated a stronger retention rate of 24.34%. This indicates that habitual early givers are more consistent than peak-period donors. Furthermore, 15.25% of donors shifted from early giving to peak-season giving, outweighing the 5.37% who moved in the opposite direction.

### 3. Shift in Timing Composition

The distribution of donations changed significantly year-over-year.

- **2025 Distribution:** Saat Ramadhan (80.25%), Sebelum Ramadhan (8.36%), Setelah Ramadhan (11.39%)
- **2026 Distribution:** Saat Ramadhan (67.75%), Sebelum Ramadhan (32.25%)

The pre-Ramadhan segment nearly quadrupled its share. This shift suggests that early outreach campaigns in 2026 successfully captured a larger portion of the donor base ahead of the peak window.

### 4. High Dependency on New Donors

![Donut chart showing new versus returning donor split in 2026](/portfolio/assets/images/projects/ramadhan-segmen.png)
_Donor status breakdown for 2026. Nearly 66% of the base consists of newly acquired donors, highlighting a significant retention gap._

A cross-tabulation of donor status revealed that 1,535 out of 2,329 total donors in 2026 were entirely new acquisitions. This 65.91% new donor rate highlights a heavy reliance on annual acquisition to offset severe churn among existing contributors. Of the returning donors, only 384 of the original 3,275 peak-season donors from 2025 gave again during the same window in 2026.

### 5. Heavy Campaign Concentration

Transaction data showed extreme reliance on a single initiative. The "Bag of Happiness" campaign accounted for Rp17,904,563 (96.64%) of total fundraising revenue and 98.73% of all transaction volume across both personal and community donor segments.

---

## Strategic Implications

The analysis yielded four actionable recommendations for organizational strategy.

1. **Prioritize Retention Programs.** With same-window loyalty near 12%, implementing a structured post-Ramadhan engagement program can significantly improve year-over-year retention and reduce the constant pressure for new acquisition.
2. **Invest in Early Outreach.** The higher loyalty rate among pre-Ramadhan donors suggests these individuals possess stronger repeat-giving habits. Expanding early campaigns may yield a higher long-term lifetime value.
3. **Address the Acquisition-Churn Imbalance.** While acquiring nearly 66% new donors indicates a healthy top-of-funnel strategy, the overall 43% volume drop proves that acquisition alone cannot sustain long-term growth without fixing the underlying churn.
4. **Mitigate Concentration Risk.** Generating over 96% of revenue from a single campaign creates operational vulnerability. Diversifying program offerings during the peak season can increase total fundraising capacity and distribute risk.

---

## Tools & Skills Demonstrated

`Power BI` · `DAX` · `Data Modeling` · `Existing Schema Navigation` · `Donor Retention Analysis` · `Excel`
