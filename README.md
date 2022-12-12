## REST-Rant
***

#Usage
***
CSS Framework: Bootstrap
Stack: MongoDB, Express, NodeJS
Stack-Side Rendering: JSX
Node Modules: method-override, dotenv, express-react-views

# Routes

| Method |  Path   |       Purpose       |
| :----- | :------ | :------------------ |
|  GET   |    /    | Home page |
|  GET   | /places | Places index page |
|  POST  | /places |    Create new place |
|  GET   | /PLACES NEW | Form page for creating a new place |
|  GET   | /places/:id | Details about a particular place |
|  PUT   | /places/:id | Update a particular place |
|  GET   | /places/:id/edit | Form page for editing an existing place |
|  DELETE | /places/:id | Delete a particular place |
|  POST  | /places/:id/rant | Create a rant (comment) about a particular place |
|  DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
|  GET   |    *    | 404 page (matches any route not defined above) |

# Database

places

| Field Name | Data Type |
| :---- | :--- |
| name  | 'H-Thai-ML' |
| city  | 'Seattle' |
| state | 'WA' |
| cuisines | 'Thai, Pan-Asian' |
| pic   | 'http://placekitten.com/250/250' |