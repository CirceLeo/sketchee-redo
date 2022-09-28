//helper function to travel 
// Return the directory name of a path. Similar to the Unix dirname command.
const path = require('path');

module.exports = path.dirname(require.main.filename);