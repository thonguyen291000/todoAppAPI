import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const WorkSchema = new Schema({ 
	title: { type: String, required: 'Enter a title' }, 
	description: { type: String, required: 'Enter a last name', max:100 }, 
	timeStart: { type: Date }, 
	timeFinish: { type: Date },
	status: { type: String, enum: ['Not Finish', 'Finish'] },
	created_date: { type: Date, default: Date.now }
});

