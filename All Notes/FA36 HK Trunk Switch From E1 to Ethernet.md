---
dg-publish: true
---

## Commands
> [!NOTE]
> system-view
> interface Serial6/0
> default
> quit
> system-view
> interface Ethernet8/1
> "enter new config line by line"
> save safely
> quit
> display current-configuration diff
> disp current-configuration interface Serial6/0
> disp current-configuration interface Ethernet8/1
> disp saved-configuration interface Serial6/0
> disp saved-configuration interface Ethernet8/1
> reboot
## Logs
### [[Sys.FA36#HK-A]]
- [[2022-09-28 Wed]] Schedule switch over time for [[Sys.FA36#HK-A]]
- [ ] FA36 Net-A change to use Ethernet 0:00 - 1:00 LT -[[2022-10-11 Tue]]
- Move 'Serial 6/0' config to 'Ethernet 8/1' & set 'Serial 6/0' to default
	- Net-A has 2 Ethernet interfaces only. So use 8/1 instead of 8/3.
> [!FAILURE] Original: 
> Original:
> interface Serial6/0
> link-protocol ppp
> ip address 88.18.17.10 255.255.255.252
> mpls
> mpls ldp
> #
> interface Ethernet8/1
> port link-mode route
> mpls l2vc 18.1.1.5 81
> #

> [!TODO] Change to:
> interface Serial6/0
> port link-mode ppp
> #
> interface Ethernet8/1
> port link-mode route
> ip address 88.18.17.10 255.255.255.252
> mpls
> mpls ldp
### [[Sys.FA36#HK-B]]
- [[2022-08-09 Tue]] [[CTM]] staff came connecting the fiber in equipment room for HK-B. He placed 3 fibers, one of them is a spare.
- [[2022-07-28 Thu]] Change interface config of [[Sys.FA36#HK-B]]  in advanced, due to Net-B on HK side is in no use as was told.
- Move 'Serial 6/0' config to 'Ethernet 8/3' & set 'Serial 6/0' to default
> [!FAILURE] Original: 
> Original:
> interface Serial6/0
> description 2HK-FA36B
> link-protocol ppp
> ip address 89.18.17.10 255.255.255.252
> mpls
> mpls ldp
> #
> interface Ethernet8/2
> port link-mode route
> #

> [!TODO] Change to:
> interface Serial6/0
> port link-mode ppp
> #
> interface Ethernet8/2
> description 2HK-FA36B
> port link-mode route
> ip address 89.18.17.10 255.255.255.252
> mpls
> mpls ldp

