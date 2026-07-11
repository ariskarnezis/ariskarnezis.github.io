export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  relatedProject?: string;
  content: string;
}

export const articlesData: Article[] = [
  {
    id: "effective-wavenumber-multiple-waves",
    title: "Why One Effective Wavenumber Isn't Always Enough",
    excerpt: "For a long time, researchers have used a simple idea to describe how waves travel through random materials. It turns out this simple picture isn't always enough.",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Physics",
    tags: ["Wave Scattering", "Random Media", "Effective Medium Theory"],
    relatedProject: "average-transmitted-wave-particulate-materials",
    content: `This is the first article I'm writing in this section, and I wanted to start with something familiar — my own work. Recently, I published a paper on wave scattering in random particulate materials, and I thought it would be a good opportunity to explain some of the ideas in a more accessible way. If you're interested in the technical details, you can find the full paper linked above in the "Related Research" section. Here, I'll focus on the core concepts and why they matter.

For a long time, researchers have used a simple idea to describe how waves travel through random materials.

If you send a wave into a material filled with many randomly placed particles, the details quickly become messy. Every particle scatters the wave, and every arrangement looks slightly different. But if you average over many possible arrangements, something surprising happens: the overall behaviour often becomes much simpler.

A helpful way to picture this is to imagine shining a flashlight through fog. Up close, each droplet scatters light in its own way, and the motion is complicated. But from far away, the beam looks simple — it just travels forward and gradually fades.

This simplified picture is what scientists call an effective medium. Instead of tracking every particle, we replace the complicated material with a smoother one that behaves the same on average. And once we do that, we can describe the wave using just one number — the effective wavenumber, which tells us how fast the wave travels and how quickly it fades as it moves through the material.

For a long time, researchers assumed that this single effective wavenumber was always enough.

It turns out it isn't.

## When One Wavenumber Fails

The simple picture works very well when particles scatter weakly. But when scattering becomes strong, something different happens.

Instead of behaving like one clean wave travelling through a uniform material, the average field can contain more than one effective wave. Each travels differently, fades differently, and contributes to what we observe.

This matters because many real applications operate in exactly these stronger scattering regimes. If we ignore the extra waves, we risk misunderstanding how energy actually moves through the material.

There is also a practical takeaway: the transition is not mysterious. If individual particles scatter strongly, multiple effective waves are likely to appear.

## How We Checked

To see whether this was really happening, we ran large-scale numerical experiments.

The idea sounds simple: generate many random materials, simulate the wave scattering in each one, average the results, and compare with theory. In reality, it was much harder than expected.

We needed tens of thousands of simulations before the average became stable. Each simulation involved solving a full scattering problem, which is already computationally demanding. Even after averaging, extracting the effective waves from the results required careful analysis.

But the effort paid off.

The simulations showed clear evidence that in some regimes the material transmits not just one effective wave, but two. This was not numerical noise or overfitting — it was a consistent physical effect.

## What Happens to the Original Wave?

This raises another natural question: what happens to the original incoming wave once it enters the material?

There is a well-known idea in physics called the extinction theorem. It says that the original incident wave does not survive inside a material. Instead, it is cancelled out and replaced by the waves generated through scattering.

For random particulate materials, this had often been assumed rather than fully shown. One of the things we found is that it really does happen — and we can describe exactly where.

The incident wave disappears after a certain distance inside the material. That distance depends on how the particles are arranged.

## Why Particle Arrangement Matters

It is tempting to think only the number of particles matters — how many there are and how strongly they scatter. But the way they are arranged also plays an important role.

Even random materials have structure. Some arrangements are more clustered, some more ordered, and some show clear short-range patterns. These patterns affect how waves travel and how quickly the incident wave disappears.

In fact, the distance over which the original wave fades is closely tied to how far these structural patterns extend.

So small-scale structure is not just background detail — it shapes what we observe at larger scales.

## The Bigger Picture

Taken together, these results change how we think about wave propagation in random materials.

The traditional picture — one effective wave travelling through one effective medium — is still useful. But it is not universal.

Sometimes there is more than one effective wave. Sometimes the original wave disappears over a measurable distance. And sometimes the arrangement of particles matters as much as their number.

For anyone modelling waves, designing materials, or interpreting experiments, knowing when the simple picture fails makes a real difference.

Understanding these subtleties doesn't just refine our theories — it opens new ways to engineer materials with specific wave properties. And that, ultimately, is what makes this work worth doing.`,
  },
  {
    id: "how-shazam-recognises-a-song",
    title: "How Shazam Recognises a Song from Just a Few Seconds",
    excerpt: "Shazam can identify a song from a short, noisy recording. The trick is not magic, but signal processing: turning sound into a map, finding landmarks, and matching the pattern.",
    date: "June 21, 2026",
    readTime: "7 min read",
    category: "Signal Processing",
    tags: ["FFT", "Audio Fingerprinting", "Spectrograms", "Signal Processing"],
    content: `You are in a café, half-listening to the music in the background. People are talking, cups are clinking, and the song is coming from a speaker that has probably seen better days. You open Shazam, hold up your phone for a few seconds, and the app tells you the name of the track.

It feels almost unfairly fast. The recording your phone hears is not clean. It is mixed with voices, room echo, and background noise. It may start halfway through the chorus or in the middle of an instrumental section. Yet the app can still identify the song.

I like this example because it shows how a mathematical idea can sit quietly inside something we use without thinking. Most of us have used an app like Shazam as if it were a small trick of modern life. But behind that quick answer is a beautiful signal-processing idea: if you look at sound in the right way, a messy recording can reveal a hidden signature.

The reason is not that Shazam understands music like a human listener. It is not following the lyrics or recognising the emotion of the performance. Instead, it is doing something more mechanical and, in some ways, more clever. It turns the short recording into a compact pattern, then looks for that pattern in a large database of songs.

That compact pattern is usually called an audio fingerprint.

A fingerprint does not describe everything about a person. It does not tell us their height, their voice, or their personality. But it contains enough distinctive detail to identify them. An audio fingerprint works in a similar way. It is not the whole song. It is a small signature extracted from the sound.

To see how that signature is created, we need to start with sound itself. Sound is vibration travelling through the air. When a speaker plays music, it pushes and pulls the surrounding air. Those small pressure changes travel outward as a wave. A microphone records the wave by measuring how the pressure changes over time. If we draw that measurement, we get a waveform: a line moving up and down as the sound changes.

For a very simple sound, such as a pure beep, the waveform may look smooth and regular. A song is different. It contains voices, drums, bass, guitars, echoes, and noise, all arriving at the microphone as one combined signal. Looking directly at that waveform is not the easiest way to recognise the song. The information is there, but it is packed together too tightly.

This is where frequency helps.

Frequency means how fast something vibrates. A slow vibration is heard as a deeper sound, like a bass note. A fast vibration is heard as a higher sound, like a whistle or a cymbal. Most music contains many slow, medium, and fast vibrations at the same time.

An orchestra is a good way to picture this. When an orchestra plays, the sound reaches us as one mixture, but that mixture has many contributors. The double bass adds deep vibrations. The violins add faster ones. The drums create short, sharp bursts. Your ear does not receive each instrument as a separate file; it receives the combined sound. Still, you can sense that the sound has ingredients.

The song playing in the café is no different in principle. It may not be a classical orchestra, but it is still a mixture: vocals, bass, drums, guitar, synths, room echo, and background noise all arriving at your phone's microphone at once. To Shazam, this café recording is one tangled signal. The useful question is not what the waveform looks like, but what ingredients are hidden inside it.

A computer needs a mathematical way to reveal those ingredients. This is where the Fast Fourier Transform, or FFT, comes in. The FFT takes a short piece of sound and shows what kinds of vibrations are present in it. It does not know what a violin is. It does not understand melody. It simply tells us how much energy appears at different vibration speeds.

That is useful, but one short piece of audio is only a snapshot. Music changes from moment to moment. A bass note fades, a cymbal rings, a singer enters, and a chord changes. To follow this movement, the app looks at many short pieces of sound in sequence. It applies the FFT repeatedly, each time capturing the frequency content of a tiny slice of audio.

When these snapshots are placed next to each other, they form a sound map. This map shows how the sound changes over time. One direction represents time. Another represents frequency, from deeper sounds to higher sounds. The stronger parts of the music appear as more intense regions. Engineers call this kind of sound map a spectrogram.

The spectrogram is much more useful than the raw waveform because it exposes the structure of the recording. Instead of seeing one tangled line, we can see where important sound features appear. Some parts of the map stand out clearly. These strong points become the landmarks Shazam cares about.

A landmark on a sound map is a moment where a particular frequency is especially strong. One landmark by itself does not mean much. Many songs may contain a strong sound at a similar frequency. But several landmarks, arranged in a particular way over time, can become highly distinctive.

This is often compared to a constellation. One star does not identify the night sky, but a pattern of stars can identify Orion or the Plough. In the same way, one strong point in a spectrogram does not identify a song. A pattern of strong points can.

Shazam creates these patterns in advance for the songs in its database. It analyses each track, creates its sound map, finds prominent landmarks, and stores compact descriptions of how those landmarks relate to each other. When your phone records a short clip, the app builds a sound map for that clip too. Then it searches for a matching pattern.

The important detail is that the app does not need your recording to be perfect. A café conversation may cover part of the music. The speaker may distort the sound. The room may add echo. But if enough landmarks remain, the pattern can still be recognised.

Timing is what makes the match convincing. Suppose your phone starts listening forty-seven seconds into a song. The landmarks in your short recording should match landmarks from the stored version at about that same point in the track. A few accidental matches could happen by chance. Many matches pointing to the same song and the same time position are much harder to dismiss. That agreement gives the app confidence.

So the FFT is not the whole story, but it is the first important step. It lets the app stop looking at sound as a messy waveform and start looking at it as a map of changing vibrations. From that map, the app finds landmarks. From those landmarks, it builds a fingerprint. From the fingerprint, it finds the song.

This is also what Shazam is not doing. It is not listening like a person. It is not understanding the lyrics, judging the style, or separating every instrument perfectly. It is finding a robust pattern in the audio and comparing it with patterns it already knows.

The same idea appears far beyond music. Underwater acoustic sensors can use frequency patterns to study sound sources in the ocean. Radar systems can analyse echoes by looking at how their structure changes over time. Machines can be monitored through their vibrations. Signals from the heart, lungs, or brain can also contain patterns that become clearer when viewed in the right way.

That is the broader lesson. A signal that first looks messy may still contain a hidden structure. The challenge is to find the right way to look at it.

This is why I think Shazam is such a good example of explainable science. It takes something familiar and reveals the deeper idea underneath. A few seconds of noisy audio become a sound map. The map reveals landmarks. The landmarks form a fingerprint. The fingerprint points back to a song.

What feels like magic is really a change of perspective. The app is not hearing the music as we do. It is recognising the structure left behind by the sound. And once you see that, Shazam becomes more than a useful app. It becomes a small reminder that many complicated signals are understandable, if we learn how to look at them.`,
  },
  {
    id: "prime-numbers-prime-target",
    title:
      "Prime Numbers: From Prime Target to Quantum Physics and Digital Security",
    excerpt:
      "Inspired by the series Prime Target, an exploration of how prime numbers connect elementary arithmetic with cryptography, quantum computing, and one of mathematics' greatest unsolved problems.",
    date: "July 11, 2026",
    readTime: "8 min read",
    category: "Mathematics",
    tags: [
      "Prime Numbers",
      "Cryptography",
      "Riemann Hypothesis",
      "Quantum Physics",
    ],
    content: `Recently, I watched the television series *Prime Target*, which follows a mathematician searching for a hidden pattern in the prime numbers. The series turns this search into a global conspiracy: a mathematical discovery might be powerful enough to compromise digital security.
  
  The programme gave me the starting point for this article, but my reason for writing it is more personal. I am primarily a mathematician, and I have also studied quantum physics. Prime numbers lie at a fascinating meeting point between those subjects. They begin with a definition that can be understood at school, but they lead towards encryption, quantum algorithms, and one of the greatest unsolved problems in mathematics.
  
  The drama naturally takes liberties with the science. Even so, the mystery at its centre is real. After thousands of years of study, prime numbers continue to resist a complete explanation.
  
  ## What Is a Prime Number?
  
  A **prime number** is a whole number greater than 1 that can be divided exactly only by 1 and itself. The first few are 2, 3, 5, 7, 11, 13, 17, and 19.
  
  The number 7 is prime because its only positive divisors are 1 and 7. The number 12 is not prime because it can also be divided by 2, 3, 4, and 6. A number greater than 1 that is not prime is called **composite**.
  
  Prime numbers are often described as the building blocks of arithmetic. Every whole number greater than 1 can be written uniquely as a product of primes, apart from the order in which they appear. For example, 60 = 2 × 2 × 3 × 5. Breaking a number into these building blocks is called **prime factorisation**.
  
  This simple property gives primes a fundamental role in mathematics. Yet the places in which they appear along the number line are surprisingly difficult to predict.
  
  ## Why Are Prime Numbers So Mysterious?
  
  Euclid proved more than two thousand years ago that there are infinitely many primes. No matter how far we travel along the number line, another prime must eventually appear.
  
  What we do not have is a simple rule that efficiently tells us where every prime will occur. Sometimes primes appear close together, as 11 and 13 do. Elsewhere, larger gaps separate them. The sequence is completely determined, but it often looks irregular.
  
  Mathematicians do understand its broad behaviour. The **prime number theorem** estimates how many primes occur below a large number. If x is large, the number of primes below x is approximately x / log(x), where log is the natural logarithm. A logarithm reverses exponentiation, and log(x) grows slowly as x increases.
  
  This estimate becomes increasingly accurate as x grows. It tells us how the primes thin out on average, but not why a particular number is prime or exactly how large every local fluctuation will be. Understanding those fluctuations leads to the Riemann hypothesis.
  
  ## The Riemann Hypothesis
  
  The **Riemann hypothesis** is a famous unsolved statement about a function called the **Riemann zeta function**. A function is simply a mathematical rule that turns an input into an output.
  
  The zeta function is deeply connected to prime numbers. One way of writing it involves an infinite product containing every prime, which means that information about the entire prime sequence is encoded in its behaviour.
  
  To study the function fully, mathematicians use **complex numbers**. A complex number combines an ordinary real number with a multiple of i, where i is defined by i² = -1. Despite the historical word "imaginary", complex numbers are standard tools in engineering, signal processing, and quantum physics.
  
  A **zero** of a function is an input that makes its output equal to zero. The zeta function has a collection of important zeros known as the non-trivial zeros. Riemann proposed that every one of them lies on the same vertical line in the complex-number plane: the line whose real part is 1/2. This statement is the Riemann hypothesis.
  
  Why does that matter? The locations of these zeros control how much the actual distribution of primes can fluctuate around the average predicted by the prime number theorem. If the hypothesis is true, the apparent disorder of the primes is constrained by a remarkably precise hidden structure.
  
  Computers have checked enormous collections of zeros and found them on the expected line, but numerical evidence is not a proof. A proof must show that the claim holds for infinitely many cases.
  
  It is also important to separate this problem from the fictional premise of *Prime Target*. Proving the Riemann hypothesis would revolutionise number theory, but it would not automatically reveal every prime number or unlock every encrypted computer.
  
  ## Prime Numbers and Digital Security
  
  The connection between primes and cybersecurity is nevertheless genuine. A well-known example is **RSA**, a public-key cryptographic system.
  
  Public-key cryptography uses a pair of related keys. A public key can be shared openly, while a private key is kept secret. This allows people and computers to exchange protected information or verify digital signatures without first sharing the same secret key.
  
  RSA starts with two very large prime numbers and multiplies them together. Multiplication is easy for a computer. Reversing the process and recovering the original primes from their product is called **factorisation**, and no fast general classical method is known for the enormous numbers used in properly chosen RSA keys.
  
  A tiny example is 61 × 53 = 3233. Finding the factors of 3233 is manageable. The same task becomes far harder when the product contains hundreds of digits.
  
  The relevant mathematics often uses **modular arithmetic**, sometimes called clock arithmetic. On a twelve-hour clock, 10 + 5 leads to 3 rather than 15. We say that 15 and 3 are equivalent modulo 12 because they leave the same remainder when divided by 12.
  
  These ideas operate quietly in everyday technology. Cryptographic mathematics helps secure web connections, authenticate systems, protect transactions, and verify that software has not been altered.
  
  A new insight into the distribution of primes would not necessarily break these systems. To attack RSA directly, it would need to produce an efficient method for factoring the particular large numbers used in its keys. Discovering a pattern and turning it into a practical algorithm are very different achievements.
  
  ## The Quantum Connection
  
  Quantum computing creates a more concrete challenge. Ordinary computers use bits, each representing 0 or 1. Quantum computers use **qubits**, whose states can involve combinations of 0 and 1 until they are measured. Quantum algorithms manipulate these states so that useful outcomes become more likely.
  
  In 1994, Peter Shor discovered a quantum algorithm that can factor large integers far more efficiently than the best-known classical methods. A sufficiently large, reliable, fault-tolerant quantum computer could therefore threaten RSA and several other public-key systems.
  
  Fault-tolerant means that the machine can detect and correct the errors that naturally arise in fragile quantum states. Constructing quantum computers at the scale required by Shor's algorithm remains a major engineering challenge, but the algorithm has already motivated the development of **post-quantum cryptography**: methods designed to remain secure even against future quantum computers.
  
  There is also a subtler link between primes and quantum physics. The spacing between the non-trivial zeros of the zeta function resembles the statistical spacing between energy levels in certain quantum systems.
  
  An **energy spectrum** is the set of energy values that a quantum system is allowed to have. In systems associated with chaotic classical motion, these energy levels show distinctive statistical patterns. This field is known as **quantum chaos**.
  
  Similar patterns appear in **random-matrix theory**, which studies large arrays of numbers whose entries are chosen using probability. Random matrices have been used in physics to model complicated energy spectra, and their eigenvalue statistics unexpectedly resemble the statistics of the zeta zeros.
  
  An **eigenvalue** is a special value associated with a matrix or mathematical operator. In quantum physics, eigenvalues often represent the possible results of a measurement, such as the energy of a system.
  
  This resemblance has encouraged the idea that the zeta zeros may be the spectrum of some unknown quantum operator. No accepted physical system has yet been found, and the connection does not prove the Riemann hypothesis. It does, however, reveal an extraordinary bridge between number theory and quantum physics.
  
  ## From Pure Mathematics to Everyday Life
  
  For most of history, prime numbers were studied as pure mathematics. Euclid was not thinking about secure websites, and Riemann was not designing digital signatures. They were following questions that were mathematically compelling.
  
  Centuries later, those ideas became part of the infrastructure of modern life. This is one of the most important lessons of pure mathematics: its future applications are often impossible to predict.
  
  An abstract theory may appear impractical for generations. Then a new scientific or technological problem emerges and discovers that the required language already exists.
  
  Prime numbers now influence secure communications, online transactions, software authentication, computer algorithms, and the development of quantum-resistant security. Most people encounter the results without ever seeing the mathematics operating underneath.
  
  ## The Real Prime Target
  
  The most interesting question raised by *Prime Target* is not whether one mathematician could control every computer. It is why numbers with such a simple definition remain so difficult to understand.
  
  Prime numbers connect elementary arithmetic with infinity, cryptography, algorithms, and quantum physics. They are completely deterministic, yet their distribution often appears almost random. We understand their average behaviour, but some of their deepest structure remains hidden.
  
  As a mathematician who has studied quantum physics, that bridge between the simple and the profound is what inspired me to write this article. The television conspiracy is fiction, but the mathematical mystery is entirely real.`,
  }
];
