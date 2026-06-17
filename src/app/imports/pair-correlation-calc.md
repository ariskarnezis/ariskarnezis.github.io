CONTENTS i
Contents
1 Introduction 2
2 Particle distributions 4
2.1 Particles as Dirac delta . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.2 Isotropic distributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3 Particles in two regions 9
3.1 Isotropic distributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
4 The discrete form for isotropic pair-correlations 12
4.1 Particles in one region . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
4.2 Particles in two regions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
5 The Structure Factor 14
6 Particle configurations from the structure factor 16
6.1 Restrictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
6.2 Gradient optimisation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
6.3 Preliminary numerical results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
7 Conclusions 22
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
arXiv:2401.09236v2 [cond-mat.soft] 30 May 2024
CONTENTS 1
CALCULATING PAIR-CORRELATIONS FROM RANDOM PARTICLE
CONFIGURATIONS
ARIS KARNEZIS, ART L. GOWER
JANUARY 2024
ABSTRACT
Particle pair-correlations are broadly used to describe particle distributions in chemistry, physics,
and material science. Many theoretical methods require the pair-correlation to predict material
properties such as fluid flow, thermal properties, or wave propagation. In all these applications it is
either important to calculate a pair-correlation from specific particle configurations, or vice-versa:
determine the likely particle configurations from a pair-correlation which is needed to fabricate
a particulate material. Most available methods to calculate the pair-correlation from a particle
configuration require that the configuration be very large to avoid effects from the boundary.
Here we show how to avoid boundary effects even for small particle configurations. Having small
particle configurations leads to far more efficient numerical methods. We also demonstrate how
to use techniques from smooth nonlinear optimisation to quickly recover a particle configuration
from a pair-correlation.
2
1 Introduction
Background. In the field of material science, the investigation of structural properties has
witnessed significant progress. Molecular dynamics simulations, coupled with neutron and X-ray
scattering experiments, have provided valuable insights into the structural characteristics of
materials. For disordered materials, most techniques to probe and analyse these structures focus
on the pair-correlation function and the structure factor [29, 30, 41, 42, 48]. The pair-correlation
appears naturally in theoretical methods that use ensemble averaging [6, 8, 37, 51], whereas
the structure factor appears naturally from scattering experiments [8, 11], including small-angle
neutron scattering [7, 47].
The pair-correlation function, denoted by g(r), represents the probability of finding a pair of
particles separated by a certain distance r [6, 8, 37, 51]. The structure factor, denoted by S(k),
corresponds to the Fourier transform of g(r), and it is essential for characterising the structure of
the material from the scattering intensity [8, 11, 12, 39].
Beyond material science, pair-correlations and structure factors extend to calculating shear
viscosity, electrical conductivity, and thermal conductivity from a molecular perspective [35].
They also play a significant role in exploring complex phenomena such as the nuclear pasta
observed in the extreme conditions of neutron star crusts [19, 20, 39]. This phenomenon,
characterised by non-uniform arrangements of subatomic particles under extreme gravitational
fields, is investigated through neutron and X-ray scattering to understand the internal structure
of neutron stars [19, 20, 39].
Knowledge of the pair-correlation function and the structure factor is very useful when
designing materials with specific behaviour. Indeed, they can be set in order to achieve specific
properties such as hyperuniform structures, materials with exotic band gap profiles and negative
refractive index [26, 32, 44, 46, 52]. By adjusting pair-correlations, we aim to create materials
with specific properties and unique structural characteristics.
From the authors background, the pair-correlation appears when taking an ensemble average
of waves in disordered materials [6, 15, 16, 54]. Essentially, the pair-correlation function captures
the spatial distribution and arrangement of particles within a material, directly influencing how
waves interact with and propagate through the material. That is, the pair-correlation is the only
way the material structure affects wave propagation. This suggests a route to design materials to
control waves:
1. To determine pair-correlations that lead to band-gaps, frequency filters, or enhanced transmission.
2. To determine configurations of particles that match the desired pair-correlation.
Step 2) is known as the realizability problem [10, 11, 24, 55, 59], and there are open
3
questions about when it is possible to solve [9, 13, 14, 22, 30, 40].
Realizability problem. Determining a likely configuration of particles from a specific paircorrelation is called the realizability problem. To make the problem easier to understand, here
is an example: Think about solving a jigsaw puzzle. Each puzzle piece is like a particle in a
material. The goal is to fit all these pieces together within the puzzle board to create a picture.
This picture represents our target arrangement of particles. However, just like puzzle pieces must
fit together in a certain way and cannot be forced into the wrong place or overlap, the particles in
our material must also be arranged in a physically feasible way. This means we can not just place
them in any random configuration; they need to fit together according to physical laws, just like
puzzle pieces. So, realizability is about making sure that the arrangement we come up with can
actually exist in the real world.
The realizability problem appears in the study of many-body systems, such as liquids, and
disordered materials [10, 11, 24, 25, 48, 49, 55, 57, 59]. One of the challenges is that the
problem often lacks a unique solution. Multiple configurations of particles can result in the
same pair-correlation, especially in disordered media where the properties and behaviour of
particulates can be influenced by factors like particle size, shape and density [11, 50].
Several necessary conditions for potential pair-correlation functions have been identified,
including the requirement of non-negativity to ensure realistic representation of properties such
as density or probability distributions in materials, and restrictions on their associated structure
factors, which measure variations in particle density within a material [48]. However, establishing
a set of sufficient conditions for these functions remains an open challenge [48, 51]. We note that
the problem is not completely resolved even in just one spatial dimension.
Reverse Monte-Carlo. Reverse Monte-Carlo structural modelling is one technique that has
been used to calculate particle configurations that match a measured structure factors or paircorrelations [9, 13, 14, 22, 30, 40, 53]. Typically these Monte-Carlo simulations are guided
by a Genetic Algorithm, or similar random searches, which are computationally intensive [28,
29, 30, 43, 53]. These methods are brute-force, and typically use non-gradient-based methods.
While effective to some extent, they struggle when dealing with pair-correlation functions that
lack smoothness. In response to this limitation, we propose a novel approach based on smooth
optimisation. Given the straightforward computations of gradients, it stands to reason that
gradient-based optimisation methods [45] hold significant potential for superior performance
over traditional non-gradient-based approaches. This advantage comes from their ability to
efficiently move through the search space by using directional information, thus offering a more
targeted and faster convergence to optimal particle arrangements.
Paper summary. In Section 2, we start by deducing in a simple self-contained way how
to describe probability distributions and the pair-correlation in terms of a set of particles. In
4
Section 3 we show how to avoid the effects of boundaries when calculating pair-correlations.
The effects of boundaries are usually undesirable, and the details we present seem to be missing
from most references. In Section 4 we show the same calculations again, but without the use
of Dirac deltas for didactic purposes. In Section 5 we deduce the structure factor for isotropic
distributions both from any given pair-correlation and a set of particles. These results are needed
in Section 6, where we present a method to calculate a configuration of particles that matches a
given structure factor. Developing more efficient methods to reconstruct particle configurations
from pair-correlations remains an ongoing challenge in material science and computational
chemistry [36]. The method we propose uses techniques from smooth nonlinear optimisation to
improve the efficiency, which we are able to do because the structure factor is a smooth function
of the particle positions. We also present some preliminary numerical results. Finally, in Section 7
we summarise what the paper achieved and possible future directions.
2 Particle distributions
Consider there are J particles placed within some region R. That is, the centre of every particle
rj ∈ R. We represent one possible configuration of particles, or ensemble, by the set X
s
, where
every r ∈ X s
is the centre of a particle in the ensemble.
The function p(r) is the probability density of finding a particle centred at r. We can
approximate p(r) by defining a mesh of volume elements V (vi), where the vector vi
is the centre
of the volume element, and then counting the number of particles in each V (vi) divided by
the total number of particles. This allows us to introduce pV (vi) as an approximation to p(vi),
expressed as p(vi) ≈ pV (vi), to estimate the probability:
pV (vi) = 1
S
X
S
s
# [X
s ∩ V (vi)]
#X s
1
|V (vi)|
, (1)
where |V (vi)| is the volume of V (vi), #X is the number of elements in the set X , and S is the
number of ensembles considered. The use of a finite number of ensembles introduces a degree
of statistical uncertainty. While increasing S can improve the accuracy of the approximation, it
also increases computational demands. There is a trade-off between computational efficiency and
statistical robustness. The chosen value of S should provide a reliable representation of particle
distributions while remaining computationally manageable.
We require that the mesh:
V (vi) ∩ V (vj ) = ∅, for j ̸= i,
ensuring that each volume element is distinct and non-overlapping. This is crucial for the
5
independence of the measurements. It prevents double-counting of particles and ensures that
each volume element contributes uniquely to the probability density calculation.
In a similar way, we can approximate p(x1, x2), which is the joint probability density of
finding one particle centred at x1 and another centred at x2, while averaging over all over particle
positions. If we assume that both x1 and x2 are distributed within R, then we can approximate
the function p(x1, x2) with the formula:
pV (vi
, vj ) = 1
S
X
S
s
# [X
s ∩ V (vi)]
#X s
# [X
s ∩ V (vj )]
# [X s\V (vi)]
1
|V (vi)||V (vj )|
, for i ̸= j, (2)
where pV (vi
, vi) = 0 for every i, and X
s\V (vi) is defined as the set X
s without V (vi). Note that:
p(vi
, vj ) ≈ pV (vi
, vj ),
for every vi and vj
. In simple terms, it allows us to estimate the probability of finding pairs of
particles at specific positions within a material by statistically approximating the probability.
As expected, using this approximation, the integral of p(x1, x2) for x1, x2 ∈ R gives one:
ˆ
p(x1, x2)dx1dx2 ≈
X
i,j
pV (vi
, vj )|V (vi)||V (vj )|
=
1
S
X
S
s
X
i
X
j̸=i
# [X
s ∩ V (vi)]
#X s
# [X
s ∩ V (vj )]
# [X s\V (vi)]
=
1
S
X
S
s
X
i
# [X
s ∩ V (vi)]
#X s
# [X
s ∩ ∪j̸=iV (vj )]
# [X s\V (vi)]
=
1
S
X
S
s
# [X
s ∩ ∪iV (vi)]
#X s
= 1, (3)
where we used that ∪iV (vi) = R, dx1 ≈ |V (vi)|,dx2 ≈ |V (vj )|, and R ∩ ∪j̸=iV (vj ) = R\V (vi)
which implies that X
s ∩ ∪j̸=iV (vj ) = X
s\V (vi).
The term that often appears in methods that use ensemble averaging of particulates [4, 51,
54] is the particle pair-correlation, which is defined as:
g(x1, x2) := J − 1
J
p(x1, x2)
p(x1)p(x2)
, (4)
where J = #Xs is the total number of particle, where we have assumed that every configuration
#Xs has the same number of particles. The factor J − 1
J
is correction for a finite number of
particles in a region when calculating the pair-correlation function g(x1, x2). In an infinite region,
2.1 Particles as Dirac delta 6
as particles become uncorrelated due to distance or lack of interaction, the pair-correlation
approaches 1, indicating a random distribution without any correlation between particle positions.
However, in a finite region, the presence of a limited number of particles introduces a bias because
each particle is slightly more likely to be closer to another particle than it would be in an infinite
region. The correction factor J − 1
J
adjusts for this bias by scaling down the correlation as the
number of particles increases, ensuring that g(x1, x2) → 1 for large distances between particles
or when particles become uncorrelated as confirmed by [54, Equation (8.1.2)]. We demonstrate
this in the next section.
2.1 Particles as Dirac delta
For a finite, but very large number, of particles we can rewrite the pair-correlation in terms of
Dirac deltas. For example, turning to (1) we assume there is a finite number of ensembles S,
each with a finite number of particles J. Then we can make the volume elements V (vi) small
enough so that there is at most one particle in each volume element, which implies that #X
s = J
and:
# [X
s ∩ V (vi)] =



