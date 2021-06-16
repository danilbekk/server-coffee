import Drink from "../models/Drink.js";

class DrinkControllers {
  async getAll(req, res) {
    const drink = await Drink.find().lean();
    res.json(drink);
  }

  async post(req, res) {
    try {
      const { name, price, inStock, haveCaffeine, volume, description } =
        req.body;
      const drink = await new Drink({
        name,
        price,
        inStock,
        haveCaffeine,
        volume,
        description,
      });
      await drink.save();
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  }

  async getinStock(req, res) {
    const drink = await Drink.find({ inStock: true });
    res.json(drink);
  }

  async getById(req, res) {
    const id = req.params.id;
    const drink = await Drink.findById(id);
    res.json(drink);
  }

  async delete(req, res) {
    const id = req.params.id;
    const dink = Drink.findByIdAndDelete(id);
    res.json(drink);
  }

  async update(req, res) {
    try {
      const { name, price, onStock, haveCaffeine, volume, description } =
        req.body;
      const id = req.params.id;
      const drink = await Drink.findByIdAndUpdate(
        id,
        { name, price, onStock, haveCaffeine, volume, description },
        { new: true }
      );
      res.json(drink);
    } catch (e) {
      res.json(e.message);
    }
  }
}

export default new DrinkControllers();
