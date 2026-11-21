# MERN Portfolio

A responsive personal portfolio built with React and Vite, an Express API, and MongoDB for contact messages.

## Requirements

- Node.js 20.19+ or 22.12+
- MongoDB running locally, or a MongoDB connection URI

## Get started

1. Install the project dependencies from the root:

   ```sh
   npm install
   ```

2. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI` to your MongoDB connection string.
3. Start the frontend and API together:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173). The API health check is at [http://localhost:5000/api/health](http://localhost:5000/api/health).

The contact form saves messages in MongoDB. Configure MongoDB before starting the API.

## Personalize

The profile, projects, and skills in `client/src/App.jsx` are populated from your resume. Update them there when your details or work change. Add your GitHub and LinkedIn profile URLs to `profile.github` and `profile.linkedin` to show those links in the contact section.

## Production build

```sh
npm run build
npm start
```

The Express server serves the built portfolio and API from the same origin.
