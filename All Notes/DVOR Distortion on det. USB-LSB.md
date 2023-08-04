---
dg-publish: true
system: "[[Sys.DVOR]]"
work-order: 587406
type: CM
report-date: "[[2022-03-03 Thu]]"
complete-date: 
tags:
  - "[[Sys.DVOR#DVOR]]"
fileClass: [cm]
---

# Problem
## Preparation
### When
### How
- [ ] Monitor waveform via ASU extension card on B30/B31
	- Extension card to plug in to the empty slot at the first row in ASU rack.
- [ ] Measure antenna return loss?
- [ ] Forgot to measure Central antenna.
- [ ] Replace MOD-SBB module?

## Log
### [[2022-07-01 Fri]]
- The warning was gone after typhoon No. 8.
### [[2022-04-13 Wed]]
- [x] RF interference monitoring
- [x] Monitor alarm triggers changeover and shutdown
- [x] Replace ASC-D module
- [x] Measure VSWR of all sideband antennas
- Most of the sideband antennas have value of `1.2` - `1.3`.
- While antenna No.48 has `2.4`
- [x] Result of `Error Curve` seemed ok. Deviations are no more than 0.3°.
### [[2022-05-25 Wed]]
- Replaced 4 modules in ASU rack, but showed similar readings on Distortion:
	- MOD-SBB
	- ASC-D
	- ASM-D
	- PMC-D
- Then restored all 4 original modules.
- Used scope to monitor 4 specially marked test points on DVOR extension card, including B30/B31.


