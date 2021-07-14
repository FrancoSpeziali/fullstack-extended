# Fullstack Messageboard

This assignment combines both frontend and backend, but with a focus on the backend

!! Insert description here !!

> Important! You will be expected to use most or all of the knowledge you acquired during the backend module

> Important! This project assumes you have already completed or are close to completing the backend module

## Folder structure and preparation

There are 2 folders:

1. `/client` - this contains the `create-react-app` built React frontend
    - This will run on port `3000`

2. `/server` - this contains the backend code
    - This will run on port `3001`

## Tasks

> **Note**: Tasks are not completely detailed, they expect to rely on your judgement for most things

> **Note**: Don't forget to test your code regularly with tools such as Postman / Insomnia / or the browser developer console

### Backend

The backend is stored in the `/server` folder

The purpose of these tasks is to create a REST API which will serve the frontend

This REST API will do the following:

- allow users to view posts
- allow users to register
- allow users to login
- allow users to create a new post
- allow users to edit a their previous posts
- allow users to delete previous posts

All users will be allowed to post content, but users can only modify or delete posts which they have created

The REST API will use authentication and authorisation to validate users. You will be expected to implement this.

#### Backend Tasks

1. Complete [Part 1 - Groundwork](server/BACKEND_TASKS_1.md)
2. Complete [Part 2 - Authentication / Authorisation](server/BACKEND_TASKS_2.md)

### Frontend

Complete the [Frontend Tasks](./client/FRONTEND_TASKS.md)
