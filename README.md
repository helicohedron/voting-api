# Online Voting System API

## Getting Started

Clone as your own

```sh
npx degit@latest https://github.com/UCC-Batch-26/voting-api.git voting-api
cd voting-api
git init
```

Install dependencies

```sh
npm install
```

Run the app

```sh
npm run dev
```

## Objective

The goal of this project is build a backend REST API for simple **Online Voting System**. Users can create polls, vote on options, and view poll results. This system will demonstrate core CRUD operations and reinforce skills in designing relationships in MongoDB using Mongoose.

## Key Learning Outcomes

- Design and implement a relational schema using Mongoose
- Create RESTful endpoints using Express
- Practice CRUD operations with real-world logic and pragmatic
- Handle data validation and default values
- Understand how to prevent duplicate voting

## Entities and Their Fields

### Poll

Represents a question with multiple options.

| Field      | Type       | Required | Notes                                                |
| :--------- | :--------- | :------- | :--------------------------------------------------- |
| `question` | `String`   | `true`   | The question being asked                             |
| `options`  | `[String]` | `true`   | Choices to vote on                                   |
| `status`   | `String`   | `false`  | Enum: `active, closed, archived` (default: `active`) |

- Make sure to enable [timestamps](https://mongoosejs.com/docs/timestamps.html)

### Vote

Represents a vote made by a user for a specific option in a poll.

| Field    | Type       | Required   | Notes                                  |
| :------- | :--------- | :--------- | :------------------------------------- |
| `pollId` | `ObjectId` | `true`     | Refers to `Poll`                       |
| `option` | `String`   | `required` | Must match one of the options          |
| `voter`  | `String`   | `false`    | Optional - can be email, IP or user ID |

- Make sure to enable [timestamps](https://mongoosejs.com/docs/timestamps.html)
- Make sure selected `option` must match one of the options in `Poll`

## Tasks & Steps

### Poll Module

#### Folder Structure

All Poll module must be in `modules/polls` directory only.

```
/voting-api
├── modules/
│    ├── polls/
│    │    └── model.js
│    │    └── controller.js
│    │    └── routes.js
│    │    └── ...
```

#### Endpoints

| Method | Route               | Description         |
| :----- | :------------------ | :------------------ |
| `POST` | `/api/v1/polls`     | Create a new poll   |
| `GET`  | `/api/v1/polls`     | Get all polls       |
| `GET`  | `/api/v1/polls/:id` | Get a specific poll |

### Voting Module

#### Folder Structure

All Vote module must be in `modules/votes` directory only.

```
/voting-api
├── modules/
│    ├── votes/
│    │    └── model.js
│    │    └── controller.js
│    │    └── routes.js
│    │    └── ...
```

#### Endpoints

| Method | Route               | Description            |
| :----- | :------------------ | :--------------------- |
| `POST` | `/api/v1/votes`     | Create a new poll      |
| `GET`  | `/api/v1/votes/:id` | Get results for a poll |

## Optional Enhancements

- Add ability to update poll's question or options
- Add ability to soft delete polls by setting `status` to `archived`
- Prevent double voting by same `voter`
- Validate the `option` exists in referenced poll
- Return vote percentage breakdown
