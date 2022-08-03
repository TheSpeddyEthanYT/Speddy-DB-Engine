<h1>Save Engine v1.0.0</h1>

<p>This save engine is based on "Roblox Save Engine" </p>

<code>createDataStore(name,jsonObj)</code>

<p>Creates a datastore by that name on that JSON object</p>

<code>saveData(DataId, dataStore, jsonObj, value)</code>

<p>Creates a data save ID on that Datastore and assigns a value on it</p>

<code>readData(DataId, dataStore, jsonObj)</code>

<p>Reads that ID and returns a status which has the value of the requested ID</p>

<code>readSave(file)</code>

<p>Reads that saved file and returns a code which has the jsonObj of the file.</p>

<h4>NOTE: The "file" property is the whole file location excluding the extension, Example: "C:/Users/user/Desktop/projects/test/save" instead of "C:/Users/user/Desktop/projects/test/save.json"</h4>


<code>writeSave(file, jsonObj)</code>

<p>Writes the file with that JSON Object</p>

<h4>NOTE: The "file" property is the whole file location excluding the extension, Example: "C:/Users/user/Desktop/projects/test/save" instead of "C:/Users/user/Desktop/projects/test/save.json"</h4>

<h1>Status Codes</h1>

<h2>Success Codes:</h2>

<h2>Code 0</h2>

<h3>Used at:</h3>
<code>createDataStore</code>

<h3>Body:</h3>
<code>{code: 0, details: "Datastore created"}</code>

<h3>Description:</h3>
<p>Datastore Created, This means there is a new Datastore on that JSON object</p>

<h2>Code 1</h2>

<h3>Used at:</h3>
<code>SaveData</code>

<h3>Body:</h3>
<code>{code: 1, details: `Data saved on ${DataId} inside the ${dataStore}</code>

<h3>Description:</h3>
<p>Data has been saved on that ID inside the datastore successfully</p>

<h2>Code 2</h2>

<h3>Used at:</h3>
<code>readData</code>

<h3>Body:</h3>
<code>{code: 2, details: "Value returned successfully", value: DataStore[DataId]}</code>

<h3>Description:</h3>
<p>Program could access and read the value of the requested ID, data is stored at "value" property</p>

<h2>Code 3</h2>

<h3>Used at:</h3>
<code>readSave</code>

<h3>Body:</h3>
<code>{code: 3, details: "File read successfully", data: require(`${file}.json`)}</code>

<h3>Description:</h3>
<p>File has been read and got its JSON object</p>

<h2>Code 4</h2>

<h3>Used at:</h3>
<code>writeSave</code>

<h3>Body:</h3>
<code>{code: 4, details: "File saved sucessfully"}</code>

<h3>Description:</h3>
<p>File has been saved!</p>

<h2>Error Codes:</h2>

<h2>Code -1</h2>

<h3>Used at:</h3>
<code>createDataStore</code>

<h3>Body:</h3>
<code>{code: -1, details: `Datastore could not be created due an error: ${err}`}</code>

<h3>Description:</h3>
<p>Program cannot create a Datastore, explained by "err"</p>

<h2>Code -2</h2>

<h3>Used at:</h3>
<code>createDataStore</code>

<h3>Body:</h3>
<code>{code: -2, details: "Datastore could not be created beacuse there was a datastore with that name."}</code>

<h3>Description:</h3>
<p>Cannot create another datastore with that name.</p>

<h2>Code -3</h2>

<h3>Used at:</h3>
<code>saveData</code>
<code>readData</code>

<h3>Body:</h3>
<code>{code: -3, details: `Could not access that ID due an error: ${err}`}</code>

<h3>Description:</h3>
<p>Cannot access that ID due an error explained by "err"</p>

<h2>Code -4</h2>

<h3>Used at:</h3>
<code>saveData</code>
<code>readData</code>

<h3>Body:</h3>
<code>{code: -4, details: "Could not access that Datastore."}</code>

<h3>Description:</h3>
<p>Cannot access that Datastore do an error, The most common error is Misspelling datastore name</p>

<h2>Code -5</h2>

<h3>Used at:</h3>
<code>readData</code>

<h3>Body:</h3>
<code>{code: -5, details: `Could not find an ID by that name on that Datastore.`}</code>

<h3>Description:</h3>
<p>Program could not find an ID by that name on the Datastore, check if the ID or the Datastore name are spelled correctly</p>

<h2>Code -6</h2>

<h3>Used at:</h3>
<code>readSave</code>

<h3>Body:</h3>
<code>{code: -6, details: `Error reading the save file: ${err}`}</code>

<h3>Description:</h3>
<p>Could not read the file, Explained by "err"</p>

<h2>Code -7</h2>

<h3>Used at:</h3>
<code>writeSave</code>

<h3>Body:</h3>
<code>{code: -7, details: `Could not write in the savefile due an error: ${err}`};</code>

<h3>Description:</h3>
<p>Could not write in the file, Explained by "err"</p>


