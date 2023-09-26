---
dg-publish: true
system: "[[Sys.DVOR]]"
work-order:  598196
type: TS
report-date: "[[2022-08-19 Fri]]"
complete-date: 
tags:
  - "[[Sys.DVOR]]"
---

# Problem 
- Unlike [[Sys.ILS]], there wasn't a local port extension in TCD room.
- We had extended the local port from DVOR station to fiber rack in equipment room some day earlier. Put fiber MOXAs on both ends, and verified it worked.
- Now we need to extend it to TCD room.
## Preparation
### When
### How
1. 10 meters fiber patch is not long enough. 
2. Put the MOXA somewhere near the door, and use a LAN cable to extend RS232 wires to DVOR PC.
### What
- [x] Fiber patches - 10 meter. (Could not find a longer one on Maximo). PR: 1000018687, -[[2022-10-01 Sat]]
- [x] LAN cable -Roll. PR: 1000018688, -[[2022-11-01 Tue]]
- [x] DB9 RS232 adapter with cable  #598196.IMO (requested [[2022-10-10 Mon]], received [[2022-11-07 Mon]])  

- Requested: [[2022-08-22 Mon]]
```
PR: 1000018688
101.MC.884016914/10
1010101
COMMSCOPE CAT6 4 PAIR SOLID LAN CABLE 1000FT/ROLL # 884016914/10

PR: 1000018687
102.MC.RS-536-6670
1021901
SC-SC PATCHLEAD OS1 DUPLEX YELLOW 10M #RS 536-6670
```

## Log
- [[2022-11-08 Tue]] Connected to the MOXA with a 5-meter DB9 RS232 extension cable. Tested ok with the ADRACS.
- 2022-Sep, extended MOXA from fiber rack to SMR desk with a 10-meter fiber patch.

