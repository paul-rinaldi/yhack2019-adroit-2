# Project Description 
## Inspiration
Yearning to arrive at a problem that crosses multiple hackathon themes, that we understand, and that would impact society largely left us thinking hard and long on Friday night because we simply did not have much research, experience, or knowledge in these fields...

How would we create a solution to a problem we don’t understand?

This question sparked the idea of using natural language processing to analyze frustrations, complaints, and praises -- a sort of human centered design!
We began designing a way to provide hackathoners and businesses with problem statements so they can focus on what they do best.

The time was ticking on the first night as we wrote up user stories to achieve the critical part of that solution: analyzing broken English and

So we sought to create an MVP that would challenge us to grow in skills and frameworks we have not learned yet _while_ also creating something useful to @jetBlue and our aim of machinery for human-centered design. So we developed the Business Brand Barometer V1.0!

jetBlue challenge:
Hypothesis: Aggregating top-ranked complaints from social media will point to services that may need attention.
Insights: Rating of neg/pos message about jetBlue
Proof of Hypothesis:
Areas of Recommendation: Cross analyze NLP results from Twitter with User Feedback

## What it does
By sending a GET with a query parameter at the database's URL, the backend queries twitter to search for the specified term with some specification to provide more accurate results. The backend then utilizes natural language processing to create a list of top customer concerns.

This is the Critical Business Brand Barometer!

## How we built it
PythonAnywhere with hosted on a server with Google Cloud Language (NLP), Client using ReactJS, Bootstrap, Material UI, and Axios.

## Challenges we ran into
React package management, language versioning, string JSON formatted with ‘’ and “”

## Accomplishments that we're proud of
With little experience and all being first-time MLH hackers, we're proud of
the integration of the frontend with the backend, figuring out new languages, and creating a demo.

## What we learned
New languages, creating and making API calls, limitations of NLP, how to work with people you’ve just met

## What's next for Adroit
Bettering the algorithms and NLP, analyze the target of negative sentiment, twist complaints into problem statements, aggregate data into a summary for clients.

BETA feature: Showing the top ten queries
--------------------------------------------------------------------------------------------------------------------------------------
# Software Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
