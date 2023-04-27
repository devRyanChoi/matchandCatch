# Match and Catch
Lighthouse Labs Final Team Project 

## Developers
>Mingun (Ryan) Choi <br/>
Wo Yong Jeong <br/>
Junqi (Joseph) Du

## Project Description

Match and Catch is a React website for used car buying and auctions. The App utilizes React built-in and custom hooks and allows users to add, edit and delete auctions in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format.

## Project Features

- A user can put the car on the website into Auction to sell his car.
- A user needs to fill in car information during the auction process, including Manufacturer, Model, etc.
- A user can check biding price of Auction.
- A user can check the ranking of dealers in Leaderboard.

## Home page
|Image|Description|
|:--:|:--:|
|Main page| <img src="https://github.com/devRyanChoi/matchandCatch/blob/main/docs/localhost_3000_.png" width="400">|
|Past Auction| <img src="https://github.com/devRyanChoi/matchandCatch/blob/main/docs/localhost_3000_inventory.png?raw=true" width="400">|
|Past Auction| <img src="https://github.com/devRyanChoi/matchandCatch/blob/main/docs/localhost_3000_inventory_1.png?raw=true" width="400">|
|List page| <img src="https://github.com/devRyanChoi/matchandCatch/blob/main/docs/localhost_3000_pastAuction.png?raw=true" width="400">|
|Leaderboard| <img src="https://github.com/devRyanChoi/matchandCatch/blob/main/docs/localhost_3000_leaderboard.png?raw=true" width="400">|




## Installation

npm install

If you face some error of Babel icon, you can use the following command to fix them.

npm install babel-plugin-macros

npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-brands-svg-icons

npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome

## Running Webpack Development Server

<b>npm start</b> <br>
Runs the app in the development mode.
Open http://local:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

<b>npm test</b><br>
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## API server / Database Setup

For full functionality both must run concurrently : the customer and the API server applications.
- Start by forking and cloning the scheduler-api server
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start


## Project Stack

**Front-End**: React, Axios, JSX, HTML, CSS, Javascript

**Back-End**: Express, Node.js, PostgreSQL

**Test**: Jtest

## Dependencies

- Axios
- Classnames
- Normalize.css
- React
- React-DOM
- React-MUI
- React-Script
- Babel/core
- Babel-icon
- Babel-loader
- Node-sass
- Prop-types
- PostgreSQL
- Cookie-session
