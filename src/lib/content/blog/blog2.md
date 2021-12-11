---
title: Article One
description: Description One
image: svelte.png
---

# Getting started

The easiest way to start building a SvelteKit app is to run npm init:

npm init svelte@next my-app
cd my-app
npm install
npm run dev
The first command will scaffold a new project in the my-app directory asking you if you'd like to setup some basic tooling such as TypeScript. See the FAQ for pointers on setting up additional tooling. The subsequent commands will then install its dependencies and start a server on localhost:3000.

There are two basic concepts:

Each page of your app is a Svelte component
You create pages by adding files to the src/routes directory of your project. These will be server-rendered so that a user's first visit to your app is as fast as possible, then a client-side app takes over
Try editing the files to get a feel for how everything works – you may not need to bother reading the rest of this guide!
