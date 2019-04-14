import {ItemChoice} from './item-choice';

export interface ItemQuestion {
  id: string;
  questionName: string;
  choices?: ItemChoice[];
}
