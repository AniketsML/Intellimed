from flask import Flask, request, jsonify
import tensorflow as tf
from keras.models import load_model
from preprocess import preprocess

app = Flask(__name__)

# Load models
blood_cancer_model = tf.keras.models.load_model('models/saved_model.pb')
lung_cancer_model = load_model('models/best_model.hdf5')

@app.route('/upload', methods=['POST'])
def upload_scan():
    file = request.files['file']
    analysis_type = request.form.get('type')

    if not file or not analysis_type:
        return jsonify({'error': 'File and analysis type are required'}), 400

    # Preprocess file
    processed_image = preprocess(file)

    # Predict using the selected model
    if analysis_type == 'blood_cancer':
        prediction = blood_cancer_model.predict(processed_image)
        result = interpret_blood_cancer_prediction(prediction)
    elif analysis_type == 'lung_cancer':
        prediction = lung_cancer_model.predict(processed_image)
        result = interpret_lung_cancer_prediction(prediction)
    else:
        return jsonify({'error': 'Invalid analysis type'}), 400

    return jsonify({'result': result})

def interpret_blood_cancer_prediction(prediction):
    return "Detected: Blood Cancer" if prediction[0] > 0.5 else "No Blood Cancer Detected"

def interpret_lung_cancer_prediction(prediction):
    return "Detected: Lung Cancer" if prediction[0] > 0.5 else "No Lung Cancer Detected"

if __name__ == '__main__':
    app.run(port=5000)
