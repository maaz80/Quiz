# Quiz Website

## Description
This website was created using **React JS** and **Tailwind CSS**. It is a quiz platform where users can test their knowledge. This project was built as an **assignment**. The quiz website has the following features:

- An **animated front page** created using **Framer Motion** and **React Type Animation**.
- The front page contains **two buttons**:
  - **Start Quiz**: Takes the user to the quiz page.
  - **Scoreboard**: Displays previous quiz data.
- The **quiz page** displays quiz **questions and instructions**.
- After answering all questions, users must **click the "Submit Quiz" button**.
- Upon submission, users are redirected to the **Score Page**, where they can see:
  - Total **score**
  - **Time taken** to complete the quiz
  - **Total attempts**
  - **Attempts per question**
  - **Average score**

## Technologies Used
- **React JS** (Frontend Framework)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **React Type Animation** (Text Animation)
- **React Router DOM** (Routing)
- **IDB (IndexedDB)** (For storing quiz data offline)

## Installation Instructions
Follow these steps to set up the project:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-repo/quiz.git
   cd quiz
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   ```
3. **Start Development Server**:
   ```sh
   npm run dev
   ```

## Scripts
The following scripts are available:
- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Run ESLint**: `npm run lint`
- **Preview Production Build**: `npm run preview`

## Project Structure
- The **homepage** is located at: `src/pages/Home.js`
- The **quiz page** is located at: `src/pages/Quiz.js`
- The **scoreboard page** is located at: `src/pages/Scoreboard.js`

## How to Run
1. Start the development server using `npm run dev`.
2. Open `http://localhost:5173/` in your browser.
3. Click **Start Quiz** to begin or **Scoreboard** to view previous scores.

## Package Details
Here is a brief explanation of the main dependencies used in this project:

- **framer-motion**: Used for smooth animations and transitions.
- **idb**: Helps in storing quiz data locally using IndexedDB.
- **react** & **react-dom**: The core libraries for building the React app.
- **react-router-dom**: Enables navigation between different pages.
- **react-type-animation**: Creates typewriter-style animated text effects.
- **tailwindcss**: A utility-first CSS framework for styling.

## Contributing
If you wish to contribute, fork the repository and submit a pull request with your changes.

## License
This project is licensed under the **MIT License**.

## Author
**Maaz Shakeel**

