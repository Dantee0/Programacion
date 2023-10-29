from flask_restful import Resource
from flask import request, jsonify
from models.Car import Car
from database import db

class CarsList(Resource):

    def post(self):
        brand = request.json['brand']
        model = request.json['model']
        description = request.json['description']
        price = request.json['price']
        availability = request.json['availability']

        car = Car(brand=brand, model=model, description=description, price=price, availability=availability)

        db.session.add(car) # Agregar a la base de datos
        db.session.commit() # Guardar cambios
        return jsonify({'message': 'Car created successfully}'})

    def get(self):
        cars = db.session.query(Car).all()
        print('car', cars)
        result = [] #guarda los datos
        for car in cars:
            result.append({
                'id': car.id,
                'brand': car.brand,
                'model': car.model,
                'description': car.description,
                'price': car.price,
                'availability': car.availability
            })
        response = jsonify(result)
        response.status_code = 200
        return response