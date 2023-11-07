from app import db

class Car(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    brand = db.Column(db.String(250), nullable=False)
    model = db.Column(db.String(250), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    availability = db.Column(db.Boolean, default=True)
    
    CarShoppingCarts = db.relationship('ShoppingCart', backref='car', cascade='all, delete-orphan')

    def str(self):
        return (
            f'id: {self.id}, '
            f'brand: {self.brand}, '
            f'model: {self.model}, '
            f'description: {self.description}, '
            f'price: {self.price}, '
            f'availability: {self.availability}, '
        )