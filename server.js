const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

let cities = {
    'new york city': {
        'name': 'new york city',
        'location': 'new york',
        'population': 8200000,
        'population density': {
            'km': 10431.1,
            'mi': 27016.3
        }

    },
    'los angeles': {
        'name': 'los angeles',
        'location': 'california',
        'population': 3940000,
        'population density': {
            'km': 2910.2,
            'mi': 7009.1
        }

    },
    'chicago': {
        'name': 'chicago',
        'location': 'illinois',
        'population': 2700000,
        'population density': {
            'km': 4582.3,
            'mi': 11868.0
        }

    },
    'philadelphia': {
        'name': 'philadelphia',
        'location': 'pennsylvania',
        'population': 1200000,
        'population density': {
            'km': 4337.3,
            'mi': 11233.6
        }

    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const city = request.params.name.toLowerCase();
    if (cities[city]) {
        response.json(cities[city].population);
    }
    else {
        response.status(404).send('City not found');
    }

})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});