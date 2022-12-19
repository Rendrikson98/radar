export interface DataModel {
  title: string;
  square: 'red' | 'orange' | 'gray';
  status: string;
  trader: {
    name: string;
    count?: number;
  };
  counterparty: string;
  book: string;
  source: string;
}
