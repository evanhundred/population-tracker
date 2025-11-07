# GEMINI.md

## Project Overview

Population Tracker is a web application that visualizes US population data from the US Census Bureau. It allows users to select a census year and see the population of each state represented on a map with a color-coded legend. The application also displays a sortable list of states and their populations.

## Building and Running

### Prerequisites

- Node.js and npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/evanhundred/population-tracker.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the application

-   **Development:**
    ```bash
    npm start
    ```
    This will start a development server at `http://localhost:8080`.

-   **Production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the bundled files.

-   **Watch for changes:**
    ```bash
    npm run watch
    ```
    This will watch for changes in the source files and rebuild the application automatically.

## Development Conventions

### Technologies

-   **D3.js:** For rendering the map and data visualizations.
-   **US Census API:** To fetch population data.
-   **Webpack:** For bundling and transpiling JavaScript code.
-   **Babel:** For transpiling modern JavaScript (ES6+) to a compatible version.
-   **Sass:** For styling the application.

### Project Structure

The project is organized as follows:

-   `src/`: Contains the source code.
    -   `index.js`: The entry point of the application.
    -   `scripts/`: Contains the JavaScript modules for different functionalities.
        -   `map.js`: The core component for rendering the map.
        -   `State.js`: Represents a state on the map.
        -   `fetcher.js`: For fetching data from the US Census API.
        -   `...`: Other modules for different UI components.
    -   `styles/`: Contains the Sass stylesheets.
        -   `index.scss`: The main stylesheet.
        -   `...`: Other stylesheets for different components.
-   `assets/`: Contains static assets like JSON data and images.
-   `dist/`: Contains the bundled files for production.
-   `webpack.config.js`: The configuration file for Webpack.
-   `package.json`: The file that contains the project's metadata and dependencies.

### Coding Style

-   The project uses ES6 modules (`import`/`export`).
-   The code is well-structured and organized into different modules based on functionality.
-   Sass is used for styling, with a clear and organized structure.
