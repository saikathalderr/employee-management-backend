import { IEmployee } from '../interface/employee.interface';

export const employees: IEmployee[] = [
  {
    id: 'e0fdc6f1-ab19-4de5-8a24-3cf73817baa7',
    firstName: 'Saikat',
    middleName: '',
    lastName: 'Halder',
    email: 'saikathalderr@icloud.com',
    phoneNumber: '9088750204',
    birthDate: '2000-02-26T16:23:10.455Z',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
    address: {
      line1: "Garia, Panchopata, Deshbandhunagar",
      line2: "Block - D",
      city: "Kolkata",
      zip: "700152",
      country: "India"
    }
  },
  {
    id: '2',
    firstName: 'Riya',
    middleName: '',
    lastName: 'Roy',
    email: 'riyaroy@icloud.com',
    phoneNumber: '9088950204',
    birthDate: '2022-03-11T16:23:10.455Z',
    profilePicture: 'https://www.google.com',
    address: {
      line1: "Garia, Panchopata, Deshbandhunagar",
      line2: "Dashpara",
      city: "Kolkata",
      zip: "700152",
      country: "India"
    }
  },
];
