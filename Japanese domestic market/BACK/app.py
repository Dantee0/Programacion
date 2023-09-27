from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from database import *
from models.User import User
from resources.auth.routes import auth  

app = Flask(__name__)
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


if __name__ == '__main__':
    app.run(debug=True)