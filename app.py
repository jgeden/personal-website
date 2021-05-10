from flask import Flask, render_template, send_from_directory
import os
app = Flask(__name__)

@app.route('/')
@app.route('/aboutme')
def index_page():
    return render_template('aboutMe.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html')

@app.route('/skills')
def skils_page():
    return render_template('skills.html')

@app.route('/resume')
def resume_page():
    return render_template('resume.html')

@app.route('/resumefile')
def resume():
    directory = os.path.abspath(os.getcwd())
    filepath = directory + '/static/files/'
    return send_from_directory(filepath, 'Joshua_Geden_Resume.pdf')
