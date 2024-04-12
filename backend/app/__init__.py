from flask import Flask

from config import Config
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from app import db


def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_class)
    db = SQLAlchemy(app)
    # Initialize Flask extensions here
    

    # Register blueprints here
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    @app.route('/test/')
    def test_page():
        return '<h1>Testing the Flask Application Factory Pattern</h1>'


    return app