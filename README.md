# feedget-nlw

#### Feedget is a full stack web project of a widget that collects feedback.

![](/img/1.png)
![](/img/2.png)
![](/img/3.png)

> This project was made in order to train my React skills on the frontend using tools like tailwind and train my Api skills on the backend

## Usage

The server folder contains the backend and the web folder contains the frontend.
To run the frontend you will first need to install the project dependencies into the **web** folder
```npm
npm install
```
and then create a file called **.env.local** in the same folder, this file must have the environment variable that contains the address of the Api:
```npm
VITE_API_URL=http://localhost:3333
```
Now you can run the frontend using the following command in the same folder:
```npm
npm run dev
```
To run the backend you first need to install the dependencies inside the **server** folder this time and then create a .env file that will contain the database URL:
