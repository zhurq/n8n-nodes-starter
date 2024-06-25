import type {
	ITriggerFunctions,
	//IDataObject,
	INodeType,
	INodeTypeDescription,
	ITriggerResponse,
	//IRun,
} from 'n8n-workflow';
//import { createDeferredPromise, NodeOperationError } from 'n8n-workflow';
import express from 'express';
import http from 'http';
import axios from 'axios';

const subscribeUrl = 'http://172.21.104.241:10105/eventmesh/subscribe/local';
const unsubscribeUrl = 'http://172.21.104.241:10105/eventmesh/unsubscribe/local';
const dataserverInfo = {
	host: '10.59.1.159',
	port: 33456,
	basepath: '/trigger/rmb/sub/callbak'
};

var app = express();
var dataserver: http.Server;

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


export class WemqTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wemq Trigger',
		name: 'WemqTrigger',
		icon: 'file:wemq.svg',
		group: ['trigger'],
		version: [1, 1.1],
		description: 'Consume messages from a Wemq topic',
		defaults: {
			name: 'Wemq Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [],
		properties: [
			{
				displayName: 'Topic',
				name: 'topic',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'topic-name',
				description: 'Name of the queue of topic to consume from',
			},
			{
				displayName: 'Group ID',
				name: 'groupId',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'n8n-rmb',
				description: 'ID of the consumer group',
			},
		],
	};



	async trigger(this: ITriggerFunctions): Promise<ITriggerResponse> {
		const topic = this.getNodeParameter('topic') as string;

		const groupId = this.getNodeParameter('groupId') as string;

		const dataserverUrl = `http://${dataserverInfo.host}:${dataserverInfo.port}${dataserverInfo.basepath}/${topic}/${groupId}`

		const startDataService = async () => {
			app.use(express.json())
	
			app.post(dataserverInfo.basepath + "/*", (req: express.Request, res: express.Response) => {
				console.log(req.url);
				console.log(req.body);

				this.emit([this.helpers.returnJsonArray([req.body])]);

				res.json({status: 'ok'});
			})
			try {
				dataserver = await app.listen(33456);
				console.log(`WemqTrigger startDataService ok`);
			} catch(e) {
				console.log(`WemqTrigger startDataService fail`);
			}
		}

		const stopDataService = async () => {
			try {
				dataserver = await dataserver.close((err?: Error) => {
					console.log(`WemqTrigger stopDataService closed with err:${err?err:null}`);
				});
				dataserver.unref();
				console.log(`WemqTrigger stopDataService ok`);
			} catch(e) {
				console.log(`WemqTrigger stopDataService fail`);
			}
		}

		const startConsumer = async () => {
			const data = JSON.stringify({
				url: dataserverUrl,
				consumerGroup: groupId,
				topic:[{
					mode: "CLUSTERING",
					topic: topic,
					type: "ASYNC"
				}]
			});
			
			const options = {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			};
	
			try {
				const response = await axios.post(subscribeUrl, data, options);
				console.log('%j', response.data);
			} catch (error) {
				console.log('%j', error);
			}
			console.log(`WemqTrigger startConsumer ok`);
		};

		const stopConsumer = async () => {
			const data = JSON.stringify({
				url: dataserverUrl,
				consumerGroup: groupId,
				topic: [topic]
			})
			
			const options = {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': data.length
				}
			}
	
			try {
				const response = await axios.post(unsubscribeUrl, data, options)
				console.log('%j', response.data);
			} catch (error) {
				console.log('%j', error);
			}
			console.log(`WemqTrigger stopConsumer ok`);
		}

		//await startDataService();
		//await startConsumer();

		// The "closeFunction" function gets called by n8n whenever
		// the workflow gets deactivated and can so clean up.
		async function closeFunction() {
			await stopConsumer();
			await sleep(3000);
			await stopDataService();
		}

		// The "manualTriggerFunction" function gets called by n8n
		// when a user is in the workflow editor and starts the
		// workflow manually. So the function has to make sure that
		// the emit() gets called with similar data like when it
		// would trigger by itself so that the user knows what data
		// to expect.
		async function manualTriggerFunction() {
			await startDataService();
			await startConsumer();
		}

		return {
			closeFunction,
			manualTriggerFunction,
		};
	}
}
