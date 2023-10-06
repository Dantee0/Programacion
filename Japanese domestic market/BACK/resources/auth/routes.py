from flask import jsonify, request, Blueprint #es para crear rutas
from database import db
from models.User import User

auth = Blueprint('auth',__name__, url_prefix= '/auth') #el prefijo sirve para decirle al front donde ir


@auth.route('/login', methods=['POST']) #endpoint
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    #Solicito que la base de datos liste el primer email que coincida con el ingreso
    usernameDB = User.query.filter_by(username=username).first()
    role = usernameDB.role #de ese email o user trae el role
    if usernameDB and usernameDB.password == password:
        # response = {'message': 'Login successful'}
        return jsonify(role=role), 200
    else:
        response = {'message': 'Error'}
        return jsonify(response), 401
    
@auth.route('/register',methods=['POST'])
def signup():
    data = request.get_json()
    fullname = request.json['fullname']
    email = request.json['email']
    username = request.json['username']
    password = request.json['password']
    role = "2"
    # print(data, fullname, email, username, password, role)
    # confirm_psw = data.get('confirm_psw')
# trae los datos que ingresamos en el login
    user = User(fullname=fullname, email=email, username=username, password=password, role=role) #lo va asignando
    db.session.add(user) #los agrega a la tabla user
    db.session.commit() #los guarda en la tabla
    return jsonify(role=role), 200