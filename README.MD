Inisiasi file package.json <br />
    $npm init -y
Install package manager yang dibutuhkan (express, embedded javascript - EJS, postgres, pg-hstore, sequlize) <br />
    $npm install express ejs pg pg-hstore sequelize
Insisiasi fitur sequelize membentuk folder configuration,migration,models,seeders <br />
    $npx sequelize-cli init

Atur/ setup konfigurasi database administrator di config>config.json (menggunakan postgresql databae owner:carolina) <br>
    username: "carolina",
    password: "password",
    database: "chapter6",
    dialect: "postgres",

Buat file entry point. project ini menggunakan app.js sebagai entry point dan input kode untuk dapat mengakses localhost.<br />

pada package.json tambahkan script untuk memnjalankan npm start dan nodemon secara otomatis sehingga saat mengupdate akan berjalan otomatis
    { "start": "nodemon app.js"}

membuat model yang akan disambungkan ke database
  
    Membuat user_id
    Mebuat user_game_biodata
    Membuat user_game_history

Migrasi 
    tabel user id
    tabel user_game_biodata
        tabel user_game_history

Masukkin data dummy user_id ke dalam database tes berhasil/tidak

menghubungkan databse ke dalam tampilan web ejs