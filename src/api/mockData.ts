import { v4 as uuidv4 } from 'uuid';

export type Provider = {
  id: string;
  name: string;
  slug: string;
  occupation: string;
  bio: string;
  profileImgSrc: string;
  status: 'Available Tomorrow' | 'Unavailable';
};

const PROVIDER_NAMES = [
  ['Dylan Zambrano, MSW', 'Registered Social Worker'],
  ['Dr Lynda Schuuman, PHD, C.P.P', 'Psychologist'],
  ['Christina Kahlou, MSW', 'Registered Social Worker'],
  ['Caroline Champagne RSW', 'Registered Social Worker'],
  ['Justina Choi, MSW', 'Psychologist'],
];

const MOCK_BIO =
  ' is a therapist of 15 years experience. Working in international contexts, her background includes community health care, and paediatrics. \n\nShe works collaboratively with individuals to address mental health concerns such as anxiety, depression, work/stress issues, emotion regulation, trauma, OCD, and other difficulties.';

const generateBio = (name: string) => name + MOCK_BIO;

export const PROVIDERS: Provider[] = PROVIDER_NAMES.map(
  ([name, occupation], idx) => ({
    id: uuidv4(),
    slug: (idx + 1).toString(), //just using to get a stable id - not for production
    name,
    occupation,
    bio: generateBio(name),
    profileImgSrc: `/clinician-${idx + 1}.png`,
    status: 'Available Tomorrow',
  }),
);
