import { Appareil } from '../models/Appareil';
export class AppareilsService{

  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description:  [
        'volume de  6L',
        'Temps de lavage: 2 heures',
        'Consommation: 173kWh/an'
      ],
      isOn: true
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22kWh/an'
      ],
      isOn: true
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500kWh/an'
      ],
      isOn: false
    }
  ];

}
