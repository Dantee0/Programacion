from flask_sqlalchemy import SQLAlchemy

# Inicializar objeto sqlalchemy
db = SQLAlchemy()

# Configurar DB
USER_DB = 'postgres'
PASS_DB = 'mati2001'
URL_DB = 'localhost'
NAME_DB = 'JDM'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'