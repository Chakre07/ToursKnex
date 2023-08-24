const knex = require('knex')(require('../knexfile').development);


module.exports = {
  async createTour(req, res) {
    try {
      const tour = await knex('tours').insert(req.body);
      res.status(201).json({ message: 'Tour created successfully', tour });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async getAllTours(req, res) {
    try {
      const tours = await knex('tours');
      res.json(tours);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async getTourById(req, res) {
    const { id } = req.params;
    try {
      const tour = await knex('tours').where({ id }).first();
      if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
      }
      res.json(tour);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async updateTour(req, res) {
    const { id } = req.params;
    try {
      await knex('tours').where({ id }).update(req.body);
      res.json({ message: 'Tour updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  async deleteTour(req, res) {
    const { id } = req.params;
    try {
      await knex('tours').where({ id }).del();
      res.json({ message: 'Tour deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },
};