1, if there is a particle in V (vi),
0, if there is no particle in V (vi).
(5)
For notational convenience, we choose the mesh of volume elements such that each element is
centred at a particle ri ∈ X s
, if it contains a particle. Equation (5) allows us to rewrite (1) in the
form:
pV (ri) = 1
S
X
S
s
1
|V (ri)|
1
J
, (6)
for every ri ∈ X s
.
As we are taking the limit of all the volume elements going to zero, |V (ri)| → 0, we can
approximate:
p(x) =



pV (ri), if x ∈ V (ri),
0, else,
where p(x) = 0 if x is in a volume element that does not contain a particle. With this definition,
and taking the limit |V (vi)| → 0 for every i, we can rewrite (1) in the form:
p(x) = 1
JS
X
S
s
X
ri∈Xs
δ(x − ri), (7)
where δ(x − ri) is the Dirac delta function. This allows each volume element to represent an
infinitesimally small point in space, effectively turning each particle into a point particle. For
2.2 Isotropic distributions 7
details on the Dirac delta see [2].
Repeating analogous steps for the joint probability density (2) we obtain:
p(x1, x2) = 1
S
1
J(J − 1)
X
S
s
X
ri∈Xs
X
rj̸=ri,rj∈Xs
δ(x1 − ri)δ(x2 − rj ). (8)
In (8), the outer summation over all ensembles S accounts for the randomness and is essential
for capturing the statistical variation across different possible configurations of particles within
the material. The inner summation considers all pairs of particles ri and rj within each ensemble,
excluding cases where ri = rj because a particle cannot pair with itself. This guarantees that the
model accurately represents the joint probability of finding two distinct particles at two specific
points.
This method provides a robust and flexible framework for statistical analysis across a wide
range of densities, especially in disordered systems. However, it can be computationally intensive
due to the high level of detail and precision it requires. As each particle is represented as a point
in space, the computations involve handling potentially large numbers of Dirac delta functions.
2.2 Isotropic distributions
For most of this paper we focus on homogeneous and isotropic distributions. The homogeneous
assumption dictates that the particles are equally likely to be placed anywhere in space, which
leads to p(r) being a constant. If we choose all volume elements to have the same volume
|V (vi)| = |V |, then using that pV (vi) is a constant together with (1) leads to:
pV (vj ) = 1
SI
X
i
X
S
s
# [X
s ∩ V (vi)]
#X s
1
|V |
=
1
SI
1
|V |
X
S
s
# [X
s ∩ ∪iV (vi)]
#X s
=
1
I|V |
=
1
|R|, (9)
where I is the total number of volume elements V (vi), |R| is the volume of R, and we used
∪iV (vi) = R and similarity I|V | = |R|.
For an isotropic distribution we have that only the inter-particle distance is needed for their
joint probability [37, 38]. That is p(x1, x2) = p(|x1 − x2|), where |r| is the magnitude of the
vector r. To use this property to simplify the formula for the pair-correlation (4), we start by
writing:
g(|x1 − x2|) = g(x1, x2), (10)
then integrate both sides over all values such that |x1 −x2| = z for fixed z relative to the variables
of integration. To make this clearer we introduce the ball region using standard set-builder
2.2 Isotropic distributions 8
notation:
B(x; r) = {y ∈ R
3
: |x − y| ≤ r}. (11)
The ball region is introduced to simplify the process of integrating over distances. It defines
a spherical region of radius r around a point x, which is essential for transforming the paircorrelation function into a function of distance alone.
Using this notation, we will integrate both sides of (10) over every x2 ∈ ∂B(x1; z) ∩ R,
followed by over all x1 ∈ R, which results in:
ˆ
R
ˆ
∂B(x1;z)∩R
g(|x1 − x2|)dS2dx1 =
ˆ
R
ˆ
∂B(x1;z)∩R
g(x1, x2)dS2dx1. (12)
Here, x1 represents the position of a particle within the region R, x2 is the position of another
particle, and ∂B(x1; z) is the surface of a sphere with radius z centred at x1. Physically, this
means we are looking at all possible positions a second particle could occupy that are exactly a
distance z away from the first particle, and we are integrating the pair-correlation function over
the spherical surface that lies within the region R, to understand how particle density varies at
this specific separation distance.
The left side of (12) can move out of the integral, resulting in:
ˆ
R
ˆ
∂B(x1;z)∩R
g(z)dS2dx1 = L(z)g(z), with L(z) = ˆ
R
ˆ
∂B(x1;z)∩R
dS2dx1. (13)
For the right side of (12) we use the definition (4), and then rearrange (12) to reach:
g(z) = J − 1
J
1
L(z)
ˆ
R
ˆ
∂B(x1;z)∩R
p(x1, x2)
p(x1)p(x2)
dx1dS2. (14)
To reach a simple formula to calculate g(z), we need to calculate the integral L(z). In general,
calculating L(z) can be awkward and we show how to avoid this in the next section.
To simplify the radial pair-correlation (14) we combine (8) and (9) to write the paircorrelation (4) in terms of Dirac delta functions, which we then substituted into (14), and
integrate over x1 to obtain:
g(z) = 1
S
1
n
2
X
S
s
X
ri∈Xs
X
rj̸=ri,rj∈Xs
1
L(z)
ˆ
∂B(ri;z)∩R
δ(x2 − rj )dS2. (15)
where n := J/|R| is the particle number density. To simplify (15), note that because rj ∈ R we
have that:
ˆ
∂B(ri;z)∩R
δ(x2 − rj )dS2 =
ˆ
∂B(ri;z)
δ(x2 − rj )dS2.
9
At greater length, this is a result of the integral over x2 ̸∈ R having an integrand which is zero,
δ(x2 − rj ) = 0, because rj ∈ R, allowing us to rewrite (15) in the form:
g(z) = 1
S
1
n
2
X
S
s
X
ri∈Xs
X
rj̸=ri,rj∈Xs
1
L(z)
ˆ
∂B(0;z)
δ(ri − rj + x)dSx, (16)
where we used the change of variables x = x2 − ri
. The change of variables to x = x2 − ri
essentially shifts the centre of the sphere to the origin. We can now show how the Dirac delta
function can be used to isolate the contribution of particle pairs at exactly distance z apart:
ˆ
∂B(0;z)
δ(r + x)dSx = δ(|r| − z), (17)
by noting that for any z1 < z2 we have that:
ˆ z2
z1
ˆ
∂B(0;z)
δ(r + x)dSxdz =
ˆ
B(0;z2)\B(0;z1)
δ(r + x)dVx =



