export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  headerImage?: string;
  content: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "being-stuck-research",
    title: "On Research, Patience, and the Art of Being Stuck",
    excerpt: "A reflection on what I've learned from months of staring at equations that refuse to work — and why that's the most important part.",
    date: "December 28, 2025",
    readTime: "7 min read",
    category: "Personal",
    tags: ["Research", "Philosophy", "Problem-Solving"],
    headerImage: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHByb29mJTIwd2hpdGVib2FyZCUyMGNvbXBsZXglMjBlcXVhdGlvbnMlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzM4NzI1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
I spent months stuck on the proof of the extinction theorem. I knew the result had to be true — the Monte-Carlo simulations showed it clearly — but the mathematics wouldn't cooperate. Every approach I tried led to a dead end or a circular argument. The ensemble averaging seemed straightforward in principle, but when I tried to write it out rigorously, the boundary conditions kept creating inconsistencies.

The proof eventually worked. But this post isn't about the solution — it's about the months of being stuck, and why that time wasn't wasted.

## The Myth of Eureka

We have this cultural narrative about breakthroughs: a lone genius has a flash of insight in the shower, or while staring at an apple falling from a tree, and everything falls into place. Newton's apple. Archimedes in the bathtub. Einstein's thought experiments.

The reality, at least in my experience, is more like slowly building a wall in the dark. You lay bricks without knowing if you're building in the right direction. Sometimes you realize you've been building on unstable ground and have to tear down what you've built and start again. There's no dramatic moment of clarity — just the gradual accumulation of small understandings that eventually add up to something coherent.

During those months on the extinction theorem, I tried many different approaches. I attempted to use Green's functions directly, but the convergence conditions were too restrictive. I tried formulating it as a variational problem, but couldn't construct a suitable functional. I explored analogies with other extinction theorems in electromagnetic theory, but the particulate case had subtleties that didn't translate cleanly.

Each failure was frustrating. I'd spend days developing an approach, convince myself it was going to work, only to hit a fundamental obstacle I couldn't resolve. And then I'd have to start over.

> "If you're not confused, you're not paying attention." — Someone much smarter than me.

## The Emotional Landscape of Being Stuck

What's rarely discussed is the emotional toll of being stuck. Research papers don't have a section called "Months of Despair and Self-Doubt." We present the polished final result, the elegant proof, the clear narrative from problem to solution. We omit the mess.

Being stuck feels personal. When an approach doesn't work, it's easy to interpret it as evidence of your own inadequacy. Maybe you're not smart enough. Maybe you don't understand the fundamentals as well as you thought. Maybe you shouldn't be doing this work.

I remember sitting at my desk, staring at pages of crossed-out derivations, feeling like a fraud. My colleagues seemed to be making steady progress on their projects, publishing papers, moving forward. Meanwhile, I was stuck on a single proof.

The rational part of my brain knew this was normal — that being stuck is part of research, that everyone goes through it. But the emotional part didn't care about rationality. It just felt like failure.

What helped was talking to my supervisor and colleagues. Turns out, everyone has their "stuck" stories. A PhD student who spent six months on a problem before realizing their fundamental assumption was wrong. The postdoc who rewrote the same proof seven times before it finally worked. Knowing I wasn't alone made the frustration more bearable.

## What Being Stuck Teaches You

The time spent being stuck isn't wasted, even when it feels like it. Each failed approach taught me something about the structure of the problem.

When the Green's function approach didn't work, I learned exactly which mathematical conditions were essential for the extinction theorem to hold. When the variational formulation failed, I gained insight into the energy constraints of the system. When the electromagnetic analogies broke down, I understood precisely what made the particulate case unique.

By the time the right idea appeared — connecting the ensemble boundary conditions with the background wave equation terms in a way that preserved causality — I had the context to recognize it. Without the failed attempts, I wouldn't have known what to look for. I needed to understand what *wouldn't* work before I could see what *would*.

This is something you can't shortcut. You can't read about someone else's failed approaches and gain the same understanding. You have to struggle through them yourself.

Your intuition gets calibrated through repeated failure. That sentence is easy to write and harder to fully appreciate until you've lived it. What it means, concretely, is that each dead end leaves a trace. Not a scar exactly — more like a small shift into how you think. After enough failed attempts, you stop reaching for certain tools not because you've consciously ruled them out, but because something in your reasoning quietly steers you away. The failures become embedded in your instincts.

There's something almost counterintuitive here: the most useful thing about failing at something is not the lesson you consciously extract from it. It's the residue it leaves behind — the subtle retuning of judgment that happens without your full awareness. You become more calibrated not by cataloguing your mistakes, but simply by having made them.

## The Structure of Productive Struggle

Not all struggling is equally productive. There's a difference between being stuck because you're working on a genuinely difficult problem, and being stuck because you haven't learned the necessary prerequisites, or because you're approaching the problem from the wrong angle.

Productive struggling has a particular character. You feel like you're *almost* understanding something, like the solution is just out of reach. You can articulate what the obstacles are, even if you don't know how to overcome them. You're making small increments of progress, even if the main problem remains unsolved.

Unproductive struggling feels different. You're completely lost. You can't even formulate what you don't understand. You're not making any progress, just spinning your wheels. In these cases, the answer isn't to keep pushing — it's to step back, learn the background material, or reframe the problem entirely.

Learning to distinguish between these two types of struggle took time. Early in my PhD, I wasted weeks on unproductive struggles — trying to solve problems I didn't have the tools for, or pursuing dead ends that anyone with more experience would have recognized immediately. I've gotten better at recognizing when I'm in a productive struggle (keep going) versus an unproductive one (step back and reassess).

## The Role of Time and Patience

One thing I've learned is that some problems need time. Not active working time, necessarily, but time for your subconscious to process.

There were several occasions during those weeks where I'd be completely stuck, so I'd stop working on the proof and do something else — read a paper, work on a different project, go for a walk. And then, sometimes days later, an idea would occur to me seemingly out of nowhere.

I don't think this is magical. I think my brain was continuing to work on the problem in the background, making connections I wasn't consciously aware of. But it needed space to do that. If I'd kept forcing it, grinding away at the problem without breaks, those insights might not have emerged.

This is hard in academic culture, which often equates productivity with visible busyness. Taking a walk when you're stuck can feel like procrastination. But sometimes the most productive thing you can do is stop actively working and let your mind wander.

## Advice for Fellow Sufferers

If you're in the stuck phase right now, here's what has helped me:

**Keep a research diary.** Write down what you tried and why it didn't work. This serves two purposes: it prevents you from trying the same failed approach twice, and it gives you a record of progress even when it doesn't feel like you're making any. Looking back at my notes from those weeks, I can see that I was learning, even when it felt like I was going nowhere.

**Talk to people.** Explain your problem to someone outside your field, or even someone not in research at all. The act of simplifying often reveals what you've been missing. You can't hide behind jargon when explaining to a non-expert — you have to get to the core of the issue. I've had breakthroughs while explaining problems to friends who had no idea what I was talking about, just because articulating it clearly forced me to think differently.

**Take walks.** Seriously. Physical movement helps. There's something about walking that seems to facilitate creative thinking. I don't understand the neuroscience, but empirically, I've had many good ideas while walking.

**Change your environment.** If you've been staring at the same equations in the same office for days, go somewhere else. Work in a coffee shop, a library, a park. Fresh surroundings can trigger fresh thinking.

**Give yourself permission to work on something else.** You don't have to solve the problem right now. Work on a different aspect of your project, or a completely different project. Sometimes coming back to a problem with fresh eyes makes all the difference.

**Be kind to yourself.** This is the hardest one. Research is difficult on purpose. Being stuck doesn't mean you're failing — it means you're working on something hard enough to be worthwhile. If it were easy, someone would have already solved it.

## The Resolution (and Why It Matters Less Than You Think)

Eventually, I did solve the extinction theorem proof. The key insight was recognizing that the ensemble averaging could be reframed in terms of a scattering operator acting on the background field, which made the boundary conditions much cleaner. Once I saw that, the pieces fell into place relatively quickly.

But here's the thing: the moment of solution, while satisfying, wasn't the most valuable part of the experience. What I gained from those months of being stuck — the deep understanding of the problem structure, the intuition about what approaches work and why, the familiarity with the mathematical tools — that's what actually mattered.

The proof is now a few pages in my thesis. It doesn't convey the struggle, the false starts, the months of frustration. But that struggle is what made me a better researcher. I understand the extinction theorem in a way I never could have if I'd just read someone else's proof.

## A Final Thought

If there's one thing I want you to take away from this, it's that being stuck is not a bug in the research process — it's a feature. It's where the real learning happens. It's where you develop intuition, resilience, and deep understanding.

So if you're stuck right now, frustrated and wondering if you're cut out for this: you probably are. The fact that you're struggling with hard problems is evidence that you're doing real research. Keep going. The understanding you're building, brick by brick in the dark, will serve you for the rest of your career.

