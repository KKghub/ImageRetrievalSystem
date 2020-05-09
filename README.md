# Image Retrieval System
The Project implements Image based search

## Setting up server
Assuming you have all the python dependencies installed, the dataset should be in the following structure
```
ImageRetrievalSystem
│
└───ClassifiedDatasetImages
    │
    └───cars
    │   └───file02.jpeg
    │   └───file11xy2.jpeg
    │   └───...
    │
    └───bikes
    │   └───file089.jpeg
    │   └───filexty.jpeg
    │   └───...
    ...
```
where `cars` and `bikes` are labels and files inside them can be arbitrary named image files
```
cd server
python train_and_build.py
```
It will take some time to build and save the model

## Running the server
```
cd server
python server.py
```

## Setting up client
```
cd client
npm install
```

## Running the client
```
cd client
npm start
```

