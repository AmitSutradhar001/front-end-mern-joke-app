# Front-End MERN Joke App

## Overview

This project is the front-end part of a MERN stack joke application. It is built using React and Vite, styled with Tailwind CSS, and includes features for user management with Redux Toolkit, HTTP requests with Axios, and page routing with React Router DOM.

## Features

- User authentication and management
- Fetching and displaying jokes
- Responsive design with Tailwind CSS
- Efficient development with Vite

## Technologies Used

- **Tailwind CSS**: For styling
- **Vite**: For fast and optimized development
- **React**: For building the user interface
- **Redux Toolkit**: For state management and user authentication
- **Axios**: For making HTTP requests
- **React Router DOM**: For client-side routing

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AmitSutradhar001/front-end-mern-joke-app.git
    cd front-end-mern-joke-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your backend API URL:
    ```env
    VITE_API_URL=your_backend_api_url
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

## Project Structure

```plaintext
src/
├── components/
├── store/
├── pages/
├── App.jsx
├── main.jsx
├── store.js
└── index.css
