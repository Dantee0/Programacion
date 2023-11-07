from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from database import *
from models.User import User
from resources.Car_resources import CarsList, CarList
from resources.ShoppingCart_resources import ShoppingCartList, ShoppingCartsList
from resources.auth.routes import auth  

app = Flask(__name__) #Instancia del app de Flask
api = Api(app) #Instancia la api importada
CORS(app)

#Indico que url utilizara SQLALCHEMY para conectarse a la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
#Permite que no se rastrean las modificaciones de la bd en modo DESARROLLO
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


#Inicializar
db.init_app(app)

#configurar flask-migrate
migrate = Migrate()
migrate.init_app(app,db)

#Blueprint
app.register_blueprint(auth)

#Resources
api.add_resource(CarsList, '/cars') #agrega recurso
api.add_resource(CarList, '/car/<int:id>')
api.add_resource(ShoppingCartsList, '/shoppingcarts')
api.add_resource(ShoppingCartList, '/shoppingcart/<int:id>') 

@app.route('/')
def home():
    print('home')
    return jsonify({'message': 'Home'})

if __name__ == '__main__':
    app.run(debug=True)