# Cinema

Application for easy viewing of series and movies. Also the actors who participate in the film and series. (Created using TMDB)

---

## Built With

**Client:** React, styled-components, react-router-dom, react-query.

**API:** TMDB API

## Features

- The ability to see information about the series, movie and actor.
- The ability to see all the additional information about the film, series and actor (budget, cast, recommendations, trailers, etc.)
- Sorting movies and series by several types.
- Search for movies, series and actors.
- Support to languages(en & ru)

## Demo

Insert gif or link to demo

## How To Use

### Main Page

- Enter your login credentials if you already have an account

  ![Main Page](https://drive.google.com/file/d/1oQqluwgF9V7dz-WmK-wjvvLzoGD0ox_4/view?usp=share_link)

- Create your user account if you don't have an account

  <img src="https://user-images.githubusercontent.com/62003240/129846244-c4bd798c-aa87-47af-9f70-8253db18bff0.png" width="500" alt="Signup Window" />

### Projects

- Manage your project's in the ProjectsView

  <img src="https://user-images.githubusercontent.com/62003240/129846778-98e6910b-3582-4fe6-89f3-c525bca9fbc5.png" width="800" alt="Projects View (All Projects)" />

- View your completed project's in the Completed tab

  <img src="https://user-images.githubusercontent.com/62003240/129847000-13574e50-b76a-4dbc-be08-a17fb1b628ec.png" width="800" alt="Projects View (Completed Projects)" />

- You can modify a project by selecting it (the project's content will be displayed), then select Project Details tab

  <img src="https://user-images.githubusercontent.com/62003240/129847259-40e8eec6-38ed-4416-acd1-80580d8c3bff.png" width="800" alt="Project's Details" />

### Project's Tasks

- Add and manage your Finish Line Tasks (the IMPORTANT tasks) and Extra Feature tasks in the Project's Content (this is displayed if you select a project from the ProjectsView)

  <img src="https://user-images.githubusercontent.com/62003240/129848072-3448eace-29b9-4417-9467-ca727579a82a.png" width="800" alt="Project's Tasks (Project's Content)" />

- Use the ComboBoxes to enable the filtering of tasks

  <img src="https://user-images.githubusercontent.com/62003240/129849188-9753f6f0-5908-4904-b4ad-4c295731990e.png" width="800" alt="Project's Content with filter" />

- View your Completed Tasks

  <img src="https://user-images.githubusercontent.com/62003240/129849394-e2e6c6cc-98a7-4c9e-9bf8-74652fe9cf61.png" width="800" alt="Project's Content (Completed Tasks)" />

- You can modify a task by selecting it (the task's content will be displayed), then select Task Details tab

  <img src="https://user-images.githubusercontent.com/62003240/129849576-5306ffcb-d973-4239-b075-98672cd1157b.png" width="800" alt="Task's Details" />

### Task's Subtasks

- Add and manage a task's subtasks in the Task's Content (this is displayed if you select a task from the Project's Content)

  <img src="https://user-images.githubusercontent.com/62003240/129849930-ccef240f-1e93-4db3-b3fd-41475ed34e0e.png" width="800"  alt="Task's subtasks (Task's Content)"/>

- View your Completed Subtasks

  <img src="https://user-images.githubusercontent.com/62003240/129850086-aac9f7f0-254f-4998-b976-f3ffd2e1f672.png" width="800"  alt="Task's Content (Completed Subtasks)" />

- You can modify a subtask by selecting it (the subtask details modal dialog will be shown)

  <img src="https://user-images.githubusercontent.com/62003240/129850493-bc46b01a-f08b-4dff-aa36-41f8e03317c5.png" width="800" alt="Subtask's Details"/>

### BONUS: Project Ideas

- A user interface to manage your project ideas 😉

  <img src="https://user-images.githubusercontent.com/62003240/129850995-85e22b93-27a1-48e5-a915-54ac4839d63c.png" width="800" alt="Project Ideas" />

## Getting Started

### Installation

1. To run a project locally, fisrt clone the repo

   ```sh
   git clone https://github.com/sapar6ek0v/cinema.git
   ```

2. Go to the project directory

   ```sh
   cd my-project
   ```

3. Install all packages

   ```sh
   npm install
   ```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

You can API_KEY here [TMDB docs](https://developers.themoviedb.org/3/getting-started/introduction)

4. Run the project

   ```sh
   npm start
   ```

## Feedback

If you have any feedback, please reach out to me at eldiiarsparbekov03@gmail.com
