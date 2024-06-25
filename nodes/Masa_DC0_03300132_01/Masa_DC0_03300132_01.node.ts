import path from 'path';
import { readFileSync } from 'fs';
import { INodeTypeMasaBaseDescription, MasaConf, MasaBase } from '../../src/MasaBase/MasaBase';

export class Masa_DC0_03300132_01 extends MasaBase {
	constructor() {
        let masaconf: MasaConf = JSON.parse(readFileSync(path.join(__dirname, 'masa.json'), { encoding: 'utf8' }));

        let version = masaconf.version;
        let dcn = masaconf.dcn;
        let serviceid = masaconf.serviceid;
        let scenarioid = masaconf.scenarioid;
        let name = `Masa_${dcn}_${serviceid}_${scenarioid}`;
        
		const baseDescription: INodeTypeMasaBaseDescription = {
			displayName: name,            
            name: name,
            group: ['output'],
            version: [version],
            description: `Returns data for ${name}`,
            defaults: {
                name: name,
            },
            subtitle: name
		};

		super(masaconf, baseDescription);
	}
}
