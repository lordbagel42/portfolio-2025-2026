export interface BlobObjective {
	id: string;
	title: string;
	icon: string;
	color: string;
	description: string;
	details: string[];
	status: 'planned' | 'in-progress' | 'completed';
}
