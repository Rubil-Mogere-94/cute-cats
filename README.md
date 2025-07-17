# Cute cat app 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A responsive React application for managing a gallery of cute cat pictures. Perform full CRUD operations (Create, Read, Update, Delete) on cat entries with image URLs, titles, and descriptions.

## Features 
- Add new cats with images
- Edit existing cat entries
- Delete cats from gallery
- Responsive grid layout
- Instant updates without page refresh
- Form validation

## Prerequisites 
- Node.js v14 or higher
- npm v7 or higher

## Installation 

1. **Clone the repository:**
```bash
git clone https://github.com/Rubil-Mogere-94/cute-cats.git
cd cat-gallery-manager
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install JSON Server globally:**
```bash
npm install -g json-server
```

## Running the Application 

You need to run two services simultaneously:

### Backend Server (JSON Server)
```bash
json-server --watch db.json --port 3001
```
> This starts the mock REST API at `http://localhost:3001` using `db.json`

### Frontend Development Server
```bash
npm run dev
```
> This starts the React app at `http://localhost:5173`

## Usage Guide 
1. Open `http://localhost:5173` in your browser
2. **Add a new cat:**
   - Click "Add New Cat"
   - Fill in the form (Image URL, Title, Description)
   - Click "Add Cat"
   
3. **Edit a cat:**
   - Click "Edit" on any cat card
   - Modify the information
   - Click "Update Cat"
   
4. **Delete a cat:**
   - Click "Delete" on any cat card
   - Confirm deletion (action is permanent)

## Project Structure 
```
├── src/
│   ├── components/
│   │   ├── cute-cats.jsx      # Main gallery component
│   │   └── CatForm.jsx        # Add/edit form component
│   ├── App.jsx                # Root application component
│   └── main.jsx               # Entry point
├── db.json                    # Mock database
├── index.css                  # Global styles
└── package.json               # Dependencies and scripts
```

## Troubleshooting 
If you encounter issues:
- **Port conflicts:** Ensure port 3001 (backend) and 5173 (frontend) are available
- **Data not loading:** Verify JSON server is running with correct db.json
- **CORS errors:** Ensure both servers are running simultaneously
- **Form issues:** Check console for validation errors


**Note:** The application uses `db.json` as its database. Any changes made through the UI will persist in this file until the server is restarted.

