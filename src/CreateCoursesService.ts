/**
 * name - string
 * duration - number
 * educator - string
 */

interface Couse {
  name: string;
  duration?: number;
  educator: string;
}


class CreateCourseService {

  execute( { duration = 8, educator, name  }: Couse) {
    console.log(name, duration, educator)
  }
}


export default new CreateCourseService()