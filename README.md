# EIS Frontend Task

![image](https://github.com/ChocolateNao/eis-frontend/assets/117908355/0e75985b-756b-412a-b0aa-8238336d87b2)

## Features

This project shows some water meters data from the API. Built with styled-components, react, vite.

Any item can be deleted from the list by pressing the red trash can button (performs `DELETE` request).

There could be a lot of potential improvements, but due to the limited time period for executing the task, it is what it is. It is also my first time with styled-components, so don't judge me for not utilizing best practices. Personally, I'd rather prefer tailwind.

## Rinning the application locally

> [!IMPORTANT]
> There are some troubles with CORS, I only managed to pass requests via chrome.

First of all, clone the repo

```bash
git clone https://github.com/ChocolateNao/eis-frontend.git
cd ./eis-frontend
```

### Docker

The application is shipped with a `Dockerfile` so you can run it inside a docker container

```bash
# Build the image
docker build -t eis-frontend .

# Run the container
docker run --name eis-frontend-app -d -p 8080:80 eis-frontend

# Then you can navigate to http://localhost:8080/
```

### Traditional

You can do the old way as well

```bash
# Install dependencies
npm install

# Run the application
npm run dev
```

## License

MIT
