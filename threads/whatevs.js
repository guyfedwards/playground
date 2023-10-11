const fs = require('fs');

const data = fs.readFileSync('./rust_counter_race.rs', 'utf-8');
console.log('data', data);
