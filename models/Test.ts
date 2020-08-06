import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

export default TestSchema