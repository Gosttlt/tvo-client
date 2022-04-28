import {ITechModel} from '../../../models/menu/TechModel'

export const techs: ITechModel[] = [
  {
    _id: '1',
    name: 'Language',
    subTechs: [
      {_id: '1', techId: '1', name: 'JavaScript', url: 'javascript'},
      {_id: '2', techId: '1', name: 'TypeScript', url: 'typescript'},
    ],
  },
  {
    _id: '2',
    name: 'Date Base',
    subTechs: [
      {_id: '7', techId: '2', name: 'MySql', url: 'mysql'},
      {_id: '8', techId: '2', name: 'Mongodb', url: 'mongodb'},
    ],
  },
  {
    _id: '3',
    name: 'Operating System',
    subTechs: [
      {_id: '4', techId: '3', name: 'MacOs', url: 'macos'},
      {_id: '5', techId: '3', name: 'Windows', url: 'windows'},
      {_id: '6', techId: '3', name: 'Linux', url: 'linux'},
    ],
  },
  {
    _id: '4',
    name: 'Git',
    subTechs: [{_id: '1', techId: '4', name: 'Github', url: 'github'}],
  },
]
export const lib = [
  {_id: '1', catId: '1', name: 'React'},
  {_id: '2', catId: '1', name: 'Redux'},
  {_id: '3', catId: '1', name: 'Mobx'},
  {_id: '4', catId: '1', name: 'Node'},
  {_id: '5', catId: '1', name: 'Express'},
  {_id: '6', catId: '1', name: 'Next'},
  {_id: '7', catId: '1', name: 'Nest'},
]
