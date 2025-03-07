export interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  linkedIn: string;
  visaInterestList: string[];
  resume: string;
  additionalInfo: string;
  created: date;
  status: 'Pending' | 'Reached Out';
  country: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  totalPages: number;
  nextPage: number;
  prevPage: number;
  limit: number;
}