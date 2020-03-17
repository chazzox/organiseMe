export const users = {
	name: 'John',
	email: 'caylott@outlook.com',
	homework: [
		{
			name: 'Do maths task 1',
			due: new Date().getTime(),
			description:
				'Do in within the online portal, only have to do the first 8 questions. Although need to get all 8 fully correct',
			subjectId: 1232342,
			id: '062'
		},
		{
			name: 'Maths homework - Task D10',
			description: 'Do questions 1-10 and then two random assorments of hard questions',
			due: new Date().getTime(),
			subjectId: 1232342,
			id: '05'
		},
		{
			name: 'Computer science Coursework',
			due: new Date().getTime() + 86400000,
			description: 'May god save our souls',
			subjectId: 458412,
			id: '04'
		},
		{
			name: 'Electronics - Investigation 12.3',
			due: new Date().getTime() + 86400000 * 3,
			description: "This shouldn't be too hard",
			subjectId: 65465412,
			id: '03'
		},
		{
			name: 'Maths - intergral test (23)',
			due: new Date().getTime() + 86400000 * 3,
			description: 'complete at least 70%',
			subjectId: 1232342,
			id: '01'
		},
		{
			name: 'maths task 1',
			due: new Date().getTime() + 86400000 * 6,
			description: 'Do in within the online portal',
			subjectId: 65465412,
			id: '02'
		},
		{
			name: 'task 2',
			due: new Date().getTime() + 86400000 * 2,
			description:
				'Do in within the online portal, only have to do the first 8 questions. Although need to get all 8 fully correct',
			subjectId: 65465412,
			id: '0'
		}
	],
	exams: [
		{
			name: 'test on section 1',
			due: new Date().getTime() + 86400000 * 3,
			description: 'revise chapters 1-8 and 11',
			subjectId: 65465412
		},
		{
			name: 'paper 1, component 2 and 4',
			due: new Date().getTime() + 86400000 * 6,
			description: 'make sure you revise the fde cycle as well as signitures',
			subjectId: 123234
		},
		{
			name: 'maths paper 1',
			due: new Date().getTime() + 86400000,
			description: 'go over trig, logs and intergration',
			subjectId: 123234
		}
	],
	timetable: {
		blockPerDay: 2,
		lessonLength: 214234
	},
	subjects: [
		{
			name: 'maths',
			teacher: 'mr pls can you do you',
			subjectId: 1232342
		},
		{
			name: 'comp-sci',
			teacher: 'mr walton',
			subjectId: 458412
		},
		{
			name: 'electronics',
			teacher: 'mr thingy',
			subjectId: 65465412
		},
		{
			name: 'futher maths',
			teacher: 'mr bruh',
			subjectId: 123234
		}
	]
};
