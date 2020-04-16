# Deployment

In order to deploy the React for our MEAN project, we need to set up our environments variables properly for the front-end as well. All environment specific values need to be in the .env file. No sensitive data should be part of your front-end at all, because all of your front-end code will be visible to the user. 

Create react app takes care of the .env files. You do not need a separate module. It does works a tad differently as in the backend. <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/">Checkout the docs</a> for reference.

## Step 1 - Development .env vars
Create a file that you call `.env.development` in the root of your client (not in src!). It should have at least the following .env var:

```
REACT_APP_API_BASE=http://localhost:3000
```

You HAVE to start every env var with REACT_APP. Now, replace all of your hard coded references to your base url in the code. For example, change the following
```
const axios = Axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",
});
```
Into
```
const axios = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API,
});
```
.env changes take effect only after you completely shut down the dev server and start it up again. Verify that your apps still works locally before moving to step 2.

## Step 2 - Production .env vars
Create a file that you call `.env.production` in the root of your client (not in src!). It should have at least the following .env var:
```
REACT_APP_API_BASE=yourDeployedBaseUrlFromHeroku
```

Now you run `npm run build` in the terminal. It wil read the environment variables from `.env.production` and create an optimized version of your app. It saves it in the `build` directory. You have to drag and drop the whole content of the directory to Netlify, just as in module 1. Now you go to the Heroku dashboard and set the production .env variables there as well.