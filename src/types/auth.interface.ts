import { ITeacher } from "./teacher.interface"
import { ITokens } from "./tokens.interface"

export interface IAuthResponse extends ITokens {
    teacher: ITeacher
}