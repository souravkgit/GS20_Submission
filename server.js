const app = require('./app');
const PORT = process.env.PORT || 5100;


const server = app.listen(() => {
    const { port } = server.address();
    console.log(`Server started on port ${port}`);
});