---
dg-publish: true
---

## TODO:
- [ ] Record videos of handling common issues?


# AWOS
### Describe the functions & locations of following sensors:
- LT31:
- FD12P:
- CL31:
- HMP155/HMP45:
- Rain Gauge:
- Wind:
- PTB220/PTB330:
### ATIS PCs
- Location:
- What does it do?
- How does it work?
- PC login, start service, changeover procedure
###  Warnings "Contamination" or "Alignment" Level 1 or 2?
- FD12P/LT31
	- Clean the window with car washer. -Watch HD former staff Mr. Weng's video clip.
	- Wait for NM team to handle on weekdays.
- CL31(Cloud Base)
	- Clean the window.
### CL31 direct radiation warning at noon?
- Not a problem. Will disappear when direct sun light moves away.
###  FD12P/LT31 hardware error?
- disappear automatically later?
	- Might be a gecko blocks the window.


# DVOR
### Describe functions of the following equipment?
- DVOR:
- DME:
### Any parameters is out of limit? (Same applies to `ILS` & `IGS`)
### DME R.C. on Antenna with `Reply Efficiency` < 80%?
- Run R.C. on Antenna again until both monitors show values > 90%.
### Procedure to do `Changeover` or `On/Off`, (same applies for for `ILS`)?
- Check radar for approaching air crafts.
- Ask TOWER for permission, 5 minutes.
- On RCSE
	- Make sure login level of ADRACS on both ILS & DVOR PC are not higher than `level 2`.
	- Choose the equipment, making sure its name blinking.
	- Press `Request/Release`
	- Press `Changeover` or `On/Off`
	- Press `Request/Release`
### Distortion warning on USB-LSB?
- There is already a CM following the problem.

# IGS
### What are the difference between IGS and ILS?
- Guidance vs. Landing
- LLZ & DME vs. LLZ, GP & DME
- CAT I vs. CAT II
### Pilot complains LLZ signal unstable?
- Check and see whether any warning or alarm activated
- Capture monitor readings of LLZ and save as image.
- CCTV to check if someone enters the platform.
- Use Spectrum Analyzer to monitor the signal for possible interference.
### LLZ `Changeover` or `On/Off`
- Ask for TOWER'S permission
- On IGS remote controller in the rack in equipment room
- Press the button "Changeover" or "On/Off"

# ILS
### Describe functions and locations of following equipment?
- LLZ(Localizer):
- GP(Glide Path/Glide Slope):
- DME:
### Pilot complains LLZ or GP signal unstable?
- Check and see whether any warning or alarm activated
- Capture monitor readings of LLZ and save as image.
- Check with TCD whether there is any vehicle working on sensitive area.
### DME transmitter shows `Fault`?
- Alarm clear
- Change over
		- Refer to procedure on DVOR session.

# VCS
### Tower reports beeping(background noise) on a hotline?
- Reset both `ERIF` one by one, making sure no line card is being used.
### VCS console malfunction, no response on button pressing.
- Check whether sth. is touching the console screen. For example, a pen?
- Power reset the console (unplug 2 x AC power cords at the back)
### 


# FA36
### Name the hotlines  in-use from TOWER to HongKong & Zhuhai?
- HK: APP (Approach), CLR(Clearance) & TWR(Tower).
- Zhuhai: APP(Approach) & CLR(Clearance).
### Alarm LED lit on a modem?
- Check PW number on the modem.
- Ask Help Desk for help and contact NSC(機樓) to check it.
### TOWER complains there is problem(NO ring tone, etc) on one of the hotlines only, for example, `HK APP`?
- The following test checks the line from FA36 output, through VCS to TOWER'S console.
- Use a telephone set to test the line with TOWER.
	- There is a telephone set in one of the FA36 racks for hotline testing.
	- - Ask TOWER for 5 min of disconnecting the hotline.
	- During the test HD's phone 6443 rings as well, so ask them not to pick up the phone.
	- Unplug the hotline jack to be tested from FA36.
	- Connect it to the line jack one the bottom of the rack.
	- Call HD's 6443 on TCD's VCS console, both HD's phone & the hotline on TOWER will ring.
	- Wait for TOWER to pick up the phone and do the test.
- Photo Ref
	- ![[FA36 hotline test line jack 6443-.jpg]]
---
