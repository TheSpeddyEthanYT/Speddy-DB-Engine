const fs = require("fs")

function createDataStore(name, jsonObj) {
    if(typeof jsonObj[name] === "undefined"){ 
        try{
            jsonObj[name] = {} // Crea la unidad
            return {code: 0, details: "Datastore created"}
        }catch(err){
            return {code: -1, details: `Datastore could not be created due an error: ${err}`}
        }
    }else{
        return {code: -2, details: "Datastore could not be created beacuse there was a datastore with that name."}
    }
}

function saveData(DataId, dataStore, jsonObj, value){

    let DataStore = jsonObj[dataStore]
    if(!(typeof DataStore === "undefined")){
        try{
            DataStore[DataId] = value
            return {code: 1, details: `Data saved on ${DataId} inside the ${dataStore} Datastore.`}
        }catch(err){
            return {code: -3, details: `Could not access that ID due an error: ${err}`}
        }

    }else{
        return {code: -4, details: "Could not access that Datastore."}
    }
}

function readData(DataId, dataStore, jsonObj){
    let DataStore = jsonObj[dataStore]
    if(!(typeof DataStore === "undefined")){
        if(!(typeof DataStore[DataId] === "undefined")){
            try {
                return {code: 2, details: "Value returned successfully", value: DataStore[DataId]}
            } catch (err) {
                return {code: -3, details: `Could not access that ID due an error: ${err}`}
            }
        }else{
            return {code: -5, details: `Could not find an ID by that name on that Datastore.`}
        }
    }else{
        return {code: -4, details: "Could not access that Datastore."}
    }
}

function readSave(file){
    try {
        return {code: 3, details: "File read successfully", data: require(`${file}.json`)}
    } catch (err) {
        return {code: -6, details: `Error reading the save file: ${err}`}
    }

}

function writeSave(file, jsonObj){
    fs.writeFile(`${file}.json`, JSON.stringify(jsonObj), function (err) {
        if (err) return {code: -7, details: `Could not write in the savefile due an error: ${err}`};
        return {code: 4, details: "File saved sucessfully"}
      });
}

module.exports = {createDataStore, saveData, readData, readSave, writeSave}
