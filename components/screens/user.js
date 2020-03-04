export const users = {
	name: 'John',
	homework: [
		{
			name: 'Maths homework - Task PE2',
			due: new Date().getTime(),
			description:
				'this is a long winded description about soething fairly boring that no one really cares about',
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
			due: new Date().getTime() + 86400000 * 6,
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
			name: 'Computer science research tas 20',
			due: new Date().getTime() + 86400000 * 3,
			description: 'The last chapter of section 9 - brief notes',
			subjectId: 65465412,
			id: '02'
		},
		{
			name: 'Flash 18m2 chip',
			due: new Date().getTime() + 172800000,
			description:
				'remeber to use the wjec compiler, otherwise inbuilt functions may through some errors',
			subjectId: 65465412,
			id: '0'
		}
	],
	exams: [
		{
			name: 'this is be frid',
			due: 1581033600000,
			description: 'this is an earlier piece of homework',
			subjectId: 65465412
		},
		{
			name: 'a bruh day of bruh',
			due: 1581465600000,
			description: 'this is an earlier piece of homework',
			subjectId: 123234
		},
		{
			name: 'a day',
			due: 1581468600000,
			description: 'this is an earlier piece of homework',
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
