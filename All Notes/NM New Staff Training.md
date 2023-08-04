---
dg-publish: true
---
## [[Sys.ILS]] & [[sys.IGS]]
### Theory
## [[Sys.DVOR]]
### Theory
## [[Sys.AWOS]]
### System Overview
- `Macau System Description-D217506en-A.pdf`
- `Overall Diagram`
	- [ ] Update the diagram
### Communication
#### RS485
#### Optical Fiber
#### Switch
#### Port Servers
### Terms
- WMO -World Meteorological Organization
- VIS -Visibility
- MOR -Meteorological Optical Range
- Background Luminance
- RVR -Runway Visual Range
	- MOR
	- Background luminance
	- Runway light settings
- meters, feet
- Nautical mile (distance), knot (speed)
	- 1 knot = 1.852 km/h
- QNH, QFE
### Parts
#### LT31
#### FD12P
#### LM21
#### Wind
- WMT700
- WMT425
#### CL31
#### Temperature & Humidity Probe
- HMP155
#### Pressure
- PTB220
- PTB330
#### RG13
### Commands
- open
- close
- reset
### 3-party
- AFTN & AMHS
	- Meta & Met Report
- SMG
### Common Issues
- LT31 failure of `auto-calibration`
- Warnings: contamination, alignment level x
- CL31 direct radiation warning at noon
#### Observer/Tower complains visibility too low/high
- Check whether LT31 auto-calibration has been working lately, comparing with the other 2 LT31.
#### FD12P/LT31 hardware error
##### disappear automatically
- Lens might be blocked by gecko.
##### persistent
- Connect to sensor and check status
#### CL31 hardware error or contamination warning
- Verify window is clean
## [[Sys.VCS]]
### System Overview
### Parts
### Common Issues
#### beeping(background noise) on HK hotline
- Reset both ERIF one by one.
#### Console malfunction
- Power reset the console (2 AC inputs)
## [[Sys.FA36]]
### System Overview
### Parts
### Common Issues