1, if z1 < |r| < z2,
0, else,
(18)
where we note that dSxdz = dVx is a volume element. Considering the properties of the Dirac
delta [2], equation (18) can be used to deduce (17).
Substituting these results into (16) leads to:
g(z) = 1
S
1
n
2L(z)
X
S
s
X
ri∈Xs
X
rj̸=ri,rj∈Xs
δ(|ri − rj
| − z). (19)
The only change in (19) when changing from three spatial dimensions to two spatial dimensions
is that L(z) is given by (13) but with R being two dimensional and the integral over S2 being a
line integral.
3 Particles in two regions
To avoid the influence of the boundary that encloses the particles, and avoid calculating L(z)
appearing in (33), we consider two different regions where particles can be placed R1 and R2 as
shown in Figure 1. We consider that x1 and x2 are two different random variables with x1 ∈ R1
and x2 ∈ R2. Note that R1 ⊂ R2, so, the particles J1 of R1 are a subset of particles J2 of R2. This
setup allows for a focus on the internal interactions within R1 while minimising the boundary
effects from R2.
To calculate the joint probability distribution p(x1, x2), let X
s be such that every x2 ∈ X s
is
3.1 Isotropic distributions 10
R1
R2
R1
R2
Figure 1: The left image shows a finite set of particles in a region R1 taken from a larger set of disordered
particles in the region R2. Note that R1 is contained within R2. On the right a unit cell of random particles
in a region R1 that is periodically tilled. On the right, the region R2 is a cut out from the periodic tilling of
the particles in R1. We use ℓ to indicate the minimum length of periodicity, which is the height of the unit
cell shown in the image on the right.
also in x2 ∈ R2, then considering that x1 ∈ R1 and x2 ∈ R2 we have that:
pV (vi
, vj ) = 1
S
X
S
s
# [X
s ∩ V (vi)]
#[X s ∩ R1]
# [X
s ∩ V (vj )]
#[X s\V (vi)]
1
|V (vi)||V (vj )|
for i ̸= j, (20)
such that vi ∈ R1, vj ∈ R2, and V (vi) ∩ V (vj ) = ∅ for every i, j, and:
∪
J1
i=1V (vi) = R1 and ∪
J2
j=1 V (vj ) = R2.
As a check of the formula (20), performing an integral of pV (vi
, vj ) for vi ∈ R1 and vj ∈ R2 gives
1 as expected by following similar steps as shown in (3).
For the two different regions, the definition of the particle pair-correlation (4) now becomes:
g(x1, x2) := J2 − 1
J2
p(x1, x2)
p(x1)p(x2)
, (21)
where J2 = #X
s
.
3.1 Isotropic distributions
The probability density for the two regions, and an isotropic distribution of particles, is similar to
before with:
p(x1) = 1
|R1|
and p(x2) = 1
|R2|
. (22)
3.1 Isotropic distributions 11
Using analogous steps shown in Section 2.2 to reach (19) we can reach:
g(z) = 1
n
2L(z)
1
S
X
S
s
X
ri∈Xs∩R1
X
rj̸=ri,rj∈Xs
δ(|ri − rj
| − z). (23)
Equation (23) "selects" only those particle pairs whose separation distance is exactly z. It does
this by being zero everywhere except where its argument is zero. In this case, it becomes non-zero
only when |ri − rj
| = z.
However, now we can explicitly calculate L(z) given by:
L(z) = ˆ
R1
ˆ
∂B(x1;z)∩R2
dS2dx1. (24)
Assume we want to calculate g(z) for 0 ≤ z ≤ Z. To do this we can require that: the distance
between the boundaries ∂R2 and ∂R1 be greater than or equal to Z. This condition ensures that
for any z ≤ Z, any point x2 on the surface of the sphere B(x1; z) is also within R2. This is crucial
for the validity of the pair-correlation calculation, as it guarantees that the integration domain
over S2 becomes the entire surface of the sphere, simplifying the computation of L(z). In other
words, the domain of integration over S2 becomes ∂B(x1; z) ∩ R2 = ∂B(x1; z), which used in
(24) for three spatial dimensions leads to:
L(z) = 4πz2
|R1|. (25)
As a quick check, if R2 was a sphere with radius R2 centred at the origin, then, ´ R2
0
L(z)dz =
|R1||R2| as it should. Substituting (24) into (23) leads to:
g3(z) = 1
4πnz
2J1
1
S
X
S
s
X
ri∈Xs∩R1
X
rj̸=ri,rj∈Xs
δ(|ri − rj
| − z), (3D spatial), (26)
where J1 = #[X
s∩R1], and we use g3 instead of g to indicate that (26) is for 3 spatial dimensions.
For two spatial dimensions we have L(z) = 2πz|R1| which substituted into (23) leads to:
g2(z) = 1
2πnzJ1
1
S
X
S
s
X
ri∈Xs∩R1
X
rj̸=ri,rj∈Xs
δ(|ri − rj
| − z), (2D spatial). (27)
12
Next, we re-deduce (26) and (27) without using Dirac delta functions.
4 The discrete form for isotropic pair-correlations
In this section we redo the calculations that lead to (26) and (27) but without the use of the
Dirac delta function. That is, without taking the limit of volume elements tending to zero as used
to reach (7). Doing this serves two purposes:
1. It can be simpler to understand these discrete formulas, and implement them as a numerical
method.
2. It helps to verify the formulas by reaching formulas we can compare with literature and
having two avenues to deduce the same formulas.
4.1 Particles in one region
Here we consider that all particles are within one region, ri
, rj ∈ X s
, and re-deduce the results
that led to the formula (19) but without Dirac deltas.
To reach a simple formula for g(z) with the discrete approximation (2), we discretise the
integral in (14), substitute (2), and use the discrete approximation for the differentials:
dx1 = |V (vi)|, dzdS2 = |V (vj )|, (28)
to obtain:
g(z) = J − 1
J
|R|2
L(z)dzS
X
S
s
X
i
X
|vi−vj |≈z
# [X
s ∩ V (vi)]
#X s
# [X
s ∩ V (vj )]
# [X s\V (vi)] , (29)
where we used (9) to substitute p(x1) = p(x2) = 1/|R|, and the sum over j is for every vj such
that z − dz/2 < |vi − vj
| < z + dz/2. As the minimum value for z = 2a, we just set g(z) = 0 for
z ≤ 2a, where a denotes the radius of the particle.
At this point, due to the choice (28), the volumes |V (vi)| and |V (vj )| do not appear explicitly
in (29). This allows us to simplify the formula by choosing V (vi) and V (vj ) to be sufficiently
small so that they each contain no more than one particle. For the indices i and j where there is
no particle in V (vi) and V (vj ) respectively, we have # [X
s ∩ V (vi)] = 0 and # [X
s ∩ V (vj )] = 0.
This makes it convenient now to only sum over the i, and j where:
# [X
s ∩ V (vi)] = # [X
s ∩ V (vj )] = 1, (30)
# [X
s
\V (vi)] = #X
s − 1 = J − 1, (31)
4.1 Particles in one region 13
which used in (29) leads to:
g(z) = 1
n
2
1
L(z)dzS
X
S
s
X
i
X
|vi−vj |≈z
1, (32)
where we used the particle number density n := J/|R|. Now, when the volume elements V (vi)
and V (vj ) are significantly small, approaching zero there is only one particle centre in V (vi) and
one other particle centre in V (vj ). In this limit, vi and vj approximate the actual positions ri
and rj
in X
s
, which means we can sum over the actual positions ri and rj
instead of the volume
elements vi and vj
. This leads us to rewrite (32) in the reduced form:
g(z) = 1
n
2L(z)dzS
X
S
s
X
ri∈Xs
#X
s
i
(z), (discrete pair-correlation), (33)
where X
s
i
(z) are all the particles rj such that are |ri − rj
| ≈ z, or, more precisely with set builder
notation:
X
s
i
(z) := {rj ∈ X s
: z − dz/2 ≤ |ri − rj
| < z + dz/2}, (34)
and #X
s
i
(z) is the number of elements in X
s
i
(z).
The only change in the formula (32) when changing from three spatial dimensions to two
spatial dimensions is that L(z) is given by (13) but with R being two dimensional and the integral
over S2 being a line integral.
Now, to show that the discrete pair-correlation function (33) is equivalent to (19) involving
the Dirac delta, we need to show that:
lim
dz→0
#X
s
i
(z)
dz
=
X
rj̸=ri,rj∈Xs
δ(|ri − rj
| − z). (35)
To verify (35), let us define:
f(x) =



