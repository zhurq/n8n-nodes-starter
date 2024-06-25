import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const oldVersionNotice: INodeProperties = {
	displayName:
		'<strong>New node version available:</strong> get the latest version with added features from the nodes panel.',
	name: 'oldVersionNotice',
	type: 'notice',
	default: '',
};

export const returnAllOrLimit: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
];

export const encodeDecodeOptions: INodePropertyOptions[] = [
	{
		name: 'Armscii8',
		value: 'armscii8',
	},
	{
		name: 'Ascii',
		value: 'ascii',
	},
	{
		name: 'Base64',
		value: 'base64',
	},
	{
		name: 'Big5hkscs',
		value: 'big5hkscs',
	},
	{
		name: 'Binary',
		value: 'binary',
	},
	{
		name: 'Cesu8',
		value: 'cesu8',
	},
	{
		name: 'Cp1046',
		value: 'cp1046',
	},
	{
		name: 'Cp1124',
		value: 'cp1124',
	},
	{
		name: 'Cp1125',
		value: 'cp1125',
	},
	{
		name: 'Cp1129',
		value: 'cp1129',
	},
	{
		name: 'Cp1133',
		value: 'cp1133',
	},
	{
		name: 'Cp1161',
		value: 'cp1161',
	},
	{
		name: 'Cp1162',
		value: 'cp1162',
	},
	{
		name: 'Cp1163',
		value: 'cp1163',
	},
	{
		name: 'Cp437',
		value: 'cp437',
	},
	{
		name: 'Cp720',
		value: 'cp720',
	},
	{
		name: 'Cp737',
		value: 'cp737',
	},
	{
		name: 'Cp775',
		value: 'cp775',
	},
	{
		name: 'Cp808',
		value: 'cp808',
	},
	{
		name: 'Cp850',
		value: 'cp850',
	},
	{
		name: 'Cp852',
		value: 'cp852',
	},
	{
		name: 'Cp855',
		value: 'cp855',
	},
	{
		name: 'Cp856',
		value: 'cp856',
	},
	{
		name: 'Cp857',
		value: 'cp857',
	},
	{
		name: 'Cp858',
		value: 'cp858',
	},
	{
		name: 'Cp860',
		value: 'cp860',
	},
	{
		name: 'Cp861',
		value: 'cp861',
	},
	{
		name: 'Cp862',
		value: 'cp862',
	},
	{
		name: 'Cp863',
		value: 'cp863',
	},
	{
		name: 'Cp864',
		value: 'cp864',
	},
	{
		name: 'Cp865',
		value: 'cp865',
	},
	{
		name: 'Cp866',
		value: 'cp866',
	},
	{
		name: 'Cp869',
		value: 'cp869',
	},
	{
		name: 'Cp922',
		value: 'cp922',
	},
	{
		name: 'Cp936',
		value: 'cp936',
	},
	{
		name: 'Cp949',
		value: 'cp949',
	},
	{
		name: 'Cp950',
		value: 'cp950',
	},
	{
		name: 'Eucjp',
		value: 'eucjp',
	},
	{
		name: 'Gb18030',
		value: 'gb18030',
	},
	{
		name: 'Gbk',
		value: 'gbk',
	},
	{
		name: 'Georgianacademy',
		value: 'georgianacademy',
	},
	{
		name: 'Georgianps',
		value: 'georgianps',
	},
	{
		name: 'Hex',
		value: 'hex',
	},
	{
		name: 'Hproman8',
		value: 'hproman8',
	},
	{
		name: 'Iso646cn',
		value: 'iso646cn',
	},
	{
		name: 'Iso646jp',
		value: 'iso646jp',
	},
	{
		name: 'Iso88591',
		value: 'iso88591',
	},
	{
		name: 'Iso885910',
		value: 'iso885910',
	},
	{
		name: 'Iso885911',
		value: 'iso885911',
	},
	{
		name: 'Iso885913',
		value: 'iso885913',
	},
	{
		name: 'Iso885914',
		value: 'iso885914',
	},
	{
		name: 'Iso885915',
		value: 'iso885915',
	},
	{
		name: 'Iso885916',
		value: 'iso885916',
	},
	{
		name: 'Iso88592',
		value: 'iso88592',
	},
	{
		name: 'Iso88593',
		value: 'iso88593',
	},
	{
		name: 'Iso88594',
		value: 'iso88594',
	},
	{
		name: 'Iso88595',
		value: 'iso88595',
	},
	{
		name: 'Iso88596',
		value: 'iso88596',
	},
	{
		name: 'Iso88597',
		value: 'iso88597',
	},
	{
		name: 'Iso88598',
		value: 'iso88598',
	},
	{
		name: 'Iso88599',
		value: 'iso88599',
	},
	{
		name: 'Koi8r',
		value: 'koi8r',
	},
	{
		name: 'Koi8ru',
		value: 'koi8ru',
	},
	{
		name: 'Koi8t',
		value: 'koi8t',
	},
	{
		name: 'Koi8u',
		value: 'koi8u',
	},
	{
		name: 'Maccenteuro',
		value: 'maccenteuro',
	},
	{
		name: 'Maccroatian',
		value: 'maccroatian',
	},
	{
		name: 'Maccyrillic',
		value: 'maccyrillic',
	},
	{
		name: 'Macgreek',
		value: 'macgreek',
	},
	{
		name: 'Maciceland',
		value: 'maciceland',
	},
	{
		name: 'Macintosh',
		value: 'macintosh',
	},
	{
		name: 'Macroman',
		value: 'macroman',
	},
	{
		name: 'Macromania',
		value: 'macromania',
	},
	{
		name: 'Macthai',
		value: 'macthai',
	},
	{
		name: 'Macturkish',
		value: 'macturkish',
	},
	{
		name: 'Macukraine',
		value: 'macukraine',
	},
	{
		name: 'Mik',
		value: 'mik',
	},
	{
		name: 'Pt154',
		value: 'pt154',
	},
	{
		name: 'Rk1048',
		value: 'rk1048',
	},
	{
		name: 'Shiftjis',
		value: 'shiftjis',
	},
	{
		name: 'Tcvn',
		value: 'tcvn',
	},
	{
		name: 'Tis620',
		value: 'tis620',
	},
	{
		name: 'Ucs2',
		value: 'ucs2',
	},
	{
		name: 'Utf16',
		value: 'utf16',
	},
	{
		name: 'Utf16be',
		value: 'utf16be',
	},
	{
		name: 'Utf32',
		value: 'utf32',
	},
	{
		name: 'Utf32be',
		value: 'utf32be',
	},
	{
		name: 'Utf32le',
		value: 'utf32le',
	},
	{
		name: 'Utf7',
		value: 'utf7',
	},
	{
		name: 'Utf7imap',
		value: 'utf7imap',
	},
	{
		name: 'Utf8',
		value: 'utf8',
	},
	{
		name: 'Viscii',
		value: 'viscii',
	},
	{
		name: 'Windows1250',
		value: 'windows1250',
	},
	{
		name: 'Windows1251',
		value: 'windows1251',
	},
	{
		name: 'Windows1252',
		value: 'windows1252',
	},
	{
		name: 'Windows1253',
		value: 'windows1253',
	},
	{
		name: 'Windows1254',
		value: 'windows1254',
	},
	{
		name: 'Windows1255',
		value: 'windows1255',
	},
	{
		name: 'Windows1256',
		value: 'windows1256',
	},
	{
		name: 'Windows1257',
		value: 'windows1257',
	},
	{
		name: 'Windows1258',
		value: 'windows1258',
	},
	{
		name: 'Windows874',
		value: 'windows874',
	},
];
