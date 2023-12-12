* Frontend
Should run on port 4000 and everything should be in the "/" route as a single-page application (SPA) using React.
A button to load a CSV file from the local machine.
A search bar that allows users to search for data within the loaded CSV file.
The search bar should update the displayed cards to show only the matching results.
The loaded CSV data should be displayed as cards on the website, with each card displaying all the data from a single row of the CSV file.
A responsive design that works well on both desktop and mobile devices.
Clear and user-friendly error handling.
If doing only Frontend, load the data in memory.

* Backend
Should run on port 3000.

The backend should be implemented as a RESTful API using Node. (DON'T use any opinionated framework such as Adonis or Nest).

The backend must include the following endpoints:

[POST /api/files] 

An endpoint that accepts a CSV file upload from the frontend and stores the data in a database or a data structure. You should use the key "file" in the body request.
This route should return status 200 and an object with the key "message" with the value "The file was uploaded successfully."
Or this route should return status 500 and an object with the key "message" with an error message in the value.
[GET /api/users] 

Should include an endpoint that allows the frontend to search through the loaded CSV data. This route should accept a ?q= query parameter for search terms and should search through EVERY column of the CSV. The filter should search for partial matches and also be case insensitive.
This route should return status 200 and an object with the key "data" with an array of objects inside it.
Or this route should return status 500 and an object with the key "message" with an error message in the value.

* Fullstack
Implement both frontend and backend features as described above.

Ensure that the frontend can communicate with the backend API to load the CSV data and search through it.