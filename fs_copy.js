var fs = require('fs');

read(process.argv[2]);

function read (fileName) {

	if (!fileName)
	{
		throw ("Please provied file name as a string"); 
	}

	fs.readFile(fileName ,  function(err, data) {
	
		if (err)
		{
			return consol.log(err);
		}
		
		return writeFile(data.toString());
});
}

function writeFile(stringData)
{
	fs.writeFile(process.argv[3], stringData, function(err) {
	
		if(err)
		{
			return console.log(err)
		}
		
	return console.log('File saved successfully!!');
	
	});
}