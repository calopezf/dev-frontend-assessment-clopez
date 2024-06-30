# Project Documentation

## Solution and Assumptions

### Components and Views

- **Symbols.vue**: This view displays a comprehensive list of all trading symbols, ensuring a clear and user-friendly experience.
- **TicketDetails.vue**: Dedicated to showing detailed information about each ticker directly from the API.
- **SymbolTile.vue**: Styled as a card, this component presents key details about a symbol within the Symbols view.

### Sorting and Filtering in Symbols.vue

The `filteredTickers` computed property dynamically filters and sorts ticker data based on user input. It filters the list by checking if the ticker's symbol or description includes the search query, then sorts the filtered results by the selected sorting key in either ascending or descending order, and limits the output to the first 100 results. This ensures efficient updates and a responsive UI.

### Design Pattern

The Adapter design pattern is utilized to integrate external API data by transforming it into a consistent format for the application. This isolates the data conversion process from the rest of the application logic, facilitating easier maintenance and handling of potential API changes.

### Unit Testing

Unit tests for `SymbolTile.vue` are performed using `shallowMount` from Vue Test Utils. Tests verify the rendering of symbol data, navigation functionality on button clicks, and the presence and label of the button, ensuring component integrity.
## npm run test


### What's Missing

- **Pagination in the Backend**: The API should support pagination to enhance performance, as the current setup without it slows down the page. A limit of 100 rows is set to mitigate this.

### Challenges Overcome

Configuring and installing Jest required some time because of the version, but was successfully integrated.

### Assumptions

- **Security of API Tokens**: Storing API tokens directly in source code poses security risks. For testing, embedding an API token in the code was chosen for convenience but is generally not recommended.

### Number of Hours Worked

- **Total**: 8 hours

