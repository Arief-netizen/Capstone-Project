from flask import Flask, render_template, request
import numpy as np
import os
import pickle

app = Flask(__name__, template_folder="Front-End")

# Halaman untuk pertama kali aplikasi flask dijalankan yaitu halaman Beranda / index.html
@app.route("/")
def index():
    return render_template("index.html")

# Untuk menuju halaman Tentang Kami / about-page.html
@app.route("/about")
def about():
    return render_template("about-page.html")

# Untuk menuju halaman Cek Kesehatan / input-page.html
@app.route('/predict')
def predict():
    return render_template('input-page.html')

# Untuk menuju halaman Hasil Prediksi / result-page.html
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

    trans = np.array([gender, age, hypertension, heart_disease, ever_married, work_type,
                  Residence_type, avg_glucose_level, bmi, smoking_status]).reshape(1, -1)

    scaler_file = os.path.join('ML-Models/scaler.pkl')

    with open(scaler_file, 'rb') as scaler_pkl:
        scaler = pickle.load(scaler_pkl)

    trans = scaler.transform(trans)

    model_file = os.path.join('ML-Models/model.pkl')
    
    with open(model_file, 'rb') as model_pkl:
        model = pickle.load(model_pkl)

    pred = model.predict(trans)

    return render_template('result-page.html', result=pred[0])

# Untuk menuju halaman Artikel Kesehatan / artikel-page.html
@app.route("/article")
def artikel():
    return render_template("artikel-page.html")


# Tidak jadi dieksekusi karena sudah buat halaman html detail artikel satu persatu
# Untuk menuju halaman Detail Artikel / artikel-detail.html
# @app.route("/article_detail")
# def artikel_detail():
#     return render_template("artikel-detail.html")


# Untuk menuju halaman Detail Artikel 1 / artikel-1.html
@app.route("/Mengenal_Golden_Period_dalam_Penanganan_Stroke")
def artikel_content_1():
    return render_template("artikel-content/artikel-1.html")

# Untuk menuju halaman Detail Artikel 2 / artikel-2.html
@app.route("/Masih_Muda_Bisa_Juga_Kena_Stroke")
def artikel_content_2():
    return render_template("artikel-content/artikel-2.html")

# Untuk menuju halaman Detail Artikel 3 / artikel-3.html
@app.route("/Inilah_Perbedaan_antara_Stroke_Hemoragik_dan_Stroke_Iskemik")
def artikel_content_3():
    return render_template("artikel-content/artikel-3.html")

# Untuk menuju halaman Detail Artikel 4 / artikel-4.html
@app.route("/Jangan_Main_Main_dengan_Stroke_Ringan_Ini_4_Cara_Mengatasinya")
def artikel_content_4():
    return render_template("artikel-content/artikel-4.html")

# Untuk menuju halaman Detail Artikel 5 / artikel-5.html
@app.route("/Faktor_Risiko_TIA_Transient_Ischaemic_Attack")
def artikel_content_5():
    return render_template("artikel-content/artikel-5.html")

# Untuk menuju halaman Detail Artikel 6 / artikel-6.html
@app.route("/About_Stroke_Bahasa_Inggris")
def artikel_content_6():
    return render_template("artikel-content/artikel-6.html")

# Untuk menuju halaman Detail Artikel 7 / artikel-7.html
@app.route("/Apa_itu_Stroke")
def artikel_content_7():
    return render_template("artikel-content/artikel-7.html")


if __name__ == "__main__":
    app.run(debug=True, port=7456)
    
