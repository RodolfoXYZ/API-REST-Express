import express from 'express'
import { StudentController } from './controllers/studentController.js';
import { TeacherController } from './controllers/teacherController.js';
import { CourseController } from './controllers/CourseController.js';
import { SubjectController } from './controllers/SubjectController.js';
import { EnrollmentController } from './controllers/EnrollmentController.js';
import { ClassController } from './controllers/ClassController.js';
import { GradeController } from './controllers/GradeController.js';


let app = express();
app.use(express.json());

app = StudentController(app);
app = TeacherController(app);
app = SubjectController(app);
app = EnrollmentController(app);
app = ClassController(app);
app = CourseController(app);
app = GradeController(app);

app.listen(8000, ()=>{
    console.log('running')
});