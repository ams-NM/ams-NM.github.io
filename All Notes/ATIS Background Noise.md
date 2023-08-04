---
dg-publish: true
system: "[[Sys.AWOS]]"
work-order:  592741
type: CM
report-date: "[[2022-05-11 Wed]]"
complete-date:  "[[2022-05-12 Thu]]"
tags: 
  - "[[Sys.AWOS#ATIS]]"
fileClass: [cm]
---

# Problem
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
### [[2022-05-11 Wed]]
- ATIS broadcasting with background noise.
- Confirmed that the voice from PC output was good.
- The problem was in the wire from ATC down to equipment room.
### [[2022-05-12 Thu]]
- Just found out that the jumper record was wrong. The correct ones are:
	- TB36-5: ATIS PC on ATC level 8 to equipment room. - RC recording point 1.
	- TB36-6: From VHF receiver on top of ATC building. - RC recording point 2. 
- Voice from TB36-5 was clear, while there were noise on TB36-6.
- Connected a portable radio on an antenna on ATC buiding. The voice was ok.
- So the problem was in the VHF receiver.
