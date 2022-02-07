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

  execute( { duration, educator, name  }: Couse) {
    console.log(name, duration, educator)
  }
}


export default new CreateCourseService()