1, if z − dz/2 ≤ x ≤ z + dz/2,
0, otherwise.
Then, #X
s
i
(z) = P
rj̸=ri,rj∈Xs f(|ri − rj
|). To complete the demonstration of (35) we note that for
any x we have that:
lim
dz→0
f(x)
dz
= δ(x − z). (36)
Equation (36) becomes infinitely high and narrow while integrating to 1, precisely picking out
values at x = z.
4.2 Particles in two regions 14
4.2 Particles in two regions
Using (22) and the steps shown in Section 3, we can reach a formula which is analogous to (33)
but for ri ∈ R1 and rj ∈ R2 as illustrated in Figure 1 given by
g3(z) = 1
S
1
4πz2dz
X
S
s
1
nJ1
X
ri∈Xs∩R1
#X
s
i
(z), (3D isotropic), (37)
where we substituted (25) and used J1 = #[X
s ∩ R1]. Equation (37) is the same as the formula
[3, Equation (2)], and [54, Equation (8.3.8)] when specialising their formula for particles with
the same radius, and when taking R1 = R2.
For two spatial dimensions the pair-correlation becomes
g2(z) = 1
S
1
2πzdz
X
S
s
1
nJ1
X
ri∈Xs∩R1
#X
s
i
(z), (2D isotropic). (38)
As a final check, note that if particle positions were uncorrelated then #X
s
i
(z) ≈ 4πnz
2dz,
for three spatial dimensions, because the number of particles would then be proportional to the
volume times the number density. Substituting this approximation into (37) leads to g3(z) = 1,
which is what is expected from uncorrelated particles.
5 The Structure Factor
The structure factor, known as S(k), plays a crucial role in material science and condensed matter
physics [29, 30, 41, 42, 48]. Many experimental techniques, such as X-ray diffraction, neutron
scattering and electron microscopy, inherently measure the structure factor, providing a deep
understanding of the arrangement and density fluctuations of particles within a material [5, 31,
49]. Unlike the pair-correlation function g(r) which gives the probability of finding particle pairs
at a certain distance, the structure factor captures the intensity of scattered waves from materials,
revealing both local and long-range order through its relationship as the Fourier transform of g(r)
[10, 24, 55]. This makes the structure factor, S(k), an integral part of interpreting experimental
data, providing information for both characterising new materials and designing them with
specific properties.
The expressions for the structure factor in two and three dimensions are well-established in
the field of material science [39, 51, 55]. In this section we re-derive the structure factor from
first principles using (26) and (27).
Mathematically, the pair-correlation g(z) in the form (26) shows how g(z) is a discontinuous
15
function when calculated from a finite number of particles. It is discontinuous in the variables z
and the position of the particles ri
. As g(z) is not a smooth function, we can not use techniques
from local nonlinear optimisation to calculate a particle configuration to match a specific paircorrelation. To avoid this, we can take a transform of the pair-correlation such as the structure
factor:
S(k) = 1 + n
ˆ
(g(r) − 1)e−ik·r
dr, (The Structure factor), (39)
where r = |r| and k = |k| is the magnitude of the wave vector. Equation (39) matches the
typical definition of the structure factor [51, 54, 56], noting that the notation h(r) = g(r) − 1 is
commonly used.
For some of the following calculations, we will perform the integral over g(r) and −1 separately.
To do this we note that:
δ(k) = 1
(2π)
n
ˆ
e
−ik·r
dr, (40)
where n is the spatial dimension, which in this paper is either n = 3 or n = 2.
For any given isotropic pair-correlation g(r) the structure factor (39) can be simplified to a
1D integral. To do this, we assume that particles become uncorrelated at a distance of R so that
g(r) = 1 for 0 ≤ r ≤ R. Then from (39) we can calculate that for three spatial dimensions:
S3(k) = 1 + 4π
k
n
ˆ R
0
(g3(r) − 1) sin(kr)rdr, (41)
and for two spatial dimensions:
S2(k) = 1 + 2πn
ˆ R
0
(g2(r) − 1)J0(kr)rdr. (42)
We will use (42) to calculate the structure factor from a target pair-correlation in the next section.
We can further simplify the structure factor when calculating it from a configuration of
particles. For three spatial dimensions, we can substitute (26) into the structure factor (41), but
with R = ∞, and using the property of the Dirac delta, to obtain:
S3(k) = 1 + 1
S
X
S
s
1
J1
X
ri∈Xs∩R1
X
rj∈Xs
rj
̸=ri
sin(k|ri − rj
|)
k|ri − rj
|
, (3D Structure factor), (43)
for k > 0. When calculating (43), a term of the form −(2π)
3nδ(k) appears, according to (40),
however, as we consider only k > 0 it has no contribution to the above.
16
Following analogous steps, the two dimensional structure factor calculated from (27) becomes:
S2(k) = 1 + 1
SJ1
X
S
s
X
ri∈Xs∩R1
X
rj∈Xs
rj
̸=ri
J0(|k||ri − rj
|), (2D Structure factor), (44)
for k > 0, where J0 is the Bessel function of the first kind.
6 Particle configurations from the structure factor
In theory, the pair-correlation is calculated by taking into account an infinite number of different
particle configurations. Yet, many exotic material properties can be achieved by choosing specific
pair-correlations, with one example being hyperuniform disordered materials [51, 52, 59].
So being able to calculate one configuration of particles which closely represents any given
pair-correlation would provide a route to fabricate particulate materials which exhibit exotic
properties.
To recover a specific configuration of particles from a pair-correlation, we show a method to
find a configuration of particles which is the mean particle configuration. Suppose we are given
some pair-correlation g
⋆
(z), then we want one configuration of particles that when substituted
into (37) will be close to g
⋆
(z), when removing the sum over the ensembles by setting S = 1.
6.1 Restrictions
For any given pair-correlation g and S structure factor there are certain restrictions [10, 55, 57]
that need to be satisfied. These need to be considered when choosing a target pair-correlation g
⋆
or structure factor S
⋆
. We will only consider a few of these restrictions, and note that there may
be an infinite number of necessary, though more complicated, conditions on the pair-correlation
[10].
The simplest restrictions are that:
g
⋆
(r) ≥ 0 and S
⋆
(k) ≥ 0, (45)
where the first is due to the definition (21) together with the basic rule that probability functions
must be positive. The second needs to be non-negative because of the relation of the structure
factor S(k) with the variance of the particle density. This is discussed in [10, 48, 55, 57].
As we focus on disordered particulates we require that particles become uncorrelated at some
6.1 Restrictions 17
distance R. This requirement implies that:
g
⋆
(r) = 1, for every r ≥ R. (46)
Further, from the definition (21), together with (22), we have that:
ˆ
R2
ˆ
R1
g(x1, x2)dx1dx2 =
J2 − 1
J2
|R1||R2|
ˆ
R1
ˆ
R2
p(x1, x2)dx1dx2
=
J2 − 1
J2
|R1||R2|. (47)
Alternatively, using isotropy so that g depends on only |x1 − x2|, the condition (46), and specialising to three spatial dimensions, we make use of (26) to obtain:
ˆ
R2
ˆ
R1
(g3(|x1 − x2|) − 1)dx1dx2 =
ˆ ˆ R
0
ˆ
R1
(g3(z) − 1)dx1z
2
dzdΩ
= 4π|R1|
ˆ R
0
(g3(z) − 1)z
2
dz. (48)
In (48), the integral over the regions R1 and R2 are simplified to a radial integral over distance z
with an angular component represented by Ω, the solid angle. The solid angle Ω is crucial for
integrating over all directions in three-dimensional space, accounting for the isotropy condition
(46). By changing variables to z = x2 − x1, we further simplify the expression, resulting in the
integral over z and Ω that accounts for the entire spherical symmetry around a point. Combining
(47) and (48) leads to the restriction:
ˆ R
0
g3(z)z
2
dz =
R3
3
−
1
4πn
, (49)
where we used n = J2/|R2|. For two spatial dimensions, following analogous steps and using
(27), we obtain the restriction:
ˆ R
0
g2(z)zdz =
R2
2
−
1
2πn
. (50)
We can also translate the pair-correlation to satisfy (50). Let:
g2(r) = g0
2
(r) + a dp(r), (51)
where dp(r) → 0 when r → R. In simple terms, (51) modifies an initial pair-correlation function
g
0
2
(r) to include a perturbation, aiming to adjust the particle distribution within a specific range.
6.2 Gradient optimisation 18
The perturbation dp(r) is designed to become negligible as the distance r reaches a specific point
R. Then, given a number density n we can obtain dp from (50):
a =
hR2
2
−
1
2πn
−
ˆ R
0
g2(z)zdz
ih ˆ R
0
dp(z)zdz
i−1
. (52)
The selection of dp(r) = e−6r/R guarantees this vanishing effect, exponentially decreasing as
r increases. The equation for a calculates the necessary scaling factor to achieve the desired
distribution pattern, factoring in the number density of particles and the integral of the paircorrelation function up to R.
6.2 Gradient optimisation
For some inner product:
⟨G, H⟩k =
ˆ
G(k)H(k)w(k)dk,
where w(k) is some known weight. The objective is to find a particle configuration X that
minimises:
min
ri∈X
f(X ), where f(X ) := ⟨S − S
⋆
, S − S
⋆
⟩k. (53)
Equation (53) uses an integral to assess the similarity between the actual and target structure
factors, S and S
⋆
respectively, over a range of spatial frequencies k. This method helps to quantify
how much the particle configuration X deviates from the desired configuration.
Most methods in the literature [28, 43] achieve this by using non-gradient-based methods
such as Genetic Algorithms, Nelder-Mead, and Simulated Annealing. However, f, as written
above, is a smooth function of the position of the particles in X . Further, it is straightforward
to analytically calculate the gradient of f in terms of the particle positions rj
. This implies the
gradient based methods [45] hold significant potential for superior performance over traditional
non-gradient-based approaches. In specific, the objective function f, and its gradient, can be
computational expensive to calculate so we opt to use the Limited memory BFGS (L-BFGS)
methods [27, 33], as it stores information on the Hessian (the gradient of the gradient) and uses
this to accelerate convergence. This often implies that L-BFGS requires less evaluations of the
objective function and its gradient [27].
Specifically, we develop a method to minimise (53) in two steps, one global, and one local.
Separating the two steps allows us to search over a large area of the parameter space with the
global step, while still obtaining high precision with the local step. Another clear reason, based on
recovering a configuration of particles, is that if we had the constraint of particles not overlapping,
then it can lead to particles being locked in configurations which can be far from the global
6.2 Gradient optimisation 19
minimum. For this reason we only enforce no particle overlapping in the local step.
The global step. A global optimisation that completely rearranges all particles to minimise (53). For this step, we will allow particles to overlap, helping us explore a broad range
of particle configurations and avoid locking the particles in a configuration and we will use a
limited range for the wavenumbers k1 ≤ k ≤ k2 when minimising (53). That is, in this step
we do not want to resolve spatial details smaller than the length scale 2a, since it might not
significantly influence the properties of the material. So the shortest wavelength λ we consider
for the structure factor is λ = 2a which corresponds to wavenumbers k ≤ k2 = π/a. The smallest
wavenumber k1 is determined by the dimensions of the material: let D1 be the smallest dimension
of R1, then the longest wavelength we consider is λ = D1 which implies that k ≥ k1 = 2π/D1.
The local step. This step improves the particle configurations obtained from the global
step. This involves making small adjustments to the particle positions to achieve a more accurate
and realistic distribution of particles. We also enforce a penaliser W, shown in (60), to prevent
overlaps between particles. The penaliser has the form of an exponential that increases very
rapidly as the distance decreases. This means that as particles get closer to each other, the penalty
for their overlap increases exponentially. For this step we also want to resolve spatial details.
Suppose we want to resolve details up to a/4, then k2 = 8π and k1 ≤ k ≤ k2 for this step.
To use techniques from nonlinear optimisation [33, 45] to minimise calculate (53) we need
to calculate the gradient:
∂f(X )
∂rj
=
∂
∂rj
⟨S − S
⋆
, S − S
⋆
⟩k = 2X
i
⟨
∂S
∂Rij
, S − S
⋆
⟩k
∂Rji
∂rj
(54)
= 2⟨
X
i
∂S
∂Rji
Rji
Rji
, S − S
⋆
⟩k, (55)
where



