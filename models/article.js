import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	markdown: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: (new Date).toDateString(),
	},
});

export default mongoose.model('Article', articleSchema);