from flask import Flask
from flask import render_template
from flask import request
import numpy as np
import os
import pickle

app = Flask(__name__, template_folder="Front-End")

model = pickle.load(open('ML-Model/model.pkl', 'rb'))


@app.route("/")
def index():
    return render_template("home.html")


@app.route("/result", methods=['POST', 'GET'])
def result():
    gender = int(request.form['gender'])
    age = int(request.form['age'])
    hypertension = int(request.form['hypertension'])
    heart_disease = int(request.form['heart_disease'])
    ever_married = int(request.form['ever_married'])
    work_type = int(request.form['work_type'])
    Residence_type = int(request.form['Residence_type'])
    avg_glucose_level = float(request.form['avg_glucose_level'])
    bmi = float(request.form['bmi'])
    smoking_status = int(request.form['smoking_status'])

    x = np.array([gender, age, hypertension, heart_disease, ever_married, work_type,
                  Residence_type, avg_glucose_level, bmi, smoking_status]).reshape(1, -1)

    scaler_path = os.path.join('ML-Model/scaler.pkl') 
                               
    scaler = None
    with open(scaler_path, 'rb') as scaler_file:
        scaler = pickle.load(scaler_file)

    x = scaler.transform(x)

    prediction = model.predict_proba(x)
    output = '{0:.{1}f}'.format(prediction[0][1], 2)

    if output>str(0.5):
        return render_template('stroke-yes.html', pred='Probabilitas Anda terkena stroke adalah : {}'.format(output))
    else:
        return render_template('stroke-no.html', pred='Probabilitas Anda terkena stroke adalah : {}'.format(output))


if __name__ == "__main__":
    app.run(debug=True, port=7654)
