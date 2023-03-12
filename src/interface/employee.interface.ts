export interface IAddress {
  line1: string;
  line2?: string;
  city: string;
  zip: string;
  country: string;
}

export interface IEmployee {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: IAddress;
  birthDate: string;
  profilePicture: string;
  supervisor?: IEmployee;
}
