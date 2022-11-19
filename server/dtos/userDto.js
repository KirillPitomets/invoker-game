module.exports = class UserDto {
	id;
	username;
	avatar;

	constructor(model) {
		this.username = model.username
		this.id = model._id
		this.avatar = model.avatar
	}
}