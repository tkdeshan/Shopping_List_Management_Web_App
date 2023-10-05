# Shopping_List_Management_Web_App

React CRUD Web application for shopping list management.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)

## Introduction

This is a simple shopping list web application with function including create, update, and delete items. The frontend is developed using React, and the backend is powered by Node.js with Express.js.

## Demo

The web app is live on : https://shopping-list-management-web-app-frontend.vercel.app/

## Getting Started

1. Clone the project :
   
    ```bash
   git clone https://github.com/tkdeshan/Shopping_List_Management_Web_App/
    
3. Navigate to the project directory:

    ```bash
   cd Shopping_List_Management_Web_App

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend

2. Install the required dependencies:

   ```bash
   npm install

3. Start the React development server:

    ```bash
   npm start

4. Now, the app is running by getting data on my hosted server. Replace `http://localhost:5000` in the BaseURL variable in the component files to connect the frontend to your local server.

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend

2. Install the required dependencies:

   ```bash
   npm install
   
3. Copy .env file as example.env file.

4. Create a MongoDB database and replace your connection string in the .env file.
 
3. Start the backend server:

    ```bash
   npm start

## Usage

Shopping list web app consists of two parts: the frontend and the backend. They communicate through API requests. (Make sure to replace BaseURL with your localhost URL).

You can add, update, and delete shopping items using the provided API endpoints. Customize and expand the functionality as needed for your application.
