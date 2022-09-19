---
type: "Article"
title: "Mathematical chaos and chaos theory"
description: "Chaos is when the present determines the future, but the approximate present does not approximately determine the future. Chaos theory is the study of apparently random or unpredictable behaviour in systems governed by deterministic laws."
subject: "3E5FCA"
issue: 1
preview_image: "butterfly.jpeg"
video_url: null
video_title: null
userIDs: ["ac3de21f-1972-4e38-8eee-7d7dbff351d4"]
articleID: "cbf25a5f-2120-4829-ae8f-15b2eef2f5cf"
slug: "/articles/cbf25a5f-2120-4829-ae8f-15b2eef2f5cf"
---

## What is chaos?

<div class="image-card-right">
    <p>If I drop a ball on the ground, I can give a reasonably accurate estimate of where the ball will land. My estimate however will not be exact to the nearest micrometre, and the main reason for that is due to not knowing the exact starting point of the ball when I dropped it. There is some level of uncertainty in my estimate, but it is of an acceptable amount. Most importantly, the level of uncertainty in my estimate equals the level of uncertainty in the starting conditions. </p>
    <div class="image"><div class="img"><img alt="Tennis ball" src="./../images/issue1/maths/ball.jpg"></img></div</div>
</div>

<div class="image-card-right">
    <p>If I drop a ball on the edge of a knife however, and I want to know which side of the knife the ball lands on, the exact position the ball is released from is significantly more important. A small variation in starting position can change the outcome entirely. If I can’t tell which side of the knife the ball is released from, I can estimate the probability of each outcome and they’re 50% each. There has been an increase in the uncertainty of the outcome. </p>
    <div class="image"><div class="img"><img alt="Knife" src="./../images/issue1/maths/knife1.jpg"></img></div</div>
</div>

<div class="image-card-right">
    <p>Finally, I’ll drop a ball onto a peg-board. At every row, the ball may fall on either side of that peg. The route that the ball takes and its final destination depend precisely on the starting conditions now. Mathematical chaos resembles an infinitely long peg-board. If there is any uncertainty at all about the starting position of the ball (and in any real world scenario there will definitely be at least some uncertainty), then the route of the ball remains unknown to us. Even the tiniest of changes will fundamentally change the course of the ball. This means that with the slightest of uncertainty, we will be totally oblivious of the outcome. This is what mathematicians call chaos.</p>
    <div class="image"><div class="img"><img alt="Peg-board" src="./../images/issue1/maths/pegboard.png"></img></div</div>
</div>

## The simplest chaotic system
Now we know what chaos is, we can start exploring some chaotic systems. Chaos can originate from the simplest things, and we will now be looking at the simplest chaotic system: the logistic map.

Let’s take a fixed variable r, a variable x (that is between 0 and 1) and another variable (1-x). Now, we can form a simple sequence with x<sub>n+1</sub> = x<sub>n</sub> * (1-x<sub>n</sub>) * r. Let’s first take r = 2 and x<sub>0</sub> = 0.25, meaning 1-x<sub>0</sub> = 0.75.

x<sub>1</sub> = (2)*(0.1)*(0.9) = 0.18

x<sub>2</sub> = (2)*(0.18)*(1-0.18) = 0.2952

Next, you’ll get values of x<sub>3</sub> = 0.41611392, x<sub>4</sub> = 0.4859262512 (10dp), x<sub>5</sub> = 0.4996038592 (10dp), x<sub>6</sub> = 0.4999996861 (10dp). As you can see, the sequence is getting ever closer to 0.5, which is called the attracting point of the system. The starting value of 0.1 has no relation to the attracting point, as with any starting number between 0 and 1 will yield the same attracting point.

What’s interesting however, is what happens when we change the value of r. If we change r to 3.1, keep the starting value as 0.1, and round of our results at 2dp, the sequence will go: 

0.1, 0.28, 0.62, 0.73, 0.61, 0.73, 0.60, 0.74, 0.59, 0.75, 0.59, 0.75, 0.58, 0.76, 0.57, 0.76, 0.57, 0.76, 0.56, 0.76, 0.56, 0.76, 0.56, 0.76, 0.56.

This time, the sequence doesn’t tend to 1 value but rather fluctuates between 2, namely 0.76 and 0.56. This is called an attracting 2-cycle.

When r = 3.5, we get an attracting 4-cycle between 0.50, 0.87, 0.38 and 0.83.

We can figure out new values of r where we find attracting 8-cycles or 16-cycles, etc. This is called a sequence of bifurcations. Once r exceeds approximately 3.56995, something new happens. Taking r = 3.57 will give us the sequence 0.1, 0.32, 0.78, 0.62, 0.84, 0.47, 0.89, 0.35, 0.81, 0.54, 0.89, 0.36, etc.

