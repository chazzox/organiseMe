export const users = {
	name: 'Charlie',
	homework: [
		{
			name: 'this is a test',
			due: 1580947200000,
			description:
				'this is a long winded description about soething fairly boring that no one really cares about',
			subjectId: 123
		},
		{
			name: 'this is midway',
			due: 1580428800000,
			description: 'this is an earlier piece of homework',
			subjectId: 1232
		},
		{
			name: 'this is on a day',
			due: 1580428800000,
			description: 'this is an earlier piece of homework',
			subjectId: 1232
		},
		{
			name: 'this is the earlierst',
			due: 158099988000000,
			description: 'this is an earlier piece of homework',
			subjectId: 123234
		}
	],
	exams: [
		{
			name: 'this is a test',
			due: 1580688000000,
			description:
				'this is a long winded description about soething fairly boring that no one really cares about'
		},
		{
			name: 'this is midway',
			due: 1580428800000,
			description: 'this is an earlier piece of homework'
		},
		{
			name: 'this is the earlierst, exam edition',
			due: 1580342400000,
			description: 'this is an earlier piece of homework'
		}
	],
	timetable: {
		blockPerDay: 2
	},
	subjects: {
		1231: {
			name: 'maths',
			teacher: 'mr pls can you do you'
		},
		1234: {
			name: 'comp-sci',
			teacher: 'mr walton'
		},
		4356: {
			name: 'electronics',
			teacher: 'mr thingy'
		},
		8794: {
			name: 'futher maths',
			teacher: 'mr bruh'
		}
	}
};
