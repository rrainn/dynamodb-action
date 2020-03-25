const core = require("@actions/core");
const exec = require("@actions/exec");

const settings = ["port", "dbPath", "sharedDb", "cors", "delayTransientStatuses", "optimizeDbBeforeStartup"].reduce((obj, key) => {
	obj[key] = core.getInput(key);
	return obj;
}, {});

(async function (){
	const extraArguments = [
		settings.dbPath ? `-dbPath ${settings.dbPath}` : "-inMemory",
		settings.sharedDb ? "-sharedDb" : null,
		settings.cors ? `-cors ${settings.cors}` : null
		settings.delayTransientStatuses ? `-delayTransientStatuses` : null,
		settings.optimizeDbBeforeStartup ? `-optimizeDbBeforeStartup` : null
	].filter((a) => Boolean(a)).join(" ");
	await exec.exec(`sudo docker run --name dynamodb -d -p ${settings.port}:${settings.port} amazon/dynamodb-local -jar DynamoDBLocal.jar -port ${settings.port}${extraArguments ? ` ${extraArguments}` : ""}`);
})();
