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
    
class CarList(Resource):
    
     def put(self, id):
        car = Car.query.get_or_404(id)
        car.brand = request.json.get('brand', car.brand)
        car.model = request.json.get('model', car.model)
        car.description = request.json.get('description', car.description)
        car.price = request.json.get('price', car.price)
        car.availability = request.json.get('availability', car.availability)
        
        print(car.brand, car.model, car.description, car.price, car.availability)
        
        db.session.commit()
        return jsonify({'mensaje': 'Auto editado con éxito.'})
    
     def delete(self, id):
        car = Car.query.get_or_404(id)
        db.session.delete(car)
        db.session.commit()
        return jsonify({'mensaje': 'Auto eliminado con éxito.'})