import { Request, Response } from 'express'
import CreateCoursesService  from './CreateCoursesService'

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute({
    duration: 2,
    educator: "Manoel",
    name: "NodeJS"
  })

  return response.send();
}