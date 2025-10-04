# Event Planner App 

A simple **event planning web application** built with **React**, **Bootstrap**, and **Formik**.  
Users can register, log in, and manage their events through a clean and responsive interface.

---

##  Features

###  User Features
- Register an account with **name, username, email, and password**.
- Input validation with **Formik + Yup** (strong passwords, valid emails, etc.).
- Login to access a personalized **Dashboard**.
- Responsive **fixed navigation bar** with quick access to pages.

###  Event Management
- Add new events with **name, date, time, location, and description**.
- View upcoming events in an organized **list view**.
- Edit or delete events — changes update instantly with React state.
- Events are stored using the **Context API**.

###  Help Section
- Guidance on how to navigate, register, log in, and manage events.
- Tips for organizing events effectively.

###  Responsive Design
- Built with **Bootstrap 5** for mobile-first responsive layouts.
- Works seamlessly across desktops, tablets, and mobile devices.

---

##  Tech Stack

- **React 18** (Vite)
- **React Router DOM** – navigation
- **Bootstrap 5** – styling & layout
- **Formik + Yup** – form validation
- **Context API** – state management

---

##  Project Structure

src/
│── components/ # Navigation with links and logout

│── context/ # Context API for user + events

│── pages/ # Login, Registration, Dashboard, AddEvent, Help

│── App.jsx # Routes & main app structure

│── main.jsx # App entry point

│── App.css # Global styles


---

##  Installation & Setup

1. **Clone this repository**:

   git clone  git clone https://github.com/Puseletso-T/event-planner-app.git

   cd event-planner-app

3. **Install dependencies**:

   npm install


4. **Start the development server**:

   npm run dev


5. **Open in your browser**:

   http://localhost:5173

---

##  Usage

1. **Register** a new account (name, username, email, password).

2. **Login** with your username & password.

3. Use the **Dashboard** to:

   - View upcomimg events
   - Edit existing events
   - Delete events

4. Click **Add Event** to create a new event.
   
5. Visit the **Help** page anytime for instructions and tips.



