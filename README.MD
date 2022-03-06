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
    $npx sequelize-cli model:generate --name user --attributes user_id:integer, email:string, password:string
    Mebuat user_game_biodata
    Membuat user_game_history
Migrasi tabel user id
    $npx sequelize
Masukkin data dummy user_id ke dalam database
    $npx sequelize-cli seed:generate --name dummy-user
Menampiilkan data userid pada dashborad (base.ejs)