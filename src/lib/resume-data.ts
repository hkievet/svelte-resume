import type { IEducation, IResumeJob } from 'src/app';

const fictivResponsibilities = [
	"Lead the Injection Molding team's efforts in creating excellent user experiences."
];
const fictiv: IResumeJob = {
	companyName: 'Fictiv',
	title: 'Senior Software Engineer',
	bullets: fictivResponsibilities,
	startDate: '2022-10-10',
	endDate: null
};

// Job Bullets
const dendronResponsibilities = ['Improve on the export of a Dendron vault into a NextJS site.'];
const dendron: IResumeJob = {
	companyName: 'Dendron',
	title: 'Software Engineer',
	bullets: dendronResponsibilities,
	startDate: '2022-07-01',
	endDate: '2022-10-01'
};

const nikeResponsibilities = [
	'Built components and assisted in the adoption of the Nike Design System.',
	'Built the telemetry tool that scans GitHub Enterprise for usages of npm packages across various Nike repositories.',
	'Maintained a script present on every page on Nike.com responsible for localization and interacting with centralized APIs.'
];
const nike: IResumeJob = {
	companyName: 'Nike (Future State Consulting)',
	title: 'Software Engineer III',
	bullets: nikeResponsibilities,
	startDate: '2021-05-02',
	endDate: '2022-05-24'
};

const oneOmeResponsibilities = [
	'Responsible for frontend efforts at OneOme including a portal app and a marketing site.',
	"Created internal tools for managing the data behind OneOme's pharmacogenomic algorithm.",
	'Completely reimplemented and assisted in redesigning oneome.com using Wagtail CMS (Django).',
	'Implemented a Clinical Decision Support Configuration app made with React.',
	'Implemented a redesign of the entire patient portal frontend using Flask.'
];

const oneome: IResumeJob = {
	companyName: 'OneOme',
	title: 'Frontend Engineer',
	bullets: oneOmeResponsibilities,
	startDate: '2019-01-02',
	endDate: '2021-05-02'
};
const infiniteCampusResponsibilities = [
	'Redesigned and implemented a complex course-scheduling web application in Angular.',
	'Trained a new hire how to use Angular. Gave several company wide tech talks.',
	'Collaborated with the UI team to create an early version of an Angular component library.',
	'Debugged and fixed bugs within a very large java code base of 15+ years of age.'
];

const ic: IResumeJob = {
	companyName: 'Infinite Campus',
	title: 'Software Engineer II',
	bullets: infiniteCampusResponsibilities,
	startDate: '2015-01-02',
	endDate: '2019-01-02'
};

const mscResponsibilities = [
	'Responsible for porting and configuring an internal BI web application used by the vice presidents, directors, and managers at Thomson Reuters to monitor project resources from the C# .NET platform to Groovy on Grails.',
	'Exported SQL query results into customized and styled Excel files including dynamic data and charts.'
];

const msc: IResumeJob = {
	companyName: 'Maverick Software Consulting',
	title: 'Software Engineer Intern',
	bullets: mscResponsibilities,
	startDate: '2014-04-02',
	endDate: '2015-05-02'
};

const trResponsibilities = [
	"Implemented and designed SPAs with JS that teachers use to manage a classroom in TR's Law School using scrum methodology."
];

const tr: IResumeJob = {
	companyName: 'Thomson Reuters',
	title: 'Software Engineer Intern',
	bullets: trResponsibilities,
	startDate: '2015-06-02',
	endDate: '2015-09-30'
};

const mnDailyResponsibilities = [
	'Updated and created back-ups of the Microsoft Server machines.',
	'Worked a help desk for routine IT issues.'
];

const mnDaily: IResumeJob = {
	companyName: 'Minnesota Daily',
	title: 'Network Administrator',
	bullets: mnDailyResponsibilities,
	startDate: '2013-12-02',
	endDate: '2014-04-30'
};

const sitResponsibilities = [
	'Automated data flow from Excel spreadsheets into a MS Access Database using VBA.',
	'Utilized the Bloomberg API to analyze trends in various fixed income assets.'
];

const sitInvestmentAssociates: IResumeJob = {
	companyName: 'Sit Investment Associates',
	title: 'Fixed Income Intern',
	bullets: sitResponsibilities,
	startDate: '2013-06-02',
	endDate: '2014-01-30'
};

export const allJobs = [
	fictiv,
	dendron,
	nike,
	oneome,
	ic,
	tr,
	msc,
	mnDaily,
	sitInvestmentAssociates
];

export const umn: IEducation = {
	startDate: '2012-09-02',
	endDate: '2016-05-02',
	location: 'Curtis L. Carlson School of Management',
	description: 'Computer Science and Management Information Systems BS'
};

export const cpy: IEducation = {
	startDate: '2017-03-02',
	endDate: '2017-06-02',
	location: 'CorePower',
	description: '200 Hour Teach Training'
};

export const allEducation = [umn];
