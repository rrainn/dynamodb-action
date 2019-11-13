const core = require("@actions/core");
const exec = require("@actions/exec");

(async function (){
	await exec.exec("sudo docker run --name dynamodb -d -p 8000:8000 amazon/dynamodb-local");
})();
