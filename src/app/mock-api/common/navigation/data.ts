/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';


const menu:FuseNavigationItem[] = JSON.parse( localStorage.getItem('menu'));
console.log(localStorage.getItem('menu'))

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Inicio',
        subtitle: 'Hospital',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: menu
            // {
            //     id   : 'dashboards.project',
            //     title: 'Project',
            //     type : 'basic',
            //     icon : 'heroicons_outline:clipboard-document-check',
            //     link : '/dashboards/project',
            // },
            // {
            //     id   : 'dashboards.analytics',
            //     title: 'Analytics',
            //     type : 'basic',
            //     icon : 'heroicons_outline:chart-pie',
            //     link : '/dashboards/analytics',
            // },
            // {
            //     id   : 'dashboards.finance',
            //     title: 'Finance',
            //     type : 'basic',
            //     icon : 'heroicons_outline:banknotes',
            //     link : '/dashboards/finance',
            // },       
            // // {
            // //     id   : 'example',
            // //     title: 'Example',
            // //     type : 'basic',
            // //     icon : 'heroicons_outline:chart-pie',
            // //     link : '/dashboards/example'
            // // },
            // {
            //     id   : 'devices',
            //     title: 'Devices',
            //     type : 'basic',
            //     icon : 'heroicons_outline:device-phone-mobile',
            //     link : '/dashboards/devices'
            // },
            // {
            //     id   : 'cita',
            //     title: 'Cita',
            //     type : 'basic',
            //     icon:'heroicons_outline:clipboard-document-list',
            //     link : '/dashboards/cita'
            // }        
        
    },    
    // {
    //     id   : 'example',
    //     title: 'Example',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/dashboards/example'
    // }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
