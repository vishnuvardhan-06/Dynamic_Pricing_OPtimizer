from flask import Flask, jsonify, request, send_from_directory
import os
import json

app = Flask(__name__)

# Path to the mock data file
DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'pricing_data.json')

# Load mock pricing data
def load_pricing_data():
    with open(DATA_FILE, 'r') as file:
        return json.load(file)

# Save mock pricing data
def save_pricing_data(data):
    with open(DATA_FILE, 'w') as file:
        json.dump(data, file, indent=4)

# API to fetch pricing data
@app.route('/api/pricing', methods=['GET'])
def get_pricing_data():
    pricing_data = load_pricing_data()
    return jsonify(pricing_data)

# API to save settings (mock implementation)
@app.route('/api/settings', methods=['POST'])
def save_settings():
    settings = request.json  # Get settings from the request body
    print('Settings saved:', settings)
    return jsonify({'message': 'Settings saved successfully!'})

# Serve the front-end files
@app.route('/')
def serve_frontend():
    return send_from_directory('../frontend', 'index.html')

# Serve static files (CSS, JS, etc.)
@app.route('/<path:filename>')
def serve_static_files(filename):
    return send_from_directory('../frontend', filename)

if __name__ == '__main__':
    app.run(debug=True)