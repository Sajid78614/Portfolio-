# MERN Portfolio

A responsive personal portfolio built with React and Vite, an Express API, and MongoDB for contact messages.

## Requirements

- Node.js 20.19+ or 22.12+
- MongoDB running locally or a connection URI, if you want the contact form to store messages

## Get started

1. Install the project dependencies from the root:

   ```sh
   npm install
   ```

2. Optionally copy `server/.env.example` to `server/.env` and set `MONGODB_URI` to your MongoDB connection string to enable contact message storage.
3. Start the frontend and API together:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173). The API health check is at [http://localhost:5000/api/health](http://localhost:5000/api/health).

The portfolio and API can run without MongoDB. Without `MONGODB_URI`, contact form submissions are unavailable; configure MongoDB to store messages.

## Personalize

The profile, projects, and skills in `client/src/App.jsx` are populated from your resume. Update them there when your details or work change. Add your GitHub and LinkedIn profile URLs to `profile.github` and `profile.linkedin` to show those links in the contact section.

## Production build

```sh
npm run build
npm start
```

The Express server serves the built portfolio and API from the same origin.

## Deploy on Render

1. Push the repository to GitHub.
2. In Render, create a new Blueprint and connect this repository. Render will use [`render.yaml`](./render.yaml) to build and start the web service.
3. MongoDB is optional. Without `MONGODB_URI`, the portfolio deploys but contact form submissions are unavailable. To enable message storage later, add `MONGODB_URI` to the service's environment settings in Render. Do not commit the URI to the repository.
4. Once deployment is healthy, open the service URL. The health endpoint is available at `/api/health`.

The Blueprint uses Render's free web-service plan, which may spin down after inactivity. If you add MongoDB later, configure its network access to allow connections from Render.
