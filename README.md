# 3 Project Features

## 1.Dynamic Selection of Courses

- Users can dynamically select any course as long as the total credit hours do not exceed 20 hours.
- The application prevents users from adding more than 20 hours of credit.

## 2.Ignore Duplicate Selection

- Users cannot select the same course twice or multiple times.
- The application ensures that duplicate selections are ignored.

## 3.Price Precision with Currency

- The application automatically calculates and displays the total cost of the selected courses.
- The total cost is displayed in the appropriate currency format.

---
***

## State Management

In this project, I manage the application's state using React's `useState` hook. Here's a brief overview of how I handle state:

### Course Data State

- I use the `courses` state variable to hold data fetched from the 'data.json' file.
- The `useEffect` hook fetches and updates this state when the component mounts.

### Selected Courses State

- The `selectedCourses` state variable keeps track of user-selected courses.
- When a user selects a course, code update this state accordingly.

### Total Credit State

- I use `totalCredit` to store the cumulative total of credit hours for selected courses.

### Remaining Credit State

- `remainingCredit` tracks the remaining credit hours based on the total and selected courses.

### Total Prices State

- `totalPrices` stores the cumulative total price of selected courses.

By utilizing these state variables, our React project effectively manages dynamic data related to selected courses, their credit hours, remaining credit hours, and total prices, ensuring a responsive and interactive user experience.


