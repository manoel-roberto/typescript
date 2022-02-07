import { Request, Response } from 'express'
import CreateCoursesService  from './CreateCoursesService'

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute({
    duration: 2,
    educator: "Manoel",
    name: "NodeJS"
  })

  CreateCoursesService.execute({
    educator: "Diego",
    name: "ReactJS"
  })

  return response.send();
}