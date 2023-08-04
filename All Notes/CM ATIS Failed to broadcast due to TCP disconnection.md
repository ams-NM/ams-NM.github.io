---
dg-publish: true
fileClass: [cm]
---

## Cause
- TCP congestion on the 100M switches.
## What
- It sends out `NIL xxxxx` instead of the actual ATIS message.
- Found TCP disconnection logs in `ATIS_TCP.his` during the problem.
## Log
### [[2022-11-24 Thu]]
- There was a changeover from PC2 to PC1 automatically, 2 weeks ago.
- NM rebooted both PCs and changed back to PC2 as active.
- Removed 2 obsolete old [[ATIS]] PCs.
- Replaced the [[VGA]] [[KVM]] with a new [[DP]] KVM.
### [[2022-11-24 Thu]]
- It happened again at around 5 am LT.
### [[2022-11-21 Mon]]
- ATIS failed to broadcast 2 met reports during 3 - 4 am LT.