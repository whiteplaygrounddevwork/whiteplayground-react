"use strict"
import axios from 'axios';


export function register(user,callback,errorCallback){
    var bodyFormData = new FormData();
    bodyFormData.set('Email', user.Email);
    bodyFormData.set('Password', user.Password);
    let url = 'https://wpg-dev-web.azurewebsites.net/api/Account/Register';
    var authOptions = {
      method: 'POST',
      url: url,
      data: bodyFormData,
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };
    axios(authOptions).then(function (response) {
        if (callback && typeof callback === "function"){
            callback(response);
          } 
    })
      .catch(function (err) {
        if (errorCallback && typeof errorCallback === "function"){
            errorCallback(err);
          }
      })
}

export function login(user,callback,errorCallback){    
    let url = 'https://wpg-dev-web.azurewebsites.net/api/Account/login';
    var authOptions = {
      method: 'POST',
      url: url,
      data: user,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      json: true
    };
    axios(authOptions).then(function (response) {
        if (callback && typeof callback === "function"){
            callback(response);
          } 
    })
      .catch(function (err) {
        if (errorCallback && typeof errorCallback === "function"){
            errorCallback(err);
          }
      })
}