export const Link = [
    {
        title: 'Team Work',
        subMenu: [
            {
                subMenuTitle: 'FORM',
                subMenuLink: 'teamwork/form',
            },
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'teamwork/report',
            },
        ],
    },
    {
        title: 'SHE',
        subMenu: [
            {
                subMenuTitle: 'FORM',
                subMenuLink: 'she/form',
            },
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'she/report',
            },
        ],
    },
    {
        title: 'Operation',
        subMenu: [
            {
                subMenuTitle: 'REPORT',
                subMenuLink: 'operation/report',
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
                subMenuLink: 'administration/hc',
            },
            {
                subMenuTitle: 'GA',
                subMenuLink: 'administration/ga',
            },
            {
                subMenuTitle: 'LEGAL',
                subMenuLink: 'administration/legal',
            },
        ],
    },
    {
        title: 'System',
        subMenu: [
            {
                subMenuTitle: 'VHMS DOWNLOAD',
                subMenuLink: 'system/vhms_download',
            },
            {
                subMenuTitle: 'DATABASE',
                subMenuLink: 'system/database',
            },
            {
                subMenuTitle: 'ACCESS CONTROL',
                subMenuLink: 'system/access_control',
            },
            {
                subMenuTitle: 'SURVEY',
                subMenuLink: 'system/survey',
            },
            {
                subMenuTitle: 'APP VERSION CONTROL',
                subMenuLink: 'system/app_version_control',
            },
            {
                subMenuTitle: 'USER FEEDBACK',
                subMenuLink: 'system/user_feedback',
            },
            {
                subMenuTitle: 'ABS MACHINE',
                subMenuLink: 'system/abs_machine',
            },
            {
                subMenuTitle: 'EVENTS',
                subMenuLink: 'system/events',
            },
            {
                subMenuTitle: 'DEVICE MONITORING',
                subMenuLink: 'system/device_monitoring',
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
        title: ' Cost @ 1 Km',
        plan: ['MTD', '**'],
        act: ['YTD', '**'],
        icon: 'ach_cost.png',
        ach: 'Ach.10%',
    },
    {
        title: ' Coal ',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
        icon: 'ach_coal_production.png',
        ach: 'Ach.103%',
    },
    {
        title: 'OB',
        plan: ['Plan', '2.203.117 ton'],
        act: ['Act', '2.314.285 ton'],
        icon: 'ach_ob_production.png',
        ach: 'Ach.103%',
    },
    {
        title: 'MP PRDTY',
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
        plan: ['Plan', '** %'],
        act: ['Act', '** %'],
        icon: 'pa.png',
    },
    {
        title: 'UA',
        plan: ['Plan', '** %'],
        act: ['Act', '** %'],
        icon: 'ua.png',
    },
    {
        title: 'MTBF',
        plan: ['Plan', '** %'],
        act: ['Act', '** %'],
        icon: 'MTBF.png',
    },
    {
        title: 'MTTR',
        plan: ['Plan', '** %'],
        act: ['Act', '** %'],
        icon: 'MTTR.png',
    },
];

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
    // {
    //     id: 5,
    //     values: 'device_production_empty_speed',
    //     label: ' Device /  Production / Empty Speed',
    // },
    {
        id: 6,
        values: 'moco_obProduction_dayli',
        label: ' Moco / OB Production / Dayli',
    },
];

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

export const InputDropdownTeamworkForm = [
    {
        id: 0,
        values: 'Upload roster',
        label: 'Upload roster',
    },
    {
        id: 1,
        values: 'Update roster',
        label: 'Update roster',
    },
    {
        id: 2,
        values: 'Set roster',
        label: 'Set roster',
    },
];
