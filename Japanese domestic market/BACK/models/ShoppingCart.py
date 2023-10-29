# registro de ventas

from app import db

class ShoppingCart(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    carId = db.Column(db.Integer, db.ForeignKey('car.id'))

    def __str__(self):
        return (
            f'id: {self.id}'
        )