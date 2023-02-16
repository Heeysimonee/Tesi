'use strict';

const { readCsvFile } = require('../lib/helpers/utils');

const data = {};

data.regions = readCsvFile({
    path: 'seeds/seeds_file/regioni.csv', delimiter: ';', skipFirstRow: true,
    objectScheme: [
        { 'id': 'number' },
        { 'name': 'string' }
    ]
});
data.structures = readCsvFile({
    path: 'seeds/seeds_file/strutture.csv', delimiter: ',', skipFirstRow: true,
    objectScheme: [
        { 'id': 'number' },
        { 'type': 'string' },
        { 'name': 'string' },
        { 'description': 'string' },
        { 'stars': 'number' },
        { 'image': 'string' },
        { 'province': 'string' },
        { 'region_id': 'number' },
        { 'age_target': 'string' },
        { 'experience': 'string' },
        { 'price': 'float' },
        { 'discount': 'number' },
        { 'kids': 'boolean' },
        { 'pets': 'boolean' }
    ]
});
data.structure_availabilities = readCsvFile({
    path: 'seeds/seeds_file/disponibilita_strutture.csv', delimiter: ',', skipFirstRow: true,
    objectScheme: [
        { 'structure_id': 'number' },
        { 'start_date': 'timestamp' },
        { 'end_date': 'timestamp' }
    ]
});
data.users = readCsvFile({
    path: 'seeds/seeds_file/utenti.csv', delimiter: ',', skipFirstRow: true,
    objectScheme: [
        { 'email': 'string' },
        { 'password': 'string' },
        { 'name': 'string' },
        { 'surname': 'string' },
        { 'gender': 'string' },
        { 'age': 'number' },
        { 'vacation_preferences': 'string' },
        { 'kids': 'boolean' },
        { 'pets': 'boolean' },
        { 'top': 'string' },
        { 'visited': 'string' }
    ]
});

exports.seed = async (knex) => {

    console.info('\n[INFO]: running base seeder\n');

    const insertIfNotPresent = async (tableName, elements) => {

        const isSameElement = (dbObject, newObject) => {

            return Object.entries(newObject).every(([key, value]) =>
                ((typeof value === 'object') ? isSameElement(dbObject[key], value) : dbObject[key] === value));
        };

        const existingElements = await knex(tableName);
        const existingElementsIdSet = new Set(existingElements.map(({ id }) => id));

        let insertedCount = 0;
        let updatedCount = 0;

        const elementsToInsert = await elements;

        console.info(`[INFO]: start inserting ${elementsToInsert.length} elements in table ${tableName}`);
        console.log(elementsToInsert);
        for (const newElement of elementsToInsert) {
            if (newElement.id && existingElementsIdSet.has(newElement.id)) {
                // If we are using IDs in the database table, then we can use them to check whether the element was already there,
                // and in case it's different from what we want update it (this way we can preserve foreign keys).
                await knex(tableName).where('id', newElement.id).update(newElement);
                ++updatedCount;
            }
            else if (existingElements.some((oldElement) => isSameElement(oldElement, newElement))) {
                // If we can find an already-identical element in the db (recursive value-based equality, only on the keys of the new element),
                // then we can simply ignore it since it already contains the data we want.
                continue;
            }
            else {
                // In all other cases, we need to insert a fresh element.
                await knex(tableName).insert(newElement);
                ++insertedCount;
            }
        }

        console.info(`[INFO]: In table ${tableName} - ${insertedCount} inserted, ${updatedCount} updated`);
    };

    // Each key in data is referred to a table
    const seedTable = insertIfNotPresent;
    for (const entry of Object.entries(data)) {
        // Pass the table into insert data and the data extracted from the csv
        await seedTable(entry[0], entry[1]);
    }
};
