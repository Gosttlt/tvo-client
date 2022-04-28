export interface ITechModel {
  _id: string
  name: string
  subTechs: ISubTechModel[]
}

export interface ISubTechModel {
  _id: string
  techId: string
  name: string
  url: string
}