It’s easy to think that if you let the sequence run on for long enough, eventually, a pattern will emerge, but it will in fact not. This is the core of mathematical chaos. No matter how long the program runs for, the sequence just jumps around seemingly randomly. Furthermore, even if we change the starting value by microscopic amounts, the new sequence will look completely different to the original. 

## Chaos in real life
The (arguable) founder of chaos theory is Edward Norton Lorenz, a mathematician and meteorologist, who, in 1961, used a simple digital computer to simulate weather patterns. This simulation was modelled by 12 variables, such as temperature and wind speed. He wanted to see a certain sequence of data again so, to save time, he started the simulation in the middle of its course by entering a printout of data that corresponded to conditions in the middle of the original simulation. What was surprising was that the predictions made by the machine were completely different from the previous calculation. The reason for this was due to the printout containing rounded values. The computer itself worked with a 6-digit precision (0.991231), while the printed values contained 3-digit values (0.991). The difference is minuscule and the consensus at the time was that there should be no difference practically. Lorenz has just discovered that small changes in initial conditions produce large changes in long-term outcome.

This means that as the resolution of weather readings increases, the predictions of future weather will change drastically. In 1969, Lorenz described the butterfly effect which entails that even the tiniest factor has a significant impact on an outcome, such as a butterfly flapping its wings in Brazil being the cause of a tornado a few weeks later in Texas.

Let’s take another field now, such as astronomy. In space, bodies, such as planets and stars, orbit around each other under the mutual attraction of gravity.

When there are just 2 bodies, their paths of orbit are extremely simple to calculate. Planets orbit stars in ellipses. Stars can be locked in orbit around each other. When two bodies move towards one another, if they travel slowly they will spiral inwards slowly until they collide or orbit each other indefinitely, and if they travel quickly they will fly along predictable parabolas or hyperbolas away from each other.

When there are 3 bodies interacting with each other however, the situation becomes very chaotic. The paths that the 3 bodies take are highly complex and are unique, so will never repeat unlike the clear ellipses or parabolas when 2 bodies pass by each other. The slightest change (e.g. one of the bodies arrives one millisecond later) will drastically change the outcome. For example, rather than performing a series of rotations around each other before flying off, they could now all collide together.

This is called the 3-body problem, and was the first discovered example of chaos in physics.

## What is chaos theory?
Chaos theory is the branch of mathematics which focuses on finding underlying patterns and laws of dynamical systems that are highly sensitive to their starting conditions, that had previously been thought of as completely random, in states of disorder and with irregularities.

Chaos theory states that within the apparent randomness of chaotic complex systems, there are underlying patterns, interconnections, constant feedback loops, repetition, self-similarity, fractals, and self-organisation. These are the key principles of chaos theory.

The chaotic systems, like the logistic map which we discussed earlier, are predictable for a while and then ‘appear’ to be random. The amount of time for which a chaotic system can be predicted depends on 3 factors: how much uncertainty can be tolerated; how accurately its current state can be measured; and a time scale which depends on the dynamics of the system (called the Lyapunov time).

In chaotic systems, the prediction inaccuracy increases exponentially with time passed - for example, doubling the length of time passed in a forecast will result in an uncertainty which is more than squared. This means that an accurate prediction cannot be made for events too far in the future (after an interval of more than two or three times the Lyapunov time), which is when the system appears to become random.

A commonly used definition, made by Robert L. Devaney, says that to be classified as chaotic, a dynamic system must have three properties:
- It must be sensitive to initial conditions, which again relates back to the butterfly effect (a small change in one state of a system can result in large differences in a later state).
- It must be topologically transitive, which roughly means that neighbourhoods of points eventually get flung out to “big” sets so that they don’t necessarily stick together in one localised clump.
- It must have dense periodic orbits, which means that there must be attracting points in the system, which we have briefly talked about earlier.

For any interested, I highly recommend you go fuel your interest further online as I have only briefly covered the main aspects of chaos theory in this article. Thank you all for reading, I hope you enjoyed this article and can now tell people the difference between normal chaos and mathematical chaos.

<div id="bibliography">
<h2>Bibliography</h2>

- Elwes, R 2011, 2012, How to solve the da vinci code and 34 other really interesting uses of mathematics, Quercus, London.
- Fractal Foundation (no date) What is chaos theory?. Available at: https://fractalfoundation.org/resources/what-is-chaos-theory/ (Accessed: 12/08/22)
- Wikipedia (2022) Butterfly effect. Available at: https://en.wikipedia.org/wiki/Butterfly_effect (Accessed: 12/08/22)
- Wikipedia (2022) Chaos Theory. Available at: https://en.wikipedia.org/wiki/Chaos_theory (Accessed: 12/08/22)

</div>