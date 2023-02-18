'use strict';

const Schmervice = require('schmervice');

module.exports = class UserService extends Schmervice.Service {
    /**
     * It takes an id and a region_id as parameters, and updates the 'top' field of the user with the id of
     * the user
     */
    async updateUserTopRank({ id, region_id }) {

        const { Users } = this.server.models();

        /** Get the first user in the db with this id */
        const user = await Users.query().where({ id }).first();
        /* Splitting the string into an array of strings, then mapping each element to an integer. */
        const top = user.top !== '' ? user.top.split('-').map((el) => parseInt(el)) : [];

        /* Checking if the region_id is in the top array. If it is, it checks if it is not the first element.
            If it is not the first element, it swaps the element with the one before it. If it is not in the
            array, it adds it to the array. */
        if (top.indexOf(region_id) >= 0) {
            if (top.indexOf(region_id) !== 0) {
                const index = top.indexOf(region_id);
                const tmp = top[index - 1];
                top[index - 1] = region_id;
                top[index] = tmp;
            }
        } else {
            top.push(region_id);
        }

        /* Joining the array of integers into a string, separated by '-'. */
        user.top = top.join('-');
        /* Updating the 'top' field of the user with the id of the user. */
        await Users.query()
            .where({ id })
            .update({ ...user });
    }

    /**
     * It takes a user's id, type, age, vacation_preferences, kids, pets, and top, and returns an array of
     * structures that match the user's preferences
     * @returns An array of structures ordered by the top preferences of the user.
     */
    async getUserPreferenceHints({ id, type }) {

        const { Users, Structures } = this.server.models();

        /* Destructuring the object returned by the query. */
        const { age, vacation_preferences, kids, pets, top } = await Users.query().where({ id }).first();

        /* Checking the age of the user and assigning a string to the variable age_target. */
        let age_target = '';
        if (parseInt(age) <= 18) {
            age_target = '0-18';
        }
        else if (parseInt(age) <= 35) {
            age_target = '19-35';
        }
        else if (parseInt(age) <= 60) {
            age_target = '36-60';
        }
        else if (parseInt(age) <= 130) {
            age_target = '61-130';
        }
        /* Querying the Structures table for structures that have the same type as the user, and that have the
        same kids, pets, and age_target as the user. */

        const structures = await Structures.query()
            .andWhere({ type })
            .andWhere((builder) => {

                builder.orWhere({ kids }).orWhere({ pets }).orWhere({ age_target });
            });

        /* Filtering the structures array by the user's vacation preferences, and then sorting the
        array by the user's top preferences. */
        return this.arrayOrdering(structures.filter((s) => s.experience.split('-').some((experience) => vacation_preferences.split('-').includes(experience))), top.split('-'));
    }

    /**
     * It takes an array of objects and an array of integers, and returns the array of objects sorted by
     * the order of the integers
     * @param array - The array to be sorted
     * @param order - an array of region_id's in the order you want them to appear in the dropdown.
     * @returns an array of objects sorted by the order of the array passed in.
     */
    arrayOrdering(array, order) {

        /* Mapping the array of strings to an array of integers. */
        order = order.map((e) => parseInt(e));
        /* Sorting the array of structures by the order of the top array. */
        return array.sort((a, b) => (order.indexOf(a.region_id) === -1 ? 1000 : order.indexOf(a.region_id)) - (order.indexOf(b.region_id) === -1 ? 1000 : order.indexOf(b.region_id)));
    }

    /**
     * It adds a user to the database
     * @param user - The user object to be added to the database.
     */
    async addUser(user) {

        const { Users } = this.server.models();

        await Users.query().insert(user);
    }

    /**
     * This function returns true if the user exists in the database, and false if the user does not exist
     * in the database.
     * @returns A boolean value.
     */

    async userLog({ email, password }) {

        const { Users } = this.server.models();

        /* Querying the Users table for a user with the email and password passed in. */
        const result = await Users.query().where({ email }).andWhere({ password });
        /* Checking if the result of the query is an empty array. If it is, it returns false, otherwise
        it returns true. */
        return result[0] || {};
    }

    /**
     * It updates a user's information in the database
     */
    async updateUser({ id, name, surname, gender, age, vacation_preferences, visited, kids, pets }) {

        const { Users } = this.server.models();

        /* Querying the Users table for a user with the id passed in. */
        const user = await Users.query().where({ id }).first();

        /* Updating the user's information in the database. */
        user.name = name;
        user.surname = surname;
        user.gender = gender;
        user.age = age;
        user.vacation_preferences = vacation_preferences;
        user.visited = visited
        user.kids = kids;
        user.pets = pets;

        /* Updating the user's information in the database. */
        await Users.query()
            .where({ id })
            .update({ ...user });
    }
};
