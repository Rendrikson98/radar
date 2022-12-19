import { DataModel } from '../models/dataModel';

export const data: DataModel[] = [
  {
    title: 'BUY of $34.9M USD of LOPR on 1/29/15',
    square: 'red',
    status: 'Escalated',
    trader: {
      name: 'Prasanta Shivakrishnan',
    },
    counterparty: 'Guerra Corporation',
    book: 'PRHI-Z53',
    source: 'Bank trading',
  },
  {
    title: 'SELL of $836K GBP/AUD of GBP/AUD on 1/20/15',
    square: 'orange',
    status: 'Open',
    trader: {
      name: 'Hugo Justice',
    },
    counterparty: 'VSJP-AG1K (internal)',
    book: 'HUUS-K31',
    source: 'Bank trading',
  },
  {
    title: 'BUY of $2.00M GBP/USD with ERCD International on 1/30/15',
    square: 'orange',
    status: 'Closed',
    trader: {
      name: 'Neville Ruben',
      count: 25,
    },
    counterparty: 'ERCD International',
    book: 'NEUB-B31',
    source: 'Bank trading',
  },
  {
    title: 'SELL of $5.00M USD/CHF with Brown Banking on 1/30/15',
    square: 'orange',
    status: 'Closed',
    trader: {
      name: 'Brandom Grover',
    },
    counterparty: 'Brown Banking',
    book: 'DLEF-A81',
    source: 'Bank trading',
  },
  {
    title: 'SELL of $1.39M EUR/USD with Guerra Corporation on 1/30/15',
    square: 'gray',
    status: 'Open',
    trader: {
      name: 'Prasanta Shivakrishnan',
    },
    counterparty: 'Guerra Corporation',
    book: 'NMUJ-M81',
    source: 'Bank trading',
  },
];
