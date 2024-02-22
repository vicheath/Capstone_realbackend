import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.element ||
      !request.body.price
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, element, price',
      });
    }
    const newPokemon = {
      title: request.body.title,
      author: request.body.element,
      publishYear: request.body.price,
    };

    const pokemon = await Pokemon.create(newPokemon);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Pokemons from database
router.get('/', async (request, response) => {
  try {
    const pokemon = await Pokemon.find({});

    return response.status(200).json({
      count: pokemons.length,
      data: pokemons,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Pokemon from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const pokemon = await Pokemon.findById(id);

    return response.status(200).json(pokemon);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Pokemon
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Pokemon.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }

    return response.status(200).send({ message: 'Pokemon updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Pokemon
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Pokemon.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }

    return response.status(200).send({ message: 'Pokemon deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;