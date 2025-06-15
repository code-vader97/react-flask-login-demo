from flask import Blueprint, render_template, send_from_directory, current_app, request, jsonify
from flask_login import login_required, current_user
from . import db

main = Blueprint("main", __name__)


@main.route("/")
def index():
    return render_template("index.html")


@main.route("/profile")
@login_required
def profile():
    return send_from_directory(current_app.static_folder, "index.html")

@main.route('/echo', methods=['POST'])
@login_required
def echo():
    data = request.get_json()  # Parse JSON from request body
    message = data.get("message", "No message provided")
    return jsonify({"echo": message}), 200
