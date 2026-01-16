import type { BlobObjective } from './types';

export const blobObjectives: BlobObjective[] = [
	{
		id: '1',
		title: 'Web Development',
		icon: '💻',
		color: '#6366f1',
		description: 'Master modern web technologies and frameworks',
		details: [
			'Learn Svelte 5 and SvelteKit for building reactive web applications',
			'Understand TypeScript for type-safe development',
			'Master responsive design with Tailwind CSS',
			'Build accessible and performant web applications'
		],
		status: 'in-progress'
	},
	{
		id: '2',
		title: 'Cloud Computing',
		icon: '☁️',
		color: '#ec4899',
		description: 'Deploy and manage applications in the cloud',
		details: [
			'Deploy applications to Cloudflare Pages and Workers',
			'Understand serverless architecture patterns',
			'Implement CI/CD pipelines',
			'Monitor and optimize cloud resources'
		],
		status: 'planned'
	},
	{
		id: '3',
		title: 'Design Skills',
		icon: '🎨',
		color: '#f59e0b',
		description: 'Create beautiful and intuitive user interfaces',
		details: [
			'Learn UI/UX design principles',
			'Master modern design tools like Figma',
			'Understand color theory and typography',
			'Create consistent design systems'
		],
		status: 'in-progress'
	},
	{
		id: '4',
		title: 'Data Science',
		icon: '📊',
		color: '#10b981',
		description: 'Analyze data and build intelligent solutions',
		details: [
			'Learn data analysis with Python and pandas',
			'Understand machine learning fundamentals',
			'Build data visualizations',
			'Work with large datasets efficiently'
		],
		status: 'planned'
	},
	{
		id: '5',
		title: 'DevOps',
		icon: '⚙️',
		color: '#8b5cf6',
		description: 'Automate and streamline development workflows',
		details: [
			'Master Git and version control best practices',
			'Set up automated testing and deployment',
			'Use Docker for containerization',
			'Implement monitoring and logging solutions'
		],
		status: 'in-progress'
	},
	{
		id: '6',
		title: 'Open Source',
		icon: '🌟',
		color: '#06b6d4',
		description: 'Contribute to the open source community',
		details: [
			'Contribute to popular open source projects',
			'Create and maintain own open source libraries',
			'Build a strong GitHub profile',
			'Collaborate with developers worldwide'
		],
		status: 'planned'
	}
];
