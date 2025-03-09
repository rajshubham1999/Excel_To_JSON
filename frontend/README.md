Smart Excel JSON Parser is a React-based web application that allows users to easily convert Excel files to JSON format and vice versa. The application provides a user-friendly interface for uploading files, converting them, and downloading the converted results.

##Features

  Convert Excel files to JSON format

   Convert JSON data to Excel files

   Error handling with informative messages

    Responsive and clean UI

##Technologies Used

 React.js

 Fetch API

 HTML/CSS

 JavaScript

##Getting Started

    Prerequisites

    Node.js installed

    Backend server running at http://localhost:5000

    Installation



Navigate to the project directory:

cd smart-excel-json-parser

Install dependencies:

npm install

Start the development server:

npm start

Usage

##Upload an Excel file to convert it to JSON.

    Convert JSON data to an Excel file using the provided interface.

    Download the converted file.

    API Endpoints

    POST /api/excel/upload - Uploads an Excel file and returns JSON data.

    POST /api/json/convert - Converts JSON data to an Excel file.

##Error Handling

Displays error messages when file upload or conversion fails.