export interface Login{
  auth:boolean,
  role:string,
  fullname:string
}

export interface signIn {
  username: string;
  password: string;
}

export interface signUpUserForm {
  fullName: string;
  userRole: string;
  userName: string;
  userPassword: string;
  accountStatus: string,
}

export interface UserForm {
  fullname: string;
  role: string;
  username: string;
  accountStatus: string,
}

export interface TimeZone {
  value: string;
    abbr: string;
    offset: number;
    isdst: boolean;
    text: string;
    utc :string[];
}


export interface TimseSlot {
  value: string;
  text: string;
}

export interface Technology{
  skillName:string;
}


export interface CourseMaterial{
  video:boolean;
  blog:boolean;
  ppt:boolean;
  demo:boolean;
}

export interface SearchTrainingResult{
  courseId:string;
  courseName:string;
  trainerName:string;
  totalTrainee: number;
  trainerSkills: Technology[];
  courseType:CourseMaterial;
  experience:number;
  trainerCharges:number;
  serviceCharges:number;
}

export interface TrainingCompleted {
  coursedetail: CourseDetails;
  username:string;
  timeslot: string;
  startdate: string; //TODOD datatype of start date
}

export interface CourseDetails {
  courseid: string;
  courseName: string;
  trainerName: string;
  technology: Technology;
  charges: number;
  commission:number;
  totalTime:number;
}

export interface TrainingProgress {
  coursedetail: CourseDetails;
  username: string;
  progress: number;
  rating: number;
  status: string;
  paymentstatus: string;
  timeslot: string;
  startdate: string; //TODOD datatype of start date
}

export interface Payment{
    paymentDate:string,
    userName:string,
    courseId:string,
    trainerName:string,
    paymentAmount:number,
    commissionAmount:number
}

export class Report{
  paymentDate:string;
  userName:string;
  trainerName:string;
  courseId:string;
  paymentAmount:number;
  commissionAmount:number;
}

export interface Mentor{
  details : signUpUserForm;
  skills :string[];
  timezone:string;
  timeslot: string;
  materialType:CourseMaterial;
  linkedInUrl:string;
  experience:number;
}

export interface AlertMessage{
  status:boolean;
  message:string;
}



export interface MentorProgress{
  technology:string;
  courseId:string;
  totalTraineeCount:number;
  courseCompleted:number;
  courseActive:number;
  revenueEarned:number;
  courseRating:number;
  mentorEarned:number;
}
// success-
export interface MentorModel{
  userName:string;
  accountStatus:string;
  fullName:string;
  userPassword :string,
	userRole:string,
  timezone:string,
  timeslot:number;
	linkedInURL:string;
	experience:number;
	courseTypeBlog:boolean;
	courseTypePPT:boolean;
	courseTypeVideo:boolean;
	courseTypeDemo:boolean;
  skills:Technology[];
}

export interface CardDetails{
  cardNo:string;
	mM:number;
	yY:number;
	cV:number;
	username:string;
}

export interface CalendarModel{
  fromDate:string;
  tillDate:string;
  timeSlot:number;
  status:string;
  mentorName:string;
}

export interface SearchRequestModel{
  technology:string;
  startDate:string;
  timeslot:number;
}

export interface SearchResponseModel{
  courseId: string ;
	courseName :string ;
	trainerName: string ;
	technology: string ;
	materialVideo: boolean ;
	materialDemo: boolean ;
	materialPPT: boolean ;
	materialBlog: boolean ;
	experience: number ;
	trainingCharges: number ;
	serviceCharges: number ;
  totalTime :number ;
  totalCount: number ;
	activeCount: number ;
  completedCount: number ;
  timeSlot:number;
  startDate: string ;
}

export interface UserProgress{
  courseId: string ;
  courseName:string;
  trainerName:string;
  technology:string;
	userName: string ;
	progress: number ;
	rating: number ;
	paymentStatus: string ;
	courseStatus: string ;
	timeSlot: number ;
	startDate: string ;
}

export interface MentorHistory{
  timestamp : string;
  username :string;
  courseId :string;
  courseStatus:string;
  paymentStatus:string;
  timeSlot:string;
  progress:number;
  withdrawCount:number;
  totalCount:number;
}

export interface UserCompleted{
  courseId: string ;
	userName: string ;
	timeSlot: number ;
	startDate: string ;
	endDate: string ;
  rating: number ;
  trainerName:string;
  charges:number;
  technology:string; 
}

export interface CommissionModel{
  courseId: string ;
	mentorId: number ;
	trainerName :string ;
	courseCharge :number ;
	commission :number ;
}