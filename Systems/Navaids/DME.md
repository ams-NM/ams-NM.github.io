---
dg-publish: true
---
## General Blocks
![[DME General Block Diagram.png]]
![[DME IO Block.png]]
![[DME Power Supply Block.png]]

## Control System
### Controller (CTR)
- Analyzer results of measurements, trigger warnings and alarms.
- Checks internal operations.
- Sends results of measurement and beacon status to I/O.
- Sets operating mode and preset parameters of the beacon.
## Monitor
![[DME Monitor Block.png]]
### Interrogator (MIN)
- Sends RF interroations to `Receiver (TRC)` via a coupler on `Duplexer DPX`
![[DME MIN Block.png]]
### Monitor Range B (MRB)
- Analog signals
1. Peak detector
2. Gate former
3. Digitizer
4. State machine
### Monitor Range A (MRA)
- Digital signals
## Transponder
### Overview
![[DME Transponder Block FSD-40.png]]
![[DME Transponder Block FSD-45.png]]
![[DME Generation of Reply Delay 1.png]]

### Transponder Bus Interface (TBI)
- Connects transponder buses to the 2 CTR.
- Receives all analog and digital signals, which collected by a multiplexer (MUX) and sent to monitors.
### Receiver (TRC)
- Amplify and convert RF pulse signals
- 
### Processor (TPR)
### Modulator (TMP)
### Transmitter (TTP)
- Modulate RF signal
### Synthesizer (TFS)
- Generate Non-modulated RF CW signal to be transmitted.
### 1 kW Amplifier (AKW) [for FSD-45 only]
- Amplify the received signal util a peak power > 1kW.
## RF Path

## Interface

## Power Supply

## Technical Characteristics
## Issues
- [[DME Output Power]]



