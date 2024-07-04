import sqlite3

# Conexión a la base de datos SQLite para crear un archivo .db en el directorio actual
conn = sqlite3.connect('gallery.db')
cursor = conn.cursor()

# Creacion de la tabla para las imagenes
cursor.execute('''
CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT NOT NULL,
    alt TEXT NOT NULL,
    autor TEXT NOT NULL
)
''')

# Insertar datos iniciales en la tabla 
images = [
    ('img/1.webp', 'Imagen 1', 'Antonio Berni'),
    ('img/2.webp', 'Imagen 2', 'Antonio Berni'),
    ('img/3.webp', 'Imagen 3', 'Antonio Berni'),
    ('img/4.webp', 'Imagen 4', 'Antonio Berni'),
    ('img/5.webp', 'Imagen 5', 'Antonio Berni'),
    ('img/6.webp', 'Imagen 6', 'Antonio Berni'),
    ('img/7.webp', 'Imagen 7', 'Lola Mora'),
    ('img/8.webp', 'Imagen 8', 'Lola Mora'),
    ('img/9.webp', 'Imagen 9', 'Lola Mora'),
    ('img/10.webp', 'Imagen 10', 'Molina Campos'),
    ('img/11.webp', 'Imagen 11', 'Molina Campos'),
    ('img/12.webp', 'Imagen 12', 'Molina Campos'),
    ('img/13.webp', 'Imagen 13', 'Molina Campos'),
    ('img/14.webp', 'Imagen 14', 'Molina Campos'),
    ('img/15.webp', 'Imagen 15', 'Molina Campos'),
    ('img/16.webp', 'Imagen 16', 'Molina Campos'),
    ('img/17.webp', 'Imagen 17', 'Molina Campos'),
    ('img/18.webp', 'Imagen 18', 'Molina Campos'),
    ('img/19.webp', 'Imagen 19', 'Molina Campos'),
    ('img/20.webp', 'Imagen 20', 'Molina Campos'),
    ('img/21.webp', 'Imagen 21', 'Benito Quintela'),
    ('img/22.webp', 'Imagen 22', 'Benito Quintela'),
    ('img/23.webp', 'Imagen 23', 'Benito Quintela'),
    ('img/24.webp', 'Imagen 24', 'Benito Quintela'),
    ('img/25.webp', 'Imagen 25', 'Benito Quintela')
]

cursor.executemany('INSERT INTO images (src, alt, autor) VALUES (?, ?, ?)', images)

# Guardar los cambios y cerrar la conexión
conn.commit()
conn.close()

print("Base de datos configurada y datos iniciales insertados.")
