const COLOR_CODE = {
	BLUE: '#d9e1f2',
	GREY: '#d0cece',
	YELLOW: '#fff2cc',
	GREEN: '#e2efda',
	ORANGE: '#fce4d6',
	YELLOW_BG: '#ffff99',
	PINK_BG: '#ffccff',
	BLUE_BG: '#66ccff',
	BLACK_FONT: '#000000',
	RED_FONT: '#fe5449',
};

const ItemType = {
	SIDE_PANEL: 'Side Panel',

	PLENUM_PANEL: 'Plenum Panel',
	ROOF_PANEL: 'Roof Panel',
	BAG_FILTER_PANEL: 'Bag Filter Panel',
	CEILING_FILTER_FRAME: 'Ceiling Filter Frame',
	MISCELLENEOUS: 'Miscellaneous',

	Preparation_Tank: 'Preparation Tank',
	Wipe_Tank: 'Wipe Tank',
	Air_Seal_Tank: 'Air Seal Tank',
	Manual_Tank: 'Manual Tank',
	Robot_Tank: 'Robot Tank',
	Check_Tank: 'Check Tank',
	Flash_Off_Tank: 'Flash Off Tank',
	Setting_Tank: 'Setting Tank',

	Window_Panel: 'Window Panel',
	Block_Type_Panel: 'Block Type Panel',
};

