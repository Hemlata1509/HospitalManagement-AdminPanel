import { adminRoot } from './defaultValues';
// import { UserRole } from "helpers/authHelper"

const data = [
  {
    id: 'devices',
    icon: 'iconsminds-computer',
    label: 'menu.devices',
    to: `${adminRoot}/devices`,
    // roles: [UserRole.Admin, UserRole.Editor],
    // subs: [
    //   {
    //     icon: 'simple-icon-paper-plane',
    //     label: 'menu.start',
    //     to: `${adminRoot}/gogo/start`,
    //   },
    // ],
  },
  {
    id: 'theme',
    icon: 'iconsminds-male-female',
    label: 'menu.theme',
    to: `${adminRoot}/theme`,
  },
  {
    id: 'location',
    icon: 'iconsminds-map-marker-2',
    label: 'menu.location',
    to: `${adminRoot}/location`,
    // subs: [
    //   {
    //     icon: 'simple-icon-paper-plane',
    //     label: 'menu.second',
    //     to: `${adminRoot}/second-menu/second`,
    //   },
    // ],
  },
  {
    id: 'patient',
    icon: 'iconsminds-male-female',
    label: 'menu.patient',
    to: `${adminRoot}/patient`,
  },
  {
    id: 'infotile',
    icon: 'iconsminds-wheelchair',
    label: 'menu.infotile',
    to: `${adminRoot}/infotile`,
  },
  {
    id: 'medication',
    icon: 'iconsminds-first-aid',
    label: 'menu.medication',
    to: `${adminRoot}/medication`,
  },
  {
    id: 'careteam',
    icon: 'iconsminds-stethoscope',
    label: 'menu.careteam',
    to: `${adminRoot}/careteam`,
  },
  {
    id: 'alerts',
    icon: 'iconsminds-bell',
    label: 'menu.alerts',
    to: `${adminRoot}/alerts`,
  },
  {
    id: 'roomStatus',
    icon: 'iconsminds-key',
    label: 'menu.roomStatus',
    to: `${adminRoot}/roomStatus`,
  },
  {
    id: 'designTheme',
    icon: 'iconsminds-magic-wand',
    label: 'menu.designTheme',
    to: `${adminRoot}/designTheme`,
  },
  // {
  //   id: 'docs',
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://gogo-react-docs.colored   strategies.com/',
  //   newWindow: true,
  // },
];
export default data;
