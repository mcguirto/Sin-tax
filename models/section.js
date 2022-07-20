const mongoose = require('./connection')
const commentSchema = require('./comment')

const { Schema, model } = mongoose

const sectionSchema = new Schema(
	{
		name: String,
		topic: String,
		isCalculus: Boolean,
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User', 
		},
		comments: [commentSchema] 
	},
	{
		timestamps: true,
	}
)

const Section = model('Section', sectionSchema)

module.exports = Section