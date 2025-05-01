# GoGetWell AI Internship

## Overview

The `GoGetWell AI Internship` repository is designed for the internship program at GoGetWell. This project includes various features and practices related to AI integration, machine learning, and backend development using modern technologies.

## Features

1. Docker Support
The project is containerized with Docker for easy setup and deployment.

A Dockerfile and docker-compose.yml are provided for building and running the application with a single command.

2. Theme Customization
The app provides the ability to switch between different themes, providing a personalized user experience.

Themes are managed through a central themeStore.js in the src/store/ folder, which stores and manages the theme state.

3. Theme Provider Component
A ThemeProvider.js component in the src/components/ folder is used to wrap the application, enabling theme switching functionality across the app.

It uses React Context API to provide theme settings to all components.

4. Dynamic Theme Switching
The Themes.js component in the Home/themes/ folder provides the UI for users to choose their preferred theme.

The themes are stored in src/themes/index.js and are easily extendable, allowing for more themes to be added.

5. Home View
The main page is located in the Home.js file within the Home/ folder. This view serves as the landing page of the application.

It integrates theme switching functionality for a seamless user experience.

## Technologies Used

- **Frontend**: React.js, Vite, Typescript
- **Containerization**: Docker
- **Version Control**: Git, GitHub


# Installation

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/iaman011/gogetwell.ai-internship.git
cd gogetwell.ai-internship
```

## Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

## Run the Application

Start the application locally:

```bash
npm run dev
```

## Running with Docker

To run the application in Docker, build the container using the following command:

```bash
docker-compose up --build
```

This will set up the environment and start the application in Docker containers.


Contributing
We welcome contributions! To get started:

Fork the repository.

Create a new branch.

Make your changes.

Submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Thanks to the GoGetWell team for the opportunity to work on this project.
