Why One Effective Wavenumber Isn’t Always Enough

For a long time, researchers have used a simple idea to describe how waves travel through random materials.

If you send a wave into a material filled with many randomly placed particles, the details quickly become messy. Every particle scatters the wave, and every arrangement looks slightly different. But if you average over many possible arrangements, something surprising happens: the overall behaviour often becomes much simpler.

A helpful way to picture this is to imagine shining a flashlight through fog. Up close, each droplet scatters light in its own way, and the motion is complicated. But from far away, the beam looks simple — it just travels forward and gradually fades.

This simplified picture is what scientists call an effective medium. Instead of tracking every particle, we replace the complicated material with a smoother one that behaves the same on average. And once we do that, we can describe the wave using just one number — the effective wavenumber, which tells us how fast the wave travels and how quickly it fades as it moves through the material.

For a long time, researchers assumed that this single effective wavenumber was always enough.

It turns out it isn’t.

When One Wavenumber Fails

The simple picture works very well when particles scatter weakly. But when scattering becomes strong, something different happens.

Instead of behaving like one clean wave travelling through a uniform material, the average field can contain more than one effective wave. Each travels differently, fades differently, and contributes to what we observe.

This matters because many real applications operate in exactly these stronger scattering regimes. If we ignore the extra waves, we risk misunderstanding how energy actually moves through the material.

There is also a practical takeaway: the transition is not mysterious. If individual particles scatter strongly, multiple effective waves are likely to appear.

How We Checked

To see whether this was really happening, we ran large-scale numerical experiments.

The idea sounds simple: generate many random materials, simulate the wave scattering in each one, average the results, and compare with theory. In reality, it was much harder than expected.

We needed tens of thousands of simulations before the average became stable. Each simulation involved solving a full scattering problem, which is already computationally demanding. Even after averaging, extracting the effective waves from the results required careful analysis.

But the effort paid off.

The simulations showed clear evidence that in some regimes the material transmits not just one effective wave, but two. This was not numerical noise or overfitting — it was a consistent physical effect.

What Happens to the Original Wave?

This raises another natural question: what happens to the original incoming wave once it enters the material?

There is a well-known idea in physics called the extinction theorem. It says that the original incident wave does not survive inside a material. Instead, it is cancelled out and replaced by the waves generated through scattering.

For random particulate materials, this had often been assumed rather than fully shown. One of the things we found is that it really does happen — and we can describe exactly where.

The incident wave disappears after a certain distance inside the material. That distance depends on how the particles are arranged.

Why Particle Arrangement Matters

It is tempting to think only the number of particles matters — how many there are and how strongly they scatter. But the way they are arranged also plays an important role.

Even random materials have structure. Some arrangements are more clustered, some more ordered, and some show clear short-range patterns. These patterns affect how waves travel and how quickly the incident wave disappears.

In fact, the distance over which the original wave fades is closely tied to how far these structural patterns extend.

So small-scale structure is not just background detail — it shapes what we observe at larger scales.

Why It Matters

Taken together, these results change how we think about wave propagation in random materials.

The traditional picture — one effective wave travelling through one effective medium — is still useful. But it is not universal.

Sometimes there is more than one effective wave. Sometimes the original wave disappears over a measurable distance. And sometimes the arrangement of particles matters as much as their number.

For anyone modelling waves, designing materials, or interpreting experiments, knowing when the simple picture fails makes a real difference.

Random materials are often more structured — and more interesting — than they first appear.