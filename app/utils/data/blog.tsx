import { Blog } from "@/app/blog/page";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "From Code to Canvas: My Journey of Bringing ideas to Life",
    description: "",
    tag: "problem solving",
    date: "2025-11-09",
    isMedium: true,
    mediumUrl: "https://medium.com/@vishakhcs51/from-code-to-canvas-my-journey-of-bringing-ideas-to-life-15f43692e973",
    content: `Read the article on Medium`,
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    description: "A journey into the calm, powerful world of Next.js 14",
    tag: "Next.js",
    date: "2024-01-15",
    isMedium: false,
    content: `
Next.js 14 does not arrive with noise.  
It walks in quietly, like the first light of morning touching a silent village road.

For developers who have lived with React for years, Next.js feels familiar  yet different.  
It is not just a framework anymore. It is an opinion. A direction.

Server Components now feel less like an experiment and more like home.  
Rendering where it makes sense. Sending less JavaScript. Trusting the server again.

Routing feels natural, layouts breathe, and performance is no longer something you chase   
it follows you.

Next.js 14 reminds us of something simple:  
good tools should disappear, letting ideas flow without resistance.

If you are starting today, start slowly.  
Understand the App Router.  
Feel the power of server actions.  
Let the framework guide you, not overwhelm you.

Because learning Next.js 14 is not about speed.  
It is about clarity.
    `,
  },

  {
    id: 3,
    title: "TypeScript Best Practices",
    description: "Writing TypeScript like poetry, not like punishment",
    tag: "TypeScript",
    date: "2024-01-10",
    isMedium: false,
    content: `
TypeScript teaches patience.

At first, it feels strict.  
It questions every move you make.  
It asks you to be precise, even when you just want things to work.

But over time, you realise   
TypeScript is not trying to stop you.  
It is trying to protect the future version of you.

Good TypeScript code reads like a conversation.  
Clear types. Honest interfaces.  
No assumptions hidden in dark corners.

Avoid the comfort of \`any\`.  
Name things properly.  
Let your types tell a story.

When bugs disappear before runtime,  
when refactoring feels safe,  
you understand the gift TypeScript offers.

It is not about writing more code.  
It is about writing code you can trust.
    `,
  },

  {
    id: 4,
    title: "React Performance Optimization",
    description: "Making React apps feel lighter, calmer, and alive",
    tag: "React",
    date: "2024-01-05",
    isMedium: false,
    content: `
Performance problems do not announce themselves loudly.

They arrive quietly   
a slow click,  
a delayed animation,  
a user who leaves without saying why.

React gives us power, but with power comes responsibility.

Memoization is not magic.  
useCallback is not a cure.  
Optimization without understanding is just guessing.

Start by listening.  
Profile before fixing.  
Measure before assuming.

Most of the time, performance improves when code becomes simpler.  
Fewer re-renders.  
Clearer state boundaries.  
Smaller components that do one thing well.

A fast app is not just technical success.  
It is respect for the user’s time.
    `,
  },

  {
    id: 5,
    title: "Published on Dev.to",
    description: "When your words travel beyond your own space",
    tag: "Web Development",
    date: "2024-01-20",
    isMedium: false,
    content: `
Writing code is often lonely.  
Writing about code is even more so.

Publishing on platforms like Dev.to feels like opening a window.  
Your thoughts travel.  
Someone, somewhere, reads them late at night.

Not every article needs to teach something new.  
Sometimes it just needs to resonate.

Sharing knowledge is not about showing expertise.  
It is about starting conversations.

And when a stranger comments,  
when your words help someone take one small step forward   
that is when writing becomes meaningful.
    `,
  },
];
