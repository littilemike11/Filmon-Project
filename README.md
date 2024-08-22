# Filmon-Project

A progress tracker app for the students of St. Mary

## Features

- View a list of all students and their basic info from database
- Ability to search a student by name
- Click on each student to go to their studentPage with more in-depth information
- Ability to enroll new students
- Ability to update a student's records
- Ability to delete a student from database

## How to Run

1. clone repo

```
git clone
```

2.  go into project folder

```
cd Filmon-Project/filmon-project
```

3. install node modules

```
npm install
```

4. change Mongo URI to your own Mongo Uri in backend/server.js file

5. seed students - populate the database with mock data

```
npm run "seed database"
```

6. start up server

```
npm run start
```

7. start react frontend

```
npm run dev
```

## Next Steps

- add image implementation
- better mobile ui scaling

## Extra

1. implement students as users
2. login
3. student are able to update their own goals or edit their progress
