from flask_sqlalchemy import SQLAlchemy

# Inicializar objeto sqlalchemy
db = SQLAlchemy()

# Configurar DB
USER_DB = 'postgres'
PASS_DB = ''
URL_DB = 'localhost'
NAME_DB = 'jdm'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'