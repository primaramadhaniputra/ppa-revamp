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
                subMenuLink: '/operation/device_production_payload',
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
        icon: 'ach_cost.png',
    },
    {
        title: 'Ach. 105% Coal Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
        icon: 'ach_coal_production.png',
    },
    {
        title: 'Ach. 105% OB Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
        icon: 'ach_ob_production.png',
    },
    {
        title: 'Ach. 105% MP Production',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
        icon: 'mp_productivity.png',
    },
];
export const HaulerPerformanceData = [
    {
        title: 'Payload',
        plan: ['MTD', '95.3 ton'],
        act: ['YTD', '95.3 ton'],
        icon: 'payload.png',
    },
    {
        title: 'Empty Speed',
        plan: ['MTD', '22.6 km/h'],
        act: ['YTD', '22.6 km/h'],
        icon: 'empty_speed.png',
    },
    {
        title: 'Loaded Speed',
        plan: ['MTD', '20.7 km/h'],
        act: ['YTD', '20.7 km/h'],
        icon: 'loaded_speed.png',
    },
    {
        title: 'Distance',
        plan: ['MTD', '2.7 km'],
        act: ['YTD', '2.7 km'],
        icon: 'distance.png',
    },
    {
        title: 'EST',
        plan: ['MTD', '1.5 min'],
        act: ['YTD', '1.5 min'],
        icon: 'est.png',
    },
    {
        title: 'Fuel',
        plan: ['MTD', '75.1 L/H'],
        act: ['YTD', '75.1 L/H'],
        icon: 'fuel.png',
    },
];
export const PlanPerfromanceData = [
    {
        title: 'PA',
        plan: ['MTD', '** %'],
        act: ['YTD', '** %'],
        icon: 'pa.png',
    },
    {
        title: 'UA',
        plan: ['MTD', '** %'],
        act: ['YTD', '** %'],
        icon: 'ua.png',
    },
];

export const tabMenu = ['Profil', 'Admin'];

export const inputDropDownOperation = [
    {
        id: 0,
        values: 'operation/prod/payload_by_api',
        label: ' Device / Production / Payload',
    },
    {
        id: 1,
        values: 'operation/prod/est_by_api',
        label: ' Device /  Production / Empty Stop',
    },
    {
        id: 2,
        values: 'operation/prod/list_by_api',
        label: ' Device /  Production / Loading Time',
    },
    {
        id: 3,
        values: 'operation/prod/speed_by_api',
        label: ' Device /  Production / Speed',
    },
    {
        id: 4,
        values: 'operation/prod/ls_by_api',
        label: ' Device /  Production / Loaded Speed',
    },
    {
        id: 5,
        values: 'operation/prod/es',
        label: ' Device /  Production / Empty Speed',
    },
];
export const inputDropDownOperation2 = [
    {
        id: 0,
        values: 'device_production_payload',
        label: ' Device / Production / Payload',
    },
    {
        id: 1,
        values: 'device_production_empty_stop',
        label: ' Device /  Production / Empty Stop',
    },
    {
        id: 2,
        values: 'device_production_loading_time',
        label: ' Device /  Production / Loading Time',
    },
    {
        id: 3,
        values: 'device_production_speed',
        label: ' Device /  Production / Speed',
    },
    {
        id: 4,
        values: 'device_production_loaded_speed',
        label: ' Device /  Production / Loaded Speed',
    },
    {
        id: 5,
        values: 'device_production_empty_speed',
        label: ' Device /  Production / Empty Speed',
    },
    {
        id: 6,
        values: 'device_mc_loader_performance_fc',
        label: ' Device /  Machine Condition / Loader / Performance / Fuel Consumen',
    },
];
