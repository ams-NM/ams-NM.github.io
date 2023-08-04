---
dg-publish: true
---
- [navigation - How is varying modulation depth achieved by localizer ground transmitters? - Aviation Stack Exchange](https://aviation.stackexchange.com/questions/47942/how-is-varying-modulation-depth-achieved-by-localizer-ground-transmitters)
- 
> The beam strength decreases as you move away from it's own centreline, so is it actually that the entire modulated signal strength decreases which when de-modulated is effectively a difference in amplitude modulation depth?

Your question is a really good one. The depth of modulation is the ratio between the modulation amplitude and the carrier amplitude. Changing the relative strength of a signal changes both amplitudes in the ratio, but keeps the ratio unchanged. No DDM can indeed appear this way.

The 90 and 150 Hz tones are not used _directly_. The heart of the system creating the DDM is two signals: CSB (carrier and sidebands, see below what is a sideband) and SBO (sidebands only) and surprise! they are containing the same quantity of 90 and 150 Hz tones and are transmitted in equal quantity on both sides of the runway.

Now the key points of ILS:

-   SBO _phase_ depends on the runway side (+/-90°, CSB is kept unchanged)
-   Phase of the 150 Hz tone is inverted in SBO (90 Hz is kept unchanged).

[![ILS wrong vs correct principle](https://i.stack.imgur.com/PEtby.png)](https://i.stack.imgur.com/PEtby.png)

As SBO contains only the sidebands when CSB and SBO interfere in space, only the sidebands can actually interfere, the carrier found in CSB is unaltered.

When the sidebands interfere, the way they are constructed (by tweaking phases) makes 150 Hz more prominent on the left of the runway, and less prominent on the right side (details below, drawings will clarify). So:

-   The carrier amplitude hasn't changed in the process
-   The sidebands amplitude has been altered.

As the sidebands are the modulation, in effect there is a change in the DM (the ratio between modulation and carrier amplitude), and a DDM appears magically, increasing as we move away from CSB, that is as we move away from the centerline.

Countless [oversimplified descriptions](http://instrument.landingsystem.com/ils-ground-equipment/) put the focus on 90 and 150 Hz, each one allegedly transmitted on a specific side of the runway (cf. image above). They miss the point the ILS is not based on amplitude comparison, but on depth of modulation comparison.

Two last points:

-   A precise location cannot be determined by simply using _received signal strength_ (RSS) of two or more signals. RSS-based positioning improved by averaging algorithms is commonly found for rough positioning ([e.g. in cellular networks](https://ieeexplore.ieee.org/document/4345237)) because the cost is marginal, but RSS depends on many factors which cannot be controlled.
    
-   On the other hand, the phase of a signal remains unaltered until the signal is reflected, diffracted or enters a material with a different refractive index. By taking appropriate protection measures in the [Fresnel zone](https://en.wikipedia.org/wiki/Fresnel_zone), the phase-based ILS is therefore very reliable. Phase is used in many sophisticated radio applications. Missing the phase role in the ILS (and [conventional VOR](https://aviation.stackexchange.com/a/29900/3201)) is actually missing the cleverness of these technologies.
    

If this summary increased your curiosity for more details, just follow on, but for a good understanding, we'll need to first clarify a few notions: Phase, modulation and sidebands.

**Phase and phase comparison**

When representing a signal, e.g. a sine signal, we can look at different parameters. Often we draw the amplitude as a function of the time (right side):

[![Phase of a signal](https://i.stack.imgur.com/awj6U.png)](https://i.stack.imgur.com/awj6U.png)  
  
Two representations of a signal: Phase/amplitude and time/amplitude

We can also imagine a circle with a scale from 0° to 360°, a point traveling on this scale in the time of a signal cycle (left side above).

The phase is the value of the angle. We are usually interested in the phase difference of two signals with the same frequency:

[![Phase difference](https://i.stack.imgur.com/HZuc1.png)](https://i.stack.imgur.com/HZuc1.png)  
Phase difference

The two signals can be _in phase_ (no difference), _in phase opposition_ (180°), _in quadrature_ (90°) or have any phase difference. The phase difference plays a major role when two signals interfere:

-   If the signal are in phase, the amplitude of the result is the sum of the individual amplitudes.
-   If the signals are in phase opposition, the amplitudes subtract.
-   For any another phase difference, the amplitude of the result is between zero and the sum of individual amplitudes.

In the ILS, basically one signal is sent for reference (CSB) and one signal is sent for comparison (SBO). SBO on one side creates additive interferences with CSB, and substractive interferences on the other side. But actually because 150 Hz is inverted in SBO, on the additive side, at the center of the interference area, 150 Hz cancels itself, 90 Hz doubles its amplitude. On the other side 150 Hz doubles its amplitude, 90 Hz is cancelled. As we move away from the center of the interference area, this additive/subtractive effect decreases until SBO is left unaltered because we are out of CSB area.

Now let's clarify the part related to the modulation and depth of modulation.

**Amplitude modulation, depth of modulation, sidebands**

Modulation relates to a carrier, which is just a fancy name for a constant (usually sine) RF signal at a given frequency, therefore with all the wave energy concentrated at this frequency. The frequency of the carrier is usually very large compared to the modulation.

The modulating signal (or modulation) is the signal to transmit, it can have any shape, but in our case its shape is a 90 Hz or 150 Hz sine curve.

The amplitude modulation consists in changing the carrier instantaneous amplitude according to the modulation instantaneous amplitude. After it's done, the carrier outer envelope reflects the modulation outer envelope:

[![Modulation index or depth of modulation](https://i.stack.imgur.com/8SZnI.png)](https://i.stack.imgur.com/8SZnI.png)  
  
Carrier modulated at 50%

The modulation can imprint itself at a variable depth (taller or smaller peaks). This is measured by the modulation index aka depth of modulation. The index value is an amplitude ratio: modulation amplitude / carrier amplitude.

The depth of modulation used for the LOC signal is only 20% (40% for the G/S signal) to leave some room for identification tones on 1020 Hz.

ICAO definition for ILS modulation depth:

> The depth of modulation is the ratio of the amplitude of the modulation of the 90 Hz or 150 Hz signal to the carrier amplitude. The DDM is the modulation depth of the stronger signal minus the modulation depth of the weaker signal.

Let's look at how energy is distributed according to frequency.

[![Spectrum of a carrier AM modulated by a single tone](https://i.stack.imgur.com/7lQgS.png)](https://i.stack.imgur.com/7lQgS.png)  
Spectrum of a carrier AM modulated by a sine tone

Before modulation, all energy is concentrated at the carrier frequency (blue bar below). The modulation process creates two variable _sidebands_: lower (LSB) and upper (USB), depicted in magenta.

If the modulation index is 100%, the carrier contains 66% of the energy and each sideband 17% ([mathematical explanation](https://www.tutorialspoint.com/analog_communication/analog_communication_amplitude_modulation.htm)). When a 100 MHz carrier is modulated by a 150 Hz tone, the LSB is created at 100 MHz - 150 Hz, and the USB at 100 MHz + 150 Hz.

The larger the depth of modulation, the larger the energy transferred from the carrier to the sidebands and the lower the energy remaining at the carrier frequency. Sideband energy and depth of modulation are the two sides of the same coin. In the next paragraphs I'll talk about energy rather than depth, but it's the same.

**Modulating the ILS signal with 90/150 Hz tones**

The localizer signal is modulated by two tones, the reference at 90 Hz, the signal to compare at 150 Hz. Therefore each sideband energy is split between two frequencies:

[![ILS CSB signal spectrum](https://i.stack.imgur.com/6PEr0.png)](https://i.stack.imgur.com/6PEr0.png)  
CSB signal spectrum

This signal, known as CSB (carrier and sidebands) will be used as-is in the localizer. However as explained earlier, the in-phase / out-of-phase element must be sent along with CSB.

**From 90/150 Hz modulations to CSB/SBO modulations**

The localizer transmitter sends an additional signal with an inverted 150 Hz, known as SBO (sidebands only). For this signal the carrier element is cancelled ([DSB-SC modulation](https://en.wikipedia.org/wiki/Double-sideband_suppressed-carrier_transmission)):

[![ILS SBO signal spectrum](https://i.stack.imgur.com/7H8k7.png)](https://i.stack.imgur.com/7H8k7.png)  
SBO signal spectrum with 150 Hz modulation inverted

The signal is sent in phase opposition with CSB on the left side of the runway, and in phase with CSB on the right side (this is done using phase shifters at the antenna level, see further down).

To summarize:

-   The localizer transmits CSB on the left and right sides of the array. CSB contains both 150 Hz and 90 Hz with no phase adjustment, and the carrier.
    
-   The localizer also transmits SBO which contains only the sidebands, but where the 150 Hz modulation is phase-shifted by 180° on both sides. The SBO signal itself is sent with a different phase on each half of the antenna array.
    

**How CSB and SBO are sent by the antennas**

The actual phase between SBO and CSB is adjusted to compensate for space modulation effects, and SBO is sent with a +90° phase relative to CSB for the antennas on the left of the runway centerline, and with a -90° phase relative to CSB for the antennas of the right of the centerline (the two sides of the array still have a 180° phase difference).

The combination of exact opposite phases for SBO signal cancels the EM field at the center, splitting the SBO radiation pattern in two portions, it seems there are two beams for SBO. CSB is radiated centered on this hole:

[![ILS CSB + SBO radiation pattern](https://i.stack.imgur.com/8WZCP.png)](https://i.stack.imgur.com/8WZCP.png)  
  
CSB + SBO radiation pattern

The elements compositing CSB and SBO must be synchronic. Phases are adjusted carefully to form the radiation pattern (i.e. align the localizer with the centerline and set its width) and to ensure the linearity of the DDM in the central portion.

When spread in space, the three signals mix by _[space modulation](https://en.wikipedia.org/wiki/Space_modulation)_, the principle the ILS is based on and which is more simply known as _wave interference_.

**Space modulation**

One signal (SBO) has its carrier suppressed preventing the carrier energy to be increased during the mix CSB+SBO. In contrary when mixing the sidebands from each signal, the space modulation adds the sidebands energy where the sidebands are in phase, and subtract the sidebands energy when they are in phase opposition.

SBO is in phase opposition with CSB on the left side of the runway and is in phase with CSB on the right side of the runway.

-   Along the centerline CSB only is present, with equal energy for 90 Hz (green) and 150 Hz (magenta). The LOC indicator will be centered. In order to create a CSB prominent area along the centerline, SBO power is also reduced on the center antennas.
    
-   On the left side, 150 Hz modulation has been shifted by 180° in SBO, and SBO signal has been shifted 180° relative to CSB at antenna level. 150 Hz modulation is therefore in phase for CSB and SBO. Sideband energies are added, while energy for 90 Hz modulation is decreased because 90 Hz modulation in CSB and SBO are out of phase. So there is more energy for 150 Hz (which means there is a larger depth of modulation). This effect is getting stronger as we move away from the centerline.
    
-   On the right side where 150 Hz modulation is out of phase for CSB and SBO, 150 Hz energy is reduced compared to 90 Hz energy in the sidebands, and the difference is getting stronger as we move away from the centerline.
    

Past 10° from the centerline, CSB cannot be sensed, only SBO can, the LOC indicator will deviate to full scale left or full scale right depending on the phase of SBO. Another signal is used to ensure a full scale deviation past this point (see clearance signal further down).

If you want to do some space modulation simulation, here are the details of the signals to mix (see details [here](http://ir-library.egerton.ac.ke/jspui/bitstream/123456789/1466/1/Effects%20of%20selected%20roofing%20materials%20on%20air%20navigation%20signal%20propagation.pdf)):

ECSB=EC cos 2πfCt+E90 sin 2πf90t cos 2πfCt+E150 sin 2πf150t cos 2πFCt  
ESBO 90=K sin 2πf90t cos 2πfCt  
ESBO 150=K sin 2πf150t cos 2πfCt  

We talked about the sidebands energy. Regarding the carrier, which is only present in CSB, the space modulation result always contains the energy of the original CSB carrier until reaching full scale (then the clearance signal provides the carrier because while all modulation information is in the sidebands, the constant carrier is necessary to synchronize and lock the receiver and to retrieve the coherent CSB and SBO from the modulated radiofrequency resulting signal).

**Where the DDM finally appears**

Now let wrap up:

-   The carrier energy is not changed by the space modulation as it is present in only one signal (CSB).
-   The sidebands energy is increased or decreased in the resulting signal.

The energy of the sidebands varies relatively to the energy of the carrier, but wait... this is the same than saying the DM is varying (without actually changing anything at the transmitter level).

The DDM between 150 and 90 Hz, is a function of the receiver offset from the centerline (in the range -5° to +5° the function is quasi-linear).

[![In ILS, the space modulation actually creates a DDM](https://i.stack.imgur.com/H1TZE.png)](https://i.stack.imgur.com/H1TZE.png)  
The space modulation actually creates a DDM

The alignment offset is determined by sensing the DDM in the resulting signal.

**Antenna array**

The LOC antenna is an array system, usually made of a large number of individual [log periodic antennas](https://en.wikipedia.org/wiki/Log-periodic_antenna), to form a narrow directional beam.

[![ILS localizer array at Melbourne airport](https://i.stack.imgur.com/45h6Z.jpg)](https://i.stack.imgur.com/45h6Z.jpg)  
Localizer array at Melbourne airport, [source](https://newsroom.airservicesaustralia.com/releases/instrument-landing-system-upgrade-for-melbourne-airport)

CSB and SBO are not distributed equally to all individual antennas of the array. Before reaching the antennas, their amplitude is tuned to form the three sub-beams, and the SBO signal is phase-shifted:

[![ILS amplifier-phase shifter-mixer](https://i.stack.imgur.com/3tHR3.png)](https://i.stack.imgur.com/3tHR3.png)  
Individual amplifier-phase shifter-mixer

We have now all the basic elements to draw a LOC system:

[![Components of the ILS LOC system](https://i.stack.imgur.com/bVVAp.png)](https://i.stack.imgur.com/bVVAp.png)  
Components of the ILS LOC system

**Example with an array of two antennas (and final answer to the question)**

Let's imagine two antennas fed with our earlier CSB and SBO signals with SBO phase being shifted by +90° for antenna 1 and by 270° for antenna 2.

[![ILS principle with two antennas](https://i.stack.imgur.com/GXKI6.png)](https://i.stack.imgur.com/GXKI6.png)  
  
Two antennas with phase shift of 90° and -90° (270°)

Let's see what happens when the receiver is on the centerline at P0, and at any point P1. For this simplified explanation to work, distance to LOC array (D) must be much larger than distance between antennas and centerline (d).

_Receiver on the centerline_

The received signal is the sum of the signals sent by the two antennas. As the distance traveled is the same, the phase at the receiver location is also the same. The signal at point P0 on the centerline is:

SP0=K1⋅(CSB−SBO)+K2⋅(CSB+SBO)

With K1

and K2

being the attenuation in free space, as the attenuation is the same for both antennas, this can be simplified:

SP0=K1⋅[(CSB−SBO)+(CSB+SBO)]=2K1⋅CSB

In CSB, the 90 Hz depth of modulation is the same than the 150 Hz one (see previous figure) There is no **difference in depth of modulation** (DDM) between the tones: DDM = 0%.

_Receiver at point P1_

The distance traveled is shorter for antenna 1, and longer for antenna 2. A phase lead and a phase lag respectively appear for antenna 1 and antenna 2. The phase lead is also equal to the phase lag. After some simplification that can be read in the linked thesis:

SP1(β)=2K1⋅(cosβ⋅CSB−sinβ⋅SBO)

with β

being the angular distance from the centerline. This formula shows:

-   when β
    

-   is null (receiver on the centerline), we have the result already seen in the previous case,
    
-   when β
    

-   is negative or positive, the SBO signal influence increases and the overall depth of modulation between 150 and 90 Hz tones follows the same trend until reaching -100% or +100%, which correspond to the absence of CSB signal influence at the receiver side.
    

[![Actual principle of the ILS](https://i.stack.imgur.com/D8wCb.png)](https://i.stack.imgur.com/D8wCb.png)  
  
Actual principle of the ILS, from [this source](https://books.google.com/books?id=mkRdDwAAQBAJ&pg=PA75&lpg=PA75).

The range of _difference of depth modulation_ obtained must be mapped on the actual standardized values for LOC needle deviation, reducing the full range to a standardized guidance angle. The LOC specification are found in [ICAO annex 10 to the Chicago Convention](https://www.bazl.admin.ch/bazl/fr/home/experts/reglementation-et-informations-de-base/bases-legales-et-directives/annexes-a-la-convention-de-l-organisation-internationale-de-l-av.html), volume 1, attachment C:

> [![ILS LOC DDM values from ICAO](https://i.stack.imgur.com/0pajA.png)](https://i.stack.imgur.com/0pajA.png)

This setting is obtained by tuning the amplifier of the phase-shifter from each individual antenna (the amplifier is actually common to all antennas). This amplifier reduces the SBO signal influence on the DDM.

**Clearance signal**

So far we have assumed the localizer signal is only composed of the course guidance mixing the two original signals CSB and SBO. But it is very difficult to obtain an actual highly directional beam, like the course beam, without creating unwanted lobes:

[![Beam radiation pattern](https://i.stack.imgur.com/Gh65J.png)](https://i.stack.imgur.com/Gh65J.png)  
Radiation pattern of beam antenna, [source](https://en.wikipedia.org/wiki/Side_lobe)

The problem with the secondary lobes is an aircraft approaching aligned with one of them will see it as being the main lobe, and will approach the runway using a wrong course. There are some techniques to minimize these unwanted lobes, but none is practical for large arrays like a LOC system. Alternatives are to block the unwanted waves after they are radiated, or to flood them, the solution used for ILS.

A replica of the course, the _clearance signal_, is sent with the course signal to outshine the secondary lobes.

The clearance signal has a power level of 10 dB less than the course level (a tenth of the power) and is radiated with a less directional pattern (less individual antennas to form the beam):

[![ILS course and clearance signals](https://i.stack.imgur.com/AbOMx.png)](https://i.stack.imgur.com/AbOMx.png)  
Course and clearance

Today's localizers use a dual frequency system, this means the course and clearance signals are sent on separate frequencies.

When an ILS has a published VHF frequency f, the localizer course signal is actually sent on f + 4.75 kHz and the clearance on f - 4.75 kHz. The two signals can use the same aerials or dedicated antennas in the array. Example of signals send to each of the 14 antennas of a Thales LLZ array (refer to above for what are course, clearance, CSB and SBO signals):

[![Thales Dual Frequency – Localizer Antenna](https://i.stack.imgur.com/rejFY.png)](https://i.stack.imgur.com/rejFY.png)  
[Thales Dual Frequency – Localizer Antenna](https://fccid.io/ANATEL/03691-14-08761/Manual_Volume-3_Parte-2/91E4DFCE-6749-4F09-8922-1CEA14019C01/PDF)