'use strict';

const Schmervice = require('schmervice');

module.exports = class StructureService extends Schmervice.Service {
    /**
     * It returns all structures of a given type
     * @returns All the structures in the database.
     */
    async getAllStructure({ type }) {

        const { Structures } = this.server.models();
        return await Structures.query().where(type !== 'all' ? { type } : {});
    }

    /**
     * > Get all structures in a region
     * @returns An array of structures in the region.
     */
    async getAllStructureInRegion({ region_id, type, ordering }) {

        const { Structures } = this.server.models();
        return await Structures.query()
            .where({ region_id })
            .andWhere(type !== 'all' ? { type } : {}).orderBy('price', ordering);
    }

    async getAllStructureInRegionPerDate({ region_id, type }) {

        const { Structures } = this.server.models();
        return await Structures.query()
            // .select('*')
            .where({ region_id })
            .andWhere(type !== 'all' ? { type } : {})
            .andWhere('start_date', '>=', new Date())
            .join('structure_availabilities', 'structures.id', 'structure_availabilities.structure_id').orderBy('start_date', 'ASC');
    }

    /**
     * > Get all structures in the region suggested by the user
     * @returns An array of structures ordered by the user's top regions.
     */
    async getAllStructureInRegionSuggested({ type, user_id }) {

        const { Structures, Users } = this.server.models();

        /** Get user data */
        const { top } = await Users.query().where({ id: user_id }).first();

        const structures = await Structures.query()
            .whereIn('region_id', top === '' ? [] : top.split('-'))
            .andWhere(type !== 'all' ? { type } : {});
        return this.arrayOrdering(structures, top.split('-'));
    }

    /**
     * It takes an array of objects and an array of integers, and returns the array of objects sorted by
     * the order of the integers
     * @param array - The array of objects you want to sort.
     * @param order - an array of region_id's in the order you want them to appear in the array.
     * @returns an array of objects that have been sorted by the order of the array passed in.
     */
    arrayOrdering(array, order) {

        const map = new Map(order.map((x, i) => [parseInt(x), parseInt(i)]));

        return array.sort((a, b) => map.get(a.region_id) - map.get(b.region_id));

    }

    async getAllStructureSuggestedBasedOnOther({ user_id }) {

        const { Structures, Users } = this.server.models();

        /** Get user data */
        const user = await Users.query().where({ id: user_id }).first();
        /* Getting all the users that have the same kids and pets as the user. */
        const others = await Users.query().whereNot({ id: user_id }).andWhere({ kids: user.kids }).andWhere({ pets: user.pets });

        /* Filtering out all the users that have the same vacation preferences as the user. */
        const similar = others
            .filter((single) => single.vacation_preferences.split('-').some((type) => user.vacation_preferences.split('-').includes(type)));

        /* Getting the top 5 regions of the user and filtering out the regions that are not in the top
        5 of the similar users. */
        const similar_region = user.top
            .split('-')
            .splice(0, 5)
            .filter((region_id) => similar.some((other_client) => other_client.top.split('-').splice(0, 5).includes(region_id)));
        const all_structure = [];
        /* Getting all the structures that have been visited by the similar users. */
        await Promise.all(similar.map(async (u) => {

            await Promise.all(u.top
                .split('-')
                .splice(0, 5)
                .map(async (r_id) => {

                    /* Checking if the region_id is in the similar_region array. If it is, it is getting all the structures
                    that have been visited by the similar users. */
                    if (similar_region.includes(r_id)) {
                        /* Converting the string of ids into an array of integers. */
                        const visited_int = u.visited.split('-').map((e) => parseInt(e));
                        /* Getting all the structures that have been visited by the similar users. */
                        const array = await Structures.query()
                            .whereIn('id', visited_int)
                            .andWhere({ region_id: parseInt(r_id) })
                            .andWhere({ kids: user.kids })
                            .andWhere({ pets: user.pets });
                        /* Pushing all the elements of the array into the all_structure array. */
                        all_structure.push(...array);
                    }
                }));
        }));
        /* Filtering out all the structures that have been visited by the user. */
        return all_structure.filter((structure) => !user.visited.split('-').includes(structure.id.toString()));
    }
};