Rji = rj − ri
, the vector from ri to rj
,
Rji = |rj − ri
|, the magnitude of Rji,
∂Rji
∂rj
=
Rji
Rji
, the gradient of Rji with respect to rj
.
(56)
In particular, for (44) we have:
∂S2
∂Rji
=
k
J1



J
′
0
(|k|Rji), if rj ̸∈ R1,
2J′
0
(|k|Rji), if rj ∈ R1,
(57)
where there are two cases because: if rj ∈ R1 then J0(kRji) gets summed twice in (44), but if
6.2 Gradient optimisation 20
rj ̸∈ R1 then J0(kRij ) only appears once in the summation. Likewise for (43) we have:
∂S3
∂Rji
=
k
J1
1
(kRij )
2



kRij cos(kRij ) − sin(kRij ), if rj ̸∈ R1,
2kRij cos(kRij ) − 2 sin(kRij ), if rj ∈ R1.
(58)
For most optimisation methods, we choose to use Optim.jl [33], we need to supply the total
gradient:
∇f =

∂f(X )
∂r1
,
∂f(X )
∂r2
, . . . ,
∂f(X )
∂rj

,
where the block vector on the right is typically flattened to be just one large vector.
For the local step, after the global step is complete, we add a restriction that penalises particles
that are overlapping. That is instead of minimising (53), we minimise:
min
ri∈X
f(X ) + AW(X ), (59)
where A is some large positive constant that is problem dependant and:
W =
X
i,j̸=i
χ{Rji<2a}e
−4R2
ji/(2a)
2
. (60)
The specific formula for the penaliser (60) has the form of a Gaussian distribution [21] and was
chosen to effectively prevent particle overlaps during the local optimisation step. This function is
smooth and differentiable, and it rapidly increases the penalty as the distance between particles
becomes less than twice their radius. Having said that, the gradient of the penaliser (60) with
respect to the position of the j-th particle has the following form:
∂W
∂rj
= −
4
a
2
X
i̸=j
χ{Rji<2a}e
−4R2
ji/(2a)
2
Rji. (61)
For ease of implementation we use a discrete form:
⟨G, H⟩k =
X
q
GqHqwq,
where wq are some Gaussian quadrature weights. For example we can write:
∂f(X )
∂rj
= 2X
iq
∂Sq
∂Rji
Rji
Rji
(Sq − S
⋆
q
)wq. (62)
The discrete form (62) simplifies the calculation of gradients in computational simulations. This
6.3 Preliminary numerical results 21
technique allows for efficient numerical approximation of gradients necessary for optimising
particle positions based on the difference between observed and desired structural properties.
6.3 Preliminary numerical results
In this section we share our preliminary results and discuss potential future developments with
our method.
Selection of pair-correlation. The first step is to have a systematic way to choose candidate
pair-correlations, with one motivation being to control wave propagation [15]. Our work begins
with the selection of appropriate pair-correlations that satisfy the restrictions given in Section 6.1.
Our choice is the Percus-Yevick model, a well-studied pair-correlation [1, 23, 51, 54] which
represents disordered particles with very short range correlation. This model effectively catches
the behaviour of uniformly distributed particles that exhibit correlations only because they can
not overlap. Figure 2 illustrates this concept, displaying the pair-correlation for hard discs in a
two-dimensional setup, where these discs account for a 15% volume fraction and each particle
has a radius of a = 1. This figure also includes the corresponding structure factor, highlighting
how the spatial arrangement of particles influences wave propagation through the material. Pair-correlation
z (distance)
Percus-Yevick
0 5 10 15 20
k (wavenumber)
0.5
0.6
0.7
0.8
0.9
1.0
1.1
structure factor
Percus-Yevick
Structure factor
k (wavenumber)
Percus-Yevick
Figure 2: On the left, the Percus-Yevick pair-correlation for hard discs [1], in two spatial dimensions,
where the discs occupy 15% of the volume fraction. On the right the corresponding structure factor when
using (42).
Initial configuration. The next step is to generate an initial configuration of particles with
the correct sizes, and within a given volume fraction [54], as shown in Figure 3a. The simplest
way to do this is to place particles on a grid. This also facilitates defining the regions R1 and
R2 which are needed to calculate the pair-correlation without introducing artefacts from the
boundary, as discussed in Section 3. However, placing particles exactly in a periodic grid would
lead to a set of problems, especially when it comes to finding the optimal arrangement using
gradient-based optimisation techniques. The symmetrical nature of the periodic grid tends to
position the configuration at a local maximum which may not be an ideal starting position for
22
gradient-based methods. In other words, this symmetry can trick our optimisation methods into
thinking they have found the best arrangement when there might be better choices they have
not explored yet. To avoid this, we introduce a simple yet effective strategy: we slightly move
each particle by a small distance in a random direction to break the symmetry, creating a more
favourable setting for optimisation.
Initial particle configuration
(a) Initial particle configuration.
Predicted particle configuration
(b) Predicted particle configuration.
Figure 3: Figure 3a presents the initial position of all the particles, while Figure 3b demonstrates the
optimised particle configuration that closely aligns with the structure factor depicted in Figure 2, achieved
through our optimisation method.
Optimisation method and results. Our optimisation method is executed in two steps: The
first step of our method, the global step, minimises the objective function (53) and is able to
exactly match the specified structure factor, as demonstrated in Figure 2. Following this global
step, we employ a local optimisation step to refine the particle configuration further. The result of
the structure factor of the optimised particle configuration, after the local step, is displayed in
Figure 4. Despite the slight noise introduced by the finite number of particles (600 particles of
radius a = 1 occupying a 15% volume fraction in two spatial dimensions), the predicted structure
factor matches the target structure factor. Moreover, the predicted pair-correlation, shown in
Figure 4, offers further insight. Although there is some noise due to the small number of particles,
we see a good match with the desired pair-correlation.
7 Conclusions
In this paper, we deduced from first principles how to calculate both the pair-correlation and
structure factor of a finite disordered particulate. We demonstrated how to do this without getting
artefacts from the boundary of the particulate, something which seems to be ignored in the
literature. Thus, it was possible to calculate the pair-correlation of an infinite particulate from a
finite sample. This is generally desired, as most theoretical methods use the pair-correlations from
an infinite medium, including the very important translation invariance which greatly simplifies
23
Pair-correlation
z (distance)
Structure factor
k (wavenumber)
Figure 4: The optimised particle configuration consisting of 600 particles of radius a = 1 occupying 15% of
the particulate, depicted in Figure 3b, closely aligns with the desired structure factor and pair-correlation,
despite noise introduced by the limited number of particles.
the pair-correlation.
Being able to calculate the pair-correlation from a particulate was rather straightforward
in comparison to the inverse: calculating a particulate from a pair-correlation. We presented
a method to calculate one configuration of particles that best fitted a given pair-correlation or
structure factor.
Most methods in the literature [20, 45, 55] that calculate particle configurations from the
pair-correlation of structure factor use non-gradient-based methods such as Genetic Algorithms,
Nelder-Mead, and Simulated Annealing. Several works in fact focus on trying to approximate
the pair-correlation with a particulate, which is an inherently discontinuous function as the joint
probability function (8) involves Dirac deltas. Instead, we suggested that it is best to seek a
configuration of particles to approximate the structure factor, as it is a smooth function of the
particle positions, as shown by (43) and (44). This enabled us to analytically calculate the gradient
of the structure factor, in terms of the particle positions, leading to faster convergence to optimal
configurations. The efficacy of our method was evidenced through visual representations in Figure
3, which showed the transformation from the initial to the optimised particle configurations,
matching the theoretical model. Furthermore, the comparison of the structure factors before and
after optimisation, as depicted in Figure 4, underscored the precision of our approach, achieving
an almost identical match to the targeted structure factor.
Optimising particle configurations holds significant implications for a wide range of engineering applications. By precisely controlling particle configurations, engineers can tailor material
properties for diverse applications in aerospace, automotive, and structural engineering, ensuring
optimal performance and reliability.
Future avenues. We presented a two step method to calculate the structure factor from
a configuration of particles, one step for global optimisation that avoids particle locking, and
24
one step for local optimisation. To have clear evidence about the performance advantage of our
method, it is essential to further validate and compare our method against traditional brute-force,
non-gradient-based optimisation techniques, such as Genetic Algorithms and Simulated Annealing.
This method can be further developed to easily add priors about the particle configuration and
treat this as a statistical inverse problem [21]. There is a significant amount of prior information
that could be used [36, 58]. For example, when using more than one type of particle, some
particles may repel or attract each other. Or there can be specific knowledge on chains or subcomponents of particles. This information can be added as a prior, or regulariser. This seems to
be an unexplored approach that could greatly increase the performance of this inverse problem.
Moreover, the preliminary results presented in Section 6.3, not only validate our novel approach
to determining particle configurations from structure factors, but also open up new possibilities
for future research. By fine-tuning the particle configurations, we could explore a wider range
of pair-correlations and structure factors, potentially uncovering new ways to manipulate wave
propagation in disordered particulate materials.
Author contributions
AK conceived of the study, drafted the manuscript, developed the theoretical calculations, wrote
all the code for the numerical calculations, and produced all the figures. ALG helped conceive the
study, edited the manuscript, assisted with and verified the theoretical calculations.
Data and reproducibility
To produce our results we used the open source software [17], [18] and [34].
25
References
[1] M. Adda-Bedia et al. ‘Solution of the Percus-Yevick equation for hard disks’. In: The Journal
of Chemical Physics 128.18 (May 2008). URL: http://dx.doi.org/10.1063/1.2919123.
[2] George B Arfken et al. Mathematical methods for physicists: a comprehensive guide. Academic
press, 2011.
[3] J.A. Barker et al. ‘Monte Carlo values for the radial distribution function of a system of
fluid hard spheres’. In: Molecular Physics 21.1 (Jan. 1971), 187–191. URL: http://dx.doi.
org/10.1080/00268977100101331.
[4] V.V. Bringi et al. ‘The effects on pair correlation function of coherent wave attenuation
in discrete random media’. In: IEEE Transactions on Antennas and Propagation 30.4 (July
1982), pp. 805–808. URL: https://doi.org/10.1109/tap.1982.1142852.
[5] O. L. Caballero et al. ‘Molecular Dynamics Simulations for Neutrino Scattering in Heterogeneous High Dense Media’. In: (2008). URL: https://doi.org/10.1063/1.2905137.
[6] Rémi Carminati et al. Principles of Scattering and Transport of Light. Cambridge University
Press, June 2021. URL: https://doi.org/10.1017/9781316544693.
[7] F. Carsughi et al. ‘Small-angle neutron scattering from silica particles in solution with
different concentrations’. In: Physica B: Condensed Matter 234-236 (June 1997), pp. 343–
346. URL: https://doi.org/10.1016/s0921-4526(97)00980-0.
[8] F. S. Carvalho et al. ‘Radial distribution function for liquid gallium from experimental
structure factor: a Hopfield neural network approach’. In: Journal of Molecular Modeling
26.8 (July 2020). URL: https://doi.org/10.1007/s00894-020-04436-y.
[9] L Cormier et al. ‘A reverse Monte Carlo study of a titanosilicate glass’. In: Journal of Physics:
Condensed Matter 9.46 (Nov. 1997), pp. 10129–10136. URL: https://doi.org/10.1088/
0953-8984/9/46/011.
[10] O. Costin et al. ‘On the Construction of Particle Distributions with Specified Single and Pair
Densities’. In: The Journal of Physical Chemistry B 108.51 (Oct. 2004), pp. 19614–19618.
URL: https://doi.org/10.1021/jp047793m.
[11] Jenness Crawford et al. ‘Aspects of correlation function realizability’. In: The Journal of
Chemical Physics 119.14 (Sept. 2003), pp. 7065–7074. URL: https://doi.org/10.1063/1.
1606678.
[12] Debdas Dhabal et al. ‘Probing the triplet correlation function in liquid water by experiments
and molecular simulations’. In: Physical Chemistry Chemical Physics 19.4 (2017), pp. 3265–
3278. URL: https://doi.org/10.1039/c6cp07599a.
26
[13] M. Fábián et al. ‘Network structure of multi-component sodium borosilicate glasses by
neutron diffraction’. In: Journal of Non-Crystalline Solids 353.18-21 (June 2007), pp. 2084–
2089. URL: https://doi.org/10.1016/j.jnoncrysol.2007.02.030.
[14] Hiroyuki Fujii et al. ‘Structural properties of liquid Au–Si and Au–Ge alloys with deep
eutectic region’. In: Journal of Non-Crystalline Solids 353.18-21 (June 2007), pp. 2094–
2098. URL: https://doi.org/10.1016/j.jnoncrysol.2007.02.031.
[15] Artur L Gower et al. ‘Effective waves for random three-dimensional particulate materials’.
In: New Journal of Physics 23.6 (June 2021), p. 063083. URL: http://dx.doi.org/10.
1088/1367-2630/abdfee.
[16] Artur L. Gower et al. ‘Multiple Waves Propagate in Random Particulate Materials’. In: SIAM
Journal on Applied Mathematics 79.6 (Jan. 2019), 2569–2592. URL: http://dx.doi.org/
10.1137/18M122306X.
[17] Artur L Gower et al. ‘MultipleScatering.jl: A Julia library for simulating, processing, and plotting multiple scattering of waves.’ In: github.com/JuliaWaveScattering/MultipleScattering.jl
(2020).
[18] Artur L Gower et al. ‘ParticleCorrelations.jl: A package to calculate typical pair
correlations (or structure factor) for disordered particulates, such as Percus-Yevick,
and to calculate specific particle configurations from given pair correlation.’ In: github.com/arturgower/ParticleCorrelations.jl (2023).
[19] C. J. Horowitz et al. ‘Neutrino pasta scattering: The opacity of nonuniform neutron-rich
matter’. In: Physical Review C 69.4 (Apr. 2004). URL: https://doi.org/10.1103/physrevc.
69.045804.
[20] C. J. Horowitz et al. ‘Nonuniform neutron-rich matter and coherent neutrino scattering’.
In: Physical Review C 70.6 (Dec. 2004). URL: https://doi.org/10.1103/physrevc.70.
065806.
[21] Jari P. Kaipio et al. Statistical and Computational Inverse Problems. Springer New York,
2005. URL: http://dx.doi.org/10.1007/b138659.
[22] D. A. Keen et al. ‘Structural modelling of glasses using reverse Monte Carlo simulation’. In:
Nature 344.6265 (Mar. 1990), pp. 423–425. URL: https://doi.org/10.1038/344423a0.
[23] Gerhard Kristensson et al. Multiple scattering by a collection of randomly located obstacles
Part IV: The effect of the pair correlation function. English. Vol. TEAT-7272. Technical Report
LUTEDX/(TEAT-7272)/1-23/(2021). 2021. URL: https : / / portal . research . lu . se /
en/publications/multiple- scattering- by- a- collection- of- randomly- locatedobstacles-8.
27
[24] T. Kuna et al. ‘Realizability of Point Processes’. In: Journal of Statistical Physics 129.3 (Sept.
2007), pp. 417–439. URL: https://doi.org/10.1007/s10955-007-9393-y.
[25] Tobias Kuna et al. ‘Necessary and sufficient conditions for realizability of point processes’. In:
The Annals of Applied Probability 21.4 (Aug. 2011). URL: https://doi.org/10.1214/10-
aap703.
[26] O. Leseur et al. ‘High-density hyperuniform materials can be transparent’. In: Optica 3.7
(July 2016), p. 763. URL: http://dx.doi.org/10.1364/OPTICA.3.000763.
[27] Dong C Liu et al. ‘On the limited memory BFGS method for large scale optimization’. In:
Mathematical programming 45.1-3 (1989), pp. 503–528.
[28] C. Manwart et al. ‘Reconstruction of random media using Monte Carlo methods’. In:
Physical Review E 59.5 (May 1999), pp. 5596–5599. URL: https://doi.org/10.1103/
physreve.59.5596.
[29] R L McGreevy. ‘Reverse Monte Carlo modelling’. In: Journal of Physics: Condensed Matter
13.46 (Nov. 2001), R877–R913. URL: https://doi.org/10.1088/0953-8984/13/46/201.
[30] R. L. McGreevy et al. ‘Reverse Monte Carlo Simulation: A New Technique for the Determination of Disordered Structures’. In: Molecular Simulation 1.6 (Dec. 1988), pp. 359–367.
URL: https://doi.org/10.1080/08927028808080958.
[31] M. Micoulaut et al. ‘Structural properties of chalcogenide glasses and the isocoordination
rule: Disentangling effects from chemistry and network topology’. In: Physical Review B
106.1 (July 2022). URL: http://dx.doi.org/10.1103/PhysRevB.106.014206.
[32] Milan M. Miloševi´c et al. ‘Hyperuniform disordered waveguides and devices for near
infrared silicon photonics’. In: Scientific Reports 9.1 (Dec. 2019). URL: http://dx.doi.
org/10.1038/s41598-019-56692-5.
[33] Patrick K. Mogensen et al. ‘Optim: A mathematical optimization package for Julia’. In:
Journal of Open Source Software 3.24 (2018), p. 615. URL: https://doi.org/10.21105/
joss.00615.
[34] Patrick Kofod Mogensen et al. ‘Optim: A mathematical optimization package for Julia’. In:
Journal of Open Source Software 3.24 (2018), p. 615.
[35] Rana Nandi et al. ‘Transport Properties of the Nuclear Pasta Phase with Quantum Molecular
Dynamics’. In: The Astrophysical Journal 852.2 (Jan. 2018), p. 135. URL: https://doi.
org/10.3847/1538-4357/aa9f12.
28
[36] Edoardo Patelli et al. ‘On optimization techniques to reconstruct microstructures of random
heterogeneous media’. In: Computational Materials Science 45.2 (Apr. 2009), pp. 536–549.
URL: https://doi.org/10.1016/j.commatsci.2008.11.019.
[37] R.K. Pathria et al. Statistical Mechanics of Interacting Systems: The Method of Cluster
Expansions. Elsevier, 2011, pp. 299–343. URL: https://doi.org/10.1016/b978-0-12-
382188-1.00010-4.
[38] Oliver H. E. Philcox et al. ‘Disordered Heterogeneous Universe: Galaxy Distribution and
Clustering across Length Scales’. In: Physical Review X 13.1 (Mar. 2023). URL: https :
//doi.org/10.1103/physrevx.13.011038.
[39] J. Piekarewicz et al. ‘Proton fraction in the inner neutron-star crust’. In: Physical Review C
85.1 (Jan. 2012). URL: https://doi.org/10.1103/physrevc.85.015807.
[40] Szilvia Pothoczki et al. ‘Partial radial distribution functions of methylene halide molecular
liquids’. In: Journal of Molecular Liquids 153.2-3 (May 2010), pp. 112–116. URL: https:
//doi.org/10.1016/j.molliq.2010.01.011.
[41] L. Pusztai et al. ‘MCGR: An inverse method for deriving the pair correlation function from
the structure factor’. In: Physica B: Condensed Matter 234-236 (June 1997), pp. 357–358.
URL: https://doi.org/10.1016/s0921-4526(96)00986-6.
[42] L. Pusztai et al. ‘Reverse Monte Carlo model calculations on a-C:H two-component systems’.
In: Zeitschrift für Physik B Condensed Matter 101.4 (Dec. 1996), pp. 631–636. URL: https:
//doi.org/10.1007/s002570050256.
[43] Jacques A. Quiblier. ‘A new three-dimensional modeling technique for studying porous
media’. In: Journal of Colloid and Interface Science 98.1 (Mar. 1984), pp. 84–102. URL:
https://doi.org/10.1016/0021-9797(84)90481-8.
[44] V. Romero-García et al. ‘Wave transport in 1D stealthy hyperuniform phononic materials
made of non-resonant and resonant scatterers’. In: APL Materials 9.10 (Oct. 2021). URL:
http://dx.doi.org/10.1063/5.0059928.
[45] Andrzej Ruszczynski. Nonlinear optimization. Princeton university press, 2011.
[46] A. Sheremet et al. ‘Absorption of scalar waves in correlated disordered media and its
maximization using stealth hyperuniformity’. In: Physical Review A 101.5 (May 2020). URL:
http://dx.doi.org/10.1103/PhysRevA.101.053829.
[47] Bo Sjöberg et al. ‘Interparticle interactions and structure in nonideal solutions of human
serum albumin studied by small-angle neutron scattering and Monte Carlo simulation’. In:
Biophysical Chemistry 52.2 (Oct. 1994), pp. 131–138. URL: https://doi.org/10.1016/
0301-4622(94)00089-1.
29
[48] Frank H. Stillinger et al. ‘Pair Correlation Function Realizability: Lattice Model Implications’. In: The Journal of Physical Chemistry B 108.51 (Aug. 2004), pp. 19589–19594. URL:
https://doi.org/10.1021/jp0478155.
[49] S. Torquato et al. ‘Controlling the Short-Range Order and Packing Densities of ManyParticle Systems’. In: The Journal of Physical Chemistry B 106.33 (July 2002), pp. 8354–
8359. URL: https://doi.org/10.1021/jp0208687.
[50] S. Torquato et al. ‘Exactly solvable disordered sphere-packing model in arbitrarydimensional Euclidean spaces’. In: Physical Review E 73.3 (Mar. 2006). URL: https :
//doi.org/10.1103/physreve.73.031106.
[51] S Torquato et al. ‘Random Heterogeneous Materials: Microstructure and Macroscopic
Properties’. In: Applied Mechanics Reviews 55.4 (July 2002), B62–B63. URL: https://doi.
org/10.1115/1.1483342.
[52] Salvatore Torquato. ‘Hyperuniform states of matter’. In: Physics Reports 745 (June 2018),
pp. 1–95. URL: https://doi.org/10.1016/j.physrep.2018.03.001.
[53] G. Torrie et al. ‘Monte Carlo calculation of y(r) for the hard-sphere fluid’. In: Molecular Physics 34.6 (Dec. 1977), pp. 1623–1628. URL: https : / / doi . org / 10 . 1080 /
00268977700102821.
[54] Leung Tsang et al. Scattering of Electromagnetic Waves: Numerical Simulations. Wiley, May
2001. URL: http://dx.doi.org/10.1002/0471224308.
[55] O.U. Uche et al. ‘On the realizability of pair correlation functions’. In: Physica A: Statistical
Mechanics and its Applications 360.1 (Jan. 2006), pp. 21–36. URL: https://doi.org/10.
1016/j.physa.2005.03.058.
[56] Kevin Vynck et al. ‘Light in correlated disordered media’. In: Reviews of Modern Physics
95.4 (Nov. 2023). URL: http://dx.doi.org/10.1103/RevModPhys.95.045003.
[57] Masami Yamada. ‘Geometrical Study of the Pair Distribution Function in the Many-Body
Problem’. In: Progress of Theoretical Physics 25.4 (Apr. 1961), pp. 579–594. URL: https:
//doi.org/10.1143/ptp.25.579.
[58] C. L. Y. Yeong et al. ‘Reconstructing random media’. In: Physical Review E 57.1 (Jan. 1998),
pp. 495–506. URL: https://doi.org/10.1103/physreve.57.495.
[59] Ge Zhang et al. ‘Realizable hyperuniform and nonhyperuniform particle configurations
with targeted spectral functions via effective pair interactions’. In: Physical Review E 101.3
(Mar. 2020). URL: https://doi.org/10.1103/physreve.101.032124.