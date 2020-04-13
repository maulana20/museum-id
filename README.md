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
#### pembantu
```js
node index.js help
```

![help](https://github.com/maulana20/museum-id/blob/master/screen/help.PNG)

#### pencarian berdasarkan provinsi
```js
node index.js data --province "010000"
```

![museum-province](https://github.com/maulana20/museum-id/blob/master/screen/museum-province.PNG)

#### detail no urut museum berdasarkan provinsi
```js
node index.js data --province "010000" --detail=4
```

![museum-province-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-province-detail.PNG)

#### pencarian berdasarkan kota
```js
node index.js data --city "016200"
```

![museum-city](https://github.com/maulana20/museum-id/blob/master/screen/museum-city.PNG)

#### detail no urut museum berdasarkan kota
```js
node index.js data --city "016200" --detail=6
```

![museum-city-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-city-detail.PNG)

#### pencarian berdasarkan kecamatan
```js
node index.js data --district "016001"
```

![museum-district](https://github.com/maulana20/museum-id/blob/master/screen/museum-district.PNG)

#### detail no urut museum berdasarkan kecamatan
```js
node index.js data --district "016001" --detail=1
```

![museum-district-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-district-detail.PNG)

#### pencarian berdasarkan nama
```js
node index.js data --name "wayang"
```

![museum-name](https://github.com/maulana20/museum-id/blob/master/screen/museum-name.PNG)

#### detail no urut museum berdasarkan nama
```js
node index.js data --name "wayang" --detail=2
```

![museum-name-detail](https://github.com/maulana20/museum-id/blob/master/screen/museum-name-detail.PNG)
