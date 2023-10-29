from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Car import Car
from models.ShoppingCart import ShoppingCart
from database import db


class ShoppingCartsList(Resource):

    def post(self):
        userId = request.json['userId']
        carId = request.json['carId']

        user = User.query.get(userId)
        car = Car.query.get(carId)

        shoppingCart = ShoppingCart(user=user, car=car)

        db.session.add(shoppingCart) # Agregar a la base de datos
        db.session.commit() # Guardar cambios
        return jsonify({'message': 'Solicitud de compra realizada con éxito.'})
    
    def get(self):
        shoppingCarts = db.session.query(ShoppingCart).all() #trae todos los datos de la tabla(puedo ver todos los autos añadidos al carrito)
        # print('shoppingCart', shoppingCarts)
        result = [] #guarda los datos
        for shoppingCart in shoppingCarts:
            result.append({'id': shoppingCart.id})
        response = jsonify(result)
        response.status_code = 200
        return response
    
class ShoppingCartList(Resource):

    def get(self, id):

        user = User.query.get(id)
        shoppingCarts = ShoppingCart.query.filter_by(user=user).all()

        result = []
        for shoppingCart in shoppingCarts:
            car = Car.query.get(shoppingCart.carId)
            result.append({
                'id': car.id,
                'brand': car.brand,
                'model': car.model,
                'description': car.description,
                'price': car.price,
                'availability': car.availability
            })
        return jsonify(result)
    
    def delete(self, id):
        car = Car.query.get(id)
        shoppingCart = ShoppingCart.query.filter_by(car=car).first()

        db.session.delete(shoppingCart)
        db.session.commit()
        return jsonify({'message': 'Solicitud de compra eliminada con éxito.'})