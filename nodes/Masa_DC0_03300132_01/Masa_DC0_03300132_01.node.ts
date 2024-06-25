import { INodeTypeMasaBaseDescription, MasaBase } from '../../src/MasaBase/MasaBase';

export class Masa_DC0_03300132_01 extends MasaBase {
	constructor() {
		const baseDescription: INodeTypeMasaBaseDescription = {
			displayName: 'Masa_DC0_03300132_01',            
            name: 'Masa_DC0_03300132_01',
            group: ['output'],
            version: [1],
            description: 'Returns data for Masa_DC0_03300132_01',
            defaults: {
                name: 'Masa_DC0_03300132_01',
            },
            subtitle: 'Masa_DC0_03300132_01'
		};

		super('DC0', '03300132', '01', 'POST', `http://172.21.193.192:1859/sidecar/http/03300132/01/5036?dcn=DC0`, baseDescription);
	}
}
