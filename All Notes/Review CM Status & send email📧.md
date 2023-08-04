---
dg-publish: true
---
## Emails
> [!NOTE] 
> alanl@ctmams.com.mo; stanleyl@ctmams.com.mo


# History
## 2023

### [[2023-01]]

#### Complete the following old [[🐞CM]]s:
582298 AWSN TCP/IP SERVICE FAILED TO CONNECT TO REMOTE HOST
- Complete
597970 NEW AWSN SWITCH TO THE RWY16 AUTOMATICALLY
- Complete
- Hard to locate the problem due to workstations with administrator login on other party(ATC, AOCC, SMG).
- It's possible that someone triggered the action mistakenly.
- That's an operation authorization issue.
- Or defect of the software from Vaisala.
- This issue hasn't shown up for a few months. It seems related parties are getting more familiar with this function of the new AWOS system.
599830 VCS BCB CARD UNSTABILE
- Complete
603371  ATIS CANNOT GENERATE & BROADCAST THE CODE THEY INPUT
- Complete
596769 FA36 WORKSTATION DEFECTIVE IN TCD OFFICE
- Complete
- Move FA36 HK PC to TCD replacing old FA36 ZH.
604927  ILS-LLZ, SHUT DOWN DUE TO CLR DDM ABNORMAL.
- Complete, duplicated with 604778.
- Since it happened to the same parameter of both Tx, so the cause would most likely be on the common path of the CLR signal. Suspected that it has the same cause with CM#604778.
- The problem will be followed by CM#604778. 
- Close this duplicated CM.
---
## 2022
### [[2022-12]]
604778  ILS LLZ TRANSMITTER#2 FAILURE
    - CLR RF too high on both Transmitters.
    - Suspected cause: ADU?
604927  ILS-LLZ, SHUT DOWN DUE TO CLR DDM ABNORMAL.
    - CLR DDM too low.
    - TCD tried twice but failed to turn it on.
    - It resumed normal when callout staff arrived.
603742  FD12P IS NO LONGER REPAIRABLE, NEED TO BE REPLACED
    - Requested by CAM for FD12P replacement

### [[2022-11]]
New:
603371  ATIS CANNOT GENERATE & BROADCAST THE CODE THEY INPUT
    - TCP between AWOS and ATIS disconnects intermittently.
    - Might be traffic congestion using only 100M switches.
603131  DVOR, DISTORTION ON DET. USB-LSB
    - Cause unknown yet.
    - Wait for health check?
    - Refer previous CM #587406

From previous months:
601565  ILS-GP/DME WARNING ACTIVATED
    - Only on Tx2, try put Tx1 for testing for a month.
    - Put Tx1 on air, Tx2 shutdown once.
598573  AWSN RWY16 RVR SHOW M0050 AND LT31 MOR UNDERRANGE
    -Waiting for E&M to arrange permanent fixing of the pole foundation.
598333  GP DME, OUTPUT POWER RELATIVELY LOW
    -Wait for health check?
597970  NEW AWSN SWITCH TO THE RWY16 AUTOMATICALLY
    - Hard to location the problem due to workstations with adminisrator login on other party(ATC, AOCC, SMG).
    - It's possible that someone triggered the action mistakenly.
    - That's an operation authorization issue.
    - Or defect of the software from Vaisala.
582298  AWSN TCP/IP SERVICE FAILED TO CONNECT TO REMOTE HOST
    - The old 2 ATIS PC were replaced by new ones.
    - Error messages shows in old system.

### [[2022-10]]
New:
601941  AWSN, LT31 MISSING DATA
    -To complete.
601847  AWSN, CLOUD HEIGHT LEVEL LASER EXPIRIED 
    -TO complete.Replaced CLT321 module.
601773  ILS-DME WARNING ACTIVATED 
    -To complete. Duplicated. Refer 601565
601686  TILS DME SHOWING WARNING 
    -To complete. Duplicated 601565
601582  AWSN RVR MAIN SYSTEM DATA NOT ACCURATE 
    -To complete. Cleaned LT31 Windows.
601565  ILS-GP/DME WARNING ACTIVATED 
    -Only on Tx2, try put Tx1 for testing for a month.
600395  ATIS FOOTER CANNOT NOT BE INPUT AUTOMATICALLY 
    -To complete.
    -Operational or software issue. No report after Oct-2.

From earlier months:

598573  AWSN RWY16 RVR SHOW M0050 AND LT31 MOR UNDERRANGE
    -Waiting for E&M to arrange permenant fixing of the pole foundation.
598333  GP DME, OUTPUT POWER RELATIVELY LOW
    -Wait for health check?
597970  NEW AWSN SWITCH TO THE RWY16 AUTOMATICALLY
- Hard to location the problem due to workstations with administor login on other party(ATC, AOCC, SMG).
- It's possible that someone triggered the action mistakenly.
- That's an operation authorization issue.
- Or defect of the software from Vaisala.
582298  AWSN TCP/IP SERVICE FAILED TO CONNECT TO REMOTE HOST
- The old 2 ATIS PC were replaced by new ones.
- Error messages shows in old system.

### [[2022-09]]
598333 GP DME, OUTPUT POWER RELATIVELY LOW
- Measured DME output power with power meter, the results were
    - Tx1 108w, Mon: 72w
    - Tx2 138w, Mon: 86w
- No enough time for further investigation during ILS Yearly PM.

599830 VCS BCB CARD UNSTABILE
- Swapped 2 BCB and monitored for about 10 days, no errors in logs.
- No BCB spare available.
- Need issue IMO to buy a new BCB.

597970 NEW AWSN SWITCH TO THE RWY16 AUTOMATICALLY
- Hard to location the problem due to workstations with administrator login on other party(ATC, AOCC, SMG).
- It's possible that someone triggered the action mistakenly.
- That's an operation authorization issue.
- Or defect of the software from Vaisala.

599795 IGS SPARE COMMON LINK FAILED
- Fixed. Substituted 2 modems.
- Issued IMO for 2 new modems.

582298 AWSN TCP/IP SERVICE FAILED TO CONNECT TO REMOTE HOST
- The old 2 ATIS PC were replaced by new ones.
- Error messages shows in old system.

598573 AWSN RWY16 RVR SHOW M0050 AND LT31 MOR UNDERRANGE
- The LT31 receiver pole tilted.
- Need follow-up with Focus.