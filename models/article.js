import mongoose from 'mongoose';
import marked from 'marked';
import slugify from 'slugify';
import createDomPurify from 'dompurify';
import { JSDOM } from 'jsdom';

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
	slug: {
		type: String,
		required: true,
		unique: true,
	},
});

articleSchema.pre('validate', function (next) {
	if (this.title) {
		this.slug = slugify(this.title, {
			lower: true,
			strict: true,
		});
	}
	next();
});

export default mongoose.model('Article', articleSchema);