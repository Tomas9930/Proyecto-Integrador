from flask import Flask, jsonify, send_from_directory
import sqlite3

app = Flask(__name__)

@app.route('/api/images', methods=['GET'])
def get_images():
    conn = sqlite3.connect('gallery.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM images')
    rows = cursor.fetchall()
    conn.close()
    
    images = [{'id': row[0], 'src': row[1], 'alt': row[2], 'autor': row[3]} for row in rows]
    return jsonify(images=images)


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)
