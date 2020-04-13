# museum-id
Open source Show Data Museum in Indonesia via Command-CLI with API https://data.go.id/dataset/museum-indonesia

| Pencarian  | Result  |
|---|---|
| Profil Museum Indonesia  | Ok |
| Museum Indonesia Berdasarkan Provinsi  | Ok |
| Museum Indonesia Berdasarkan Kabupaten/Kota  | Ok |
| Museum Indonesia Berdasarkan Kecamatan  | Ok |
| Museum Indonesia Berdasarkan Nama  | Ok |
| Data Provinsi  | Ok |
| Data Kabupaten/Kota Berdasarkan Provinsi  | Ok |
| Data Kecamatan Berdasarkan Kabupaten/Kota  | Ok |

### Langkah awal
#### Ambil beberapa library
```js
npm install
```

### Museum Data Informasi
#### Menampilkan Info Bantuan
```js
node index.js help
```

![help](https://github.com/maulana20/museum-id/blob/master/screen/help.PNG)

#### Menampikan Data Pencarian Berdasarkan Provinsi
```js
node index.js data --province="010000"
```

![museum-province](https://github.com/maulana20/museum-id/blob/master/screen/museum-province.PNG)

#### Menampilkan Data Detail Sesuai No Urut Pada Museum Berdasarkan Provinsi
```js
node index.js data --province="010000" --detail=4
```

![museum-province-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-province-detail.PNG)

#### Menampilkan Data Pencarian Berdasarkan Kota
```js
node index.js data --city="016200"
```

![museum-city](https://github.com/maulana20/museum-id/blob/master/screen/museum-city.PNG)

#### Menampilkan Data Detail Sesuai No Urut Pada Museum Berdasarkan Kota
```js
node index.js data --city "016200" --detail=6
```

![museum-city-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-city-detail.PNG)

#### Menampilkan Data Pencarian Berdasarkan Kecamatan
```js
node index.js data --district="016001"
```

![museum-district](https://github.com/maulana20/museum-id/blob/master/screen/museum-district.PNG)

#### Menampilkan Data Detail Sesuai No Urut Pada Museum Berdasarkan Kecamatan
```js
node index.js data --district="016001" --detail=1
```

![museum-district-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-district-detail.PNG)

#### Menampilkan Data Pencarian Berdasarkan Nama
```js
node index.js data --name "wayang"
```

![museum-name](https://github.com/maulana20/museum-id/blob/master/screen/museum-name.PNG)

#### Menampilkan Data Detail Sesuai No Urut Pada Museum Berdasarkan Nama
```js
node index.js data --name "wayang" --detail=2
```

![museum-name-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-name-detail.PNG)

### Museum Data Wilayah
#### Menampilkan Data Seluruh Provinsi
```js
node index.js region
```

![region-province](https://github.com/maulana20/museum-id/blob/master/screen/region-province.PNG)

#### Menampilkan Data Seluruh Kabupaten
catatan = code => kode wilayah pada data provinsi
```js
node index.js region --code=010000
```

![region-city](https://github.com/maulana20/museum-id/blob/master/screen/region-city.PNG)

#### Menampilkan Data Seluruh Kecamatan
catatan = code => kode wilayah pada data kabupaten
```js
node index.js region --code=016200
```

![region-district](https://github.com/maulana20/museum-id/blob/master/screen/region-district.PNG)

### Author

[Maulana Saputra](mailto:maulanasaputra11091082@gmail.com)
