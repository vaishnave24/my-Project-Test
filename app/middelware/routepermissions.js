const { ROLE } = require("../../constant")

const permissions = {
"/employee/deleteEmployee:post":[ROLE.ADMIN]
}

module.exports = {permissions}