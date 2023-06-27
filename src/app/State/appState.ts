import { UserInterface } from "./Reducers/userReducer";
import  {QuestionsInterface} from './Reducers/questionsReducer'

export interface AppState{
    user:UserInterface
    question:QuestionsInterface
}