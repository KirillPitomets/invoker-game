const uuid = require('uuid')
const path = require('path')
const fs = require('fs')

class FileService {
	saveAvatar({ userId, file }) {
		try {
			const photoType = file.mimetype.split('/')[1]
			const fileName = `${userId}_${uuid.v1()}.${photoType}`
			const filePath = path.resolve('static', fileName)
			file.mv(filePath)

			return fileName
		} catch (e) {
			throw new Error(e)
		}
	}

	deleteFile(fileName) {
		const filePath = path.resolve('static', fileName)
		fs.unlink(filePath, () => {})
	}

	isImg(fileName) {
		const extension = path.extname(fileName)

		switch (extension) {
			case '.png':
				return true
			case '.jpg':
				return true
			case '.jpeg':
				return true
			default:
				return false
		}
	}
}

module.exports = new FileService()
