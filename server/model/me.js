/**
 * Created by chuck7 on 16/9/21.
 */
const logger = require('../util').logger

const Me = require('../schema/me')

class MeModel extends Me {
    async create (option) {
        const me = new Me(option)
        let result = null
        try {
            result = me.save()
        } catch (e) {
            logger.error(e)
            throw e
        }
        return result
    }
    async findOne () {
        let result = null
        try {
            result = await Me.findOne({})
        .exec()
        } catch (e) {
            logger.error(e)
            throw e
        }
        return result
    }
    async update (content) {
        let result = null
        try {
            result = await Me.findOneAndUpdate({}, {
                content
            }).exec()
        } catch (e) {
            logger.error(e)
            throw e
        }
        return result
    }
}

module.exports = new MeModel()
