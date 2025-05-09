# CLI TMDB Tool

A simple command line interface (CLI) to fetch data from The Movie Database (TMDB) and display it in the terminal.

## Features

- The application should run from the command line, and be able to pull and show the popular,
  top-rated, upcoming and now playing movies from the TMDB API. The user should be able to specify 
  the type of movies they want to see by passing a command line argument to the CLI tool.


## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.

2. Clone or download this project.

3. To run use this command : `node cli_tmdb_app.js --type "playing"`
  - Usage: node cli_tmdb_app.js [options]
  - Commands:
     - **--type** **`"playing"`**           List items that are filtered by the type **"playing"**.
     - **--type** **`"now_playing"`**       List items that are filtered by the type **"now_playing"**.
     - **--type** **`"upcoming"`**          List items that are filtered by the type **"upcoming"**.
     - **--type** **`"top_rated"`**         List items that are filtered by the type **"top_rated"**.




4. https://roadmap.sh/projects/tmdb-cli
