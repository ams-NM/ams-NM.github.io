---
system: "[[VCS]]"
work-order: "cwo23073"
type: CW
estimated-hours: 80
report-date: "[[2023-03-31 Fri]]"
complete-date: "[[2023-07-13 Thu]]"
status: "done"
next-step:
remark:
tags:
 - "E1"
 - "Fiber MUX"
---
## Attention
 - A, B on the back of the Console should be connecting to the corresponding slots on VCS Core [[PCM30]]. Otherwise alarm would be activated on related [[JIF]]s.
## Next Step
### Material to Order
- [ ] A new VCS Console
- [ ] 4 pcs of `8E1 PDH Fiber Multiplexer`
- [ ] 2 pcs of `Handset`
- [ ] LAN Cable Patch
	- 10MT A-to-B patch on Maximo might be useful depending on the actual distance between Console and the socket.
- [ ] 3 pcs of Power strip
	- 2 for Fiber MUX
	- 1 for VCS Console
 ## E1 Cabling
 ### VCS Core
 - 3: Tx+
 - 4: Rx+
 - 5: Rx-
 - 6: Tx-
 ### VCS Console
 - 3: Tx+
 - 4: Rx+
 - 5: Rx-
 - 6: Tx-
 ### PDH Fiber Multiplexer - Future Tech.(杭州飛翔科技)
 - 1: Tx+
 - 2: Tx-
 - 4: Rx+
 - 5: Rx-
 ### RAD Optimux op-30 (Equipment room to Tower)
 - 1: Rx+
 - 2: Rx-
 - 4: Tx+
 - 5: Tx-
## Log
### [[2023-07-12 Wed]]
- Use a straight LAN cable to connect spare Console to VCS Core PCM30 slot 8
- A, B on the back of the Console should be connecting to the corresponding slots on VCS Core PCM30. Otherwise alarm would be activated on related JIFs.
### [[2023-07-13 Thu]]
- Found differences in cabling between new PDH and existing RAD MUXs.
	- PDH uses 1&2 for Tx, 4&5 for Rx
	- RAD uses 1&2 for Rx, 4&5 for Tx
- Need to make LAN patch cables accordingly.
- Tested fine:
	- Made calls to TCD Console
	- Received ATIS `126.4MHz` voice
