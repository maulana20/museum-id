# museum-id
Open source Show Data Museum in Indonesia via Command-CLI with API https://data.go.id/dataset/museum-indonesia

| Pencarian  | Result  |
|---|---|
| Profil Museum Indonesia  | Ok |
| Museum Indonesia Berdasarkan Provinsi  | Ok |
| Museum Indonesia Berdasarkan Kabupaten/Kota  | Ok |
| Museum Indonesia Berdasarkan Kecamatan  | Ok |
| Museum Indonesia Berdasarkan Nama  | Ok |
| Data Provinsi  | In Progress |
| Data Kabupaten/Kota Berdasarkan Provinsi  | In Progress |
| Data Kecamatan Berdasarkan Kabupaten/Kota  | In Progress |

### Museum Data
#### pencarian berdasarkan profil
```js
node index.js data --profile "4A33CF6F-A284-4E42-830B-E7DC755614CD"
```

![museum-profile](https://github.com/maulana20/museum-id/blob/master/screen/museum-profile.PNG)

#### pencarian berdasarkan provinsi
```js
node index.js data --province "010000"
```

![museum-province](https://github.com/maulana20/museum-id/blob/master/screen/museum-province.PNG)

#### pencarian berdasarkan kota
```js
node index.js data --city "016200"
```

![museum-city](https://github.com/maulana20/museum-id/blob/master/screen/museum-city.PNG)

#### pencarian berdasarkan kecamatan
```js
node index.js data --district "016001"
```

![museum-district](https://github.com/maulana20/museum-id/blob/master/screen/museum-district.PNG)

#### pencarian berdasarkan nama
```js
node index.js data --name "wayang"
```

![museum-name](https://github.com/maulana20/museum-id/blob/master/screen/museum-name.PNG)

