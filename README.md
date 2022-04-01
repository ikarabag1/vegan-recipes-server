# Vegan Recipes Server - API

## Directions

## Client React Repository
[Vegan Recipes Client Repository](https://github.com/ikarabag1/vegan-recipes-client)

## RESTful Routes Charts
# Authentication
| VERB   | URI Path  | CRUD     | Description       |
| :----: | :------: | :------: | :----------------: |
| POST   | `/register` | Create  | sign up/ user registeration   |
| GET    | `/profile`  | Read   | displays user profile page   |
| POST   | `/login`   | Read    | login /find user    |

# 
| VERB   | URL Path   | CRUD     | Description     |
| :----: | :---------: | :------: | :-----------: |
| GET    | `/`   | Read   | Welcome page   |
| GET    | `/recipes`  | Read  | displays all recipes by specific user |
| GET    | `/recipes/:id` | Show | displays the specific recipe   |
| POST   | `/recipes/:userid` | Create  | create a new recipe     |
| PUT    | `/recipes/:id` | Update | update the recipe created by user   |
| DELETE | `/recipes/:id`  | Destroy | removes the recipe user created   |
| POST   | `/recipes/:id`  | Create  | add review or a note to specific recipe  |
