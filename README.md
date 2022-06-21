
# Task - Atlan Frontend Engineer
# SQL Editor
A Redux based web application built in ReactJS that executes predefined SQL queries over a table `customers` to display the result to user. 
## Overview
customers can type their SQL query in the input field or can `copy to clipboard` a query from accordion. After hitting the `RUN` button result will be immediately displayed from a `JSON "customers" data` using `axios` (GET) and it changes state of the applicaton according to each query with the `Redux state management` to Data Grid section. 
It contains customers' data according to queries. Data Grid provides `pagination` as well as `rows per page` features by default.

## Dependencies
    "axios": "^0.27.2",
    "react-hot-toast": "^2.2.0",
    "react-redux": "^8.0.2",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.8.0",
    "@mui/material": "^5.8.1",
    "@mui/x-data-grid": "^5.11.1",

## Predefined Queries
`SELECT * from customers;`

`SELECT * from customers where gender="Male";`

`SELECT * from customers where gender="Female";`

`SELECT * from customers where ip_address="86.228.202.112" OR ip_address="125.47.224.245";`

`SELECT * from customers where id BETWEEN 401 AND 525;`

## Features
- Standard Interface: React MaterialUI made this app very easy to use with simple prototype to represent.
- Redux State Management: Redux is used for state management to execute queries and keeping the application lightweight and blazing fast.
- Responsive Design: This app is completely responsive for all devices https://search.google.com/test/mobile-friendly/result?id=2pUuWlG5uHAeMJC-LSwndQ
## Performance 
- GTMetrix

![gt](https://raw.githubusercontent.com/ankurprasad1/project/ae523389cb3459c9d33fc9ce2651691c44158480/GTmetrix.png)

- Chrome Lighhouse

![image](https://user-images.githubusercontent.com/79497113/171037961-6c5019d6-98e3-475d-bb33-a38ca7a86adc.png)

- Pingdom

![pingdom](https://user-images.githubusercontent.com/79497113/170854479-8dc6a7bc-9885-4b94-8b2a-2766dac4a740.png)

## Optimisations
- Redux: As per the official documentation of React Redux, `React Redux in particular is heavily optimized to cut down on unnecessary re-renders.` I tried to management all the query cases of SQL using Redux. It also makes codebase very attractive and improves readability.
- Pagination: MUI pagination allows to fetch data accordingly to user. That means API doesn't immediately fetch all data at a time which saves internet data and improves user experience.

## Deployment
Deployed using Netlify. Check the link: https://atlan-frontend-assignment-deployment.vercel.app/

## Screenshots
![image]()

![image](https://user-images.githubusercontent.com/79497113/170876292-6b38059d-f9d5-44c3-82df-816115d569c8.png)
