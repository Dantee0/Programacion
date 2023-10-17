from app import db

class Post(db.Model):
    id = db.Column(db.Integer, primary_key = True)

    userID = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    carID = db.Column(db.Integer, db.ForeignKey('car.id'), nullable=False)

    # CarsPosts = db.relationship('Car', backref='post')

    def str(self):
        return (
            f'id: {self.id} '
        )