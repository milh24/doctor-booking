# Doctor Booking

[Demo](https://doctor-booking-gamma.vercel.app/)

1. Install dependencies

   `yarn install`

2. Create .env at the project root directory

   .env example:

   ```
   API_KEY=<api-key>
   API_HOST=<api-host>
   NEXT_PUBLIC_SITE_NAME=<site-name>
   ```

3. Run locally

   `yarn dev`

## Choice of Package

### next

- the most popular SSR solution for React, ability to handle logic at server side
- easy SEO, good for catalog site
- easy deployment on Vercel, free for project like this

### redux

- most popular state management package
- good for website with complex business logic
- small scale website like this probably dont need this, just for demostration

### redux-logger

- showing action in redux store
- help debugging for redux

### @reduxjs/toolkit

- write much less boilerplate code to get redux running

### styled-components

- inline css, every components and pages can have their own style without messy file structure

## Potential Improvement

- blog - health care content, user story
- user portal - manage bookings in one place
- doctor timetable - showing doctor availabilty before booking
- advance search - search doctor by specific requirement e.g. price, gender, specialty, lcoation etc.
- doctor review rating section - improve interaction, prevent bad doctor
- message - email or sms confirmation, reminder

## Production consideration

- For Vercel, setup enviroment value properly before deployment

## Assumptions

- doctor are free for booking within office hour
- user can have at most 1 booking per doctor
- user can have mutliple bookings at the same timeslot across doctors
- user can canel booking at anytime

## Testing

- snapshot test on compenents and pages to ensure correct rendering behavior
- using jest mock to test component click interactions
- unit test on util functions to ensure correct output
- using jest mock to dispatch actions to test redux store behaviour
- test api the ensure correct response
