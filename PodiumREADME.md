# Podium README

## How to Run App
Navigate to `frontend-coding-assessment-dustinwatkins-1101`

Run the command `npm install` 

Run the command `npm start`. Your browser should open a tab. Then after a few 
moments you should see the message `[wdm]: Compiled successfully`.
The app is now running and you can view the app at `localhost:8080`.

The default configuration is set for running the app on `webpack-dev-server`. 
You can read the configuration for this server in the `webpack.config.js`.
You may notice that there is a proxy setup for the dev server. This is to 
get around any `CORS` issues. Of course I wouldn't do this for production code,
but it solves the problem for this app.  

## Technologies
* Typescript
* React
* Jest

## Design
I used material design principles for this app. For the scope of this app
I followed simple and clean mindset. After reading the app description
Podium provided, I understood the following to be objectives of the app.

* Read reviews of Shakesperian plays
* Functionality for writing reviews for Shakesperian plays (No Podium API built for this functionality)

I thought the app would feel incomplete without the ability to leave a review. I included 
a page that includes a form to fill out a review. I added the field of 'Play' referencing
the name of the play to be reviewed. 

I used the objectives of the app as the driving factor for my design. 

## Implementation
Of the API endpoints Podium provided, I found the list of reviews endpoint
most beneficial. I implemented an API call for both endpoints, but the frontend 
currently does not actually use the endpoint for retrieving a review by id.
The reason I did not use the endpoint is because no additional information
is gained by using this endpoint. All the information about a review is already
stored locally. It would be inefficient and redundant to query the server for 
information we already have.

The `ClientCommunicator` contatins the logic for contacting the API endpoints.  
  
## Testing
I set the app up to for unit testing with `jest`. Currently there is only one test case. The reason
is I do not have any application logic to test. If I was to spend more time on this app,
I would build a filtering system for the reviews. I would include filters for
sorting by date and review. The algorithms for this sorting would have test cases.

To run the test suite, navigate to `frontend-coding-assessment-dustinwatkins-1101`

Then run the command `npx jest`

##