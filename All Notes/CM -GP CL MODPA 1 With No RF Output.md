---
dg-publish: true
system: "[[Sys.AWOS]]"
work-order:  592963
type: CM
report-date: "[[2022-05-16 Mon]]"
complete-date: 
tags:
  - "[[Sys.AWOS#LT31]]"
fileClass: [cm]
---

# Pending Issues
- [ ] `CRS Width RF` shifts to `18.4%` after F.C.
- [ ] Tx2 ClR RF drops to 84% alarm when Tx1 is off.
# Problem
- During 3-Monthly PM measuring CL & CLR power, following problems were found:
	1. Tx1 CL RF level was very low, which caused alarm.
	2.  Tx2 CLR RF level drops to 84%, which triggers alarm too, when Tx1 shuts down.
	3. CLR RF level was unstable shifts from 98% - 93% which triggers warning.
## Preparation
### Who
- [[Eric]], [[Hin]], [[Aaron]]

## Log
### [[2022-05-16 Mon]]
- During 3-Monthly PM measuring CL & CLR power, Tx1 CL RF level was very low.
- And we found that Tx2 CLR RF level drops to 84% which causes alarm.
- Replaced the CL MODPA 1, and adjusted the dip switches accordingly. 
- Monitors showed normal on Tx1.
- Since a spare MODPA needs a flight check before it can be put on air.
- E&M requested to put only Tx2 on air. So we arranged the following setup:
	- Put Tx2 on air.
	- Modify CL CSB1 RF level from 2.93w to 0w on Tx1. In case of an alarm occurs on Tx2 following a changeover to Tx1, and Tx1 would be on alarm state which shuts down.
	- Set "Standby Monitor Bypass On".
### [[2022-05-18 Wed]]
- Confirmed that the original MODPA Course 1 was faulty with no RF output, by restoring it to its slot before the replacement. 
- Tried to follow the `RF Phasing` steps on the manual:
	- With `Field Test Set` and portable GP antenna putting on the seawall behind LLZ farfield antenna.
	- Modifying Course phase but failed to get 0 DDM reading on Field Test Set.
### [[2022-05-19 Thu]]
- Adjusted Tx1 parameters in order to make the readings on the monitors close to those for Tx2.
### [[2022-05-22 Sun]]
- [[✈️Flight Check]] special for GP Tx1.