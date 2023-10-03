from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    fullname = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False, unique=True)
    username = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(250), nullable=False, unique=True)
    role = db.Column(db.String(250)) #es para ver si es adiministrador o usuario

    #Metodo str permite obtener representacion de la clase User
    def str (self):
        return (
            f'id: {self.id}, '
            f'fullname: {self.fullname}, '
            f'email: {self.email}, '
            f'username: {self.username}, '
            f'password: {self.password}, '
            f'role: {self.role}, '
        )