const Library_Casing_Block_BoxTypes = [
	{
		CategoryName: ItemType.SIDE_PANEL,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.BLUE,
		Items: [
			{
				IsStandard: true,
				Name: 'SP1 (S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.PLENUM_PANEL,
		TextColor: 'Black',
		Size: 1,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: true,
				Name: 'PP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP7',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.ROOF_PANEL,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.GREEN,
		Items: [
			{
				IsStandard: true,
				Name: 'RP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.BAG_FILTER_PANEL,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.YELLOW,
		Items: [
			{
				IsStandard: true,
				Name: 'BFP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.CEILING_FILTER_FRAME,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'CFF1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'CFF2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'CFF3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.MISCELLENEOUS,
		TextColor: COLOR_CODE.RED_FONT,
		Size: 2,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-4',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-5',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-6',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
];

const Library_Tank_BoxTypes = [
	{
		CategoryName: ItemType.Preparation_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.BLUE,
		Items: [
			{
				IsStandard: true,
				Name: 'PT1 (S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X1',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Wipe_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: true,
				Name: 'WT1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Air_Seal_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.GREEN,
		Items: [
			{
				IsStandard: true,
				Name: 'AST1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'AST2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Manual_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.YELLOW,
		Items: [
			{
				IsStandard: true,
				Name: 'MT1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'MT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'MT3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'MT4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'MT5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'MT6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Robot_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'RT1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RT3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RT4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RT5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Check_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'CT1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'CT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Flash_Off_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'FT1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'FT2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'FT3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'FT4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'FT5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Setting_Tank,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'ST1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'ST2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'ST3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.MISCELLENEOUS,
		TextColor: COLOR_CODE.RED_FONT,
		Size: 2,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-4',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-5',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-6',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
];

const Library_Strong_Block_BoxTypes = [
	{
		CategoryName: ItemType.SIDE_PANEL,
		TextColor: 'Black',
		Size: 2,
		Color_BG: COLOR_CODE.BLUE,
		Items: [
			{
				IsStandard: true,
				Name: 'SP1 (S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'SP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Window_Panel,
		TextColor: 'Black',
		Size: 1,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: true,
				Name: 'WP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP7',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP8',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'WP9',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.PLENUM_PANEL,
		TextColor: 'Black',
		Size: 1,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: true,
				Name: 'PP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP7',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP8',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP9',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP10',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'PP11',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.ROOF_PANEL,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.GREEN,
		Items: [
			{
				IsStandard: true,
				Name: 'RP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'RP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.BAG_FILTER_PANEL,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.YELLOW,
		Items: [
			{
				IsStandard: true,
				Name: 'BFP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BFP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.CEILING_FILTER_FRAME,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'CFF1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'CFF2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'CFF3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.Block_Type_Panel,
		TextColor: 'Black',
		Size: 3,
		Color_BG: COLOR_CODE.GREY,
		Items: [
			{
				IsStandard: true,
				Name: 'BP1(S)',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP2',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP3',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP4',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP5',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP6',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'BP7',
				Color_FONT: COLOR_CODE.BLACK_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
	{
		CategoryName: ItemType.MISCELLENEOUS,
		TextColor: COLOR_CODE.RED_FONT,
		Size: 2,
		Color_BG: COLOR_CODE.ORANGE,
		Items: [
			{
				IsStandard: false,
				Name: 'X-1',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-2',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-3',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-4',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-5',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
			{
				IsStandard: false,
				Name: 'X-6',
				Color_FONT: COLOR_CODE.RED_FONT,
			},
		],
	},
];

const Panel_Casing_Block_AssemblyType = [
	[
		{
			Name: ItemType.SIDE_PANEL + '_2',
			Color: COLOR_CODE.BLUE,
			Accepts: ItemType.SIDE_PANEL,
			size: 2,
			items: [],
		},
		{
			Name: ItemType.PLENUM_PANEL + '_2',
			Color: COLOR_CODE.ORANGE,
			Accepts: ItemType.PLENUM_PANEL,
			size: 1,
			items: [],
		},
	],
	[
		{
			Name: ItemType.ROOF_PANEL,
			Color: COLOR_CODE.GREEN,
			Accepts: ItemType.ROOF_PANEL,
			size: 3,
			items: [],
		},
	],
	[
		{
			Name: ItemType.PLENUM_PANEL + '_1',
			Color: COLOR_CODE.ORANGE,
			Accepts: ItemType.PLENUM_PANEL,
			size: 1,
			items: [],
		},
		{
			Name: ItemType.SIDE_PANEL + '_1',
			Color: COLOR_CODE.BLUE,
			Accepts: ItemType.SIDE_PANEL,
			size: 2,
			items: [],
		},
	],
	[
		{
			Name: ItemType.BAG_FILTER_PANEL,
			Color: COLOR_CODE.YELLOW,
			Accepts: ItemType.BAG_FILTER_PANEL,
			size: 3,
			items: [],
		},
	],
	[
		{
			Name: ItemType.CEILING_FILTER_FRAME,
			Color: COLOR_CODE.GREY,
			Accepts: ItemType.CEILING_FILTER_FRAME,
			size: 3,
			items: [],
		},
	],
];

const Panel_Strong_Block_AssemblyType = [
	[
		{
			Name: ItemType.SIDE_PANEL + '_2',
			Color: COLOR_CODE.BLUE,
			Accepts: ItemType.SIDE_PANEL,
			size: 2,
			items: [],
		},
		{
			Name: ItemType.PLENUM_PANEL + '_2',
			Color: COLOR_CODE.ORANGE,
			Accepts: ItemType.PLENUM_PANEL,
			size: 1,
			items: [],
		},
	],
	[
		{
			Name: ItemType.ROOF_PANEL,
			Color: COLOR_CODE.GREEN,
			Accepts: ItemType.ROOF_PANEL,
			size: 3,
			items: [],
		},
	],
	[
		{
			Name: ItemType.PLENUM_PANEL + '_1',
			Color: COLOR_CODE.ORANGE,
			Accepts: ItemType.PLENUM_PANEL,
			size: 1,
			items: [],
		},
		{
			Name: ItemType.SIDE_PANEL + '_1',
			Color: COLOR_CODE.BLUE,
			Accepts: ItemType.SIDE_PANEL,
			size: 2,
			items: [],
		},
	],
	[
		{
			Name: ItemType.BAG_FILTER_PANEL,
			Color: COLOR_CODE.YELLOW,
			Accepts: ItemType.BAG_FILTER_PANEL,
			size: 3,
			items: [],
		},
	],
	[
		{
			Name: ItemType.CEILING_FILTER_FRAME,
			Color: COLOR_CODE.GREY,
			Accepts: ItemType.CEILING_FILTER_FRAME,
			size: 3,
			items: [],
		},
	],
];

const Panel_Tank_AssemblyType = [
	[
		{
			Name: '',
			Color: COLOR_CODE.BLUE,
			Accepts: [
				ItemType.Preparation_Tank,
				ItemType.Wipe_Tank,
				ItemType.Air_Seal_Tank,
				ItemType.Manual_Tank,
				ItemType.Robot_Tank,
				ItemType.Check_Tank,
				ItemType.Flash_Off_Tank,
				ItemType.Setting_Tank,
			],
			size: 2,
			items: [],
		},
	],
];

export default {
	COLOR_CODE,
	ItemType,
	Library_Casing_Block_BoxTypes: Library_Casing_Block_BoxTypes,
	Library_Tank_BoxTypes: Library_Tank_BoxTypes,
	Library_Strong_Block_BoxTypes: Library_Strong_Block_BoxTypes,
	Panel_Casing_Block_AssemblyType: Panel_Casing_Block_AssemblyType,
	Panel_Strong_Block_AssemblyType: Panel_Strong_Block_AssemblyType,
	Panel_Tank_AssemblyType: Panel_Tank_AssemblyType,
};
