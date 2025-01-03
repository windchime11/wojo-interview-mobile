# wojo-interview

Welcome to the EF World Journeys Mobile interview! We're excited for the opportunity to learn from you and to share with you a bit about how we conduct code reviews on our team. If you have any questions at all please don't hestitate to reach out and ask!

## Overview

This project is a simplified real world application for users wanting to book hotel rooms and specify their rooming preferences at the time of checkout.

This repo uses:

-   React Native
-   Expo
-   TypeScript
-   Prettier
-   Jest

### Getting Started

This repo uses Turborepo and has a few aliased commands in the root package.json

1. Run `npm i` in the root of the project
2. Run `npm run dev` to start the server.
    - The development server will start, and you'll see a QR code inside the terminal window.
    - If you have your computer set up for mobile development, you can select either iOS with `i` or Android with `a`.
    - If not, download Expo Go in the App Store. Once you have Expo Go on your phone, you can scan that QR code to open the app on the device. On Android, use the Expo Go > Scan QR code option. On iOS, use the default camera app.
    - As a fallback, you can run this project as a web app by pressing `w` in the terminal. It will open the web app in the default web browser.

### Additional commands

See the package.json for additional commands such as linting, formatting, testing, etc.

## Assignment

### User story:

As a user, I'd like to be able to book more than 5 travelers at checkout.

### Description

Today in checkout users are able to book at most 5 people. As a result, the existing implementations have simple hard coded values to represent all possible room combinations.

### Acceptance Criteria

-   Dynamically generate all possible combinations of rooms a group of X travelers could have.
-   Refactor the components to clean up any loose types, poorly structured components, etc
-   Write a test to cover the combination generation, using the provided Jest configuration or your testing framework of choice

### Additional information

Styling doesn't matter for this problem, clean code does