And maybe, someday, you'll write your own blog post about being stuck. I hope you do.
    `,
  },
  {
    id: "finding-balance-life-as-researcher",
    title: "Finding Balance: Life as a Researcher",
    excerpt: "Thoughts on navigating the demands of academic life while maintaining perspective and personal well-being.",
    date: "October 20, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
    tags: ["Work-Life Balance", "Academia", "Mental Health"],
    headerImage: "https://images.unsplash.com/photo-1587210489873-a1094e8868be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwcmVsYXhpbmclMjBjb3p5JTIwcmVhZGluZyUyMHBlYWNlZnVsJTIwY2FsbXxlbnwxfHx8fDE3NzM4NzMxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
When people ask what it's like to be a researcher, I often struggle to give a simple answer. The reality is multifaceted. It's intellectually thrilling yet mentally exhausting, collaborative yet isolating, and deeply rewarding while sometimes feeling impossibly demanding. After years in academia, from my PhD at Sheffield to my current role as a Research Associate, I've learned that success in research isn't just about brilliance or productivity. It's about sustainability.

## The Pressure Cooker of Academia

Let's be honest: academic research can feel like running on a treadmill that's constantly speeding up. There's always another paper to write, another grant proposal to submit, another dataset to analyze, another collaboration to maintain. The publish-or-perish mentality is real, and it creates an environment where "enough" never quite feels like enough.

During my PhD, I remember weeks where I'd be at my desk from 9 AM until midnight, debugging code, running simulations, or staring at equations that refused to make sense. I told myself it was temporary, that once I finished my thesis, things would calm down. But the truth is, the demands don't disappear. They just transform. As a Research Associate working on machine learning and physics-informed models for pipeline inspection, I've traded thesis deadlines for project milestones, viva preparation for conference presentations, and supervisor meetings for stakeholder reports.

The academic system often glorifies overwork. We celebrate the researcher who responds to emails at 2 AM, who works through weekends, who never seems to take a break. But this culture of constant availability isn't just unsustainable. It's counterproductive. Burnout doesn't make you a better scientist, it makes you an exhausted one.

## What I've Learned About Balance

Finding balance hasn't been easy, and I'm still learning. But here are a few principles that have helped me maintain perspective:

### 1. Research is a Marathon, Not a Sprint

One of the hardest lessons I've had to learn is that not every day needs to be maximally productive. Some days, the best thing I can do is take a walk, read a paper without pressure, or work on something completely different. Creativity and insight don't emerge from relentless grinding. They need space to breathe.

I now try to structure my weeks with rhythms rather than constant intensity. I have "deep work" days where I minimize meetings and focus on challenging problems, and I have "administrative" days where I catch up on emails, paperwork, and planning. I have days where I allow myself to be curious without immediate output, reading tangentially related work, exploring new methods, or simply thinking.

### 2. Boundaries Are Essential

For a long time, I didn't set boundaries. My work laptop was always open, my email notifications were always on, and I felt guilty any time I wasn't "being productive." The problem with this approach is that it creates a perpetual state of semi-work. You're never fully engaged, and you're never fully resting.

Now, I try to create clearer boundaries. I have specific work hours, and I mostly stick to them. I turn off work notifications in the evenings and on weekends. I've learned to say "no" to commitments that don't align with my priorities, even when it feels uncomfortable. These boundaries aren't perfect, and there are times when I need to be flexible (deadlines happen), but having them as a default has made a huge difference.

### 3. Connection Matters More Than I Realized

Research can be lonely. You spend hours working on problems that few people understand, and imposter syndrome is a constant companion. It's easy to retreat into your work and forget that you're part of a community.

One of the best decisions I made was to actively cultivate connections, not just professional collaborations, but genuine relationships with colleagues, mentors, and friends outside academia. These connections remind me that I'm not alone in my struggles, that others have faced similar challenges, and that there's life beyond the next publication.

I also make time for collaboration not just because it's professionally valuable, but because it's intellectually energizing. Working with people from different disciplines — whether it's engineers, physicists, or mathematicians — reminds me why I fell in love with research in the first place. It's the exchange of ideas, the "aha" moments, the collective problem-solving that makes this work meaningful.

### 4. Physical and Mental Health Are Non-Negotiable

This should be obvious, but it's remarkably easy to neglect. When you're deep in a project, taking care of your body and mind can feel like an indulgence. But I've learned the hard way that physical and mental health aren't optional extras. They're the foundation that everything else is built on.

For me, this means regular exercise (even if it's just a 20-minute walk), prioritizing sleep (no matter how tempting it is to push through), and being honest with myself when I'm struggling. I've also learned to recognize the warning signs of burnout: persistent fatigue, irritability, loss of motivation, and to take them seriously rather than powering through.

## The Myth of Perfect Balance

Here's the thing: I don't have it all figured out. Some weeks are better than others. There are still times when I work late, when I feel overwhelmed, when I question whether I'm doing enough. Balance isn't a state you achieve once and maintain forever. It's something you have to continuously negotiate.

I've also realized that "balance" doesn't mean equal time for everything. It's not about working exactly 40 hours and then completely disconnecting. Research, at its best, is something you genuinely care about. It's okay for it to occupy your thoughts outside of work hours. The key is ensuring that your life isn't *only* about work, that you have other sources of meaning, joy, and identity.

## Advice for Fellow Researchers

If you're struggling with similar challenges, here's what I'd say:

**Give yourself permission to be human.** You don't have to be superhuman to be a good researcher. You're allowed to have limits, to need rest, to have interests outside your field.

**Find your own rhythm.** What works for someone else might not work for you. Maybe you're most productive in the early morning, or late at night. Maybe you need frequent breaks, or long stretches of uninterrupted time. Experiment and figure out what helps you do your best work without exhausting yourself.

**Talk about it.** Mental health and work-life balance shouldn't be taboo topics in academia. If you're struggling, talk to someone. A mentor, a colleague, a therapist. Chances are, they've felt the same way.

**Remember why you started.** It's easy to get lost in the grind and forget what drew you to research in the first place. For me, it was curiosity. The joy of understanding how things work, of solving puzzles, of contributing to human knowledge. On hard days, I try to reconnect with that initial sense of wonder.

## Looking Forward

I don't know if I'll always be in academia. The path forward isn't always clear, and that's okay. What I do know is that I want to approach this work in a way that's sustainable, that allows me to contribute meaningfully without sacrificing my well-being.

Finding balance as a researcher is an ongoing practice, not a destination. It requires constant adjustment, self-awareness, and a willingness to question the culture of overwork that pervades academia. It's not always easy, but it's necessary, not just for our health, but for the quality and longevity of our work.

So here's to the messy, imperfect journey of being a human in academia. To the small victories, the necessary breaks, and the recognition that we are more than our publications. To finding balance, one day at a time.
    `,
  },
  {
    id: "my-journey-into-research",
    title: "My Journey into Research: From Curiosity to Career",
    excerpt: "Reflecting on the unexpected path that led me to where I am today, and the moments that shaped my love for science.",
    date: "November 8, 2025",
    readTime: "10 min read",
    category: "Personal",
    tags: ["Career", "Reflection", "Science"],
    headerImage: "https://images.unsplash.com/photo-1535989447733-390925ae4c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBqb3VybmV5JTIwc3VjY2VzcyUyMHBhdGh3YXl8ZW58MXx8fHwxNzcyNDg4NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
If you had told my teenage self that I'd end up as a research scientist, I'm not sure I would have believed you.

Not because I wasn't interested in science—I was—but because the path seemed impossibly distant and unclear. Research felt like something other people did: brilliant people with natural talent, perfect grades, and complete certainty about where they were going. It took me a long time to realise that research is not about being the smartest person in the room. It is about being curious, persistent, and willing to live with uncertainty for long enough to discover something new.

## The Spark

For a long time, I used to say that I couldn't pinpoint the exact moment when I fell in love with science. But that is not really true. I can.

I was seventeen years old, on a school trip to Geneva, when we visited CERN. That visit changed me. Until then, science had been something I enjoyed and admired, but mostly from the outside. At CERN, I saw research up close for the first time. I saw what it looked like when people dedicated themselves to difficult questions and worked patiently through problems whose solutions were anything but obvious.

What stayed with me most was not just the prestige of the place, but the people. The more I interacted with researchers, the more I was struck by the satisfaction they seemed to find in problem-solving itself: the discipline, the persistence, the logical clarity, and the quiet excitement of reaching an answer that had to be earned rather than guessed. Something about that way of thinking spoke to me immediately.

Around the same period, I remember sitting in a physics class learning about wave mechanics, and suddenly something clicked. The equations stopped feeling abstract. They became descriptions of reality. They explained why light behaves the way it does, why sound travels through air, why patterns appear in the natural world, and why so much of what seems chaotic can still be understood.

That realisation was exhilarating. I became obsessed with the idea that underneath the complexity of the world there were deeper principles waiting to be uncovered. I wanted, in some small way, to be part of that process.

## The First Steps

That growing fascination led me to the University of Crete, where I studied Mathematics and Applied Mathematics and specialised in the sciences. During my degree, I was especially drawn to subjects such as quantum mechanics, optics and waves, electromagnetism, and classical mechanics.

What I loved most was that mathematics gave structure to curiosity. It offered a language precise enough to describe physical reality, but flexible enough to reveal unexpected connections. During my undergraduate studies, I began to realise that what attracted me was not only learning established ideas, but pushing beyond them.

In my final semester, I worked on an undergraduate thesis in quantum hydrodynamics near caustics, at the interface of quantum mechanics and semiclassical analysis.

That project gave me my first real encounter with research as it actually is: not neat and linear, but slow, technical, uncertain, and deeply absorbing. It was the first time I experienced the difference between solving problems that already have answers and working on questions whose answers are still incomplete.

## The Uncertain Path

Even then, wanting to do research and actually becoming a researcher still felt like two very different things.

After my undergraduate degree, I was not entirely sure what would come next. What I did know was that I wanted to keep moving toward the kinds of questions that had begun to fascinate me. That led me to a Master's in Quantum Technology at the University of Sussex, where I joined the EPic Laboratory and worked on THz superfocusing in complex scattering media.

That stage mattered a great deal. It brought together applied mathematics, optics, photonics, scattering, and signal processing in a way that felt natural to me. It also confirmed that I was happiest working in spaces where disciplines overlap. I liked problems that were both theoretical and physical, abstract and practical at the same time.

By then, the PhD had become more than a vague ambition. It felt like the next step, even if I still had no clear idea what living through one would actually be like.

When I was accepted to pursue my PhD at the University of Sheffield in Applied and Computational Mathematics, I felt a mix of excitement and terror. Excitement because this was the opportunity I had been hoping for. Terror because I had no idea what I was getting myself into. Research is not like coursework. There is no syllabus, no model answer, no guaranteed path through the material. You are trying to make sense of something that is not yet fully understood, and most of the time you do not know whether you are even asking the right question.

## The Reality Check

The first year of my PhD was humbling.

I quickly realised that research is messy, frustrating, and full of dead ends. For every breakthrough, there are countless failed attempts, inconclusive results, code that refuses to work, and papers that seem clear until you try to build on them yourself. I spent long stretches working on models that did not converge, trying to understand numerical behaviour that made no intuitive sense, and doubting whether I was capable enough to continue.

Imposter syndrome became a constant companion. I looked at other PhD students and assumed they had all figured something out that I had missed. It took me time to understand that this feeling is almost universal. Uncertainty is not a sign that you do not belong in research. In many ways, it is the environment research takes place in.

## Finding My Focus

What kept me going was genuine curiosity.

During my PhD, I worked on waves in disordered particulate materials, focusing on transmission and inter-particle correlations.

I was trying to understand how waves propagate through complex random systems—problems that are mathematically subtle, physically rich, and often resistant to simple intuition. It was difficult work, but it was also deeply satisfying. The harder the questions became, the more I wanted to understand them.

Over time, I found my research identity in that space between theory, modelling, and computation. I was not only doing physics, and not only doing mathematics. I was using numerical methods, computational tools, modelling techniques, and physical reasoning together. That interdisciplinary character became one of the things I loved most about research.

It also became clearer that research is not a solitary pursuit. During my PhD, I published work on transmitted waves in random particulate materials and on pair-correlations in random particle configurations, and those experiences taught me that ideas become stronger when they are discussed, challenged, and developed with others.

## After the PhD

Finishing my PhD was a milestone, but not an endpoint.

What came next was another period of transition: deciding whether to stay in academia, move toward industry, or try to inhabit the increasingly interesting space between the two. What appealed to me most was work that kept the intellectual depth of research while engaging with real-world engineering problems.

That is where my more recent work has taken me. After the PhD, I moved into research roles involving acoustic sensing, LiDAR, optical systems, robot navigation, computer vision, localisation, and multi-sensor fusion in buried pipe and underground environments. 

On paper, that might look like a major shift away from my PhD. But it does not feel that way to me. The underlying motivation is still the same: understanding complex systems, extracting structure from difficult environments, and combining mathematics, physics, and computation to solve problems that matter.

## What Research Also Gave Me

One thing that is easy to miss when telling this story is that becoming a researcher did not happen only through thesis chapters and publications.

It also happened through teaching. During my time at Sheffield, I worked as a Graduate Teaching Assistant across several modules, supporting students in dynamics, aerospace structures, and even rocket-launching projects.

Teaching forced me to communicate ideas clearly, to slow down, and to remember what it feels like to encounter difficult concepts for the first time. It made me a better researcher because it made me think more carefully.

It happened through outreach as well: science festivals, demonstrations, open days, and opportunities to share science with people outside academia. Those experiences mattered because they reminded me that science is not only for specialists. There is something powerful about making difficult ideas visible and exciting to others.

These moments did not define my path, but they helped affirm that the work was going somewhere.

## What I've Learned

Looking back, here is what I wish I had known when I started.

Research is for anyone willing to learn. You do not need to be a genius. You need curiosity, persistence, and resilience.

It is okay not to have everything figured out. Almost nobody does. The path is rarely linear.

Failure is not evidence that you are inadequate. It is part of the process. Dead ends, false starts, and confusion are built into the work.

Collaboration matters enormously. Some of the best ideas emerge not in isolation, but in conversation.

And perhaps most importantly, becoming a researcher is not a single moment. It happens gradually. Through study, through mistakes, through difficult projects, through mentors, through conferences, through teaching, through community, and through the decision to keep going.

## Where I'm Going

I still do not know exactly where this path will lead. Maybe I will remain in academia. Maybe I will move further into applied research or industry. Maybe the most interesting work will happen somewhere between those worlds.

What I do know is that I am grateful for the path so far—for the questions, the challenges, the people, the setbacks, and the breakthroughs.

If you are considering research, or if you are already on that path and feeling uncertain, I hope this is encouraging. You do not need absolute confidence to begin. You do not need a perfect plan. You do not need to look like the stereotype of a scientist.

You only need enough curiosity to ask the next question, and enough persistence to keep following it.
    `,
  },
  /*{
    id: "books-that-changed-how-i-think",
    title: "Books That Changed How I Think About Science",
    excerpt: "A collection of reads that inspired me, challenged my assumptions, and expanded my understanding of the scientific process.",
    date: "October 5, 2024",
    readTime: "7 min read",
    category: "Recommendations",
    tags: ["Books", "Learning", "Inspiration"],
    headerImage: "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBsZWFybmluZyUyMHJlYWRpbmd8ZW58MXx8fHwxNzcyNDg4NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
Coming Soon...
`,
  },*/
  /*{
    id: "art-of-asking-good-questions",
    title: "The Art of Asking Good Questions",
    excerpt: "What I've learned about curiosity, humility, and the importance of not knowing all the answers.",
    date: "September 18, 2024",
    readTime: "5 min read",
    category: "Thoughts",
    tags: ["Philosophy", "Research", "Learning"],
    headerImage: "https://images.unsplash.com/photo-1604661808622-639387f6f698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVzdGlvbiUyMG1hcmtzJTIwY3VyaW9zaXR5JTIwdGhpbmtpbmd8ZW58MXx8fHwxNzcyNDg4NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
One of the most important skills I've developed as a researcher isn't technical expertise or mathematical proficiency. It's the ability to ask good questions. This sounds simple, but it's surprisingly difficult. We're trained to provide answers, to demonstrate competence, to show what we know. But the best research doesn't come from having all the answers—it comes from asking the right questions.

## The Paradox of Expertise

Early in my career, I thought being a researcher meant knowing things. I studied hard, learned equations, mastered techniques. I wanted to be the person who could answer questions, not the one still asking them.

But the more I learned, the more I realized how much I didn't know. The boundaries of my knowledge expanded, but so did the boundaries of my ignorance. This was initially discouraging. Shouldn't expertise mean certainty?

I eventually realized that the opposite is true. Real expertise means understanding the limits of your knowledge and knowing which questions are worth pursuing. It's not about having answers—it's about recognizing what we don't yet understand and formulating questions that might lead somewhere interesting.

## What Makes a Question "Good"?

Not all questions are equally valuable. Some lead to dead ends, while others open entire fields of inquiry. So what distinguishes a good question from a mediocre one?

### 1. Good Questions Are Specific

Vague questions lead to vague answers. "How does the brain work?" is too broad to be useful. "How do neural circuits in the hippocampus encode spatial memory?" is specific enough to investigate.

In my own work, I've learned to resist the temptation to ask grand, sweeping questions. They're intellectually satisfying but practically useless. Better to ask small, precise questions that can actually be addressed.

### 2. Good Questions Challenge Assumptions

The most interesting questions often begin with "What if we're wrong about...?" They challenge prevailing orthodoxy, question fundamental assumptions, and look for edge cases where our current models break down.

During my PhD, I worked on wave scattering in disordered materials. A good question wasn't "How do waves scatter?"—that's well-understood. A better question was "What happens in the regime where conventional theories predict one thing but we observe another?" That's where new physics lives.

### 3. Good Questions Are Falsifiable

A question that can't be tested isn't scientific—it's philosophy. Good research questions lead to experiments or observations that can, in principle, prove them wrong.

Karl Popper emphasized this: science advances not by confirming theories, but by rigorously trying to falsify them. Questions that allow for falsification are valuable. Questions that don't are intellectual dead ends.

### 4. Good Questions Connect Ideas

The best questions build bridges between seemingly unrelated domains. "Can we use ideas from statistical physics to understand machine learning?" "What can neuroscience tell us about computational efficiency?" These questions are powerful because they bring fresh perspectives to old problems.

Interdisciplinary questions are hard—they require understanding multiple fields deeply enough to see connections others miss. But they're also where the most creative work happens.

## The Courage to Ask "Dumb" Questions

One of the hardest lessons I've had to learn is that there's no such thing as a dumb question—only questions we're too insecure to ask.

In seminars and meetings, I used to stay silent when I didn't understand something. I assumed everyone else got it and I was the only one confused. I didn't want to look stupid.

But I've come to realize that if I'm confused, others probably are too. And even if the question seems basic, asking it often leads to clarifications that benefit everyone. The researchers I most admire aren't afraid to say "I don't understand" or "Can you explain that differently?"

Intellectual humility—the willingness to admit ignorance—is a strength, not a weakness.

## Questions as a Research Tool

In collaborative settings, asking questions is one of the most valuable contributions you can make. A well-timed question can redirect a discussion, reveal hidden assumptions, or uncover critical flaws in reasoning.

I've found that in meetings, my role isn't always to provide answers. Sometimes it's to ask questions that make people think more carefully:

- "What would need to be true for that to work?"
- "What's the simplest test we could run?"
- "What would we expect to see if that hypothesis is wrong?"
- "Are we solving the right problem?"

These questions don't require deep technical knowledge. They require clarity of thought and a willingness to push back constructively.

## Curiosity as a Habit

Asking good questions isn't just a research skill—it's a mindset. It's about cultivating genuine curiosity, being comfortable with uncertainty, and viewing ignorance not as a failure but as an opportunity.

Children are naturally good at this. They ask "why?" relentlessly, unburdened by the fear of looking foolish. Somewhere along the way, many of us lose that. We learn to prioritize appearing knowledgeable over actually learning.

I've tried to reclaim that childlike curiosity. When I read a paper, I don't just try to understand it—I ask questions. What assumptions are they making? What would happen if those assumptions were wrong? What would I do differently?

When I attend talks, I focus on what I don't understand rather than what I do. Where are the gaps in the argument? What alternative explanations exist? What would the next experiment be?

This habit of questioning has made me a better researcher. It's also made me more intellectually honest. I'm quicker to recognize when I don't understand something, and less likely to pretend I do.

## The Questions We Don't Ask

Sometimes the most important questions are the ones we're not asking. We get so focused on solving problems within existing frameworks that we forget to question the frameworks themselves.

Thomas Kuhn called this "normal science"—working within a paradigm, solving puzzles using accepted methods. It's valuable work, but it's not revolutionary. Revolutionary science happens when someone asks a question that challenges the paradigm itself.

I'm not saying we should all aim to be revolutionaries—most good science is incremental. But we should remain open to paradigm-challenging questions. We should pay attention to anomalies, to the things that don't quite fit, to the questions that feel uncomfortable because they threaten our existing models.

## A Practice, Not a Skill

Learning to ask good questions isn't something you master once and then possess forever. It's a practice—something you cultivate over time through deliberate effort and reflection.

For me, this means:

- **Writing down questions** as they occur to me, even if I don't have time to pursue them immediately.
- **Reading widely** outside my immediate field, because diverse inputs lead to better questions.
- **Talking to people** with different expertise, because they see things I miss.
- **Embracing confusion** as a signal that something interesting is happening.
- **Being patient** with uncertainty, resisting the urge to settle for easy answers.

## Final Thoughts

In a culture that values expertise and certainty, admitting ignorance can feel risky. But some of the most productive moments in my career have come from asking questions I wasn't sure I should ask.

Good questions are the foundation of good science. They're what drive us forward, what reveal the gaps in our understanding, what make research exciting rather than routine.

So if you're at the beginning of your research journey, don't worry too much about having the right answers. Focus on asking the right questions. Cultivate curiosity, embrace uncertainty, and remember that not knowing is the first step toward understanding.

After all, the most important scientific discoveries didn't come from people who had all the answers. They came from people who asked the right questions.
    `,
  },*/
  /*
  {
    id: "france-waves2022",
    title: "Travel Diaries: France - The First Real Conference",
    excerpt: "My first major international conference at Waves2022—the nerves, the breakthroughs, and discovering I was part of a global research community.",
    date: "July 25, 2022",
    readTime: "11 min read",
    category: "Travel",
    tags: ["France", "Conferences", "Wave Mechanics"],
    headerImage: "https://images.unsplash.com/photo-1678644886790-13e1dcf8f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFTlNUQSUyMFBhcmlzJTIwYnVpbGRpbmclMjBjYW1wdXN8ZW58MXx8fHwxNzczMjUzMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
My first major international conference was Waves2022 at ENSTA Paris, the 15th International Conference on Mathematical and Numerical Aspects of Wave Propagation. It is one of the major venues in the field, and attending it so early in my PhD felt almost overwhelming. I was preparing to present my work to an audience filled with researchers whose papers I had been reading for years.

Even getting there felt significant. I took the train from London St Pancras to Paris, and that somehow made the journey feel more momentous. Watching the English countryside give way to the French landscape, disappearing into the Channel Tunnel and emerging in another country, felt like a fitting beginning to an experience that would change how I saw myself as a researcher.

## The Night Before

The night before my talk, I barely slept.

I rehearsed obsessively, convinced that the moment I stepped on stage everything would vanish from my mind. At around two in the morning, I remember pacing around my hotel room with my notes in hand, trying to calm myself by preparing just one more time.

What if someone asks about the convergence conditions? What if there is an error in my derivation? What if I completely blank on stage?

At that point, the conference still felt enormous and intimidating. I imagined every question would matter, every answer would be judged, and every mistake remembered.

## The Moment of Truth

When the time came, though, something unexpected happened. As soon as I began speaking, the nervousness started to fall away.

I was no longer thinking about being judged. I was talking about something I genuinely cared about: wave mechanics, scattering in disordered materials, and the questions that had occupied so much of my time and energy. That enthusiasm carried me through the talk more than confidence ever could.

The questions afterward were challenging but fair. More importantly, they revealed something I had not fully understood before: the intimidating experts in the room were not there to catch me out. They were simply people who cared deeply about the same kinds of problems I did.

One researcher asked whether my ensemble approach counted as a kind of homogenisation technique. It was exactly the sort of technical question I had worried about in advance, and exactly the kind of question I was ready for. For the first time, I was not just presenting research. I was participating in a real scientific conversation.

## After the talk

What I remember most vividly is everything that came after.

During coffee breaks, I found myself standing at whiteboards with researchers from all over the world. We sketched equations, debated different approaches, and discovered unexpected overlaps in our work. Those informal discussions had an energy that formal talks sometimes cannot capture. People were curious, generous, and willing to think out loud together.

One professor from the United States remarked that the problem I was trying to solve was a big open question in the field. Hearing that meant more to me than I can easily express. It was not just encouragement; it was validation that the work mattered and that I was contributing to something larger than myself.

A lecturer from Australia shared software for visualising scattering patterns that later proved invaluable for my research. A PhD student from France and I discovered that we were working on complementary aspects of the same problem, and in the excitement of the moment we began planning a collaboration on the spot. Life eventually got in the way, and the collaboration never materialised, but that hardly mattered. For the first time, I felt what it meant to belong to a global research community built not only on papers and presentations, but on conversations, generosity, and shared curiosity.

## Paris, Between Sessions

The conference was not confined to lecture halls and whiteboards. Between sessions, I explored Paris with other attendees, and the organisers had put together social events that became just as memorable as the talks themselves.

One afternoon, we took a boat tour along the Seine. The conference provided free wine, and we embraced that fact enthusiastically. There was something surreal about drifting past the Paris skyline, glass in hand, talking about wave mechanics with people I had only just met. By the time we stepped back onto land, we were all pleasantly drunk and considerably closer than we had been a few hours earlier.

If the Seine tour was surreal, the adventure park was pure chaos. The organisers took us to a park with tree-climbing pistes and zip lines strung high between the trees. There was something inherently funny about it: a group of mathematicians and physicists, most of whom spent their lives at desks, blackboards, or computer screens, suddenly attempting aerial obstacle courses.

It was exhilarating, slightly ridiculous, and genuinely frightening in places. At one point, I slipped and cut my arm badly enough to leave a scar I still have. Someone from Cambridge had worse luck and broke his finger after a fall. Somehow, though, the excursion continued. We helped him down, someone improvised a makeshift splint, and the rest of us carried on.

That whole afternoon felt oddly perfect. After days of testing ourselves intellectually, we were suddenly testing ourselves physically. The adrenaline, the mishaps, and the sheer absurdity of it created a kind of camaraderie that polite conference small talk never could.

## Evenings and Conversations

The evenings became the emotional centre of the week. Every night, the organisers provided wine, beer, and food for the attendees, and we stood in small groups with plates of cheese and charcuterie, letting conversations unfold naturally and without urgency.

What surprised me was how little those conversations stayed confined to research. Of course, we talked about wave mechanics, numerical methods, and open problems, but just as often we talked about everything else: where we had grown up, what it was like to study in different countries, the academic cultures we came from, and the different paths that had brought us all into the same room.

There is something about good food and wine that dissolves formality. People relaxed, spoke more openly, and revealed parts of themselves that would never surface during a Q&A session. Those conversations made the technical ones richer. They made the conference feel less like a series of presentations and more like a temporary community.

## Seeing Paris

One of my colleagues at the conference was French, and he gave us what felt like the real Paris.

We rented e-scooters and followed him through the city streets as he took us not to the obvious tourist sites, but to the places he had loved as a student: cafés he used to visit, hidden corners tourists would never find, neighbourhoods that felt lived-in rather than staged.

Riding through Paris as a French colleague guided us through his favourite parts of the city, I felt intensely, vividly alive. He would tell us stories about a neighbourhood, explain the history of a building, or recommend a restaurant we absolutely had to try.

It gave me something no guidebook could have. I was not just seeing Paris; I was being shown Paris through someone else’s affection for it. That, too, felt like part of the conference experience: not just academic exchange, but cultural exchange, friendship, and shared discovery.

## What the Conference Taught Me

Waves2022 taught me that the research community is far more welcoming than I had imagined. I had built senior researchers up in my mind as intimidating, distant figures. In reality, they were generous with their time, thoughtful in their questions, and genuinely interested in hearing what younger researchers had to say.

It also taught me that presentation matters. Good ideas do not speak for themselves nearly as well as people like to pretend. I saw excellent work fail to connect because it was poorly communicated, and more modest work make a strong impression because it was explained clearly and confidently. Communicating research is not secondary to doing it; it is part of doing it.

Most of all, I learned that conferences are really about conversations. The most important moments happened in the margins: coffee breaks, evening receptions, walks between venues, and spontaneous discussions at whiteboards. That is where collaborations begin, where ideas collide, and where you start to understand what people are truly working on.

## The Journey Home

When it was time to return to London, I took the train back the same way I had arrived. As the French countryside slid past the window and the train entered the Channel Tunnel, I found myself reflecting on how different I felt from the person who had made the journey a few days earlier.

I had presented at a major international conference. I had spoken with leading researchers in my field. I had come away with new ideas, new contacts, and a much clearer sense of where my work fit into the broader landscape of wave propagation research.

But more than that, I had come away with a new sense of myself.

For the first time, I did not feel like a PhD student pretending to be a researcher. I felt like a researcher. I felt like a legitimate member of a global community working on fundamental questions, questions that had been studied for decades and would continue to be studied long after I was gone.

That was the real significance of Waves2022. It was more than my first major conference. It was the moment I stopped feeling like an outsider and started feeling that I had a place in the conversation.

And in Paris, at my first real conference, I found that place.
    `,
  },
  */
  /*
  {
    id: "glasgow-2021-pandemic",
    title: "Travel Diaries: Glasgow - Conferences in a Pandemic",
    excerpt: "Presenting from my desk at home to a screen of black boxes—what we lost and what we learned from virtual academic gatherings.",
    date: "April 10, 2021",
    readTime: "6 min read",
    category: "Travel",
    tags: ["Glasgow", "Virtual Conferences", "Pandemic"],
    headerImage: "https://images.unsplash.com/photo-1705354150474-baef059e2d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHbGFzZ293JTIwU2NvdGxhbmQlMjBjaXR5c2NhcGUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MzA5NjA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
The BMC-BAMC (British Mathematical Colloquium and British Applied Mathematics Colloquium) in Glasgow in 2021 was my first experience of a fully online conference. Like so many events at the time, it had been pushed into a virtual format by the pandemic. It was necessary, and in many ways it worked remarkably well. But even then, it was impossible not to feel that something essential had been lost.

I had been looking forward to going to Glasgow. I had never been to Scotland, and part of what makes conferences memorable is that they take you somewhere new. They break the routine of everyday life. They give research a setting, a mood, a sense of occasion. Instead of travelling to a new city, though, I attended the conference from home, sitting at my desk in the same room where I had already spent months working during lockdown.

## The Virtual Reality

Attending an online conference was strange from the very beginning. The talks took place through screens filled with muted microphones, blank cameras, and rows of names in little boxes. There was still a programme, still a schedule, still the familiar rhythm of moving from one session to another — but everything felt flattened.

The biggest difference for me came with the poster session. In person, posters are interactive and dynamic. People wander over, pause because something catches their eye, ask a question, bring a colleague along, or end up staying much longer than either of you expected because the conversation becomes interesting. There is a kind of spontaneity built into poster sessions that makes them one of the most enjoyable parts of a conference.

Online, that atmosphere was much harder to recreate.

I presented my poster virtually, speaking to people through a screen rather than standing beside a printed poster in a crowded room. The conversations were still thoughtful, and people asked genuinely interesting questions, but the encounter felt more mediated and less natural. You lose all the little physical cues that make interaction easier: someone stopping to take a closer look, the glance that signals curiosity, the half-formed question that turns into a deeper discussion.

## What Was Missing

What I missed most was the informal side of conferences — the parts that are hardest to schedule and easiest to take for granted.

At an in-person meeting, so much happens in the gaps between official events. You run into someone during a coffee break and discover they are working on a related problem. You sit next to somebody at lunch and end up talking about a paper, a method, or even a completely different area that unexpectedly connects with your own. You wander through the poster hall and find yourself drawn into conversations you never planned to have.

None of that translated easily online.

The virtual networking spaces existed, but they often felt forced in a way that in-person interaction does not. Instead of naturally drifting into conversation, you had to enter a breakout room, introduce yourself, and try to create in a few minutes what would normally emerge on its own. It was not that people were unwilling — everyone was doing their best — but the medium made spontaneity difficult.

I also felt the absence of Glasgow itself. I was supposed to be attending a conference in a city I had never visited, but in reality I never left my room. The location became almost abstract. On screen, every conference looks vaguely similar. You do not get the feeling of being somewhere, and with that, you lose part of what makes academic travel memorable.

## The Hybrid Future

At the same time, the virtual format also revealed real advantages.

Even through a screen, ideas still travelled. Researchers still shared their work, asked questions, and made connections. My poster still sparked conversations, and those conversations still mattered. That was an important lesson: even when the atmosphere changes, the core of a conference remains the exchange of ideas.

The online format also made participation possible for many people who might otherwise have struggled to attend. Travel costs, visa issues, caring responsibilities, health concerns, and accessibility needs all become much less of a barrier when participation is remote. In that sense, the conference was more open than it might have been in person.

That mattered to me. The pandemic disrupted so much, but it also forced academia to confront the fact that many of its long-standing structures were less accessible than they needed to be. Virtual conferences were not a perfect substitute, but they did show that participation could be widened in meaningful ways.

Another benefit was flexibility. Recorded talks made it possible to revisit sessions, catch up on anything missed, and engage with the programme in a less rigid way than a traditional in-person conference allows. That was genuinely useful, especially in a dense academic meeting where several interesting talks might overlap.

## A Different Kind of Conference Memory

BMC-BAMC Glasgow 2021 stayed with me not because of a dramatic single moment, but because of what it represented.

It took place during one of the strangest periods in recent history, when so much of ordinary academic life had been suspended or transformed. And yet the research community adapted. People still came together, still shared ideas, still made the effort to connect across distance and uncertainty. There was something quietly moving about that.

The conference also made me appreciate, more sharply than before, what makes in-person events special. It is not only the talks or the formal sessions. It is the atmosphere, the chance encounters, the sense of travelling somewhere and being temporarily immersed in a community of people thinking about similar things.

At the same time, it made me appreciate the value of remote participation and the possibilities it opens up. Virtual conferences may never fully replace the experience of being physically present, but they do offer accessibility, flexibility, and reach in ways that should not be forgotten.

## Looking Back

Looking back now, I think Glasgow 2021 taught me to hold two ideas at once.

The first is that something important is lost when conferences become entirely virtual. The spontaneity, energy, and human texture of in-person interaction are difficult to reproduce online. That is especially true for poster sessions, which depend so much on informal conversation and movement.

The second is that virtual formats still have real value. They make participation easier for many people, reduce practical barriers, and remind us that meaningful academic exchange does not always require physical proximity.

So when I think of BMC-BAMC Glasgow 2021, I think both of what was absent and of what endured. I think of the city I did not get to explore, the conference spaces I never saw, and the poster session that took place through a screen instead of in a crowded hall. But I also think of a research community that found a way to keep going.

And one day, when I finally do make it to Glasgow, I think I will remember that conference too — the one that was meant to happen there, but instead unfolded from my desk at home.
    `,
  },
  */
  /*
  {
    id: "le-houches-alps-2020",
    title: "Travel Diaries: Les Houches - The Best Trip I Never Had",
    excerpt: "Some journeys stay with you even when you never take them—a reflection on the summer school that was cancelled by the pandemic.",
    date: "August 15, 2020",
    readTime: "7 min read",
    category: "Travel",
    tags: ["France", "Alps", "Summer School", "Wave Mechanics"],
    headerImage: "https://images.unsplash.com/photo-1682679140549-e7369ae112be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZSUyMEhvdWNoZXMlMjBGcmVuY2glMjBBbHBzJTIwbW91bnRhaW5zJTIwdmlsbGFnZXxlbnwxfHx8fDE3NzMwOTYwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
Some journeys stay with you even when you never take them.

For me, Les Houches is one of those journeys.

In 2020, I was meant to attend the summer school in Les Houches on the modelling of waves — two weeks in the French Alps, surrounded by PhD students, postdocs, and some of the biggest names in the field. It was the kind of opportunity that feels almost mythical when you are early in research: a place where you do not just attend lectures, but immerse yourself completely in a subject, living and thinking alongside people who care about the same problems you do.

And then the pandemic happened.

Like so many plans that year, it disappeared before it could become real. I never made it to the mountains. I never sat in those lecture rooms. I never had the conversations I had imagined having. And yet, strangely, Les Houches still occupies a vivid place in my mind. It remains the best trip I never had.

## The Place I Never Saw

Part of the magic of Les Houches was always its setting.

Nestled in the French Alps, the physics school has a reputation that goes beyond its lectures. People speak of it almost as a world of its own: a place where difficult ideas and dramatic landscapes somehow belong together. I imagined mornings spent looking out at the mountains before heading into lectures on wave mechanics, afternoons wrestling with problem sheets, and evenings walking through Alpine air while continuing conversations that had started in the classroom.

It was not just the beauty of the place that appealed to me, but what that beauty seemed to promise: distance from the noise of everyday life, space to think deeply, and the rare chance to focus entirely on one subject without the usual interruptions of emails, meetings, deadlines, and routine.

Even without going, I could feel the pull of that imagined setting. It represented the kind of intellectual immersion that is so hard to create in ordinary academic life.

## Learning From Legends

What drew me most strongly to Les Houches was the chance to learn from people whose work had already shaped the way I thought.

At that stage in my PhD, I was still building my understanding of wave propagation, scattering, and mathematical modelling. The idea of spending two weeks learning from researchers whose papers I had read — people whose names already carried weight in the field — felt extraordinary. These were not just academics delivering isolated talks. They were people who had defined research areas, developed important frameworks, and influenced the questions younger researchers like me were beginning to ask.

I often thought about what it would have been like to see how they taught. Every great researcher has a different intellectual style. Some begin from physical intuition and only then move toward mathematics. Others start from abstraction and build downward into application. Some think computationally, others geometrically, others analytically. I would have loved the chance to watch those approaches unfold side by side, not just to absorb the content, but to learn different ways of thinking.

That, to me, is one of the hidden gifts of a summer school like Les Houches. You are not only learning material. You are learning how serious researchers approach material.

## What I Would Have Taken From It

Even though I did not attend, I know the kinds of things I would have taken away from that experience.

First, I would have come away with a deeper understanding of the field itself. Summer schools offer something that conferences often cannot: time. Time to sit with ideas, time to return to them the next day, time to ask questions after the lecture rather than rushing to the next session. That sort of sustained exposure changes the way knowledge settles in your mind.

Second, I would have gained perspective. When you are deep inside your own research problem, it is easy to become trapped inside its immediate difficulties. A place like Les Houches offers the chance to zoom out — to see how your work fits into a wider landscape, to understand which questions are foundational, which techniques travel across problems, and which assumptions deserve to be challenged.

Third, I think I would have taken away confidence. Not the easy kind, but the quieter and more durable kind that comes from real intellectual contact. There is something reassuring about hearing leading researchers speak honestly about difficult ideas, about realizing that even the most established people in the field are still grappling with uncertainty, approximation, and incomplete understanding. I imagine that being there would have reminded me that research is not about already knowing everything. It is about learning how to stay with what you do not yet know.

## The Conversations I Imagined

If the lectures were one part of the dream, the conversations were the other.

I imagined coffee breaks where a casual question turned into a twenty-minute discussion. I imagined lunches where people from different countries and different mathematical traditions compared ways of thinking. I imagined evening walks where the conversation shifted effortlessly between technical questions, academic life, and the more personal uncertainties that so often sit just beneath the surface of research.

Those are the moments I think I would have valued most.

Not only the chance to meet "legends" in the field, but the chance to encounter them as people — to hear about their struggles, their wrong turns, their changing views, the problems that mattered to them, and the ones they thought were worth leaving behind. That kind of access can be transformative for younger researchers. It reminds you that the names on papers are not remote authorities, but people who also had to learn, doubt, persist, and grow.

I imagined, too, the community among the students. One of the most valuable things about summer schools is that they gather people at similar stages of their journey and give them time to think together. Those are often the relationships that last: the people whose paths run alongside yours, even if only briefly, before crossing again years later at conferences, workshops, or collaborations.

## What the Pandemic Changed

Of course, none of that happened.

Like so many things in 2020, Les Houches became another casualty of the pandemic. At the time, that loss might have seemed small compared to everything else happening in the world. And in many ways, it was. But that does not mean it felt insignificant.

Academic life is built not only on results and milestones, but also on possibilities — the courses, conversations, places, and encounters that shape how you think. Losing Les Houches felt like losing one of those rare possibilities. Not just a trip, but a form of intellectual experience I had been genuinely excited about.

What the pandemic interrupted was not only travel, but momentum. It broke the imagined continuity of becoming: the sense that you were moving outward into the wider research world, meeting people, learning in new places, and gradually finding your place in a community. For many of us, that expansion suddenly collapsed back into bedrooms, laptops, and a much narrower version of academic life.

## Why It Still Matters

And yet, even as a missed opportunity, Les Houches still matters to me.

It matters because of what it represented: the possibility of deep immersion, of learning from brilliant people, of being challenged and stretched in the best possible way. It matters because some opportunities shape you not only when they happen, but even in their absence. They become markers of what you value, what you were hoping for, and the kind of intellectual life you wanted to build.

In a strange way, Les Houches helped clarify that for me. It reminded me how much I cared not just about producing research, but about being part of a living research culture — one built on ideas, conversation, mentorship, and shared curiosity.

That may be why I still think of it so often. Not as a disappointment exactly, but as a lost possibility that still glows in memory.

## The Best Trip I Never Had

Les Houches remains, for me, the best trip I never had.

I never saw the Alps from the lecture hall window. I never filled notebooks during the morning sessions. I never hiked mountain trails while discussing mathematics and physics with other researchers. I never met the legends I had hoped to learn from in person.

But the fact that I missed it does not make it meaningless. If anything, it reveals how much opportunities like that matter. They are not just additions to a CV. They are spaces where people grow — intellectually, professionally, and personally.

Perhaps one day I will make it there after all, in some other form, for some other event. Perhaps not. But even as an unrealised journey, Les Houches has stayed with me as a symbol of the kind of academic experience I value most: deep learning, generous exchange, and the rare feeling of being completely immersed in ideas that matter.

Some trips change you when you take them.

Others change you simply because you wanted them so badly.
    `,
  },
  */
  /*
  {
    id: "tokyo-iciam-2023",
    title: "Travel Diaries: Tokyo - Applied Math on a Global Stage",
    excerpt: "Thousands of researchers, dozens of parallel sessions, and a mesmerizing city where ancient shrines meet futuristic technology.",
    date: "August 25, 2023",
    readTime: "7 min read",
    category: "Travel",
    tags: ["Japan", "Tokyo", "Applied Mathematics", "ICIAM"],
    headerImage: "https://images.unsplash.com/photo-1767334851100-32cf23d83e1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyME1vdW50JTIwRnVqaSUyMHZpZXclMjBza3lsaW5lfGVufDF8fHx8MTc3MzI3MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
The 10th International Congress on Industrial and Applied Mathematics in Tokyo was one of the most memorable trips of my PhD — not because it was easy, but because it tested me in ways I did not expect.

The trip came immediately after I had submitted my first serious academic paper to a top journal. I should have felt relieved, and I did, but mostly I arrived in Japan already exhausted. What followed was a combination of intellectual excitement and physical struggle: a major international conference, a city unlike any I had ever visited, heavy jet lag, unfamiliar food, and the slow realization that I had pushed myself into the trip with very little left in reserve.

## Arriving in Tokyo

Tokyo was overwhelming from the start. The city felt immense, fast, and incredibly precise. The stations seemed endless, the metro system had a logic I admired but did not immediately understand, and everything around me moved with a sense of order that was both impressive and intimidating.

What made the trip especially difficult was that my body never seemed to catch up. The jet lag hit me hard and stayed with me far longer than I expected. Eating was also more difficult than I had imagined. Although I appreciated Japanese food and was genuinely excited to experience the culture, I struggled to adapt and ended up losing five kilograms over the course of the trip.

That was the point where the people around me really mattered.

## The Importance of Support

One of the things I took away most strongly from Tokyo had very little to do with mathematics.

A fellow PhD student was an enormous source of support throughout the trip, and I do not think I appreciated enough before then how important that kind of support can be when you are travelling internationally, especially when things are not going smoothly. There is something deeply reassuring about knowing that someone is looking out for you, that you do not have to manage every difficult moment alone, and that if you are tired, disoriented, or simply overwhelmed, there is someone you can rely on.

That kind of companionship changes the experience of travel completely. It turns what could have become an isolating trip into something shared and manageable. Looking back, I think that support was one of the reasons I was still able to enjoy so much of Japan despite how difficult the trip was physically.

## The Conference

ICIAM itself was enormous. Thousands of researchers, countless parallel sessions, and a programme so large that it felt impossible to take in fully. What I loved about it was the scale of applied mathematics on display: wave mechanics, optimisation, fluid dynamics, mathematical biology, industrial modelling — all of it unfolding at once.

There was something energising about being reminded that my own work sits inside a much larger global conversation. Even when the trip felt hard on a personal level, the conference itself kept opening windows onto new ideas and different ways of thinking.

## The Good Moments

And there were many genuinely good moments.

We went to one of the highest skyscrapers in Shibuya and looked out over the city, which seemed to stretch forever. We visited sumo houses and museums, and I was struck by how naturally history and tradition seemed to sit alongside modern urban life. We explored local neighbourhoods, wandered through Akihabara, got lost in the metro more than once, and gradually learned to laugh at our confusion rather than fight it.

One of the most memorable parts of the trip was visiting Mount Fuji and staying for a night at the foot of the mountain. After the intensity of Tokyo, that change of setting felt almost unreal. It gave the trip a different rhythm and remains one of the clearest memories I have from Japan.

I was also deeply impressed by Japanese culture more broadly: the politeness of everyday interactions, the attention to detail, the respect embedded in public life, and the quiet generosity people showed even when I was clearly lost or struggling. And, on a more personal note, I came away with a real appreciation for Japanese whisky.

## What the Trip Taught Me

Looking back, Tokyo taught me more than I expected.

It reminded me that conferences are never only about the talks. They are also about the conditions in which you experience them: your energy, your health, the people around you, and how far from home you suddenly realise you are.

It also reminded me that support matters. Academic travel can look exciting from the outside, but when things become difficult, it makes an enormous difference to know that you are not navigating it alone.

And perhaps most practically of all, it taught me that a detailed risk assessment for international travel is highly recommended. That may sound dry, but it is true. Time differences, food, transport, fatigue, health, and the sheer stress of moving across the world while trying to function professionally are all things worth thinking through in advance. You do not always realise how important that is until you are already in the middle of it.

## Looking Back

Tokyo was not an easy trip, but it was a meaningful one.

It came at a moment of transition for me, immediately after the submission of my first major paper, and it exposed how demanding that period had really been. At the same time, it gave me moments of wonder, challenge, humour, and friendship that I will remember for a long time.

I came back tired, lighter in body, and much more aware of my limits. But I also came back with a deeper appreciation for good people, shared experiences, and the importance of looking after yourself when the world suddenly becomes much larger than your routine.
    `,
  },
  */
  /*
  {
    id: "cambridge-hackathon-2023",
    title: "Travel Diaries: Cambridge - Winning the Hackathon",
    excerpt: "Intensive lectures, collaborative problem-solving, and the thrill of victory at the Isaac Newton Institute's multiple scattering workshop.",
    date: "January 20, 2023",
    readTime: "7 min read",
    category: "Travel",
    tags: ["Cambridge", "Hackathon", "Multiple Scattering", "Competition"],
    headerImage: "https://images.unsplash.com/photo-1767290979763-5953b148ee69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW1icmlkZ2UlMjBUcmluaXR5JTIwQ29sbGVnZSUyMGNvdXJ0eWFyZCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMyNjkyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
The Workshop on Mathematical Theory and Applications of Multiple Wave Scattering (MWSW2023) at the Isaac Newton Institute in Cambridge was one of the highlights of my PhD. It brought together researchers working on multiple scattering, wave propagation, and related mathematical and computational problems — in other words, exactly the kind of questions I cared most about.

The lectures were excellent, the discussions were intense, and the atmosphere was deeply stimulating. But what made the workshop unforgettable for me was the hackathon: a fast-paced challenge that turned abstract ideas about wave scattering into a concrete and surprisingly difficult problem.

## The Setting

There was already something special about being at the Isaac Newton Institute.

Cambridge carries a kind of intellectual weight that you can feel even before you enter a lecture room. The Institute itself has that rare atmosphere of seriousness without pretension: a place where difficult ideas are taken seriously, where people gather to think deeply, and where mathematics feels very much alive.

For a PhD student working on waves and scattering, it felt like the right place to be. Everyone there was speaking, in one way or another, a language I had been trying to learn during my PhD. The workshop was not broad and general. It was focused. People cared about the same kinds of problems I cared about, and that made every conversation feel immediately meaningful.

## A Workshop Built Around Multiple Scattering

The workshop itself was packed with lectures from leading researchers in the field. Unlike a standard conference, where talks often present polished slices of finished work, this felt more like a real immersion in the subject. The speakers did not just present results; they developed ideas, explained methods, and opened up technical questions in a way that invited engagement.

For me, that was one of the most valuable things about the week. I was not simply listening to talks. I was seeing how people in the field thought: how they framed problems, what they considered important, where they made approximations, and how they connected mathematics to physical intuition.

That alone would have made the trip worthwhile. But then came the hackathon.

## The Challenge

The task was both simple to state and difficult to solve.

We were given an incident beam and a target region in space. The goal was to place scatterers in such a way that as much wave energy as possible would be focused at that chosen location.

What made the problem especially interesting was the catch: the target point lay inside a material containing randomly placed scatterers. So this was not simply a clean optimisation problem in open space. We were trying to control the wave field inside a disordered medium, where multiple scattering, interference, and shadowing all played a role.

In other words, the challenge was not just to direct the beam, but to exploit scattering intelligently.

And that was exactly what made it so fascinating.

The winning team would be the one that managed to concentrate the greatest amount of energy at the specified point.

## Why the Problem Was So Difficult

At first glance, the problem sounded almost intuitive: send energy where you want it to go. But in practice, it was much more subtle.

The same particles that might help focus the beam at one frequency or in one region could also obstruct, deflect, or dissipate energy in another. Small changes in the placement of scatterers could dramatically alter the resulting field. The entire problem depended on interference effects, geometry, and the way waves interacted with a complex surrounding structure.

That meant there was no obvious answer and no straightforward route to it.

You had to think carefully about where to place particles, how the incoming beam would interact with them, and how the scattered field would build up at the target location. It was a problem that sat beautifully at the intersection of physical intuition, mathematical reasoning, and computational experimentation.

## Working Against the Clock

Like all good hackathons, it created a very particular kind of intensity.

People began sketching ideas quickly, testing strategies, comparing interpretations of the problem, and trying to understand what kind of placement might produce constructive interference at the point of interest. It was one of those situations where everyone in the room was thinking hard, but in different ways. Some approached it geometrically, others numerically, others from a more physical or analytical perspective.

That was what made the atmosphere so exciting. You could feel the problem pulling different kinds of expertise together.

For me, one of the most enjoyable parts was that the challenge was concrete enough to be playful, but deep enough to be genuinely scientific. It was competitive, yes, but it was also intellectually rich. You were not just trying to "win"; you were trying to understand how to manipulate a complicated scattering environment in a controlled and effective way.

## The Moment of Recognition

What made the result so memorable was not just the fact that we won, but what that win represented. There were two awards: one for achieving the highest energy concentration at the target location, and another for the most compelling mathematical and numerical approach. We won the second.

The team that achieved the highest energy concentration used a direct optimisation strategy, applying gradient descent to tune the particle positions. Our approach was different. Instead of treating the task purely as an optimisation problem, we tried to think about how to shape the wave field more deliberately.

We focused on structured placements of scatterers — especially ring-like configurations — designed to guide and concentrate energy through resonance and interference. Rather than searching blindly for the best arrangement, we aimed to use physical intuition about how waves interact with structure to design configurations that naturally steered energy toward the target region.

What I found most satisfying was that our solution reflected a way of thinking rather than just a computational trick. It showed that combining physical insight with mathematical reasoning can lead to designs that are not only effective but also conceptually clear.

In a field where progress often unfolds slowly over months or years, there was something deeply rewarding about tackling such a difficult problem in a compressed timeframe and arriving at a coherent solution. It was also a reminder that research can be joyful.

So much of PhD life is slow, solitary, and uncertain. You spend long stretches stuck on derivations, simulations, debugging, or trying to make sense of results that refuse to behave. The hackathon, by contrast, compressed all the intellectual excitement of research into a short, intense burst: a hard problem, shared energy, creative thinking, and the quiet thrill of watching an idea come together.

## What I Took Away From It

What stayed with me most was how naturally the challenge captured something essential about research in wave scattering.

The problem was not artificial. It reflected the real difficulty of controlling waves in complex media, where disorder is not just a nuisance but part of the problem itself. It required more than technical skill. It required intuition, experimentation, flexibility, and a willingness to think in terms of interactions rather than isolated objects.

It also reminded me how much I enjoy problems where mathematics and physics genuinely meet. You cannot solve something like that through formalism alone, and you cannot solve it through intuition alone either. You need both. You need to think mathematically, but also physically — to imagine what the wave is doing, how the medium is shaping it, and where energy is likely to accumulate or disappear.

That balance is one of the things I love most about this area of research.

## Reconnecting with Familiar Faces

One of the unexpected pleasures of the workshop was how many familiar faces were there.

Several people I had met at Waves2022 in Paris were also at Cambridge, and there was something particularly satisfying about those reunions. A year earlier, we had been sharing wine on a boat along the Seine, discussing wave mechanics while slightly drunk and newly acquainted. Now, here we were again, still talking about scattering problems, but with a year of research behind us and a deeper sense of shared trajectory.

Those conversations felt different this time. We were not just introducing ourselves or making polite conference small talk. We were catching up. Comparing notes on how our work had evolved. Asking each other the kinds of questions you can only ask someone who already understands what you are trying to do.

Beyond the social reconnections, the workshop also offered something more directly valuable: access to some of the leading researchers in the field. Professors and senior figures who, in other contexts, might seem distant or unapproachable were remarkably generous with their time. I had several one-on-one meetings where I was able to talk through the specific problems I was stuck on — both mathematical and computational — and receive genuine guidance.

One conversation stands out. I had been struggling with a computational bottleneck in my simulations, unsure whether the issue was fundamental or just a matter of implementation. A professor whose work I had been citing for years sat down with me and walked through the problem step by step. Within half an hour, he had suggested an alternative formulation I had not considered, one that turned out to resolve the issue almost entirely. That kind of direct, focused mentorship is rare, and I left the conversation feeling not only helped but also encouraged.

## Walking Through History

Outside the workshop itself, Cambridge offered its own kind of education.

My academic friends from Cambridge took it upon themselves to show me the city properly. We visited most of the major colleges, walking through courtyards and cloisters that have stood for centuries. They pointed out the rooms where famous mathematicians had worked, the libraries where foundational texts had been written, the corridors where some of the greatest minds in the history of science had walked.

There was something quietly moving about that. I was just a PhD student working on wave scattering, but I was walking through spaces where Newton had thought about gravity, where Maxwell had developed his equations, where Dirac had reshaped quantum mechanics. It made my own work feel smaller, yes, but also connected — part of an ongoing tradition of trying to understand the physical world through mathematics.

One evening, we had dinner in the Great Hall of Trinity College. The hall itself is grand and formal, with high ceilings, wood-panelled walls, and long tables where generations of students have eaten. Sitting there, surrounded by portraits of past fellows and the weight of institutional history, felt surreal. It was the kind of experience that academic life occasionally offers: a reminder that you are part of something much larger and longer than your own small contribution.

Afterward, we walked to the Eagle pub, a place famous in the history of science. It was there, in 1953, that Francis Crick announced that he and James Watson had discovered the structure of DNA — the double helix. Standing in that same pub, pint in hand, I felt the same kind of continuity I had felt walking through the colleges. Science is not just papers and conferences. It is also places, conversations, moments of excitement shared over a drink. Some of those moments turn out to matter enormously.

## Cambridge Beyond the Hackathon

Of course, Cambridge itself added something to the experience.

There is always something a little surreal about walking through a place so strongly associated with the history of science and mathematics, especially while working on your own small corner of an ongoing intellectual tradition. Between sessions, I found myself reflecting on that continuity: the idea that even highly specialised problems, like wave focusing in random scattering media, belong to a much longer story about trying to understand and control the physical world.

Being in that environment gave the workshop an added sense of occasion. It did not make the work feel grander than it was, but it did make it feel connected — part of a much wider conversation stretching across disciplines, institutions, and generations.

## Looking Back

Looking back, what I remember most about Cambridge was the combination of focus, challenge, and excitement.

The lectures sharpened my understanding of the field. The conversations made me feel part of a real research community. And the hackathon brought all of that into one vivid moment: a problem about steering energy through disorder, a room full of people thinking creatively, and the satisfaction of seeing a difficult idea come together.

Winning was exciting, of course. But more than that, the experience reminded me why I enjoy research in the first place. Not only because I like solving problems, but because I like the kind of problems that force you to combine intuition, analysis, and imagination.

And this was exactly that kind of problem.
    `,
  },
  */
  /*{
    id: "why-i-started-writing",
    title: "Why I Started Writing (And Why You Should Too)",
    excerpt: "The surprising benefits of putting ideas into words, and how writing has transformed my thinking.",
    date: "August 10, 2024",
    readTime: "6 min read",
    category: "Personal",
    tags: ["Communication", "Personal Growth", "Creativity"],
    headerImage: "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwZGVzayUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjQ4ODczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
For most of my academic career, I thought writing was something I had to do—a necessary evil to publish papers and secure funding. I didn't see it as a tool for thinking or a form of creative expression. That changed a few years ago when I started writing not just for journals, but for myself. What began as a way to process my thoughts has become one of the most valuable practices in my life.

## The Accidental Discovery

I didn't set out to become a writer. It started during my PhD when I was struggling to make sense of a particularly complex problem. I'd been staring at equations for weeks, running simulations that produced confusing results, and feeling increasingly frustrated.

Out of desperation, I opened a blank document and started writing. Not a research paper—just an informal explanation of the problem as if I were talking to a friend. I wrote about what I was trying to accomplish, what I'd tried so far, and why nothing seemed to be working.

Something remarkable happened. As I wrote, the problem became clearer. I realized I'd been making an unstated assumption that was causing my models to fail. Writing had forced me to articulate my thinking precisely enough to spot the flaw.

That experience taught me that writing isn't just about communication—it's a thinking tool.

## Writing Makes Thinking Visible

We often talk about "thinking through" a problem, but thinking is largely invisible. It happens in our heads, in fragments and half-formed ideas. Writing makes thinking visible. It forces you to take vague intuitions and transform them into concrete statements.

This is harder than it sounds. You might think you understand something until you try to explain it in writing. Suddenly, you realize there are gaps in your logic, assumptions you haven't justified, or concepts you can't quite define.

I now use writing as a diagnostic tool. When I'm confused about something, I write about it. The act of trying to explain forces me to confront what I actually understand versus what I only think I understand. It's uncomfortable but incredibly valuable.

## Writing as Learning

There's a phenomenon in education called the "protégé effect"—the idea that teaching something to someone else is one of the best ways to learn it yourself. Writing works the same way. When you write for an audience, even an imaginary one, you're forced to organize your knowledge and present it coherently.

I've learned more about my own research by writing blog posts than I ever did by just doing the research. Writing forces you to step back, see the big picture, and understand how all the pieces fit together. You have to explain not just the *what*, but the *why* and the *how*.

This is especially true when writing for non-experts. If you can explain a complex idea to someone outside your field, you probably understand it pretty well. And if you can't? That's a sign you need to think more deeply about it.

## The Clarity Habit

Writing regularly has made me a clearer thinker in general. I now instinctively organize my thoughts into logical structures, anticipate objections, and look for simpler ways to express ideas. This carries over into everything I do—giving presentations, designing experiments, even everyday conversations.

I've also become better at identifying what I don't know. Writing exposes ignorance in a way that thinking alone doesn't. When you write "I don't fully understand X," you're forced to confront that gap rather than glossing over it.

This might sound like a negative, but it's actually liberating. Knowing what you don't know is the first step toward learning it. Writing has made me more intellectually honest with myself.

## Processing and Reflection

Research can be overwhelming. There's always another paper to read, another experiment to run, another problem to solve. Writing provides a way to process and reflect on what I'm learning.

After reading a dense research paper, I'll often write a summary in my own words. This helps me understand the key ideas and identify the parts I'm still confused about. After finishing a project, I'll write a retrospective: What worked? What didn't? What would I do differently next time?

These reflective practices have made me a more intentional researcher. Instead of just moving from one task to the next, I pause to extract lessons and insights. This cumulative reflection compounds over time, making each new project slightly easier than the last.

## Finding My Voice

One unexpected benefit of writing has been discovering my own voice. In academic papers, we're taught to write in a formal, impersonal style. But in my personal writing—blog posts, essays, reflections—I can be more honest, more human, more me.

This matters more than I initially realized. Finding your voice isn't just about self-expression. It's about developing confidence in your own perspective. When you write regularly, you start to trust your own judgment, to believe that your thoughts are worth sharing.

This confidence has carried over into my professional life. I'm more willing to speak up in meetings, to propose unconventional ideas, to challenge assumptions. Writing gave me practice articulating my thoughts, which made me more comfortable doing so in other contexts.

## Connection and Community

Writing has also connected me with people I never would have met otherwise. I started sharing my writing online—blog posts about research, reflections on academic life, book recommendations. People started reaching out: other researchers, students, people outside academia who were curious about science.

These connections have been incredibly valuable. I've had conversations with people from different fields, received feedback on my ideas, and found collaborators for projects. Writing creates opportunities for serendipity.

There's also something deeply satisfying about knowing that your writing has helped someone. I've received messages from students who found my posts encouraging, from early-career researchers who appreciated the honesty about struggles, from people who just wanted to say that a particular post resonated with them. These moments remind me why I write.

## The Practice, Not Perfection

One thing I had to learn was that writing doesn't have to be perfect. For a long time, I agonized over every sentence, trying to make everything polished and profound. This made writing painful and slow.

Eventually, I realized that the goal isn't perfection—it's practice. Writing is a skill that improves with repetition. The more you write, the easier it becomes. Your first draft doesn't need to be brilliant. It just needs to exist. You can always revise later.

I now try to write regularly, even if it's just a few hundred words. Sometimes I'm pleased with what I produce. Other times, it's mediocre. But the act of writing, regardless of quality, keeps the skill sharp and the ideas flowing.

## Why You Should Start

If you're a researcher, student, or anyone who works with ideas, I encourage you to start writing. Not just for publication or formal contexts, but for yourself. Write to think, to learn, to process, to reflect.

You don't need a blog or a public platform. You can write in a private journal or a collection of documents on your computer. The audience doesn't matter. What matters is the practice of putting thoughts into words.

Start small. Write about something you're trying to understand. Explain a concept you recently learned. Reflect on a challenge you're facing. Don't worry about style or eloquence. Just write.

You might be surprised by what you discover—not just about the subject you're writing about, but about your own thinking. You might find, as I did, that writing isn't just a tool for communication. It's a tool for thought, for growth, for understanding yourself and the world around you.

## Final Thoughts

Writing has changed my life. It's made me a better researcher, a clearer thinker, and a more intentional person. It's connected me with a community, helped me process my experiences, and given me a creative outlet I didn't know I needed.

If there's one thing I wish I'd started earlier in my career, it's writing. Not formal academic writing, but honest, exploratory, personal writing. The kind of writing that helps you figure out what you think by seeing what you say.

So if you've been considering starting a blog, keeping a research journal, or just writing more regularly—do it. Don't wait until you feel ready or until you have something profound to say. Start now. Start messy. Start imperfect.

You might discover, as I did, that the act of writing is its own reward.
    `,
  },*/
];