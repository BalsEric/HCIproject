import {Question} from './question';

export interface Formular {
  _id?: string;
  title?: string;
  description?: string;
  questions?: Question[];
  answers?: string[];
}
