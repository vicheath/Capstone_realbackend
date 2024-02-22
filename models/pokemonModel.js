import mongoose from 'mongoose';

const pokemonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Pokemon = mongoose.model('Pokemon', pokemonSchemaSchema);