---
title: On managing complexity
date: 2023-08-17
tags:
  - posts
layout: layouts/post.njk
---

The ability to manage complexity is one of the most important and fundamental principles in software engineering. At each step of the process of building something, fixing bugs, and handling tech debt, choose solutions that either add minimal complexity or remove substantial complexity.

Is the functionality you're adding worth the complexity you're introducing into the system or codebase?

If the answer is “no,” then leave it out.

Will your change make it harder to onboard, modify the system, keep references in mind while coding, and mentally follow code paths?

If the answer is “yes,” leave it out.

Many times this isn’t possible, and that’s OK: some level of complexity must be added to evolving systems. However, it should be done intentionally, with tradeoffs in mind, and expressed in the simplest way possible.

Remember the joy you felt merging a pull request that was primarily red and full of deletions? That action felt amazing because you removed complexity you no longer had to think with and worry about.

This idea isn’t new, and I originally stumbled upon it in the book Code Complete, but it informs every technical decision I make:

> When software-project surveys report causes of project failure, they rarely identify technical reasons as the primary causes of project failure. Projects fail most often because of poor requirements, poor planning, or poor management. But when projects do fail for reasons that are primarily technical, the reason is often uncontrolled complexity. The software is allowed to grow so complex that no one really knows what it does. When a project reaches the point at which no one completely understands the impact that code changes in one area will have on other areas, progress grinds to a halt.
> – Code Complete (Steve McConnell)

Here are a few examples of managing complexity:

- Don’t abstract prematurely. Avoid building abstractions for functionality “potentially needed in the future”. Build it when you need it.
- Create small pull requests. This removes the amount of information a reviewer must hold in their head and thus improve their ability to catch bugs (and stop you from adding that new complexity!)
- Break pages down from one massive UI component into a composition of smaller ones. If you’ve worked in React, you’re already familiar with this approach.
- Avoid “abstraction hell” in your unit tests. By keeping your unit tests flat, without an abundance of helper functions and classes, you ensure each individual test can be immediately grokked. (This goes against common DRY wisdom, by the way).

Try applying this and see how you can simplify and build better software systems.
