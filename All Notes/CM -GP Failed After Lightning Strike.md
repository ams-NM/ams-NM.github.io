---
system: "[[Sys.AWOS]]"
work-order:  614658
type: CM
report-date: "[[2023-06-01 Thu]]"
complete-date: 
tags:
next-step: 
---
# Problem 🐞
## Preparation
### When
- [ ] NOTAM ?
### How
- [ ] Plan in detail
### What
- [ ] Stuffs needed
### Who

## Improvements
- [ ] Similar issues for other parts of the system?

## Log
###  [[2023-06-01 Thu]]
-   7:00 HD reported GP shutdown during thunderstorm and could not be turned on.
-   8:00 [[Aaron]] arrived.
-   Turned on GP with `Monitor bypass` ON
-   CLR Width RF: around 85% on both Tx and Monitors.
-   CRS Width DDM: around 15.7% on Tx 2. (Later found out that there has been 1.8% difference between the 2 Tx, and they both dropped about 1.4%)
-   10:00 ~ 18:00 on site
-   Output power measurements as [[PM.ILS.3m🛬]], all normal.
-   Cable and antenna:
-   Loop (A1,2,3 - M1,2,3): Magnitude & Phase
-   A1,2,3 and M1,2,3: VSWR were close to 1. (readings: 1.0x)
###   [[2023-06-02 Fri]]
-   11:00 ~ 18:00 on site
-   Checked DC voltages on the back panel, nothing significant was found
-   Replaced the SOAC with a repaired one
-   Monitors showed unmeaningful data, all out of limits.
###   [[2023-06-03 Sat]]
-   11:00 ~ 18:30 on site ([[Stanley]] and [[Aaron]] )
-   Confirmed that MODPA Course module has bad contact issue.
-   Tx2 was not found on ADRACS software
-   Or Course line readings all 0 on Tx2.
-   Resumed normal after pressing the module with force.
###   [[2023-06-06 Tue]]
-   Joined MS Teams net meeting with [[Thales]] Beijing Branch.
###   [[2023-06-14 Wed]]
-   [[Thales]] engineer came at about 4:00 pm.
###   [[2023-06-15 Thu]]
-   [[Thales]] engineer continued his diagnosis.
-   Finally, there was no progress on this problem.
