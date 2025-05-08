### LexiFind — Discover the Meaning of Any Word

[https://lexifind.netlify.app/]

LexiFind is a web application that allows you to search for the meanings, phonetics, synonyms, and antonyms of any English word. Built with React and TypeScript, it provides a clean and user-friendly interface for exploring word definitions.

### Features

Search for word meanings, synonyms, antonyms, and phonetics

Real-time search with API integration

Responsive and intuitive UI design

📦 Installation

First, clone the repository:

    git clone https://github.com/kozadireza/dictionary.git
    cd dictionary

Install the dependencies:

    npm install

Run the development server:

    npm run dev

Now, open http://localhost:5173 in your browser to see the application running.

🔍 Usage

Type a word into the search bar.

Press Search or hit Enter.

The app will display the word's definition, part of speech, synonyms, antonyms, and pronunciation.

📝 API Reference

The application uses the Free Dictionary API:

GET /entries/en/:word

Example:

    https://api.dictionaryapi.dev/api/v2/entries/en/hello

🛠️ Technologies Used

React — For building the user interface

TypeScript — For type safety and development ease

Axios — For making API requests

Vite — For fast development and bundling

🤝 Contributing

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
