export interface ITeacher {
    login: string
    password: string
    firstname?: string
    secondname?: string
    surname?: string
    description?: string
    profilePhoto?: string
    photos?: string[]
    isAdmin: boolean
    jobName?: string
    cellNumber?: string[]
    group?: string
}