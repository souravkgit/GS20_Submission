const app = require('./app');
const PORT = process.env.PORT || 5100;

const server = app.listen(PORT, () => {
    console.log('Server started on', PORT);
});