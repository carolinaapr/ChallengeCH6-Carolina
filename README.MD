Inisiasi file package.json 
    $npm init -y
Install package manager yang dibutuhkan (express, embedded javascript - EJS, postgres, pg-hstore, sequlize)
    $npm install express ejs pg pg-hstore sequelize
Insisiasi fitur sequelize membentuk folder configuration,migration,models,seeders
    $npx sequelize-cli init

Atur/ setup konfigurasi database administrator di config>config.json (menggunakan postgresql databae owner:carolina)
    username: "carolina",
    password: "password",
    database: "chapter6",
    dialect: "postgres",

Buat file entry point. project ini menggunakan app.js sebagai entry point dan input kode untuk dapat mengakses localhost.