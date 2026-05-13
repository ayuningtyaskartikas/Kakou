# Kākou Frontend Learning Plan

## Project Overview

Kākou is an event management app built with React Native. The goal of the frontend is to help users browse events, view event details, access schedules and resources, and eventually log in to see protected event features.

## Tech Stack

- Frontend: React Native with Expo
- Backend: Express.js REST API
- Database: MongoDB
- Authentication: JWT token authentication

## Overall Goal

By the end of Assignment 5, I want to have a working React Native frontend that can connect to my REST API and support authentication.

Estimated time: 10 hours per week  
Starting knowledge: Beginner

---

## Week 1: React Native Basics

**Assignment:** Learn Frontend Assignment 2

### Weekly Goal

Get comfortable with the React Native development environment and basic components. This week is focused on understanding how React Native works before connecting it to the backend.

### What I Will Focus On

- Set up the app using Expo
- Run the app using Expo Go or the web preview
- Understand the difference between React Native and HTML
- Learn basic React Native components:
  - `View`
  - `Text`
  - `StyleSheet`
  - `ScrollView`
  - `FlatList`
  - `Image`
- Practice JSX syntax
- Create simple reusable components

### Recommended Tutorials and Resources

- Expo official tutorial: https://expo.dev/learn
- React Native getting started docs: https://reactnative.dev/docs/getting-started
- React Native core components: https://reactnative.dev/docs/components-and-apis
- YouTube: Academind React Native getting started tutorial

### Milestone

By the end of this week, I can create a simple screen that displays a list of hardcoded events with an event name, date, and location. The app runs successfully using Expo.

---

## Week 2: Navigation and Screens

**Assignment:** Learn Frontend Assignment 3

### Weekly Goal

Learn how to move between screens in a React Native app. This is important because Kākou will need multiple screens such as Home, Events, Event Details, Profile, and Settings.

### What I Will Focus On

- Install and set up React Navigation
- Learn Stack Navigator
- Learn Bottom Tab Navigator
- Pass data between screens using navigation params
- Create initial screens for:
  - Home
  - Events
  - Event Details
  - Profile
- Use hardcoded data while focusing on navigation

### Recommended Tutorials and Resources

- React Navigation docs: https://reactnavigation.org/docs/getting-started
- React Navigation bottom tabs: https://reactnavigation.org/docs/bottom-tab-navigator
- React Navigation native stack: https://reactnavigation.org/docs/native-stack-navigator
- YouTube: Academind React Navigation tutorial
- My previous HTML/CSS event hub pages as visual references

### Milestone

By the end of this week, the app has at least three screens: Home, Events, and Profile. I can move between them using a bottom tab bar, and I can open an event details screen from the Events screen.

---

## Week 3: Connecting to the REST API

**Assignment:** Learn Frontend Assignment 4

### Weekly Goal

Replace hardcoded event data with real data from my Express.js and MongoDB backend.

### What I Will Focus On

- Learn how API requests work in React Native
- Install and use Axios
- Understand `useState`
- Understand `useEffect`
- Fetch event data from the Express REST API
- Display API data on the Events screen
- Add loading states
- Add error states
- Test API endpoints with Postman before using them in the app

### Recommended Tutorials and Resources

- Axios docs: https://axios-http.com/docs/intro
- React Native networking docs: https://reactnative.dev/docs/network
- React useState docs: https://react.dev/reference/react/useState
- React useEffect docs: https://react.dev/reference/react/useEffect
- Postman: https://www.postman.com
- YouTube: Codevolution React Hooks tutorial

### Milestone

By the end of this week, the Events screen loads real event data from the Express.js API. The app displays events from MongoDB instead of only hardcoded sample data.

---

## Week 4: Authentication and Protected Screens

**Assignment:** Learn Frontend Assignment 5

### Weekly Goal

Add login functionality and support authenticated API requests so users can access protected features.

### What I Will Focus On

- Build a Login screen
- Add email and password inputs
- Send login credentials to the backend authentication endpoint
- Receive a JWT token from the backend
- Store the token securely using Expo SecureStore
- Use Axios interceptors to attach the token to protected API requests
- Redirect logged-out users to the Login screen
- Redirect logged-in users to the Home screen
- Protect screens such as Profile and Saved Sessions

### Recommended Tutorials and Resources

- Expo SecureStore docs: https://docs.expo.dev/versions/latest/sdk/securestore
- Axios interceptors docs: https://axios-http.com/docs/interceptors
- JWT introduction: https://jwt.io
- React Navigation authentication flow docs: https://reactnavigation.org/docs/auth-flow
- YouTube: Codevolution React Native authentication tutorial

### Milestone

By the end of this week, a user can log in through the app, the token is saved on the device, and protected screens are only available to authenticated users.

---

## Quick Progress Tracker

| Week   | Assignment   | Key Skill                               | Done? |
| Week 1 | Assignment 2 | Setup and basic React Native components |       |
| Week 2 | Assignment 3 | Navigation between screens              |       |
| Week 3 | Assignment 4 | Fetch real data from REST API           |       |
| Week 4 | Assignment 5 | Login and authenticated requests        |       |

## Final Target

By the end of Assignment 5, Kākou should have a functional frontend foundation with navigation, event data from the backend, and basic authentication support.