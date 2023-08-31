---
dg-publish: true
wo:  601565
status: pending
type: CM
report-date: [[2022-10-18 Tue]]
complete-date: 
tags:
  - "[[Sys.ILS]]"
fileClass: [cm]
next-step: "Waiting for Health Check"
---

# Problem 🐞
- Tx2 shutdown and change over to Tx1 automatically twice in 2 days.
## Preparation
- Ref: former CM #364094 & #471713:  GP DME TX#2 SHUTDOWN FAULT FOLLOW UP ISSUE.
	- Replaced 4 modules to solve Tx2 shutdown issue.
### When
- [ ] NOTAM ?
### How
> [!NOTE] Ref: https://www.fx361.com/page/2020/0608/6765381.shtml
> 考虑对设备参数进行调整,
> 1) 将灵敏度(sensitivity)由一91dBm调至-81dBm;
> 2) 将监视器门限(MonitorThresholds)的Replv Delay 的告警延迟由4s调至10秒,
> 换机恢复正常,后期再无不成功换机情况出现
### What
- `TPR` module has the `main delay` block which adds delay to reply delay.
![[DME TPR.png]]
### Who

## Improvements
- [ ] Similar issues for other parts of the system?

## Log

