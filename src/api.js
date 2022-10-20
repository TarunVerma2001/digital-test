import axios from "axios";

const api = axios.create({
  baseURL: "https://competishun-api.moneyyapp.in/v1/upload/audioUpload?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds",
});

export const uploadAudio = (data, onLoad) => {

    console.log("inside upload")

    try {
        var config = {
            method: 'post',
            url: 'https://competishun-api.moneyyapp.in/v1/upload/audioUpload?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            
            onLoad(response.data)

        })
        .catch(function (error) {
            console.log(error);
        });
        
    } catch (err) {
        console.log(err)
    }
    
    
}


export const uploadVideo = (data, onLoad) => {

    console.log("inside upload")

    try {
        var config = {
            method: 'post',
            url: 'https://competishun-api.moneyyapp.in/v1/upload/videoUpload?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            
            onLoad(response.data)

        })
        .catch(function (error) {
            console.log(error);
        });
        
    } catch (err) {
        console.log(err)
    }
    
    
}

export const uploadImage = (data, onLoad) => {

    console.log("inside upload")

    try {
        var config = {
            method: 'post',
            url: 'https://competishun-api.moneyyapp.in/v1/upload/imageUpload?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            
            onLoad(response.data)

        })
        .catch(function (error) {
            console.log(error);
        });
        
    } catch (err) {
        console.log(err)
    }
    
    
}