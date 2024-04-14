# MERN Stack YouTube Clone

This repository contains the code for a YouTube clone web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project aims to replicate the core features of YouTube, providing users with the ability to share and view videos on a dynamic web platform.

## Features

- User authentication and profile management
- Video uploading and streaming capabilities
- Video search functionality
- Like, dislike, and comment on videos
- Subscription system to follow content creators
- Responsive design for desktop and mobile devices
- Video recommendations and trending videos
- Admin panel for user and video management

## Getting Started


To get the application running on your local machine, follow these steps:

1. Clone the repository to your local machine.
    ```
    git clone https://github.com/itu-itis21-gursu20/mern_yt_clone.git
    ```

2. Install dependencies in both the `api/`, `client/` and `admin/` directories.
    ```
    cd api
    npm install

    cd ../client
    npm install

    cd ../admin
    npm install
    ```

3. Start the backend server.
    ```
    cd api
    npm start
    ```

4. In a new terminal, start the React client.
    ```
    cd client
    npm start
    ```
    
5. In a new terminal, start admin.
    ```
    cd admin
    npm start
    ```

6. Navigate to `http://localhost:8000` in your web browser to view the application.

## Environment Variables

Before starting the application, ensure you have the necessary environment variables set up. Create a `.env` file in the `api/` directory with the following variables:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: The port number for the Express server (default: 8000)

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please feel free to fork the repository, make your changes, and submit a pull request.

I hope you find this MERN stack YouTube clone useful. Happy coding!

