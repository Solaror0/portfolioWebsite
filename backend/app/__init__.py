from flask import Flask

from backend.config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here
    

    # Register blueprints here
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    @app.route('/')
    def serve():
        return '<h1>Testing the Flask Application Factory Pattern</h1>'


    return app