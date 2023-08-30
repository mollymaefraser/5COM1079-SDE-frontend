export type LocationLoad = {
    locationID: number
    longitude: number,
    latitude: number,
    nameOfFacility: string,
    address: string,
    emailAddress: string,
    telephone: number,
    offeredServices: Services[]
  }


export type Services = {
  serviceID: number,
  serviceName: string,
  serviceDescription: string
}