export const COLOR_CODE = {
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

export const ItemType = {
	SIDE_PANEL: 'Side Panel',
	PLENUM_PANEL: 'Plenum Panel',
	ROOF_PANEL: 'RoofPanel',
	BAG_FILTER_PANEL: 'Bag Filter Panel',
	CEILING_FILTER_FRAME: 'Ceiling Filter Frame',
	MISCELLENEOUS: 'Miscellaneous',
};

export const LibraryBoxTypes = [
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

export const PanelAssemblyType = [
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
