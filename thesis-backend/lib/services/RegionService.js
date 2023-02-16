'use strict';

const Schmervice = require('schmervice');

module.exports = class RegionService extends Schmervice.Service {
    /**
     * It returns a list of all the regions in the database
     * @returns An array of objects.
     */
    async getRegions() {

        const { Regions } = this.server.models();
        return await Regions.query();
    }

    /**
     * It gets the top regions of a user
     * @returns An array of regions ordered by the top regions of the user.
     */
    async getTopRegions({ id }) {

        const { Regions, Users } = this.server.models();

        const { top } = await Users.query().where({ id }).first();
        const regions = await Regions.query().whereIn('id', top.split('-'));

        return this.arrayOrdering(regions, top.split('-'));
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
};
