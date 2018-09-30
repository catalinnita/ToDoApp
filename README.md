# ToDoApp

Aproach:
The tasks must be saved and opened from a local json file. That could be easily changed to any other db api.
The JSON file is loaded on init and then the app will display the react state changes instead of loading the JSON every time. The tasks should be saved in JSON file on every action but that could be async so won't slow down the app. 
All modifying methods were kept in main component and exported to child components for keeping the state changes centralized. In current status just the main component has a state and all the child components use just the props.

The current config is using webpack, babel and eslint.

-------

How To Install:
0. Node 8.12.0 and last version of npm should be installed

1. copy the folder to your local machine
2. open a terminal or bash cmd 
3. in the folder where the app was copied run "npm install"
4. in the same folder run "npm run dev"
5. open a browser and go to localhost:8080

6. for getting the minimized version of js run "npm run build"

-------

Status:
Done:
 - Load saved tasks
 - Add, Update, Remove tasks

Left to do:
 - Show message with the current tasks status
 - Reorder tasks
 - Make a small api for saving existing tasks to the json file
 - Styling
 - Write unit tests

