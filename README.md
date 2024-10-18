# ShoutOut! Application

This project is a simple message-fetching application where users can retrieve messages and associated comments. The app demonstrates asynchronous JavaScript operations using `Promises`, and handles multiple API calls simultaneously with `Promise.allSettled`. If comments fail to load, it throws an error while still loading the messages.

## Features

- Fetches messages from a simulated API call
- Fetches comments associated with the messages
- Uses `Promise.allSettled` to handle both success and failure of API calls
- Displays a loading spinner while data is being fetched
- Handles errors in fetching comments gracefully

## API Simulation

Two API calls are simulated using `Promises`:

1. **`getMessages()`**: Fetches a list of messages after a random delay.
2. **`getComments()`**: Fetches a list of comments for each message, with a 50% chance of failure (error).

## Application Workflow

When the "Get Messages" button is clicked, the app:

- Shows a loading spinner.
- Initiates two asynchronous API calls (getMessages and getComments).
- If getComments fails, an error message is displayed, but the messages are still shown.

## Rendering Logic:

- Messages are rendered with any associated comments (if present).
- If a message has no comments, it displays "No Comments."

## Error Handling:

If getComments fails the messages are still rendered.
