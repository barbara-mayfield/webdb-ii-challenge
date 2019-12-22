exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { "VIN": 00001111, "make": "Niisan", "model": "Rogue", "mileage": 50000 },
    { "VIN": 00002222, "make": "Dodge", "model": "RAM 5000", "mileage": 12345 },
    { "VIN": 00003333, "make": "Toyota", "model": "Camry LE Sedan", "mileage": 44444 },
    { "VIN": 00004444, "make": "Ford", "model": "Calibur", "mileage": 57894 },
  ])
};
