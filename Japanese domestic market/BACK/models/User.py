from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    fullname = db.Column(db.String(250))
    email = db.Column(db.String(250))
    username = db.Column(db.String(250))
    password = db.Column(db.String(250))
    confirm_psw = db.Column(db.String(250))
    role = db.Column(db.String(250)) #es para ver si es adiministrador o usuario

    #Metodo str permite obtener representacion de la clase User
    def str (self):
        return (
            f'id: {self.id}, '
            f'fullname: {self.fullname}, '
            f'email: {self.email}, '
            f'username: {self.username}, '
            f'password: {self.password}, '
            f'confirm_psw: {self.confirm_psw}, '
            f'role: {self.role}, '
        )