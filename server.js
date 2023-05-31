const app = require('./app');
const PORT = process.env.PORT || 5100;


const isBuildProcess = process.env.NOW_REGION === 'dev1';

if (!isBuildProcess) {
    const server = app.listen(PORT, () => {
        console.log('Server started on ', PORT);
    });
}


// const server = app.listen(PORT, () => {
//     console.log('Server started on', PORT);
// });