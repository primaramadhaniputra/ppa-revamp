export const Link = [
    {
        title: 'Team Work',
        subMenu: [
            {
                subMenuTitle: 'FORM',
                subMenuLink: 'form',
            },
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'report',
            },
        ],
    },
    {
        title: 'SHE',
        subMenu: [
            {
                subMenuTitle: 'FORM',
                subMenuLink: 'form',
            },
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'report',
            },
        ],
    },
    {
        title: 'Operation',
        subMenu: [
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'report',
            },
            {
                subMenuTitle: 'ACCESS & DATA ENTRY',
                subMenuLink: 'access_data_entry',
            },
        ],
    },
    {
        title: 'Administration',
        subMenu: [
            {
                subMenuTitle: 'HC',
                subMenuLink: 'hc',
            },
            {
                subMenuTitle: 'GA',
                subMenuLink: 'ga',
            },
            {
                subMenuTitle: 'LEGAL',
                subMenuLink: 'legal',
            },
        ],
    },
    {
        title: 'System',
        subMenu: [
            {
                subMenuTitle: 'VHMS DOWNLOAD',
                subMenuLink: 'vhms_donwload',
            },
            {
                subMenuTitle: 'DATABASE',
                subMenuLink: 'db',
            },
            {
                subMenuTitle: 'ACCESS CONTROL',
                subMenuLink: 'ac',
            },
            {
                subMenuTitle: 'SURVEY',
                subMenuLink: 'sv',
            },
            {
                subMenuTitle: 'APP VERSION CONTROL',
                subMenuLink: 'avc',
            },
            {
                subMenuTitle: 'USER FEEDBACK',
                subMenuLink: 'uf',
            },
            {
                subMenuTitle: 'ABS MACHINE',
                subMenuLink: 'am',
            },
            {
                subMenuTitle: 'EVENTS',
                subMenuLink: 'ev',
            },
            {
                subMenuTitle: 'DEVICE MONITORING',
                subMenuLink: 'dm',
            },
        ],
    },
];

export const footer = [
    {
        title: 'devotion',
        color: '#F6921E',
    },
    {
        title: 'integrity',
        color: '#F6921E',
    },
    {
        title: 'teamwork',
        color: '#F6921E',
    },
    {
        title: 'creativity',
        color: '#F6921E',
    },
    {
        title: 'winner',
        color: '#F6921E',
    },
    {
        title: 'perfection',
        color: '#F6921E',
    },
];
export const dummyInputDropdown = [
    {
        id: 0,
        values: 'payloads',
        label: 'Device / Production / Payload',
    },
    {
        id: 1,
        values: 'empty-stop',
        // label: 'Empty Stop',
        label: 'Device / Production / Empty Stop',
    },
    {
        id: 2,
        values: 'loading-time',
        // label: 'Loading Time',
        label: 'Device / Production / Loading Time',
    },
    {
        id: 3,
        values: 'speed',
        // label: 'Speed',
        label: 'Device / Production / Speed',
    },
    {
        id: 4,
        values: 'loaded-speed',
        // label: 'Loaded Speed',
        label: 'Device / Production / Loaded Speed',
    },
];
export const dummyDisplayDataDropdown = [
    {
        id: 0,
        values: 'Table',
        label: 'Range Data',
    },
    {
        id: 1,
        values: 'Chart',
        label: 'Range Chart',
    },
    {
        id: 2,
        values: 'Trend',
        label: 'Trend',
    },
];

export const ImageUrl = [
    '/images/mobilProyek.jpg',
    '/images/traktor.jpeg',
    '/images/traktor2.jpeg',
    '/images/traktor3.jpeg',
];

export const ProductionPerfromanceData = [
    {
        title: 'Ach. Cost @ 1 Km',
        plan: ['MTD', '**'],
        act: ['YTD', '**'],
    },
    {
        title: 'Ach. 105% Coal Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
    },
    {
        title: 'Ach. 105% Coal Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
    },
    {
        title: 'Ach. 105% Coal Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
    },
];
export const HaulerPerformanceData = [
    {
        title: 'Payload',
        plan: ['MTD', '95.3 ton'],
        act: ['YTD', '95.3 ton'],
    },
    {
        title: 'Empty Speed',
        plan: ['MTD', '22.6 km/h'],
        act: ['YTD', '22.6 km/h'],
    },
    {
        title: 'Loaded Speed',
        plan: ['MTD', '20.7 km/h'],
        act: ['YTD', '20.7 km/h'],
    },
    {
        title: 'Distance',
        plan: ['MTD', '2.7 km'],
        act: ['YTD', '2.7 km'],
    },
    {
        title: 'EST',
        plan: ['MTD', '1.5 min'],
        act: ['YTD', '1.5 min'],
    },
    {
        title: 'Fuel',
        plan: ['MTD', '75.1 L/H'],
        act: ['YTD', '75.1 L/H'],
    },
];
export const PlanPerfromanceData = [
    {
        title: 'PA',
        plan: ['MTD', '** %'],
        act: ['YTD', '** %'],
    },
    {
        title: 'UA',
        plan: ['MTD', '** %'],
        act: ['YTD', '** %'],
    },
];

export const tabMenu = ['Profil', 'Admin'];

export const dummyValueTable = [
    {
        id: 0,
        values: '10',
        label: '10',
    },
    {
        id: 1,
        values: '20',
        label: '20',
    },
    {
        id: 2,
        values: '30',
        label: '30',
    },
];

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
    return {
        NRP: '12345678',
        Nama: 'linsley',
        Perusahaan: 'PT PO',
        Dept: 'Naruto',
        Jabatan: 'Hokage ke 7',
        Posisi: 'Sayap Kanan',
        Achievment: '45.5%',
        aksi: '...',
    };
});
