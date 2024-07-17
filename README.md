# Pomodoro Timer
The Pomodoro Technique is a time management method in which you do focused work during 25-minute intervals — known as pomodoros — and take a five-minute break. This method claims to:

- Improve focus
- Minimize distractions
- Prevent burnout
- Promote accountability
- Boost motivation

Which is why perfectionists and procrastinators will find it useful. It’s easier to commit to 25 minutes of work at a time than a whole afternoon of non-stop work.

## About the project
This application should allow a user to start a 25-minute work timer, which, upon completion,
triggers a 5-minute break timer automatically. This cycle should be repeatable.
Additionally, users should have the ability to reset the current timer at any stage.

## Core Features
[] Timer Display: Clearly show the remaining time in minutes and seconds.
[] Start/Pause Button: Allow the user to start or pause the timer. When the
timer is running, the button text should change to "Pause", and vice versa.
[] Reset Button: Enable the user to stop the timer (if running) and reset it to
the initial state.
[] Automatic Break: After the 25-minute work timer completes, a 5-minute
break timer should automatically start. Indicate to the user whether the
timer is in work or break mode.
[] Cycle Counter: Display the number of complete work/break cycles.

## How to start
- either use bun or yarn, depending on choice of package manager
- if using bun and not installed, install it first:
```bash
curl https://bun.sh/install | bash
bun install
bun dev
```
- if using yarn
```bash
yarn install
yarn dev
```
open http://localhost:5173/ or http://localhost:3000 (if you've used --port 3000) to use the app


## Choice of technology
Bootstrapped using `bunx create-next-app`

### Folder/Project Structure
Based loosely off https://github.com/alan2207/bulletproof-react

### Framework
- We're going with NextJS as a framework
  - With full client-side rendering
### UI Library
- UI library will be using chakra-UI
### Routing
- No Routing needed since it's a simple app with only 1 feature
### Persistence
- We don't really need persistence, but I'm going to add in a feature where users can come back to see how many sessions they've had so far over the lifetime of using the app
rather than just over the lifetime of the session, adding another "gamification" layer where it feels like they have progressed more.
- For that purpose, I'll use `Zustand`, which allows a `persist` layer to store in `localstorage` along with the ability to have a global context for future use.
