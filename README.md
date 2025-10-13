
# Bright Space    
 
Bright Space is an interactive and scalable teacher-student platform, offering features such as live sessions, whiteboards, AI-powered quizzes, and role-based dashboards. Designed with the MERN stack and utilizing Redux for state management, Bright Space aims to provide an all-encompassing educational experience tailored for seamless teacher-student interaction.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Bright Space is a teacher-student platform designed to facilitate efficient learning and interaction. With role-based dashboards and various interactive tools, the platform supports features like online classes, assessments, attendance tracking, and AI-powered analytics.

---

## Features

- **User Authentication**: Secure login and registration for students, teachers, and admins.
- **Role-Based Dashboards**: Separate views and functionalities for students, teachers, and admins.
- **Interactive Learning**: Live sessions, whiteboard integration, and a dynamic leaderboard system.
- **Course Management**: Easy course creation, enrollment, and management.
- **Assessment Tools**: AI-powered quizzes, online assessments, and feedback collection.
- **Communication Tools**: Messaging, forums, and a support ticket system for counseling.
- **Profile Management**: Updatable profiles for both students and teachers with custom fields.
- **Analytics**: Real-time data on students, courses, and enrollment shown in visually interactive cards.

---

## Tech Stack

### Frontend
- **React** with **React Router**
- **Redux** for state management
- **Chakra UI** for styling and responsive design
- **React Icons** for iconography

### Backend
- **Node.js** with **Express** for server setup
- **MongoDB** as the database
- **Socket.io** for real-time communication
- **Mongoose** for MongoDB object modeling

### Other Tools
- **JWT** for authentication
- **LLaMA and Gemini models** for AI-based chat and analytics
- **Chakra UI** for consistent and responsive design

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/bright-space.git
   cd bright-space
   ```

2. **Install dependencies for both client and server**:
   ```bash
   # For frontend
   cd bright-space-client
   npm install

   # For backend
   cd ../bright-space-server
   npm install
   ```

3. **Set up environment variables**:
   - In the `bright-space-server` directory, create a `.env` file with the following values:
     ```
     PORT=3000
     MONGODB_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret>
     ```

4. **Run the application**:
   ```bash
   # In bright-space-server directory
   npm start

   # In bright-space-client directory (in a new terminal)
   npm start
   ```

5. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) to view the backend API, and [http://localhost:3001](http://localhost:3001) for the frontend in your browser.

---

## Usage

1. **User Authentication**: Sign up as an admin, teacher, or student. Each role has access to unique dashboard features.
2. **Managing Courses**: Admins can create courses, while students can enroll in available courses. Teachers can manage their course content and students.
3. **Live Sessions and Interactivity**: Teachers can initiate live sessions with a whiteboard and live chat features.
4. **Assessment and Feedback**: Teachers can post quizzes and receive feedback, and students can participate in quizzes and view their progress.

---

## Project Structure

```
bright-space/
├── bright-space-client/         # React frontend application
│   ├── src/
│   │   ├── components/          # Reusable components (Navbar, Sidebar, etc.)
│   │   ├── pages/               # Page components (Dashboard, Courses, etc.)
│   │   ├── assets/              # Images and logos
│   │   ├── store/               # Redux store and slices
│   │   └── App.js               # Main app component
│   └── public/                  # Public assets
│
└── bright-space-server/         # Express backend application
    ├── controllers/             # Request handlers for routes
    ├── models/                  # Mongoose models (User, Course, etc.)
    ├── routes/                  # API routes (auth, courses, enrollments, etc.)
    └── index.js                 # Main server file
```

---

## Customization

- **UI**: Adjust colors, fonts, and layouts in the Chakra UI theme settings.
- **Icons**: Add or modify icons with React Icons for various sections.
- **Roles**: Extend or restrict functionalities by updating the role-based configuration in the dashboard navigation.
- **API Endpoints**: Update or add new endpoints in the Express backend for additional functionality.

---

## API Documentation

API endpoints are structured as follows:

- **Auth**: 
  - `POST /api/auth/register` - Register a new user.
  - `POST /api/auth/login` - Login an existing user.
  
- **Courses**:
  - `GET /api/courses` - Retrieve all courses.
  - `POST /api/courses` - Create a new course (admin access).

- **Enrollments**:
  - `GET /api/enrollments/:userEmail` - Get enrollments for a specific user.
  - `POST /api/enrollments` - Enroll a user in a course.

- **Analytics**: Provides summarized data for display in the dashboard’s analytics cards.

Full API documentation can be generated via tools like **Postman** or **Swagger**.

---

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or bugfix.
3. **Commit your changes** with clear, descriptive messages.
4. **Push your branch** to your fork and submit a Pull Request.

Please ensure your code adheres to the project’s coding standards and passes all tests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments

- Thanks to [Chakra UI](https://chakra-ui.com) for the UI components.
- AI functionality powered by [LLaMA](https://ai.facebook.com/llama/) and [Gemini](https://www.google.com).

---

This README provides setup, usage, and contribution guidelines for the Bright Space project.
