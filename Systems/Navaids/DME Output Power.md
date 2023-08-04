---
dg-publish: true
---
## Possible Solutions
### Adjust monitors
![[DME TMP R34.jpg]]
![[DME TMP R37 R34.jpg]]
![[DME DPX R17 R43.jpg]]
![[DME DPX R48 R49.jpg]]
## Components
### MRB
![[MRB desc.png]]
![[MRB test points desc.png]]
![[MRB test points signals.png]]
![[MRB TP1 & TP3 signals.png]]
![[MRB TP1 signal.png]]



## Log
### [[2022-09-27 Tue]]  DME Peak Power too high  (Mon 1: close 1300w, Mon2: just over 1000w) 
- <span style='color: red'>Unable</span> to measure FSD-45 output power by connecting power meter directly to the antenna output on top of the rack. It could be something to do with the extra AKW module. 
- (We had tried to use Agilent Peak power meter with 40 dB or 50 dB attenuators, or Bird Power Meter with 250w sensor preceding with a 75w 10dB attenuator. There were no reading on both meters)
- But it works on FSD-40. 
-  A `coupler` is need to do the measurement.
> [!NOTE] Antennas
> Transponder Antenna VSWR: 1.062
> Txp -> Mon1 'Log Mag' : -24.31 dB
> Txp -> Mon2 'Log Mag' : -24.52 dB

> [!NOTE] Output power measured on monitor antenna return
> Mon1 (Txp 2 on) : 4.47w
> Mon2 (Txp 1 on): 3.94w

